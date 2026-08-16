import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { MessageSquare, LineChart, Target, Zap, Bot } from 'lucide-react';

function AISection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const capabilities = [
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Interact naturally. No complex menus or forms—just ask and get answers instantly.',
      gradient: 'from-[#6B5B95] to-[#2D9B9B]',
      colSpan: 'md:col-span-1 lg:col-span-2'
    },
    {
      icon: LineChart,
      title: 'Predictive Financial Insights',
      description: 'Benefi analyzes your spending patterns to predict future needs and help you prepare.',
      gradient: 'from-[#1E3A5F] to-[#2D9B9B]',
      colSpan: 'md:col-span-1 lg:col-span-1'
    },
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'Advice tailored specifically to your life stage, income, and personal goals.',
      gradient: 'from-[#C85A54] to-[#E8956F]',
      colSpan: 'md:col-span-1 lg:col-span-1'
    },
    {
      icon: Zap,
      title: 'Real-time Coaching',
      description: 'Get instant guidance on financial decisions right when you need it most.',
      gradient: 'from-[#E8B86B] to-[#D4A574]',
      colSpan: 'md:col-span-1 lg:col-span-1'
    },
    {
      icon: Bot,
      title: 'Complete Companion',
      description: 'Your AI companion learns from your behavior, adapting over time to provide proactive support before you even ask.',
      gradient: 'from-[#2D9B9B] to-[#1E3A5F]',
      colSpan: 'md:col-span-2 lg:col-span-1'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2D9B9B] font-semibold tracking-wider uppercase text-sm">Next Gen Technology</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Powered by Intelligent AI
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete financial wellness companion, built to understand you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white ${cap.colSpan || ''}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cap.gradient} opacity-10 rounded-bl-full group-hover:scale-110 transition-transform duration-500`} />
              
              <div className="p-8 h-full flex flex-col">
                <div className={`w-14 h-14 bg-gradient-to-br ${cap.gradient} rounded-xl flex items-center justify-center mb-6 text-white shadow-md`}>
                  <cap.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2D9B9B] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AISection;