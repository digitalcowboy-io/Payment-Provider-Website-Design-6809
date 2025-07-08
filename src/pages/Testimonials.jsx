import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAStrip from '../components/CTAStrip';

const { FiStar, FiFilter, FiTrendingUp, FiDollarSign } = FiIcons;

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Industries' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS' },
    { id: 'highrisk', name: 'High-Risk' },
    { id: 'b2b', name: 'B2B Services' }
  ];

  const testimonials = [
    {
      quote: "Sunset Swipe saved us 30% on processing fees within the first month. Alex's personal attention and industry expertise made all the difference for our high-volume e-commerce business.",
      author: "Sarah Chen",
      title: "CEO",
      company: "TechFlow Solutions",
      industry: "ecommerce",
      savings: "30%",
      previousProcessor: "Square",
      monthlyVolume: "$45K",
      avatar: "SC"
    },
    {
      quote: "Finally, a payment processor that understands high-risk businesses. After being declined by three other processors, Sunset Swipe got us approved in 48 hours with competitive rates.",
      author: "Marcus Rodriguez",
      title: "Founder",
      company: "Elite Supplements",
      industry: "highrisk",
      savings: "25%",
      previousProcessor: "PayPal",
      monthlyVolume: "$28K",
      avatar: "MR"
    },
    {
      quote: "The transparency is refreshing. No hidden fees, no surprises. Alex walks you through every line item and ensures you understand exactly what you're paying for.",
      author: "Jennifer Walsh",
      title: "CFO",
      company: "GreenLeaf Wellness",
      industry: "highrisk",
      savings: "35%",
      previousProcessor: "Stripe",
      monthlyVolume: "$22K",
      avatar: "JW"
    },
    {
      quote: "Our SaaS subscription billing was a nightmare with our previous processor. Sunset Swipe's specialized solutions reduced our failed payments by 40% and improved our cash flow significantly.",
      author: "David Kim",
      title: "CTO",
      company: "CloudMetrics",
      industry: "saas",
      savings: "28%",
      previousProcessor: "Authorize.net",
      monthlyVolume: "$67K",
      avatar: "DK"
    },
    {
      quote: "Alex doesn't just process payments - he's a strategic partner. His insights helped us optimize our checkout flow and reduce cart abandonment by 20%.",
      author: "Lisa Thompson",
      title: "COO",
      company: "Fashion Forward",
      industry: "ecommerce",
      savings: "32%",
      previousProcessor: "Shopify Payments",
      monthlyVolume: "$38K",
      avatar: "LT"
    },
    {
      quote: "The level of service is unmatched. When we had a chargeback issue, Alex personally handled it and got it resolved in our favor. You don't get that with big processors.",
      author: "Robert Johnson",
      title: "Owner",
      company: "Johnson Consulting",
      industry: "b2b",
      savings: "22%",
      previousProcessor: "Chase Paymentech",
      monthlyVolume: "$15K",
      avatar: "RJ"
    },
    {
      quote: "Switching to Sunset Swipe was the best business decision we made this year. The savings alone paid for our new marketing campaign.",
      author: "Amanda Foster",
      title: "Marketing Director",
      company: "Vital Nutrition",
      industry: "highrisk",
      savings: "40%",
      previousProcessor: "First Data",
      monthlyVolume: "$52K",
      avatar: "AF"
    },
    {
      quote: "Alex's industry connections got us approved for a high-risk merchant account that others said was impossible. His expertise in CBD processing is unparalleled.",
      author: "Michael Torres",
      title: "Founder",
      company: "Pure CBD Co.",
      industry: "highrisk",
      savings: "27%",
      previousProcessor: "Multiple Declines",
      monthlyVolume: "$31K",
      avatar: "MT"
    },
    {
      quote: "The reporting and analytics dashboard gives us insights we never had before. We can now track our payment performance in real-time and make data-driven decisions.",
      author: "Rachel Green",
      title: "Finance Manager",
      company: "TechStart Inc.",
      industry: "saas",
      savings: "33%",
      previousProcessor: "Braintree",
      monthlyVolume: "$44K",
      avatar: "RG"
    },
    {
      quote: "Our international transactions were always a headache until we switched to Sunset Swipe. The multi-currency support and competitive FX rates have been game-changing.",
      author: "Carlos Mendez",
      title: "CEO",
      company: "Global Trade Solutions",
      industry: "b2b",
      savings: "29%",
      previousProcessor: "WorldPay",
      monthlyVolume: "$89K",
      avatar: "CM"
    }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.industry === activeFilter);

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
              Client Success Stories
            </h1>
            <p className="text-lg md:text-xl text-night-indigo/80 max-w-3xl mx-auto mb-8">
              Real businesses, real savings, real results. See how Sunset Swipe has helped companies like yours save money and grow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-gotham font-bold text-night-indigo mb-2">
                  500+
                </div>
                <div className="text-night-indigo/80 text-sm">
                  Happy Clients
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-gotham font-bold text-night-indigo mb-2">
                  29%
                </div>
                <div className="text-night-indigo/80 text-sm">
                  Average Savings
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-gotham font-bold text-night-indigo mb-2">
                  98%
                </div>
                <div className="text-night-indigo/80 text-sm">
                  Client Retention
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-montserrat font-bold text-night-indigo mb-6">
              Filter by Industry
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-warm-flame text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.author}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-montserrat font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-montserrat font-bold text-night-indigo">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="bg-gradient-to-r from-sunset-peach/20 to-warm-flame/20 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Savings:</span>
                    <span className="font-montserrat font-bold text-warm-flame">
                      {testimonial.savings}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Monthly Volume:</span>
                    <span className="font-montserrat font-bold text-night-indigo">
                      {testimonial.monthlyVolume}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Previous Processor:</span>
                    <span className="font-montserrat font-medium text-gray-700 text-sm">
                      {testimonial.previousProcessor}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-dusk-purple to-night-indigo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              The numbers speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-gotham font-bold text-golden-sky mb-2">
                $2.3M
              </div>
              <div className="text-white/80 text-sm">
                Total Client Savings
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiDollarSign} className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-gotham font-bold text-golden-sky mb-2">
                24hrs
              </div>
              <div className="text-white/80 text-sm">
                Average Approval Time
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiStar} className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-gotham font-bold text-golden-sky mb-2">
                4.9/5
              </div>
              <div className="text-white/80 text-sm">
                Client Satisfaction
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-gotham font-bold text-golden-sky mb-2">
                95%
              </div>
              <div className="text-white/80 text-sm">
                High-Risk Approval Rate
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip title="Ready to Join Our Success Stories?" buttonText="Get Your Quote" />
    </div>
  );
};

export default Testimonials;