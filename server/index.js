import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app  = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());

// Google Workspace SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,           // STARTTLS
  auth: {
    user: process.env.SMTP_USER,   // e.g. sales@benefi.ph
    pass: process.env.SMTP_PASS,   // Google Workspace App Password (16 chars, no spaces)
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  if (!name || !email || !company || !phone || !message) {
    return res.status(400).json({ status: 'error', message: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ status: 'error', message: 'Invalid email address.' });
  }

  try {
    await transporter.sendMail({
      from:    `"BeneFi Website" <${process.env.SMTP_USER}>`,
      to:      'sales@benefi.ph',
      replyTo: email,
      subject: `[BeneFi Early Access] ${name} — ${company}`,
      text: `
New early access request from benefi.ph

Name:    ${name}
Email:   ${email}
Company: ${company}
Phone:   ${phone}

Message:
${message}

---
Submitted: ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}
      `.trim(),
      html: `
<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
  <div style="background:#1E3A5F;padding:16px;border-radius:6px;margin-bottom:24px">
    <h2 style="color:#fff;margin:0;font-size:18px">BeneFi — New Early Access Request</h2>
  </div>
  <table style="width:100%;border-collapse:collapse;font-size:14px">
    <tr><td style="padding:8px 0;color:#6b7280;width:100px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#2D9B9B">${email}</a></td></tr>
    <tr><td style="padding:8px 0;color:#6b7280">Company</td><td style="padding:8px 0;font-weight:600">${company}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0">${phone}</td></tr>
  </table>
  <div style="margin-top:20px;padding:16px;background:#f9fafb;border-radius:6px">
    <p style="margin:0 0 8px;color:#6b7280;font-size:13px">Message</p>
    <p style="margin:0;white-space:pre-wrap">${message}</p>
  </div>
  <p style="margin-top:20px;color:#9ca3af;font-size:12px">
    Submitted ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })} (Manila time)
  </p>
</div>
      `.trim(),
    });

    res.json({ status: 'success' });
  } catch (err) {
    console.error('SMTP error:', err.message);
    res.status(500).json({ status: 'error', message: 'Failed to send email. Please try again.' });
  }
});

// Health check
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`BeneFi API server running on http://localhost:${PORT}`);
});
