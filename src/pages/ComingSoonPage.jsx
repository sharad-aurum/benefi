import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pages = {
  careers: {
    title: 'Careers',
    headline: "Join the BeneFi Team",
    description: "We're building the future of financial wellness for Filipino employees. We're always looking for passionate people who share our mission.",
    detail: "Open positions will be listed here soon. In the meantime, send your CV to",
    email: "careers@benefi.ph",
  },
  blog: {
    title: 'Blog',
    headline: "BeneFi Insights",
    description: "Tips, guides, and stories about financial wellness, HR best practices, and the future of work in the Philippines.",
    detail: "Our blog is coming soon. Follow us on LinkedIn for the latest updates.",
    email: null,
  },
  press: {
    title: 'Press',
    headline: "BeneFi in the News",
    description: "For media enquiries, partnership opportunities, or press kit requests, we'd love to hear from you.",
    detail: "Reach out to our communications team at",
    email: "press@benefi.ph",
  },
};

function ComingSoonPage({ page }) {
  const content = pages[page] || pages.blog;

  return (
    <>
      <Helmet>
        <title>{content.title} — BeneFi</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-[#1E3A5F] to-[#2D9B9B] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <img src="/logo.png" alt="BeneFi" className="h-14 w-auto mx-auto mb-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.headline}</h1>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">{content.description}</p>
          <p className="text-white/60 mb-2">{content.detail}{' '}
            {content.email && (
              <a href={`mailto:${content.email}`} className="text-[#E8B86B] underline">{content.email}</a>
            )}
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-block bg-white text-[#1E3A5F] font-semibold px-8 py-3 rounded-full hover:bg-[#E8B86B] hover:text-white transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ComingSoonPage;
