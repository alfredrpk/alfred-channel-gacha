#!/usr/bin/env python3
"""
Scan a Discord channel for video messages (uploaded attachments, direct video links,
and Twitter/X/fxtwitter/vxtwitter video links via FxTwitter/VxTwitter/Syndication/yt-dlp)
and sync them to the Cloud Firestore `discord_videos` collection.
"""

import argparse
import asyncio
import csv
import os
import re
import subprocess
import sys
from pathlib import Path
from typing import Any

import discord
import requests
import yt_dlp
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent
SHEETS_DIR = BASE_DIR / "sheets"
COLLECTION_NAME = "discord_videos"

VIDEO_EXTENSIONS = (".mp4", ".mov", ".webm", ".m4v")

# Matches direct video links in message content (including optional query parameters)
DIRECT_VIDEO_URL_RE = re.compile(
    r"https?://[^\s<>\"']+?\.(?:mp4|mov|webm|m4v)(?:\?[^\s<>\"']*)?",
    re.IGNORECASE,
)

# Matches Twitter / X / fxtwitter / vxtwitter / fixupx / fixvx status URLs and captures tweet ID
TWITTER_STATUS_URL_RE = re.compile(
    r"https?://(?:www\.)?(?:twitter|x|fxtwitter|vxtwitter|fixupx|fixvx)\.com/[A-Za-z0-9_]+/status/(\d+)[^\s<>\"']*",
    re.IGNORECASE,
)

HTTP_SESSION = requests.Session()
HTTP_SESSION.headers.update({"User-Agent": "alfred-channel-gacha/1.0"})

# Persistent yt-dlp instance (reuses guest token if fallback is needed)
_YDL_INSTANCE: yt_dlp.YoutubeDL | None = None


def get_ydl() -> yt_dlp.YoutubeDL:
    global _YDL_INSTANCE
    if _YDL_INSTANCE is None:
        _YDL_INSTANCE = yt_dlp.YoutubeDL(
            {
                "quiet": True,
                "no_warnings": True,
                "skip_download": True,
                "format": "best[protocol^=http][ext=mp4]/best[ext=mp4]/best",
            }
        )
    return _YDL_INSTANCE


def load_rank_map(sheets_dir: Path) -> dict[str, str]:
    """Load message_id -> rank mapping from sheets/{5star,4star,0star}.csv."""
    tier_files = [
        ("5star.csv", "SSR"),
        ("4star.csv", "SR"),
        ("0star.csv", "N"),
    ]
    rank_map: dict[str, str] = {}
    for filename, rank in tier_files:
        csv_path = sheets_dir / filename
        if not csv_path.exists():
            print(f"[warn] Sheet file not found: {csv_path}")
            continue
        with csv_path.open("r", encoding="utf-8-sig", newline="") as f:
            reader = csv.DictReader(f)
            count = 0
            for row in reader:
                msg_id = (row.get("message_id") or "").strip()
                if msg_id:
                    rank_map[msg_id] = rank
                    count += 1
            print(f"[sheets] Loaded {count} {rank} entries from {filename}")
    return rank_map


def normalize_twitter_url(url: str) -> str:
    """Normalize fxtwitter/vxtwitter/twitter URLs to x.com for yt-dlp."""
    return re.sub(
        r"^https?://(?:www\.)?(?:fxtwitter|vxtwitter|fixupx|fixvx|twitter)\.com/",
        "https://x.com/",
        url,
        flags=re.IGNORECASE,
    )


def _extract_via_fxtwitter(tweet_id: str) -> tuple[bool, str | None]:
    """
    Query FxTwitter API.
    Returns (handled, video_url):
      - handled=True, video_url=str  -> found video URL
      - handled=True, video_url=None -> tweet definitively has no video or is deleted/suspended
      - handled=False, video_url=None -> transient API error, try next fallback
    """
    try:
        resp = HTTP_SESSION.get(f"https://api.fxtwitter.com/status/{tweet_id}", timeout=12)
        if resp.status_code in (401, 403, 404):
            try:
                msg = resp.json().get("message", f"HTTP {resp.status_code}")
            except Exception:
                msg = f"HTTP {resp.status_code}"
            print(f"  [twitter] Tweet {tweet_id} unavailable ({msg})")
            return True, None
        if resp.status_code != 200:
            return False, None

        data = resp.json()
        tweet = data.get("tweet") or {}

        # Check main tweet media first, then quoted tweet media if present
        for container in (tweet, tweet.get("quote") or {}):
            media = container.get("media") or {}
            videos = media.get("videos") or [
                m for m in (media.get("all") or []) if m.get("type") in ("video", "gif")
            ]
            if videos:
                vid = videos[0]
                variants = [
                    v
                    for v in (vid.get("variants") or vid.get("formats") or [])
                    if (v.get("content_type") == "video/mp4" or v.get("container") == "mp4")
                    and v.get("url")
                ]
                if variants:
                    variants.sort(key=lambda v: v.get("bitrate") or 0)
                    return True, variants[-1]["url"]
                if vid.get("url"):
                    return True, vid["url"]

        print(f"  [twitter] Tweet {tweet_id} has no video media (text/image only)")
        return True, None
    except Exception:
        return False, None


def _extract_via_vxtwitter(tweet_id: str) -> tuple[bool, str | None]:
    """Query VxTwitter API as secondary fallback."""
    try:
        resp = HTTP_SESSION.get(f"https://api.vxtwitter.com/Twitter/status/{tweet_id}", timeout=12)
        if resp.status_code in (401, 403, 404):
            return True, None
        if resp.status_code != 200:
            return False, None

        data = resp.json()
        for container in (data, data.get("qrt") or {}):
            media_list = container.get("media_extended") or []
            for item in media_list:
                if item.get("type") in ("video", "gif") and item.get("url"):
                    return True, item["url"]

        return True, None
    except Exception:
        return False, None


def _extract_via_syndication(tweet_id: str) -> tuple[bool, str | None]:
    """Query Twitter Syndication API as tertiary fallback."""
    try:
        resp = HTTP_SESSION.get(
            f"https://cdn.syndication.twimg.com/tweet-result?id={tweet_id}&token=0",
            timeout=12,
        )
        if resp.status_code != 200:
            return False, None

        data = resp.json()
        video = data.get("video") or {}
        variants = [
            v
            for v in (video.get("variants") or [])
            if v.get("type") == "video/mp4" and v.get("src")
        ]
        if variants:
            return True, variants[-1]["src"]

        for media in data.get("mediaDetails") or []:
            v_info = media.get("video_info") or {}
            mp4s = [
                v
                for v in (v_info.get("variants") or [])
                if v.get("content_type") == "video/mp4" and v.get("url")
            ]
            if mp4s:
                mp4s.sort(key=lambda v: v.get("bitrate") or 0)
                return True, mp4s[-1]["url"]

        return False, None
    except Exception:
        return False, None


def _extract_via_ytdlp(url: str) -> str | None:
    """Final fallback using a persistent yt-dlp instance."""
    norm_url = normalize_twitter_url(url)
    try:
        info = get_ydl().extract_info(norm_url, download=False)
        if not info:
            return None
        if "entries" in info and info["entries"]:
            entries = [e for e in info["entries"] if e]
            if not entries:
                return None
            info = entries[0]

        formats = info.get("formats") or []
        http_mp4s = [
            f
            for f in formats
            if f.get("ext") == "mp4"
            and str(f.get("protocol", "")).startswith("http")
            and f.get("url")
        ]
        if http_mp4s:
            http_mp4s.sort(
                key=lambda f: (
                    1 if f.get("acodec") not in (None, "none") else 0,
                    f.get("height") or 0,
                    f.get("tbr") or 0,
                )
            )
            return http_mp4s[-1]["url"]

        direct_url = info.get("url")
        if direct_url and any(ext in direct_url.lower() for ext in (".mp4", ".mov", ".webm", ".m3u8")):
            return direct_url
        return None
    except Exception as exc:
        print(f"  [yt-dlp] Skipping {url} ({exc})")
        return None


def extract_twitter_video_url(url: str, tweet_id: str) -> str | None:
    """
    Resolve a Twitter/X status URL to a direct MP4 URL using:
      1. FxTwitter API (fast, supports sensitive/NSFW tweets and changed handles)
      2. VxTwitter API
      3. Twitter Syndication API
      4. Persistent yt-dlp instance
    """
    for extractor in (_extract_via_fxtwitter, _extract_via_vxtwitter, _extract_via_syndication):
        handled, video_url = extractor(tweet_id)
        if handled:
            return video_url

    return _extract_via_ytdlp(url)


def extract_attachment_video_url(message: discord.Message) -> str | None:
    """Return the first video attachment URL from a Discord message, if any."""
    for attachment in message.attachments:
        content_type = (attachment.content_type or "").lower()
        filename = (attachment.filename or "").lower()
        if content_type.startswith("video/") or filename.endswith(VIDEO_EXTENSIONS):
            return attachment.url
    return None


async def resolve_message_video_url(message: discord.Message) -> str | None:
    """
    Determine if a Discord message contains a video:
    1. Uploaded video attachment on Discord
    2. Direct video URL (.mp4, .mov, .webm, .m4v) in message.content
    3. Twitter / X / fxtwitter / vxtwitter link with video
    """
    attachment_url = extract_attachment_video_url(message)
    if attachment_url:
        return attachment_url

    content = message.content or ""
    if not content:
        return None

    direct_match = DIRECT_VIDEO_URL_RE.search(content)
    if direct_match:
        return direct_match.group(0)

    twitter_match = TWITTER_STATUS_URL_RE.search(content)
    if twitter_match:
        tweet_url = twitter_match.group(0)
        tweet_id = twitter_match.group(1)
        print(f"  [twitter] Checking tweet in message {message.id}: {tweet_url}")
        video_url = await asyncio.to_thread(extract_twitter_video_url, tweet_url, tweet_id)
        if video_url:
            print(f"  [twitter] Found video URL: {video_url}")
            return video_url

    return None


class FirestoreRestClient:
    """Lightweight Firestore v1 REST client for `discord_videos`."""

    def __init__(self, project_id: str, collection: str = COLLECTION_NAME) -> None:
        self.project_id = project_id
        self.collection = collection
        self.base_doc_path = f"projects/{project_id}/databases/(default)/documents"
        self.base_url = f"https://firestore.googleapis.com/v1/{self.base_doc_path}"
        self.session = requests.Session()

    def fetch_existing_documents(self) -> dict[str, dict[str, Any]]:
        """Fetch all existing documents in the collection, keyed by message_id."""
        existing: dict[str, dict[str, Any]] = {}
        page_token: str | None = None

        while True:
            params: dict[str, Any] = {"pageSize": 300}
            if page_token:
                params["pageToken"] = page_token
            resp = self.session.get(f"{self.base_url}/{self.collection}", params=params, timeout=30)
            resp.raise_for_status()
            data = resp.json()

            for doc in data.get("documents", []):
                doc_id = doc["name"].rsplit("/", 1)[-1]
                fields = doc.get("fields", {})
                existing[doc_id] = {
                    "name": doc["name"],
                    "rank": fields.get("rank", {}).get("stringValue"),
                    "upload_index": int(fields.get("upload_index", {}).get("integerValue", 0)),
                    "video_url": fields.get("video_url", {}).get("stringValue"),
                }

            page_token = data.get("nextPageToken")
            if not page_token:
                break

        return existing

    def clear_collection(self, existing_docs: dict[str, dict[str, Any]]) -> int:
        """Delete all documents in the collection in batches of 400."""
        doc_names = [info["name"] for info in existing_docs.values()]
        if not doc_names:
            return 0

        deleted = 0
        batch_size = 400
        for i in range(0, len(doc_names), batch_size):
            chunk = doc_names[i : i + batch_size]
            writes = [{"delete": name} for name in chunk]
            resp = self.session.post(
                f"{self.base_url}:commit",
                json={"writes": writes},
                timeout=60,
            )
            resp.raise_for_status()
            deleted += len(chunk)
            print(f"[firestore] Deleted {deleted}/{len(doc_names)} documents...")

        return deleted

    @staticmethod
    def to_firestore_fields(doc: dict[str, Any]) -> dict[str, Any]:
        return {
            "message_id": {"stringValue": str(doc["message_id"])},
            "message_link": {"stringValue": str(doc["message_link"])},
            "video_url": {"stringValue": str(doc["video_url"])},
            "author": {"stringValue": str(doc["author"])},
            "content": {"stringValue": str(doc["content"])},
            "timestamp": {"stringValue": str(doc["timestamp"])},
            "rank": {"stringValue": str(doc["rank"])},
            "upload_index": {"integerValue": str(int(doc["upload_index"]))},
        }

    def upsert_documents_batch(self, docs: list[dict[str, Any]]) -> int:
        """Upsert a list of video documents in batches of 400 via Firestore :commit."""
        if not docs:
            return 0

        written = 0
        batch_size = 400
        for i in range(0, len(docs), batch_size):
            chunk = docs[i : i + batch_size]
            writes = [
                {
                    "update": {
                        "name": f"{self.base_doc_path}/{self.collection}/{doc['message_id']}",
                        "fields": self.to_firestore_fields(doc),
                    }
                }
                for doc in chunk
            ]
            resp = self.session.post(
                f"{self.base_url}:commit",
                json={"writes": writes},
                timeout=60,
            )
            resp.raise_for_status()
            written += len(chunk)
            print(f"[firestore] Uploaded {written}/{len(docs)} documents...")

        return written


async def run_sync(args: argparse.Namespace) -> None:
    load_dotenv(BASE_DIR / ".env")

    token = os.getenv("DISCORD_BOT_TOKEN")
    channel_id_str = os.getenv("DISCORD_CHANNEL_ID")
    project_id = os.getenv("FIREBASE_PROJECT_ID")

    if not token:
        sys.exit("Error: DISCORD_BOT_TOKEN is not set in .env")
    if not channel_id_str:
        sys.exit("Error: DISCORD_CHANNEL_ID is not set in .env")
    if not project_id:
        sys.exit("Error: FIREBASE_PROJECT_ID is not set in .env")

    channel_id = int(channel_id_str)

    if args.sync_sheets:
        sync_script = BASE_DIR / "sync_sheets.sh"
        print(f"[sheets] Running {sync_script}...")
        subprocess.run([str(sync_script)], check=True)

    rank_map = load_rank_map(SHEETS_DIR)
    firestore_client = FirestoreRestClient(project_id=project_id)

    print(f"[firestore] Fetching existing documents from {project_id}/{COLLECTION_NAME}...")
    existing_docs = await asyncio.to_thread(firestore_client.fetch_existing_documents)
    print(f"[firestore] Found {len(existing_docs)} existing documents in '{COLLECTION_NAME}'.")

    if args.clear:
        if args.dry_run:
            print(f"[dry-run] Would clear {len(existing_docs)} documents from '{COLLECTION_NAME}'.")
            existing_docs = {}
        else:
            print(f"[firestore] --clear enabled: deleting {len(existing_docs)} existing documents...")
            await asyncio.to_thread(firestore_client.clear_collection, existing_docs)
            existing_docs = {}

    max_existing_index = max(
        (info["upload_index"] for info in existing_docs.values()),
        default=0,
    )

    intents = discord.Intents.default()
    intents.message_content = True
    client = discord.Client(intents=intents)

    @client.event
    async def on_ready() -> None:
        try:
            print(f"[discord] Logged in as {client.user} (ID: {client.user.id})")
            channel = client.get_channel(channel_id) or await client.fetch_channel(channel_id)
            print(f"[discord] Scanning channel #{channel.name} ({channel.id})...")

            scanned_messages = 0
            skipped_existing = 0
            new_docs: list[dict[str, Any]] = []
            next_upload_index = 1 if not existing_docs else (max_existing_index + 1)

            async for message in channel.history(limit=args.limit):
                scanned_messages += 1
                if scanned_messages % 200 == 0:
                    print(
                        f"[progress] Scanned {scanned_messages} messages | "
                        f"New videos queued: {len(new_docs)} | "
                        f"Existing skipped: {skipped_existing}"
                    )

                msg_id = str(message.id)
                target_rank = rank_map.get(msg_id, "R")

                if msg_id in existing_docs and not args.update_existing:
                    skipped_existing += 1
                    continue

                video_url = await resolve_message_video_url(message)
                if not video_url:
                    continue

                if msg_id in existing_docs:
                    upload_index = existing_docs[msg_id]["upload_index"]
                else:
                    upload_index = next_upload_index
                    next_upload_index += 1

                doc = {
                    "message_id": msg_id,
                    "message_link": message.jump_url,
                    "video_url": video_url,
                    "author": message.author.name,
                    "content": message.content or "",
                    "timestamp": message.created_at.isoformat(),
                    "rank": target_rank,
                    "upload_index": upload_index,
                }
                new_docs.append(doc)

            print(
                f"\n[summary] Scanned {scanned_messages} messages in #{channel.name}.\n"
                f"  - Existing videos skipped: {skipped_existing}\n"
                f"  - Videos to upload: {len(new_docs)}"
            )

            if new_docs:
                if args.dry_run:
                    print(f"[dry-run] Would upload {len(new_docs)} documents. Sample first 3:")
                    for sample in new_docs[:3]:
                        print(f"  {sample}")
                else:
                    await asyncio.to_thread(firestore_client.upsert_documents_batch, new_docs)
                    print(f"[done] Successfully synced {len(new_docs)} video documents to Firestore.")
            else:
                print("[done] No new video documents to upload.")
        finally:
            await client.close()

    await client.start(token)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Sync Discord channel videos to Firestore discord_videos collection."
    )
    parser.add_argument(
        "--clear",
        action="store_true",
        default=False,
        help="Clear all documents in discord_videos before running (disabled by default).",
    )
    parser.add_argument(
        "--sync-sheets",
        action="store_true",
        default=False,
        help="Run ./sync_sheets.sh to refresh CSVs from Google Sheets before syncing.",
    )
    parser.add_argument(
        "--update-existing",
        action="store_true",
        default=False,
        help="Re-resolve and update existing documents in Firestore instead of skipping them.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Limit the number of Discord messages scanned (newest first). Default: all messages.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        default=False,
        help="Scan messages and log what would be uploaded without modifying Firestore.",
    )
    return parser.parse_args()


if __name__ == "__main__":
    asyncio.run(run_sync(parse_args()))
