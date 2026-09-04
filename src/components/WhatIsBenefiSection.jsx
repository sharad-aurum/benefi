import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Shield } from 'lucide-react';

function WhatIsBeneFiSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: Users,
      title: 'Employee Lifecycle Management',
      description: 'From onboarding to offboarding, BeneFi streamlines every HR touchpoint with intelligent automation and personalized guidance.'
    },
    {
      icon: GraduationCap,
      title: 'Financial Education',
      description: 'Learn about budgeting, saving, and investing through engaging, bite-sized lessons tailored to your financial goals and life stage.'
    },
    {
      icon: Shield,
      title: 'Trusted Financial Products',
      description: 'Access vetted loans, insurance, and investment options from trusted Philippine partners, all in one secure platform.'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What is BeneFi?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A next-generation HR and financial wellness platform powered by GenAI, 
            designed specifically for Filipino employees and built for the way you live and work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B5B95] to-[#2D9B9B] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIsBeneFiSection;