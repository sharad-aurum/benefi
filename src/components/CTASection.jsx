import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

function CTASection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8B86B] via-[#D4A574] to-[#C89A5E]" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-6 leading-tight">
            Ready to transform your financial wellness?
          </h2>
          <p className="text-xl md:text-2xl text-[#1E3A5F]/80 mb-10 max-w-2xl mx-auto">
            Join thousands of Filipino employees taking control of their finances with Benefi.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-[#1E3A5F] hover:bg-[#152a45] text-white font-semibold px-8 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Early Access
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold px-8 py-7 text-lg rounded-full transition-all duration-300"
              onClick={() => {}} // Placeholder
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;