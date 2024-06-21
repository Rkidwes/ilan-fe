// // api/deploy.js
// // import { VercelRequest, VercelResponse } from '@vercel/node';
// import fetch from 'node-fetch';
// import { get, set } from '@vercel/edge-config';

// const DEPLOY_HOOK_URL = 'https://api.vercel.com/v1/integrations/deploy/prj_N6lKByobhsfxAuG610JutskeiyzV/BzAskWiEdW';
// const TIME_LIMIT = 1 * 60 * 1000; // 15 minutes in milliseconds
// // const TIME_LIMIT = 15 * 60 * 1000; // 15 minutes in milliseconds

// // Function to get the state from Edge Config
// const getState = async () => {
//   const lastTriggered = await get('lastTriggered') || 0;
//   const changesPending = await get('changesPending') || false;
//   return { lastTriggered, changesPending };
// };

// // Function to set the state in Edge Config
// const setState = async (state) => {
//   await set('lastTriggered', state.lastTriggered);
//   await set('changesPending', state.changesPending);
// };

// export default async function handler(req, res) {
//   const now = Date.now();
//   const state = await getState();

//   if (now - state.lastTriggered > TIME_LIMIT) {
//     try {
//       // Trigger the Vercel deploy hook
//       await fetch(DEPLOY_HOOK_URL, {
//         method: 'POST',
//       });
//       state.lastTriggered = now;
//       state.chagesPending = false;
//       await setState(state);
//       res.status(200).json({ message: 'Deploy triggered' });
//     } catch (error) {
//       console.error('Error triggering deploy:', error);
//       res.status(500).json({ message: 'Error triggering deploy' });
//     }
//   } else {
//     state.changesPending = true;
//     await setState(state);
//     res.status(200).json({ message: 'Deploy skipped to avoid rapid redeploys' });
//   }

//   // Schedule a final check after TIME_LIMIT
//   setTimeout(async () => {
//     const latestState = await getState();
//     if (latestState.changesPending) {
//       try {
//         // Trigger the Vercel deploy hook
//         await fetch(DEPLOY_HOOK_URL, {
//           method: 'POST',
//         });
//         latestState.lastTriggered = Date.now();
//         latestState.changesPending = false;
//         await setState(latestState);
//         console.log('Final deploy triggered after time limit');
//       } catch (error) {
//         console.error('Error triggering final deploy:', error);
//       }
//     }
//   }, TIME_LIMIT);
// }


// api/deploy.js

export async function POST(req, res) {
    try {
        // Handle POST request from Sanity webhook
        const body = await parseRequestBody(req);
        console.log('Received webhook payload:', body);

        // Implement your deployment logic here
        // Trigger deployment, update content, etc.

        // Respond with success message
        res.status(200).json({ message: 'Deployment triggered successfully' });
    } catch (error) {
        console.error('Error handling webhook request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function parseRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(error);
            }
        });
        req.on('error', err => {
            reject(err);
        });
    });
}