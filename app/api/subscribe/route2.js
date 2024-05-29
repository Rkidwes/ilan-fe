// export async function GET() {
//   return new Response("Hello World")
// }

export async function POST(request) {
  const email = await request.json()
  const newSubscriber = {
    email_address: email.body.email_address
  }

  const DATACENTER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  const API_KEY = process.env.MAILCHIMP_API_KEY

  const response = await fetch(
    `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  return new Response(JSON.stringify(newSubscriber), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 201,
  })
}