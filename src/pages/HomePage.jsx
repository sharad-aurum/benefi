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
        <title>BeneFi - Your Work. Your Money. One Smart Companion.</title>
        <meta name="description" content="BeneFi is a next-generation HR and financial wellness platform powered by AI, designed for Filipino employees. Where work meets financial confidence." />
        <meta property="og:title" content="BeneFi - Your Work. Your Money. One Smart Companion." />
        <meta property="og:description" content="Next-generation HR and financial wellness platform powered by AI for Filipino employees. Join the waitlist for early access." />
        <meta property="og:url" content="https://benefi.ph" />
        <meta property="og:image" content="https://benefi.ph/logo.png" />
        <meta name="twitter:title" content="BeneFi - Your Work. Your Money. One Smart Companion." />
        <meta name="twitter:description" content="Next-generation HR and financial wellness platform for Filipino employees." />
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