import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, PlayCircle } from 'lucide-react';

function HeroSection() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1639060015191-9d83063eab2a)',
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.85) 0%, rgba(30, 58, 95, 0.6) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Your work. Your money.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B86B] to-[#D4A574]">
            One smart companion.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
        >
          Where work meets financial confidence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-[#2D9B9B] hover:bg-[#247a7a] text-white font-semibold px-8 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Get Early Access
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-semibold px-8 py-7 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
            onClick={() => {}} // Placeholder action
          >
            Watch Demo
            <PlayCircle className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('manifesto')}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;