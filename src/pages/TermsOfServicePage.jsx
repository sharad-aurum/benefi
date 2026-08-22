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

function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — BeneFi</title>
        <meta name="description" content="BeneFi Terms of Service — the rules and guidelines for using our platform." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-10">
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-10">Last updated: August 2026</p>

          <Section title="1. Acceptance of Terms">
            <p>By accessing or using BeneFi ("Platform"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, do not use the Platform.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>BeneFi provides an AI-powered HR and financial wellness platform designed for Filipino employees and employers. Our services include financial literacy tools, HR process assistance, benefits management, and a personalized AI companion.</p>
          </Section>

          <Section title="3. User Accounts">
            <ul className="list-disc pl-6 space-y-1">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>Accounts are non-transferable</li>
            </ul>
          </Section>

          <Section title="4. Acceptable Use">
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the Platform for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Platform</li>
              <li>Upload malicious code or interfere with the Platform's operation</li>
              <li>Misrepresent your identity or affiliation</li>
              <li>Use the Platform to harass, harm, or discriminate against others</li>
            </ul>
          </Section>

          <Section title="5. Financial Information Disclaimer">
            <p>BeneFi provides financial wellness tools and educational content for informational purposes only. Nothing on the Platform constitutes financial, legal, or investment advice. Always consult a licensed professional for financial decisions.</p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>All content, features, and functionality of the Platform — including text, graphics, logos, and software — are owned by BeneFi and protected by Philippine and international intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, BeneFi shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the Platform.</p>
          </Section>

          <Section title="8. Termination">
            <p>We reserve the right to suspend or terminate your access to the Platform at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
          </Section>

          <Section title="9. Governing Law">
            <p>These Terms are governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes shall be resolved in the courts of the Philippines.</p>
          </Section>

          <Section title="10. Contact">
            <p>For questions about these Terms, contact us at <a href="mailto:legal@benefi.ph" className="text-[#2D9B9B] underline">legal@benefi.ph</a>.</p>
          </Section>

          <Link to="/" className="inline-block mt-4 text-[#2D9B9B] hover:underline">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}

export default TermsOfServicePage;
