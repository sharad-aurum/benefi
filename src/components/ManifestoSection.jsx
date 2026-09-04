import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

function ManifestoSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E8B86B 0%, #2D9B9B 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            We believe work should improve life — not complicate it
          </h2>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
            For too long, there's been a gap between HR systems and real financial wellness. 
            BeneFi bridges that divide, bringing together the employee experience and financial 
            empowerment into one intelligent, supportive companion that grows with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ManifestoSection;