import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11223a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-bold tracking-tight">Benefi</Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your work. Your money. One smart companion for next-generation Filipino employees. 
              Empowering financial wellness through AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2D9B9B] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#2D9B9B] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#2D9B9B] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#2D9B9B] transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <span className="text-lg font-semibold mb-6 block text-[#E8B86B]">Product</span>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Employers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Employees</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <span className="text-lg font-semibold mb-6 block text-[#E8B86B]">Company</span>
            <ul className="space-y-3">
              <li><a href="#purpose" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="text-lg font-semibold mb-6 block text-[#E8B86B]">Legal</span>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Benefi. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ for Filipino employees.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;