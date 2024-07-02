import { EmailTemplate } from '../../bookings/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { formData } = await request.json();

    const { name, email, phone, eventName, details } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Website Enquiry <onboarding@resend.dev>',
      to: ['admin@ilanbluestone.com'],
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
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}