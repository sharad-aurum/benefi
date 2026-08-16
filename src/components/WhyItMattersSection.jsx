import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Activity, Heart } from 'lucide-react';

function WhyItMattersSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const metrics = [
    {
      icon: TrendingDown,
      title: 'Stress Down',
      description: 'Reduce financial anxiety with clear guidance and automated support',
      color: 'from-[#C85A54] to-[#E8956F]'
    },
    {
      icon: TrendingUp,
      title: 'Engagement Up',
      description: 'Employees who feel supported are more invested in their work',
      color: 'from-[#2D9B9B] to-[#6B5B95]'
    },
    {
      icon: Activity,
      title: 'Productivity Improves',
      description: 'Less time worrying about finances means more focus on what matters',
      color: 'from-[#E8B86B] to-[#D4A574]'
    },
    {
      icon: Heart,
      title: 'Loyalty Grows',
      description: 'Companies that invest in employee wellness build lasting relationships',
      color: 'from-[#6B5B95] to-[#E8956F]'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1616077168639-f770d830e3d1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/95 to-[#2D9B9B]/90" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why It Matters
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            When employees feel financially confident and supported, everyone wins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center mb-4`}>
                <metric.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {metric.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyItMattersSection;