import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { 
  CalendarCheck, 
  FileText, 
  TrendingUp, 
  Gift, 
  BookOpen, 
  PieChart, 
  LineChart, 
  Trophy 
} from 'lucide-react';

function FeaturesSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: CalendarCheck,
      title: 'Smart Attendance',
      description: 'Automated tracking and payslip management integrated directly with payroll.'
    },
    {
      icon: FileText,
      title: 'Intelligent Leave',
      description: 'Apply for leave instantly with predictive balances and approval workflows.'
    },
    {
      icon: TrendingUp,
      title: 'Goal Tracking',
      description: 'Set financial goals and monitor your progress with visual milestones.'
    },
    {
      icon: Gift,
      title: 'BeneFits Access',
      description: 'Discover and access employee benefits tailored to your needs.'
    },
    {
      icon: BookOpen,
      title: 'Education Hub',
      description: 'Learn financial literacy through interactive, bite-sized content.'
    },
    {
      icon: PieChart,
      title: 'Expense Tracking',
      description: 'Connect accounts or scan receipts to automatically categorize spending.'
    },
    {
      icon: LineChart,
      title: 'Investment Guidance',
      description: 'Get started with investing through guided, risk-aware pathways.'
    },
    {
      icon: Trophy,
      title: 'Savings Challenges',
      description: 'Join gamified challenges to build better habits and earn rewards.'
    }
  ];

  return (
    <section id="features" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Financial Wellness
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your work life and grow your financial future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-[#2D9B9B]">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;