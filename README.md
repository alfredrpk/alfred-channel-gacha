# Alfred Channel Gacha

The intention and story behind this is too long to explain and no one but me will read it lol

I have a Discord channel full of videos and wanted to make a Discord bot you could use with a slash command and get a random video

Random videos are either 3 stars by default, 4 stars, 5 stars, or 0 star (4/5/0 star videos are handpicked and put in a google sheets I pull from)

sync_sheets.sh pulls the 5star, 4star, and 0star sheets as .csv files to sheets

sync_discord_videos goes through a certain discord server, gets every message with a video video, and uploads a document to a firebase firestore collection with this schema:

- message_id (string): Discord message ID (matches the document ID, e.g. "1000206168259579926")
- rank (string): "SSR", "SR", "R", or "N"
- video_url (string): Discord CDN attachment URL
- message_link (string): Permalink to the Discord message
- author (string): Discord username (e.g. "alfredrasam")
- content (string): Raw message content (often the URL or empty string "")
- timestamp (string): ISO 8601 timestamp (e.g. "2022-07-23T01:02:13.445000+00:00")
- upload_index (integer): Sequential index (e.g. 713)

flask_app.py is a flask app I run that hosts an API endpoint for getting a random video from the firestore collection

The actual discord bot lives in a cloudflare worker running serverless