import { NextRequest, NextResponse } from "next/server";

export async function POST (request) {
  const subscriber = await request.json()
  const newSubscriber = {
    email: Comment.email
  }
  console.log('Request is ', await request.formData())
  return Response.json({'status' : 200})
}

// export async function POST() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//     body: JSON.stringify({ time: new Date().toISOString() }),
//   })
 
//   const data = await res.json()
 
//   return Response.json(data)
// }

// const subscribe = async (req, res) => {
//   const { email } = req.body;

//   console.log({ email });

//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
//   const API_KEY = process.env.MAILCHIMP_API_KEY;
//   const DATACENTER = process.env.MAILCHIMP_API_SERVER;

//   if (!AUDIENCE_ID || !API_KEY || !DATACENTER) {
//     return res.status(500).json({ error: 'Server configuration error' });
//   }

//   try {
//     const data = {
//       email_address: email,
//       status: 'subscribed',
//     };

//     const response = await fetch(
//       `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
//       {
//         method: 'POST',
//         headers: {
//           Authorization: `apikey ${API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     if (response.status >= 400) {
//       const errorResponse = await response.json();
//       return res.status(400).json({
//         error: `There was an error subscribing to the newsletter: ${errorResponse.detail || 'Unknown error'}. Hit me up at peter@peterlunch.com and I'll add you the old fashioned way :(.`,
//       });
//     }

//     return res.status(201).json({ error: '' });
//   } catch (error) {
//     console.error('Subscribe API error:', error);
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
// };

// export default subscribe;