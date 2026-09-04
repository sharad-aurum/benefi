# Setting Up Email via Google Apps Script

This connects the "Get Early Access" form to send emails to sales@benefi.ph using your Google Workspace account.

## Step 1 — Create the Apps Script

1. Go to https://script.google.com and click **New project**
2. Replace the default code with:

```javascript
function doPost(e) {
  try {
    const name    = e.parameter.name    || '';
    const email   = e.parameter.email   || '';
    const company = e.parameter.company || '';
    const phone   = e.parameter.phone   || '';
    const message = e.parameter.message || '';

    const recipient = 'sales@benefi.ph';
    const subject   = `[BeneFi Early Access] ${name} — ${company}`;
    const body = `
New early access request from benefi.ph

Name:    ${name}
Email:   ${email}
Company: ${company}
Phone:   ${phone}

Message:
${message}

---
Submitted: ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}
    `.trim();

    GmailApp.sendEmail(recipient, subject, body, { replyTo: email });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Deploy → New deployment**
4. Set type to **Web app**
5. Set **Execute as** → Me (your Google Workspace account)
6. Set **Who has access** → Anyone
7. Click **Deploy** and authorise when prompted
8. Copy the **Web app URL** — it looks like `https://script.google.com/macros/s/AKfycb.../exec`

## Step 2 — Add the URL to the project

Create a `.env.local` file in the project root (next to `package.json`):

```
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Restart the dev server (`npm run dev`) for the variable to load.

## Notes

- The script runs under your Google account and sends email via Gmail/Google Workspace — no SMTP credentials needed.
- For production, add the same env variable to your hosting platform (Hostinger / Vercel / etc.).
- CORS: Google Apps Script `doPost` accepts cross-origin `fetch` requests automatically.
