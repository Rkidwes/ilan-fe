import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const listId = process.env.MAILCHIMP_LIST_ID;

  return NextResponse.json({
    apiKey: apiKey ? 'Exists' : 'Not set',
    serverPrefix: serverPrefix ? 'Exists' : 'Not set',
    listId: listId ? 'Exists' : 'Not set',
  });
}