import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAStrip from '../components/CTAStrip';

const { FiTrendingUp, FiDollarSign, FiGift, FiCreditCard, FiUsers, FiSettings, FiShield, FiEye, FiChevronDown, FiChevronUp } = FiIcons;

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const services = [
    {
      icon: FiTrendingUp,
      title: "Rate Audits",
      description: "Comprehensive analysis of your current processing rates to identify savings opportunities.",
      details: [
        "Complete statement analysis within 24 hours",
        "Identification of hidden fees and unnecessary charges",
        "Competitive rate comparison across multiple processors",
        "Detailed savings projection report",
        "No obligation - see your potential savings first"
      ]
    },
    {
      icon: FiDollarSign,
      title: "ACH/E-Check Processing",
      description: "Lower-cost payment processing solutions for recurring billing and high-volume transactions.",
      details: [
        "Rates as low as $0.25 per transaction",
        "Perfect for subscription and recurring billing",
        "Reduced chargeback risk compared to credit cards",
        "Faster settlement times for improved cash flow",
        "Secure bank-to-bank transfers"
      ]
    },
    {
      icon: FiGift,
      title: "Gift & Loyalty Programs",
      description: "Integrated gift card and loyalty program solutions to increase customer retention.",
      details: [
        "Custom branded gift cards and loyalty programs",
        "Real-time balance tracking and management",
        "Mobile app integration capabilities",
        "Detailed analytics and reporting",
        "Automated promotional campaigns"
      ]
    },
    {
      icon: FiCreditCard,
      title: "Working Capital",
      description: "Fast access to business funding based on your payment processing history.",
      details: [
        "Funding up to $500,000 based on processing volume",
        "Approval decisions within 24 hours",
        "No personal guarantees or collateral required",
        "Flexible repayment through daily receivables",
        "Use funds for inventory, expansion, or operations"
      ]
    },
    {
      icon: FiUsers,
      title: "Strategic Consulting",
      description: "Expert guidance on payment optimization and business growth strategies.",
      details: [
        "Payment flow optimization analysis",
        "Chargeback prevention strategies",
        "Industry-specific compliance guidance",
        "Integration planning and implementation",
        "Ongoing support and optimization"
      ]
    },
    {
      icon: FiSettings,
      title: "System Integrations",
      description: "Seamless integration with your existing systems and software platforms.",
      details: [
        "API integration with popular e-commerce platforms",
        "CRM and accounting software connections",
        "Custom integration development",
        "Real-time data synchronization",
        "Comprehensive testing and support"
      ]
    },
    {
      icon: FiShield,
      title: "Chargeback Mitigation",
      description: "Proactive protection against chargebacks and disputes.",
      details: [
        "Real-time chargeback alerts and notifications",
        "Automated dispute response system",
        "Representment and recovery services",
        "Chargeback prevention tools and filters",
        "Detailed reporting and analytics"
      ]
    },
    {
      icon: FiEye,
      title: "24/7 Fraud Monitoring",
      description: "Advanced fraud detection and prevention systems.",
      details: [
        "Machine learning-based fraud detection",
        "Real-time transaction monitoring",
        "Customizable fraud filters and rules",
        "Instant alerts for suspicious activity",
        "Comprehensive fraud reporting"
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-soft-coral py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title text-4xl md:text-6xl font-gotham font-bold text-night-indigo mb-6">
              Transparent Services. Zero Broker Mark-ups.
            </h1>
            <p className="text-lg md:text-xl text-night-indigo/80 max-w-3xl mx-auto">
              Direct access to wholesale payment processing with personalized service and industry expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Services List */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-night-indigo mb-4">
                  Complete Payment Solutions
                </h2>
                <p className="text-gray-600 text-lg">
                  Everything you need to process payments efficiently and cost-effectively
                </p>
              </motion.div>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                          <SafeIcon icon={service.icon} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-montserrat font-bold text-night-indigo">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <SafeIcon 
                        icon={activeAccordion === index ? FiChevronUp : FiChevronDown} 
                        className="w-5 h-5 text-gray-400" 
                      />
                    </button>
                    
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4 bg-gray-50"
                      >
                        <ul className="space-y-2 ml-16">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <span className="text-warm-flame mt-1">•</span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Side CTA Panel */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="card p-8 bg-gradient-to-br from-sunset-peach to-warm-flame text-white">
                  <h3 className="text-2xl font-gotham font-bold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-6 text-white/90">
                    Get a personalized quote and see how much you can save on payment processing.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-sm">Free rate audit</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-sm">No setup fees</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-sm">24/7 support</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a 
                      href="/contact" 
                      className="block w-full bg-white text-warm-flame font-montserrat font-bold text-center py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      Get My Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip title="Need a Custom Solution?" buttonText="Contact Us" />
    </div>
  );
};

export default Services;