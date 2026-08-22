import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, BookOpen, MessageCircle, Bell, PiggyBank, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Wallet, title: 'Understand Your Pay', desc: "Break down your payslip, understand deductions, and know exactly what you're earning and why." },
  { icon: PiggyBank, title: 'Build Savings Habits', desc: 'Set goals, track progress, and get personalized nudges to help you save — even on a tight budget.' },
  { icon: MessageCircle, title: 'AI Financial Companion', desc: 'Ask anything about money, HR policies, or your benefits — get clear, jargon-free answers instantly.' },
  { icon: BookOpen, title: 'Financial Literacy', desc: 'Bite-sized lessons on budgeting, investing, SSS, Pag-IBIG, and more — made for everyday Filipinos.' },
  { icon: Bell, title: 'Smart Reminders', desc: 'Never miss a contribution deadline, loan payment, or benefit enrollment window again.' },
  { icon: Star, title: 'Rewards & Milestones', desc: "Celebrate financial wins — big and small — with BeneFi's milestone recognition system." },
];

function ForEmployeesPage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <Helmet>
        <title>For Employees — BeneFi</title>
        <meta name="description" content="BeneFi gives Filipino employees an AI companion for financial wellness, payslip understanding, savings, and HR support." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D7A8A] pt-32 pb-20 px-6 text-white text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Money, Your Confidence</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              BeneFi is your always-on financial companion — helping you understand your pay, build savings, and navigate HR without the confusion.
            </p>
            <Button onClick={scrollToContact} className="bg-[#E8B86B] hover:bg-[#D4A574] text-[#1E3A5F] font-semibold px-8 py-6 text-lg rounded-full">
              Get Early Access
            </Button>
          </motion.div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">Everything You Need to Thrive Financially</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#E8B86B]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#E8B86B]" />
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

export default ForEmployeesPage;
