import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // Extract email data from the request body
  const body = await request.json();
  const { to, subject, text, html } = body;

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    host: 'us2.smtp.mailhostbox.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to,
    subject,
    text,
    html,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 });
  }
}