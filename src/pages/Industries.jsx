import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAStrip from '../components/CTAStrip';

const { FiShoppingCart, FiPlane, FiHeart, FiPackage, FiLeaf, FiMonitor, FiGamepad2, FiTruck, FiHome, FiDollarSign, FiPhone, FiBook } = FiIcons;

const Industries = () => {
  const industries = [
    {
      icon: FiShoppingCart,
      name: "E-commerce",
      anchor: "ecommerce",
      description: "High-volume online retailers face unique challenges with chargebacks, fraud, and seasonal fluctuations. Our specialized e-commerce solutions provide robust fraud protection, optimized checkout experiences, and scalable processing that grows with your business.",
      painPoints: "Dealing with high chargeback rates, seasonal volume spikes, and complex international transactions? We understand the e-commerce landscape and provide tailored solutions that reduce costs while improving conversion rates."
    },
    {
      icon: FiPlane,
      name: "Travel & Events",
      anchor: "travel",
      description: "Travel and event businesses deal with advance bookings, cancellations, and seasonal demand. Our solutions support pre-authorization, flexible refund processing, and multi-currency transactions to help you manage cash flow effectively.",
      painPoints: "Struggling with advance payments, high cancellation rates, and complex booking systems? Our travel-specific processing solutions handle pre-auths, deposits, and international transactions with ease."
    },
    {
      icon: FiHeart,
      name: "Adult Services",
      anchor: "adult",
      description: "Adult entertainment and services require specialized payment processing due to higher risk classifications. We provide discreet, secure processing with industry-specific fraud protection and compliance support.",
      painPoints: "Tired of being declined by traditional processors? We specialize in adult services with discreet billing, robust age verification, and compliance with industry regulations."
    },
    {
      icon: FiPackage,
      name: "Nutraceuticals",
      anchor: "nutraceuticals",
      description: "Supplement and nutraceutical companies face regulatory scrutiny and high chargeback rates. Our solutions include specialized fraud filters, subscription billing, and compliance tools for FDA and FTC requirements.",
      painPoints: "Dealing with FDA compliance, subscription cancellations, and aggressive marketing restrictions? We provide specialized processing for nutraceutical businesses with built-in compliance monitoring."
    },
    {
      icon: FiLeaf,
      name: "CBD & Hemp",
      anchor: "cbd",
      description: "CBD and hemp businesses operate in a rapidly evolving regulatory environment. Our solutions provide compliant processing with real-time regulatory monitoring and specialized merchant accounts for hemp-derived products.",
      painPoints: "Navigating complex CBD regulations and finding reliable payment processing? We stay current with state and federal requirements while providing stable, compliant processing solutions."
    },
    {
      icon: FiMonitor,
      name: "SaaS & Trials",
      anchor: "saas",
      description: "Software companies with free trials and subscription models need sophisticated billing solutions. We provide automated trial management, dunning management, and revenue recognition tools for SaaS businesses.",
      painPoints: "Managing free trials, subscription billing, and involuntary churn? Our SaaS-optimized solutions handle complex billing scenarios while reducing failed payments and improving customer retention."
    },
    {
      icon: FiGamepad2,
      name: "Gaming",
      anchor: "gaming",
      description: "Gaming companies face unique challenges with digital goods, in-app purchases, and international players. Our solutions support real-time processing, multi-currency transactions, and specialized fraud protection for gaming environments.",
      painPoints: "Dealing with international players, digital goods, and high-frequency micro-transactions? We provide gaming-specific processing with real-time capabilities and global reach."
    },
    {
      icon: FiTruck,
      name: "Logistics",
      anchor: "logistics",
      description: "Logistics and shipping companies need flexible payment solutions for B2B transactions, fuel purchases, and driver payments. Our solutions support fleet cards, mobile payments, and complex B2B billing scenarios.",
      painPoints: "Managing complex B2B payments, fuel transactions, and driver settlements? Our logistics-focused solutions streamline payments across your entire supply chain."
    },
    {
      icon: FiHome,
      name: "Real Estate",
      anchor: "realestate",
      description: "Real estate professionals need secure processing for large transactions, earnest money deposits, and commission payments. Our solutions provide secure escrow processing and compliance with real estate regulations.",
      painPoints: "Handling large transactions, earnest money deposits, and complex commission structures? Our real estate solutions provide secure processing with industry-specific compliance features."
    },
    {
      icon: FiDollarSign,
      name: "Financial Services",
      anchor: "financial",
      description: "Financial service providers need highly secure processing with regulatory compliance. Our solutions support loan payments, investment transactions, and advisory fee processing with bank-level security.",
      painPoints: "Need bank-level security for financial transactions and regulatory compliance? Our financial services solutions provide the security and compliance features required for sensitive financial transactions."
    },
    {
      icon: FiPhone,
      name: "Telecommunications",
      anchor: "telecom",
      description: "Telecom companies need robust billing solutions for recurring services, international calling, and device sales. Our solutions support complex billing scenarios and international payment processing.",
      painPoints: "Managing recurring billing, international transactions, and complex service packages? Our telecom solutions handle sophisticated billing scenarios with global payment capabilities."
    },
    {
      icon: FiBook,
      name: "Education",
      anchor: "education",
      description: "Educational institutions and online learning platforms need flexible payment solutions for tuition, course fees, and subscription-based learning. Our solutions support installment plans and automated billing.",
      painPoints: "Handling tuition payments, course fees, and subscription-based learning? Our education solutions provide flexible payment options and automated billing for educational institutions."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunset-peach to-warm-flame py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
              <p className="text-white font-montserrat font-bold text-lg">
                Declined before? We'll make your case.
              </p>
            </div>
            <h1 className="hero-title text-4xl md:text-6xl font-gotham font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Specialized payment solutions for high-risk and hard-to-place businesses across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {industries.map((industry, index) => (
              <motion.a
                key={industry.name}
                href={`#${industry.anchor}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={industry.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-night-indigo">
                  {industry.name}
                </h3>
              </motion.a>
            ))}
          </div>

          {/* Industry Details */}
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                id={industry.anchor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center">
                        <SafeIcon icon={industry.icon} className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-gotham font-bold text-night-indigo">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <div className="bg-soft-coral/20 rounded-lg p-6">
                      <h3 className="font-montserrat font-bold text-night-indigo mb-3">
                        Common Challenges
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {industry.painPoints}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-golden-sky to-soft-coral rounded-lg p-8">
                    <h3 className="text-2xl font-gotham font-bold text-night-indigo mb-6">
                      Our {industry.name} Solutions
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="text-warm-flame mt-1">•</span>
                        <span className="text-night-indigo">Industry-specific rate structures</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-warm-flame mt-1">•</span>
                        <span className="text-night-indigo">Specialized fraud protection</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-warm-flame mt-1">•</span>
                        <span className="text-night-indigo">Compliance monitoring and support</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-warm-flame mt-1">•</span>
                        <span className="text-night-indigo">Dedicated account management</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-warm-flame mt-1">•</span>
                        <span className="text-night-indigo">24/7 technical support</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a 
                        href="/contact" 
                        className="btn-primary"
                      >
                        Get Industry Quote
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip title="Don't See Your Industry?" buttonText="Contact Us" />
    </div>
  );
};

export default Industries;