import { EmailTemplate } from '../../bookings/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { formData } = await request.json();

    const { name, email, phone, eventName, details } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Website Enquiry <onboarding@resend.dev>',
      // to: ['delivered@resend.dev'],
      // to: ['admin@ilanbluestone.com'],
      to: ['rkidwes@hotmail.com'],
      subject: `New Enquiry || ${new Date().toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}) }`,
      react: EmailTemplate({ 
        name,
        email,
        phone,
        eventName,
        details,
       }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('Unexpected error:', error);
    return Response.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}