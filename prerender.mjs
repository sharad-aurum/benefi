/**
 * Post-build prerender: generates per-route index.html files with
 * route-specific <title>, <meta description>, <link canonical>, and OG tags
 * already in the initial HTML — no JS needed for crawlers to read them.
 *
 * Runs after `vite build`. Output stays in dist/ alongside the normal build.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, 'dist');

const routes = [
  {
    path: 'for-employers',
    title: 'For Employers — BeneFi',
    description: 'BeneFi helps Philippine employers boost retention and productivity by giving every employee an AI-powered financial wellness companion.',
    canonical: 'https://benefi.ph/for-employers',
    noscript: `
<header><nav><a href="/">BeneFi</a> <a href="/for-employers">For Employers</a> <a href="/for-employees">For Employees</a> <a href="/security">Security</a></nav></header>
<main>
<h1>BeneFi for Employers — Boost Retention with Financial Wellness</h1>
<p>BeneFi is an AI-powered HR and financial wellness platform that helps Philippine employers reduce employee financial stress, boost productivity, and improve retention.</p>
<h2>Why Employers Choose BeneFi</h2>
<ul>
<li>Financially stressed employees are less productive — BeneFi reduces that stress with real-time financial support.</li>
<li>Employees who feel supported stay longer. Add financial wellness to your benefits package at no extra HR overhead.</li>
<li>Get anonymized insights into your team's financial wellness trends to make better HR decisions.</li>
<li>Built for Philippine labor laws — SSS, PhilHealth, Pag-IBIG, and BIR compliance made simple.</li>
<li>Set up your company account in minutes and invite your team with a single link.</li>
</ul>
<p>Get in touch: <a href="mailto:sales@benefi.ph">sales@benefi.ph</a></p>
</main>
<footer><p>&copy; 2026 BeneFi. AI-powered HR and financial wellness for Filipino employees.</p></footer>`,
  },
  {
    path: 'for-employees',
    title: 'For Employees — BeneFi',
    description: 'BeneFi gives Filipino employees an AI companion for financial wellness — payslip understanding, savings, loans, HR support, and more.',
    canonical: 'https://benefi.ph/for-employees',
    noscript: `
<header><nav><a href="/">BeneFi</a> <a href="/for-employers">For Employers</a> <a href="/for-employees">For Employees</a> <a href="/security">Security</a></nav></header>
<main>
<h1>BeneFi for Employees — Your Smart Financial Companion</h1>
<p>BeneFi is your AI-powered financial wellness companion designed for Filipino employees. Understand your pay, build savings habits, and get HR support in one place.</p>
<h2>What BeneFi Does for You</h2>
<ul>
<li>Understand Your Pay — break down your payslip, understand deductions, know exactly what you're earning.</li>
<li>Build Savings Habits — set goals, track progress, get personalized nudges to help you save even on a tight budget.</li>
<li>AI Financial Companion — ask anything about money, HR policies, or your benefits and get clear answers instantly.</li>
<li>Financial Literacy — bite-sized lessons on budgeting, investing, SSS, Pag-IBIG, and more.</li>
<li>Smart Reminders — never miss a contribution deadline, loan payment, or benefit enrollment window.</li>
</ul>
<p>Get early access: <a href="https://benefi.ph/#contact">benefi.ph</a></p>
</main>
<footer><p>&copy; 2026 BeneFi. AI-powered HR and financial wellness for Filipino employees.</p></footer>`,
  },
  {
    path: 'security',
    title: 'Security — BeneFi',
    description: 'BeneFi protects your financial and personal data with AES-256 encryption, TLS 1.3, and full compliance with the Philippine Data Privacy Act of 2012.',
    canonical: 'https://benefi.ph/security',
    noscript: `
<header><nav><a href="/">BeneFi</a> <a href="/for-employers">For Employers</a> <a href="/for-employees">For Employees</a> <a href="/security">Security</a></nav></header>
<main>
<h1>Security You Can Trust — BeneFi</h1>
<p>Your financial and personal data is protected with enterprise-grade security. BeneFi is fully compliant with the Philippine Data Privacy Act of 2012 (RA 10173).</p>
<h2>How We Protect You</h2>
<ul>
<li>End-to-End Encryption — TLS 1.3 in transit, AES-256 at rest.</li>
<li>Role-Based Access Control — strict access controls ensure only authorized personnel can access specific data.</li>
<li>Zero-Knowledge Architecture — sensitive financial data is processed with privacy-preserving techniques.</li>
<li>Secure Infrastructure — enterprise-grade cloud with 99.9% uptime SLA, automated backups, and disaster recovery.</li>
<li>Regulatory Compliance — fully compliant with the Philippine Data Privacy Act of 2012 (RA 10173) and BSP regulations.</li>
<li>Regular Security Audits — regular penetration testing and third-party security audits.</li>
</ul>
</main>
<footer><p>&copy; 2026 BeneFi. AI-powered HR and financial wellness for Filipino employees.</p></footer>`,
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy — BeneFi',
    description: 'BeneFi privacy policy — how we collect, use, and protect your personal data in compliance with the Philippine Data Privacy Act of 2012 (RA 10173).',
    canonical: 'https://benefi.ph/privacy-policy',
    noscript: `
<header><nav><a href="/">BeneFi</a> <a href="/privacy-policy">Privacy Policy</a> <a href="/terms-of-service">Terms of Service</a></nav></header>
<main>
<h1>Privacy Policy — BeneFi</h1>
<p>BeneFi is committed to protecting your personal data in accordance with the Philippine Data Privacy Act of 2012 (Republic Act No. 10173). This privacy policy explains how we collect, use, store, and protect your information.</p>
<p>For the full privacy policy, please enable JavaScript or contact us at <a href="mailto:sales@benefi.ph">sales@benefi.ph</a>.</p>
</main>
<footer><p>&copy; 2026 BeneFi.</p></footer>`,
  },
  {
    path: 'terms-of-service',
    title: 'Terms of Service — BeneFi',
    description: 'BeneFi terms of service — your agreement with BeneFi for using our AI-powered HR and financial wellness platform.',
    canonical: 'https://benefi.ph/terms-of-service',
    noscript: `
<header><nav><a href="/">BeneFi</a> <a href="/privacy-policy">Privacy Policy</a> <a href="/terms-of-service">Terms of Service</a></nav></header>
<main>
<h1>Terms of Service — BeneFi</h1>
<p>These terms govern your use of the BeneFi HR and financial wellness platform. By using BeneFi, you agree to these terms.</p>
<p>For the full terms of service, please enable JavaScript or contact us at <a href="mailto:sales@benefi.ph">sales@benefi.ph</a>.</p>
</main>
<footer><p>&copy; 2026 BeneFi.</p></footer>`,
  },
];

const template = readFileSync(join(dist, 'index.html'), 'utf-8');

// Regex helpers
const replace = (html, pattern, replacement) => html.replace(pattern, replacement);

for (const route of routes) {
  let html = template;

  // <title>
  html = replace(html, /<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

  // <meta name="description">
  html = replace(html, /<meta name="description" content="[^"]*"[^>]*\/?>/,
    `<meta name="description" content="${route.description}" />`);

  // <link rel="canonical">
  html = replace(html, /<link rel="canonical" href="[^"]*"[^>]*\/?>/,
    `<link rel="canonical" href="${route.canonical}" />`);

  // OG tags
  html = replace(html, /<meta property="og:url" content="[^"]*"[^>]*\/?>/, `<meta property="og:url" content="${route.canonical}" />`);
  html = replace(html, /<meta property="og:title" content="[^"]*"[^>]*\/?>/, `<meta property="og:title" content="${route.title}" />`);
  html = replace(html, /<meta property="og:description" content="[^"]*"[^>]*\/?>/, `<meta property="og:description" content="${route.description}" />`);

  // Twitter tags
  html = replace(html, /<meta name="twitter:title" content="[^"]*"[^>]*\/?>/, `<meta name="twitter:title" content="${route.title}" />`);
  html = replace(html, /<meta name="twitter:description" content="[^"]*"[^>]*\/?>/, `<meta name="twitter:description" content="${route.description}" />`);

  // Replace <noscript>...</noscript> with route-specific fallback
  html = replace(html, /<noscript>[\s\S]*?<\/noscript>/, `<noscript>${route.noscript}\n\t</noscript>`);

  const routeDir = join(dist, route.path);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'index.html'), html, 'utf-8');

  console.log(`  ✅  /${route.path}`);
}

console.log(`\nPrerendering done — ${routes.length} routes written to dist/`);
