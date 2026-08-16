import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import ManifestoSection from '@/components/ManifestoSection';
import WhatIsBenefiSection from '@/components/WhatIsBenefiSection';
import OurPurposeSection from '@/components/OurPurposeSection';
import CorePrinciplesSection from '@/components/CorePrinciplesSection';
import AISection from '@/components/AISection';
import FeaturesSection from '@/components/FeaturesSection';
import LearningExperienceSection from '@/components/LearningExperienceSection';
import WhyItMattersSection from '@/components/WhyItMattersSection';
import BuiltForPhilippinesSection from '@/components/BuiltForPhilippinesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Benefi - Your Work. Your Money. One Smart Companion.</title>
        <meta 
          name="description" 
          content="Benefi is a next-generation HR and financial wellness platform powered by GenAI, designed specifically for Filipino employees. Where work meets financial confidence." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <div id="manifesto"><ManifestoSection /></div>
        <WhatIsBenefiSection />
        <div id="purpose"><OurPurposeSection /></div>
        <CorePrinciplesSection />
        <AISection />
        <FeaturesSection />
        <LearningExperienceSection />
        <WhyItMattersSection />
        <BuiltForPhilippinesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactFormSection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;