import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Check, X as XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PricingSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individuals getting started',
      features: [
        'Basic HR task management',
        'Limited financial education',
        'Basic expense tracking',
        'Community access'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'bg-white'
    },
    {
      name: 'Professional',
      price: '₱299',
      period: '/month',
      description: 'For employees serious about financial wellness',
      features: [
        'All Starter features',
        'Unlimited financial education',
        'Advanced expense tracking',
        'Personalized recommendations',
        'Investment guidance',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'bg-[#1E3A5F] text-white'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For companies building financial wellness culture',
      features: [
        'All Professional features',
        'Company-wide programs',
        'Admin dashboard & analytics',
        'Custom integrations',
        'Dedicated account manager',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'bg-white'
    }
  ];

  return (
    <section id="pricing" ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your financial journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 shadow-xl ${
                tier.popular 
                  ? 'bg-[#1E3A5F] text-white scale-105 z-10 border-2 border-[#E8B86B]' 
                  : 'bg-white text-gray-900 border border-gray-100 hover:shadow-2xl'
              } flex flex-col h-full`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#E8B86B] text-[#1E3A5F] text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className={`text-4xl font-extrabold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ml-1 ${tier.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${tier.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${tier.popular ? 'text-[#E8B86B]' : 'text-[#2D9B9B]'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-6 font-semibold rounded-xl transition-all ${
                  tier.popular
                    ? 'bg-[#E8B86B] hover:bg-[#D4A574] text-[#1E3A5F]'
                    : 'bg-[#1E3A5F] hover:bg-[#152a45] text-white'
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;