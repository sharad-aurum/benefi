import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

function CorePrinciplesSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const principles = [
    {
      emoji: '🤝',
      title: 'Human first',
      description: 'Every interaction is designed to be friendly, helpful, and respectful. We treat you like a person, not a ticket number.',
      gradient: 'from-[#E8956F] to-[#C85A54]'
    },
    {
      emoji: '🎯',
      title: 'Personal by design',
      description: 'Benefi adapts to your unique life stage, goals, and challenges. What works for you might not work for someone else — and that\'s okay.',
      gradient: 'from-[#6B5B95] to-[#2D9B9B]'
    },
    {
      emoji: '💬',
      title: 'Conversations over clicks',
      description: 'Talk to Benefi naturally. No endless forms, no confusing dashboards. Just simple, human conversations that get things done.',
      gradient: 'from-[#D4A574] to-[#E8B86B]'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Principles
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            These values guide everything we build and every interaction you have with Benefi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="text-5xl mb-4">
                  {principle.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CorePrinciplesSection;