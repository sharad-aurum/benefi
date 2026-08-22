import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollTo = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#11223a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/">
              <img src="/logo.png" alt="BeneFi" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your work. Your money. One smart companion for next-generation Filipino employees.
              Empowering financial wellness through AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2D9B9B] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#2D9B9B] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/benefintech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2D9B9B] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#2D9B9B] transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <span className="text-lg font-semibold mb-6 block text-[#E8B86B]">Product</span>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('features')} className="text-gray-400 hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => scrollTo('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
              <li><Link to="/for-employers" className="text-gray-400 hover:text-white transition-colors">For Employers</Link></li>
              <li><Link to="/for-employees" className="text-gray-400 hover:text-white transition-colors">For Employees</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <span className="text-lg font-semibold mb-6 block text-[#E8B86B]">Company</span>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('purpose')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
              <li><button onClick={() => scrollTo('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="text-lg font-semibold mb-6 block text-[#E8B86B]">Legal</span>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy#cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/privacy-policy#data" className="text-gray-400 hover:text-white transition-colors">Data Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} BeneFi. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ for Filipino employees.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
