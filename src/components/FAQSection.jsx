import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FAQSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const faqs = [
    {
      question: "What is BeneFi and how does it work?",
      answer: "BeneFi is an all-in-one HR and financial wellness platform powered by AI. We combine essential HR tasks like leave and payslips with powerful financial tools, helping employees manage their work life and money in one place."
    },
    {
      question: "Is BeneFi secure? How is my data protected?",
      answer: "Absolutely. We use bank-level encryption (AES-256) to protect your personal and financial data. We comply with the Data Privacy Act of 2012 (Republic Act 10173) to ensure your information remains confidential and secure."
    },
    {
      question: "Can I use BeneFi on mobile?",
      answer: "Yes! BeneFi is designed with a mobile-first approach. You can access all features through our responsive web app on any smartphone, tablet, or desktop computer."
    },
    {
      question: "How does the AI personalization work?",
      answer: "Our AI analyzes your financial patterns, goals, and life stage to provide tailored recommendations. It learns from your interactions to offer increasingly relevant advice, much like a dedicated financial advisor."
    },
    {
      question: "What financial products are available?",
      answer: "We partner with trusted Philippine financial institutions to offer loans, insurance, savings accounts, and investment products directly within the platform, vetted for security and value."
    },
    {
      question: "How do I get started?",
      answer: "You can sign up for our Free Starter plan today. If your employer partners with BeneFi, you'll get access to Premium features automatically through your company email."
    },
    {
      question: "Can my company implement BeneFi?",
      answer: "Yes! We offer Enterprise solutions for companies of all sizes. Contact our sales team to learn how BeneFi can improve employee retention and financial well-being in your organization."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "If you choose to delete your account, your data will be permanently removed from our systems in compliance with data privacy regulations. You can export your data before cancellation."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a Free Starter tier that is free forever. For the Professional tier, we offer a 14-day free trial so you can experience the full power of our financial tools."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team 24/7 through the chat feature in the app, or email us at support@benefi.ph. Enterprise clients also have access to dedicated account managers."
    }
  ];

  return (
    <section id="faq" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-gray-900 font-semibold text-lg hover:text-[#2D9B9B]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;