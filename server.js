import { AutoRouter } from 'itty-router';
import {
  InteractionResponseFlags,
  InteractionResponseType,
  InteractionType,
  verifyKey,
} from 'discord-interactions';
import axios from 'axios';

const RANDOM_VIDEO_COMMAND = {
  name: 'randomvideo',
  description: 'Get a random alfred channel video',
};

const INVITE_COMMAND = {
  name: 'invite',
  description: 'Get an invite link to add the bot to your server',
};

class JsonResponse extends Response {
  constructor(body, init) {
    const jsonBody = JSON.stringify(body);
    init = init || {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };
    super(jsonBody, init);
  }
}

const router = AutoRouter();

router.get('/', (request, env) => {
  return new Response(`👋 ${env.DISCORD_APPLICATION_ID}`);
});

router.post('/', async (request, env) => {
  const { isValid, interaction } = await server.verifyDiscordRequest(request, env);
  if (!isValid || !interaction) {
    return new Response('Bad request signature.', { status: 401 });
  }

  if (interaction.type === InteractionType.PING) {
    return new JsonResponse({
      type: InteractionResponseType.PONG,
    });
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    switch (interaction.data.name.toLowerCase()) {
      case RANDOM_VIDEO_COMMAND.name.toLowerCase(): {
        const jsonData = await fetchJsonData();
        console.log(jsonData);
        const videoUrl = jsonData.video_url;
        const messageLink = jsonData.message_link;
        console.log('got url');

        if (jsonData.rank == 'SSR') {
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `*You rolled:*\n# SSR ultra fucking rare video holy shit\n# :star: :star: :star:\nMessage Link: ${messageLink}\n\n${videoUrl}`,
            },
          });
        } else if (jsonData.rank == 'SR') {
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `*You rolled:*\n moderately rare video \n# :star: :star:\nMessage Link: ${messageLink}\n\n${videoUrl}`,
            },
          });
        } else if (jsonData.rank == 'N') {
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `*You rolled:*\n# ZERO STAR\n# fuck you\nMessage Link: ${messageLink}\n\n${videoUrl}`,
            },
          });
        } else {
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `*You rolled:*\n\n bargain bin video try again\n# :star: \nMessage Link: ${messageLink}\n\n${videoUrl}`,
            },
          });
        }
      }
      case INVITE_COMMAND.name.toLowerCase(): {
        const applicationId = env.DISCORD_APPLICATION_ID;
        const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${applicationId}&scope=applications.commands`;
        return new JsonResponse({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: INVITE_URL,
            flags: InteractionResponseFlags.EPHEMERAL,
          },
        });
      }
      default:
        return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
    }
  }

  console.error('Unknown Type');
  return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
});

router.all('*', () => new Response('Not Found.', { status: 404 }));

async function verifyDiscordRequest(request, env) {
  const signature = request.headers.get('x-signature-ed25519');
  const timestamp = request.headers.get('x-signature-timestamp');
  const body = await request.text();
  const isValidRequest =
    signature &&
    timestamp &&
    (await verifyKey(body, signature, timestamp, env.DISCORD_PUBLIC_KEY));
  if (!isValidRequest) {
    return { isValid: false };
  }
  return { interaction: JSON.parse(body), isValid: true };
}

async function fetchJsonData() {
  try {
    const response = await axios.get('https://alfredrpk.pythonanywhere.com/fetch-random-video');
    const jsonData = response.data;
    if (jsonData) {
      return jsonData;
    } else {
      console.log('video_url field not found in the response.');
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

const server = {
  verifyDiscordRequest,
  fetch: router.fetch,
};

export default server;
