import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

// const test = (req, res) => {
//   return res.status(200).json({
//     message: "Hello world",
//   })
// }

export async function POST (request) {
  await request.json()
  return new Response("POST handler")
}

export default test;

// My attempt #1
// export async function POST (request) {
//   console.log('Working...')
//   const subscriber = await client.lists.addListMember("MAILCHIMP_AUDIENCE_ID", {
//     email_address: "Ebony_Brekke@gmail.com",
//     status: "pending",
//   });

//   console.log('Request is ', await request)
//   return Response.json({'status' : 200})
// }

// From MailChimp
// const run = async () => {
//   const response = await client.lists.addListMember("MAILCHIMP_AUDIENCE_ID", {
//     email_address: "Ebony_Brekke@gmail.com",
//     status: "pending",
//   });
//   console.log(response);
// };

// run();