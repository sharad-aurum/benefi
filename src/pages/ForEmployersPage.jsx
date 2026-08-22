import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Shield, BarChart2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: TrendingUp, title: 'Boost Productivity', desc: 'Financially stressed employees are less productive. BeneFi reduces that stress with real-time financial support.' },
  { icon: Users, title: 'Improve Retention', desc: 'Employees who feel supported stay longer. Add financial wellness to your benefits package at no extra HR overhead.' },
  { icon: BarChart2, title: 'HR Analytics Dashboard', desc: "Get anonymized insights into your team's financial wellness trends to make better HR decisions." },
  { icon: Shield, title: 'Compliance Ready', desc: 'Built for Philippine labor laws — SSS, PhilHealth, Pag-IBIG, and BIR compliance made simple.' },
  { icon: Heart, title: 'Employee Satisfaction', desc: 'Show your team you care about their financial health, not just their output.' },
  { icon: CheckCircle, title: 'Easy Onboarding', desc: 'Set up your company account in minutes and invite your team with a single link.' },
];

function ForEmployersPage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <Helmet>
        <title>For Employers — BeneFi</title>
        <meta name="description" content="BeneFi helps Philippine employers boost retention and productivity by giving employees an AI-powered financial wellness companion." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D7A8A] pt-32 pb-20 px-6 text-white text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Built for Employers Who Care</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Give your team an AI-powered financial wellness companion. Reduce stress, improve retention, and make HR simpler — all in one platform.
            </p>
            <Button onClick={scrollToContact} className="bg-[#E8B86B] hover:bg-[#D4A574] text-[#1E3A5F] font-semibold px-8 py-6 text-lg rounded-full">
              Request a Demo
            </Button>
          </motion.div>
        </div>

        {/* Benefits */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">Why Employers Choose BeneFi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#2D9B9B]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#2D9B9B]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-16">
          <Link to="/" className="text-[#2D9B9B] hover:underline">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}

export default ForEmployersPage;
