import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const testimonials = [
    {
      quote: "BeneFi completely changed how I look at my salary. I used to just wait for payday, but now I'm actually planning my future.",
      author: "Maria Santos",
      role: "Graphic Designer",
      company: "Creative Studio MNL",
      rating: 5,
      initials: "MS"
    },
    {
      quote: "The leave application is so fast, but the financial advice is what keeps me logging in every day. It's like having a financial advisor in my pocket.",
      author: "James Reyes",
      role: "Software Engineer",
      company: "TechSolutions Inc.",
      rating: 5,
      initials: "JR"
    },
    {
      quote: "Finally, an HR app that gives back to employees. I've saved more in the last 3 months with BeneFi than I did all last year.",
      author: "Sarah Dizon",
      role: "Customer Support Lead",
      company: "Global Connect",
      rating: 5,
      initials: "SD"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-[#1E3A5F] text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2D9B9B] opacity-10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8B86B] opacity-10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Filipino Employees
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative hover:bg-white/15 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#E8B86B] opacity-50" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E8B86B] text-[#E8B86B]" />
                ))}
              </div>

              <p className="text-lg text-gray-200 mb-8 leading-relaxed italic">
                "{item.quote}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2D9B9B] to-[#1E3A5F] rounded-full flex items-center justify-center font-bold text-white border-2 border-white/20 mr-4">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.author}</h4>
                  <p className="text-sm text-gray-300">{item.role}</p>
                  <p className="text-xs text-[#E8B86B]">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;