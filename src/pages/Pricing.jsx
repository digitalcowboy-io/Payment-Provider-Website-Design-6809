import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAStrip from '../components/CTAStrip';

const { FiCheck, FiX, FiChevronDown, FiChevronUp } = FiIcons;

const Pricing = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const plans = [
    {
      name: "Flat-Rate Plan",
      description: "Simple, predictable pricing for businesses that value transparency",
      price: "2.9%",
      priceSubtext: "+ $0.30 per transaction",
      features: [
        "No setup fees",
        "No monthly fees",
        "No early termination fees",
        "All major credit cards accepted",
        "24/7 customer support",
        "Real-time reporting dashboard",
        "Mobile payment acceptance",
        "Basic fraud protection"
      ],
      notIncluded: [
        "Premium fraud protection",
        "Dedicated account manager",
        "Custom integrations",
        "Priority support"
      ],
      savings: "15-20%",
      bestFor: "Small to medium businesses with consistent transaction volumes"
    },
    {
      name: "Interchange-Plus Audited",
      description: "Wholesale pricing with complete transparency and maximum savings",
      price: "Interchange +",
      priceSubtext: "0.15% + $0.10 per transaction",
      features: [
        "Wholesale interchange rates",
        "Complete rate transparency",
        "Monthly statement audits",
        "Dedicated account manager",
        "Premium fraud protection",
        "Priority 24/7 support",
        "Custom integrations",
        "Advanced reporting suite",
        "Chargeback protection",
        "Free rate reviews"
      ],
      notIncluded: [],
      savings: "25-35%",
      bestFor: "High-volume businesses processing $10K+ monthly",
      popular: true
    }
  ];

  const faqs = [
    {
      question: "What's the difference between flat-rate and interchange-plus pricing?",
      answer: "Flat-rate pricing offers a simple, fixed rate for all transactions, making it easy to predict costs. Interchange-plus pricing passes through the actual wholesale rates from card networks plus a small markup, typically resulting in lower overall costs for higher-volume businesses."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No. We believe in complete transparency. All fees are clearly outlined in your agreement, and we provide detailed monthly statements showing exactly what you're paying for. Unlike many processors, we don't have hidden fees or surprise charges."
    },
    {
      question: "How quickly can I get approved?",
      answer: "Most applications are approved within 24-48 hours. High-risk businesses may take 3-5 business days depending on the industry and documentation required. We'll keep you updated throughout the process."
    },
    {
      question: "Do you work with high-risk businesses?",
      answer: "Yes! We specialize in high-risk and hard-to-place businesses. Our team has extensive experience working with industries that traditional processors often decline, including CBD, adult services, nutraceuticals, and more."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our service, you can cancel without any early termination fees. We're confident you'll love working with us."
    },
    {
      question: "How do I know if I'm getting the best rates?",
      answer: "We provide free rate audits to show you exactly how much you could save. Our interchange-plus pricing ensures you're getting wholesale rates, and we conduct monthly audits to ensure you're always getting the best deal."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-golden-sky to-soft-coral py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title text-4xl md:text-6xl font-gotham font-bold text-night-indigo mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-night-indigo/80 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the pricing model that works best for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`card p-8 relative ${
                  plan.popular ? 'ring-2 ring-warm-flame' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-warm-flame text-white px-4 py-1 rounded-full text-sm font-montserrat font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-gotham font-bold text-night-indigo mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-gotham font-bold text-warm-flame">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 text-sm ml-2">
                      {plan.priceSubtext}
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-sunset-peach to-warm-flame text-white rounded-lg p-4 mb-6">
                    <div className="text-2xl font-gotham font-bold">
                      {plan.savings}
                    </div>
                    <div className="text-sm">
                      Average Savings vs. Traditional Processors
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    {plan.bestFor}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-montserrat font-bold text-night-indigo">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-montserrat font-bold text-night-indigo mb-2">
                        Not Included:
                      </h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <SafeIcon icon={FiX} className="w-5 h-5 text-red-500 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <a 
                    href="/contact" 
                    className={`btn-primary w-full ${
                      plan.popular ? 'bg-warm-flame hover:bg-twilight-violet' : ''
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Savings Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-dusk-purple to-night-indigo rounded-lg p-8 text-white text-center"
          >
            <h3 className="text-2xl font-gotham font-bold mb-4">
              See Your Potential Savings
            </h3>
            <p className="text-white/90 mb-6">
              Based on anonymized audit data from businesses like yours
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-gotham font-bold text-golden-sky mb-2">
                  $5K-$15K
                </div>
                <div className="text-sm text-white/80">
                  Monthly Processing Volume
                </div>
                <div className="text-lg font-montserrat font-bold mt-2">
                  Save $75-$300/month
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-gotham font-bold text-golden-sky mb-2">
                  $15K-$50K
                </div>
                <div className="text-sm text-white/80">
                  Monthly Processing Volume
                </div>
                <div className="text-lg font-montserrat font-bold mt-2">
                  Save $300-$1,000/month
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-gotham font-bold text-golden-sky mb-2">
                  $50K+
                </div>
                <div className="text-sm text-white/80">
                  Monthly Processing Volume
                </div>
                <div className="text-lg font-montserrat font-bold mt-2">
                  Save $1,000+/month
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-night-indigo mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about our pricing and services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="font-montserrat font-bold text-night-indigo">
                    {faq.question}
                  </h3>
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
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip title="Ready to Start Saving?" buttonText="Get Free Quote" />
    </div>
  );
};

export default Pricing;