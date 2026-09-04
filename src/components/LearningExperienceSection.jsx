import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

function LearningExperienceSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Learning Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#E8B86B]/10 to-[#D4A574]/10 rounded-2xl p-8 border border-[#E8B86B]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8B86B] to-[#D4A574] rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Learning that feels like living
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Financial education shouldn't feel like homework. BeneFi makes learning about 
                money natural and engaging — through conversations, real-life scenarios, and 
                personalized insights that stick. Build confidence one small step at a time.
              </p>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#2D9B9B]/10 to-[#6B5B95]/10 rounded-2xl p-8 border border-[#2D9B9B]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D9B9B] to-[#6B5B95] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                A new way to experience HR
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                HR tasks don't have to be tedious. BeneFi transforms everyday processes — 
                from leave requests to payroll queries — into seamless, intuitive moments. 
                Get what you need, when you need it, without the hassle.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LearningExperienceSection;