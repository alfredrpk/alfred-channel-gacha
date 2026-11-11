from flask import Flask, jsonify
import firebase_admin
from firebase_admin import credentials, firestore
import random
import time

# Initialize Flask app
app = Flask(__name__)

# Initialize Firebase Admin SDK
cred = credentials.Certificate('cred_path')  # Replace with your Firebase credentials path
firebase_admin.initialize_app(cred)
db = firestore.client()

# Cache the maximum upload_index so we don't have to query it on every request
MAX_INDEX_TTL_SECONDS = 600
_cached_max_index = None
_cached_max_index_time = 0.0


def get_max_upload_index(collection_ref):
    """Fetch and cache the highest upload_index in discord_videos."""
    global _cached_max_index, _cached_max_index_time
    now = time.monotonic()
    if _cached_max_index is not None and (now - _cached_max_index_time) < MAX_INDEX_TTL_SECONDS:
        return _cached_max_index

    top_query = (
        collection_ref
        .order_by('upload_index', direction=firestore.Query.DESCENDING)
        .limit(1)
    )
    top_docs = list(top_query.stream())
    if not top_docs:
        return None

    _cached_max_index = int(top_docs[0].to_dict().get('upload_index', 1))
    _cached_max_index_time = now
    return _cached_max_index


@app.route('/fetch-random-video', methods=['GET'])
def fetch_random_video():
    try:
        collection_ref = db.collection('discord_videos')
        max_index = get_max_upload_index(collection_ref)
        if not max_index:
            return jsonify({"error": "No videos found in the collection"}), 404

        random_index = random.randint(1, max_index)

        # Find the document at random_index (or the next closest if there is a gap)
        video_query = (
            collection_ref
            .where('upload_index', '>=', random_index)
            .order_by('upload_index', direction=firestore.Query.ASCENDING)
            .limit(1)
        )
        videos = [video.to_dict() for video in video_query.stream()]

        # Fallback in case the highest upload_index document was deleted
        if not videos:
            fallback_query = (
                collection_ref
                .where('upload_index', '<=', random_index)
                .order_by('upload_index', direction=firestore.Query.DESCENDING)
                .limit(1)
            )
            videos = [video.to_dict() for video in fallback_query.stream()]

        if videos:
            return jsonify(videos[0]), 200
        else:
            return jsonify({"error": "No videos found in the collection"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(port=5000, debug=True)
