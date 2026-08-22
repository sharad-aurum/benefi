import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">{title}</h2>
      <div className="text-gray-700 space-y-3 leading-relaxed">{children}</div>
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — BeneFi</title>
        <meta name="description" content="BeneFi Privacy Policy — how we collect, use, and protect your personal data." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-10">
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-10">Last updated: August 2026</p>

          <Section title="1. Introduction">
            <p>BeneFi ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.</p>
            <p>By using BeneFi, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of our services.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information you provide directly to us, such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, phone number</li>
              <li>Company and employment information</li>
              <li>Financial wellness data you choose to share</li>
              <li>Communications you send us</li>
            </ul>
            <p>We also collect information automatically when you use our platform, including device data, usage data, and cookies.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and improve our services</li>
              <li>To personalize your experience with our AI companion</li>
              <li>To communicate with you about updates, offers, and support</li>
              <li>To comply with legal obligations under Philippine law (Republic Act No. 10173 – Data Privacy Act of 2012)</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing">
            <p>We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service providers who assist in operating our platform</li>
              <li>Your employer (only data relevant to HR functions, as disclosed)</li>
              <li>Regulatory authorities when required by law</li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            <p>We use industry-standard security measures including encryption, access controls, and regular audits to protect your data. However, no method of transmission over the internet is 100% secure.</p>
          </Section>

          <div id="cookies">
            <Section title="6. Cookie Policy">
              <p>We use cookies and similar tracking technologies to improve your experience. Types of cookies we use:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential cookies</strong> — required for the platform to function</li>
                <li><strong>Analytics cookies</strong> — help us understand how visitors use the site</li>
                <li><strong>Preference cookies</strong> — remember your settings</li>
              </ul>
              <p>You can control cookies through your browser settings. Disabling certain cookies may affect platform functionality.</p>
            </Section>
          </div>

          <div id="data">
            <Section title="7. Your Rights (Data Privacy Act of 2012)">
              <p>As a data subject under Philippine law, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Be informed about how your data is processed</li>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Object to processing</li>
                <li>File a complaint with the National Privacy Commission</li>
              </ul>
              <p>To exercise your rights, contact us at <a href="mailto:privacy@benefi.ph" className="text-[#2D9B9B] underline">privacy@benefi.ph</a>.</p>
            </Section>
          </div>

          <Section title="8. Contact Us">
            <p>For privacy-related questions or requests:</p>
            <p><strong>Data Protection Officer</strong><br />BeneFi<br />Email: <a href="mailto:privacy@benefi.ph" className="text-[#2D9B9B] underline">privacy@benefi.ph</a></p>
          </Section>

          <Link to="/" className="inline-block mt-4 text-[#2D9B9B] hover:underline">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;
