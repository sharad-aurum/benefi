import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import mysql from 'mysql2/promise';

const app  = express();
const PORT = process.env.SERVER_PORT || 3001;

// Allow the production frontend domain + localhost dev
const allowedOrigins = [
  'http://localhost:3000',
  'https://benefi.ph',
  'https://www.benefi.ph',
  ...(process.env.CORS_EXTRA_ORIGINS || '').split(',').filter(Boolean),
];

app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (curl, mobile apps)
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
}));
app.use(express.json());

// ── MySQL connection pool ────────────────────────────────────────────────────
const db = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     Number(process.env.DB_PORT) || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASS     || '',
  database: process.env.DB_NAME     || 'benefi',
  waitForConnections: true,
  connectionLimit:    10,
});

// ── Google Workspace SMTP (activated when credentials are set) ───────────────
const smtpConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASS);
const transporter = smtpConfigured
  ? nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 587, secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

// ── Simple rate limiter — max 5 submissions per IP per 10 min ────────────────
const recentSubmissions = new Map();
function rateLimit(ip) {
  const now = Date.now();
  const window = 10 * 60 * 1000;
  const hits = (recentSubmissions.get(ip) || []).filter(t => now - t < window);
  if (hits.length >= 5) return false;
  recentSubmissions.set(ip, [...hits, now]);
  return true;
}

// ── Admin token auth middleware ───────────────────────────────────────────────
function requireAdminToken(req, res, next) {
  const header = req.headers['authorization'] || '';
  const token  = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ status: 'error', message: 'Unauthorized' });
  }
  next();
}

// ── POST /api/contact ────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, company, phone, message } = req.body;
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim()
          || req.socket.remoteAddress
          || null;

  if (!rateLimit(ip)) {
    return res.status(429).json({ status: 'error', message: 'Too many requests. Try again later.' });
  }

  if (!name || !email || !company || !phone || !message) {
    return res.status(400).json({ status: 'error', message: 'All fields are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ status: 'error', message: 'Invalid email address.' });
  }

  // Save to MySQL
  try {
    await db.execute(
      `INSERT INTO early_access_submissions (name, email, company, phone, message, ip_address)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name.trim(), email.trim(), company.trim(), phone.trim(), message.trim(), ip]
    );
  } catch (dbErr) {
    console.error('DB insert error:', dbErr.message);
    return res.status(500).json({ status: 'error', message: 'Failed to save submission.' });
  }

  // Send email (when SMTP is configured)
  if (smtpConfigured) {
    try {
      await transporter.sendMail({
        from:    `"BeneFi Website" <${process.env.SMTP_USER}>`,
        to:      'sales@benefi.ph',
        replyTo: email,
        subject: `[BeneFi Early Access] ${name} — ${company}`,
        text:    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\n\nMessage:\n${message}`,
        html: `<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
  <div style="background:#1E3A5F;padding:16px;border-radius:6px;margin-bottom:24px">
    <h2 style="color:#fff;margin:0">BeneFi — New Early Access Request</h2>
  </div>
  <table style="width:100%;font-size:14px">
    <tr><td style="color:#6b7280;padding:6px 0;width:90px">Name</td><td style="font-weight:600">${name}</td></tr>
    <tr><td style="color:#6b7280;padding:6px 0">Email</td><td><a href="mailto:${email}" style="color:#2D9B9B">${email}</a></td></tr>
    <tr><td style="color:#6b7280;padding:6px 0">Company</td><td style="font-weight:600">${company}</td></tr>
    <tr><td style="color:#6b7280;padding:6px 0">Phone</td><td>${phone}</td></tr>
  </table>
  <div style="margin-top:16px;padding:14px;background:#f9fafb;border-radius:6px">
    <p style="margin:0 0 6px;color:#6b7280;font-size:12px">Message</p>
    <p style="margin:0;white-space:pre-wrap">${message}</p>
  </div>
  <p style="margin-top:16px;color:#9ca3af;font-size:12px">
    Submitted ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })} (Manila time)
  </p>
</div>`,
      });
    } catch (mailErr) {
      console.error('SMTP error (non-fatal):', mailErr.message);
    }
  }

  res.json({ status: 'success' });
});

// ── GET /api/submissions — protected, admin only ──────────────────────────────
app.get('/api/submissions', requireAdminToken, async (req, res) => {
  try {
    const page  = Math.max(1, parseInt(req.query.page  || '1',  10));
    const limit = Math.min(100, parseInt(req.query.limit || '50', 10));
    const offset = (page - 1) * limit;

    const [[{ total }]] = await db.execute(
      'SELECT COUNT(*) as total FROM early_access_submissions'
    );
    const [rows] = await db.execute(
      `SELECT id, name, email, company, phone, message, ip_address, created_at
       FROM early_access_submissions
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`,
      [limit, offset]
    );

    res.json({
      status: 'success',
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
      data:  rows,
    });
  } catch (err) {
    console.error('Submissions fetch error:', err.message);
    res.status(500).json({ status: 'error', message: 'Failed to fetch submissions.' });
  }
});

// ── Health check (public) ─────────────────────────────────────────────────────
app.get('/api/health', async (_req, res) => {
  try {
    await db.execute('SELECT 1');
    res.json({ status: 'ok', db: 'connected', smtp: smtpConfigured ? 'configured' : 'parked' });
  } catch {
    res.status(500).json({ status: 'error', db: 'disconnected' });
  }
});

app.listen(PORT, () => {
  console.log(`BeneFi API server  →  http://localhost:${PORT}`);
  console.log(`Database           →  ${process.env.DB_NAME || 'benefi'} @ ${process.env.DB_HOST || 'localhost'}`);
  console.log(`SMTP               →  ${smtpConfigured ? process.env.SMTP_USER : 'parked'}`);
  console.log(`Admin endpoint     →  ${process.env.ADMIN_TOKEN ? 'secured' : 'WARNING: ADMIN_TOKEN not set'}`);
});
