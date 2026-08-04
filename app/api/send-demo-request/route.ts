import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, organization, role, email, phone, notes } = await req.json();

    const data = await resend.emails.send({
      from: 'The Human Anchor <onboarding@resend.dev>',
      to: [process.env.DESTINATION_EMAIL || 'healthcarebyvalentine@gmail.com'],
      replyTo: email,
      subject: `New Demo Request: ${organization} (${name})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Institutional Demo Request</h2>
            <p>An Activity Director or Administrator has requested a demonstration.</p>
            <hr />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Notes / Schedule Preferences:</strong> ${notes || 'None provided'}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}