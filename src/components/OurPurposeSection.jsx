import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

function OurPurposeSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1637622124152-33adfabcc923)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Purpose
            </h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>
                We're here to help next-generation Filipino employees understand their finances, 
                build better money habits, and feel confident about their financial future.
              </p>
              <p>
                Too many people feel overwhelmed by HR processes and disconnected from their 
                financial wellness. We believe it doesn't have to be that way.
              </p>
              <p>
                With Benefi, you get daily support — not just annual reviews. A companion who 
                understands your goals, celebrates your wins, and helps you navigate challenges 
                with empathy and intelligence.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Filipino professional employees collaborating"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurPurposeSection;