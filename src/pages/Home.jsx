import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAStrip from '../components/CTAStrip';

const { FiTrendingUp, FiDollarSign, FiGift, FiCreditCard, FiUsers, FiSettings, FiShoppingCart, FiPlane, FiHeart, FiPackage, FiLeaf, FiMonitor, FiUpload, FiSearch, FiPlay } = FiIcons;

const Home = () => {
  const services = [
    {
      icon: FiTrendingUp,
      title: "Rate Audits",
      description: "Comprehensive analysis of your current processing rates to identify savings opportunities."
    },
    {
      icon: FiDollarSign,
      title: "ACH/E-Check",
      description: "Lower-cost payment processing solutions for recurring billing and high-volume transactions."
    },
    {
      icon: FiGift,
      title: "Gift & Loyalty",
      description: "Integrated gift card and loyalty program solutions to increase customer retention."
    },
    {
      icon: FiCreditCard,
      title: "Working Capital",
      description: "Fast access to business funding based on your payment processing history."
    },
    {
      icon: FiUsers,
      title: "Strategic Consulting",
      description: "Expert guidance on payment optimization and business growth strategies."
    },
    {
      icon: FiSettings,
      title: "Integrations",
      description: "Seamless integration with your existing systems and software platforms."
    }
  ];

  const industries = [
    { icon: FiShoppingCart, name: "E-commerce" },
    { icon: FiPlane, name: "Travel & Events" },
    { icon: FiHeart, name: "Adult Services" },
    { icon: FiPackage, name: "Nutraceuticals" },
    { icon: FiLeaf, name: "CBD" },
    { icon: FiMonitor, name: "SaaS Trials" }
  ];

  const testimonials = [
    {
      quote: "Sunset Swipe saved us 30% on processing fees. Alex's personal attention made all the difference.",
      author: "Sarah Chen",
      company: "TechFlow Solutions",
      savings: "30%"
    },
    {
      quote: "Finally, a payment processor that understands high-risk businesses. No more declined applications.",
      author: "Marcus Rodriguez",
      company: "Elite Supplements",
      savings: "25%"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Upload Statement",
      description: "Send us your current processing statement for analysis"
    },
    {
      step: "2",
      title: "Personalized Audit",
      description: "We conduct a thorough review and identify savings opportunities"
    },
    {
      step: "3",
      title: "Start Saving",
      description: "Implement our recommendations and watch your costs drop"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-sunset py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title text-4xl md:text-6xl font-gotham font-bold text-night-indigo mb-6 text-shadow"
            >
              Your Dedicated Payments Concierge – Across All Industries
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-night-indigo/80 mb-8 max-w-3xl mx-auto"
            >
              No brokers. No boilerplate. Honest payment solutions for high-risk and hard-to-place businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/contact" className="btn-primary text-lg px-12 py-5">
                Get My Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-soft-coral to-sunset-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-night-indigo mb-4">
              Complete Payment Solutions
            </h2>
            <p className="text-night-indigo/70 text-lg max-w-2xl mx-auto">
              Everything you need to process payments efficiently and cost-effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-night-indigo mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-sunset-peach to-warm-flame">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-white mb-4">
              We've Got High-Risk Covered
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Specialized solutions for industries others won't touch
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-white hover:text-golden-sky transition-colors duration-200 font-montserrat font-medium"
            >
              Download our High-Risk Approval Checklist
              <SafeIcon icon={FiUpload} className="ml-2 w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={industry.icon} className="w-6 h-6 text-warm-flame" />
                </div>
                <h3 className="text-white font-montserrat font-medium text-sm">
                  {industry.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-golden-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-night-indigo mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-gotham font-bold text-warm-flame mr-4">
                    {testimonial.savings}
                  </div>
                  <div className="text-gray-600 text-sm">
                    Average Savings
                  </div>
                </div>
                <blockquote className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-montserrat font-bold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-montserrat font-bold text-night-indigo">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-dusk-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Simple, transparent process to start saving on payment processing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-gotham font-bold text-2xl">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip />
    </div>
  );
};

export default Home;