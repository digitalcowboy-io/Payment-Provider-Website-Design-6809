import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiPhone } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-night-indigo shadow-lg' : 'bg-night-indigo/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
              <span className="text-white font-gotham font-bold text-lg">SS</span>
            </div>
            <span className="text-white font-gotham font-bold text-xl">Sunset Swipe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white font-montserrat font-medium transition-colors duration-200 hover:text-soft-coral ${
                  location.pathname === item.path ? 'text-soft-coral' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+1-555-SUNSET"
              className="flex items-center space-x-2 text-white hover:text-soft-coral transition-colors duration-200"
            >
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span className="font-montserrat font-medium">Call Alex</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Get My Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-soft-coral transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-night-indigo border-t border-twilight-violet/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-white font-montserrat font-medium py-2 transition-colors duration-200 hover:text-soft-coral ${
                    location.pathname === item.path ? 'text-soft-coral' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-twilight-violet/20 space-y-3">
                <a
                  href="tel:+1-555-SUNSET"
                  className="flex items-center space-x-2 text-white hover:text-soft-coral transition-colors duration-200"
                >
                  <SafeIcon icon={FiPhone} className="w-4 h-4" />
                  <span className="font-montserrat font-medium">Call Alex: (555) SUNSET</span>
                </a>
                <Link to="/contact" className="btn-primary w-full">
                  Get My Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;