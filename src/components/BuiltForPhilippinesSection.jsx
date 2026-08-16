import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Smartphone, MapPin, HeartHandshake as Handshake, Lock } from 'lucide-react';

function BuiltForPhilippinesSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Built for how Filipinos work and live — accessible anytime, anywhere on your smartphone'
    },
    {
      icon: MapPin,
      title: 'Localized for PH',
      description: 'Integrated with SSS, PhilHealth, and Pag-IBIG — no confusion, just seamless compliance'
    },
    {
      icon: Handshake,
      title: 'Local Financial Partners',
      description: 'Connected with trusted Philippine banks, lenders, and insurance providers you know and trust'
    },
    {
      icon: Lock,
      title: 'Secure & AI-Powered',
      description: 'Bank-level security meets GenAI intelligence for personalized, safe financial guidance'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995)',
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(232, 184, 107, 0.9) 0%, rgba(45, 155, 155, 0.85) 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for the Philippines
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            Not just adapted — built from the ground up for Filipino employees and employers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1E3A5F] to-[#6B5B95] rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuiltForPhilippinesSection;