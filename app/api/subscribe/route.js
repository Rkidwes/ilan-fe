import { NextResponse } from 'next/server';
import client from '@mailchimp/mailchimp_marketing';

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'An email is required to subscribe - please add an email above' }, { status: 400 });
    }

    // console.log('An email is required to subscribe. Please add an email:', email);

    const response = await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'pending',
    });

    console.log('MailChimp response:', response);

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error subscribing to MailChimp:', error);

    let errorMessage = 'An unexpected error occurred';
    if (error.response && error.response.res && error.response.res.text) {
      try {
        const errorResponse = JSON.parse(error.response.res.text);
        errorMessage = errorResponse.title || errorMessage;
      } catch (parseError) {
        console.error('Error parsing MailChimp error response:', parseError);
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}