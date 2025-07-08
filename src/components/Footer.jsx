import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import TrustStrip from './TrustStrip';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night-indigo text-white">
      <TrustStrip />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-cta rounded-lg flex items-center justify-center">
                <span className="text-white font-gotham font-bold text-sm">SS</span>
              </div>
              <span className="text-white font-gotham font-bold text-lg">Sunset Swipe</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your dedicated payments concierge for high-risk and hard-to-place businesses. 
              No brokers, no boilerplate - just honest solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-soft-coral hover:text-golden-sky transition-colors duration-200">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-soft-coral hover:text-golden-sky transition-colors duration-200">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-soft-coral hover:text-golden-sky transition-colors duration-200">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-bold text-soft-coral">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Services</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Industries</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">About</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Resources</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-bold text-soft-coral">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Rate Audits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">ACH/E-Check</a></li>
              <li><a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Gift & Loyalty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Working Capital</a></li>
              <li><a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-bold text-soft-coral">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4 text-soft-coral" />
                <a href="tel:+1-555-SUNSET" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">
                  (555) SUNSET
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-soft-coral" />
                <a href="mailto:alex@sunsetswipe.com" className="text-gray-300 hover:text-soft-coral transition-colors duration-200">
                  alex@sunsetswipe.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-soft-coral mt-1" />
                <span className="text-gray-300 text-sm">
                  Orange County, CA<br />
                  Serving nationwide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-twilight-violet/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Sunset Swipe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-soft-coral transition-colors duration-200 text-sm">
              PCI Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;