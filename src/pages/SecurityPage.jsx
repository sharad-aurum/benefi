import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, CheckCircle, FileText } from 'lucide-react';

const pillars = [
  { icon: Lock, title: 'End-to-End Encryption', desc: 'All data transmitted between your device and BeneFi is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.' },
  { icon: Shield, title: 'Role-Based Access Control', desc: 'Strict access controls ensure only authorized personnel can access specific data. Employees only see their own information.' },
  { icon: Eye, title: 'Zero-Knowledge Architecture', desc: 'Sensitive financial data is processed with privacy-preserving techniques. We see only what we need to deliver our service.' },
  { icon: Server, title: 'Secure Infrastructure', desc: 'Our platform runs on enterprise-grade cloud infrastructure with 99.9% uptime SLA, automated backups, and disaster recovery.' },
  { icon: FileText, title: 'Regulatory Compliance', desc: 'Fully compliant with the Philippine Data Privacy Act of 2012 (RA 10173), BSP regulations, and international security standards.' },
  { icon: CheckCircle, title: 'Regular Security Audits', desc: 'We conduct regular penetration testing and third-party security audits to identify and address vulnerabilities proactively.' },
];

function SecurityPage() {
  return (
    <>
      <Helmet>
        <title>Security — BeneFi</title>
        <meta name="description" content="BeneFi takes data security seriously. Learn how we protect your personal and financial information." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D7A8A] pt-32 pb-20 px-6 text-white text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Shield className="w-16 h-16 mx-auto mb-6 text-[#E8B86B]" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security You Can Trust</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Your financial and personal data is treated with the highest level of care. Here's how we keep it safe.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1E3A5F] text-white rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Report a Security Concern</h2>
            <p className="text-white/80 mb-6">Found a vulnerability? We take security reports seriously and respond promptly.</p>
            <a href="mailto:security@benefi.ph" className="inline-block bg-[#E8B86B] hover:bg-[#D4A574] text-[#1E3A5F] font-semibold px-8 py-3 rounded-full transition-colors">
              security@benefi.ph
            </a>
          </div>
        </div>

        <div className="text-center pb-16">
          <Link to="/" className="text-[#2D9B9B] hover:underline">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}

export default SecurityPage;
