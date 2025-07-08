import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTAStrip = ({ title = "Ready to Save?", buttonText = "Get My Quote", buttonLink = "/contact" }) => {
  return (
    <div className="gradient-cta py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-gotham font-bold text-white mb-8">
            {title}
          </h2>
          <Link 
            to={buttonLink}
            className="inline-block bg-white text-warm-flame font-montserrat font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CTAStrip;