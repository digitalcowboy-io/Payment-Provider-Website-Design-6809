import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAStrip from '../components/CTAStrip';

const { FiBook, FiDownload, FiFileText, FiCalendar, FiFilter } = FiIcons;

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Resources' },
    { id: 'blog', name: 'Blog' },
    { id: 'guides', name: 'Guides' },
    { id: 'checklists', name: 'Checklists' }
  ];

  const resources = [
    {
      type: 'checklist',
      title: 'PCI Compliance Checklist',
      description: 'Complete guide to achieving and maintaining PCI DSS compliance for your business.',
      category: 'Security',
      downloadUrl: '#',
      featured: true,
      publishDate: '2024-01-15'
    },
    {
      type: 'guide',
      title: 'Ultimate Chargeback Prevention Guide',
      description: 'Comprehensive strategies to reduce chargebacks and protect your merchant account.',
      category: 'Risk Management',
      downloadUrl: '#',
      featured: true,
      publishDate: '2024-01-10'
    },
    {
      type: 'blog',
      title: '5 Ways a Rate Audit Can Save You 30%',
      description: 'Discover hidden fees and optimization opportunities in your payment processing.',
      category: 'Cost Optimization',
      downloadUrl: '#',
      featured: true,
      publishDate: '2024-01-05'
    },
    {
      type: 'blog',
      title: 'High-Risk Merchant Accounts: Complete Guide',
      description: 'Everything you need to know about getting approved for high-risk payment processing.',
      category: 'High-Risk',
      downloadUrl: '#',
      publishDate: '2024-01-20'
    },
    {
      type: 'guide',
      title: 'E-commerce Payment Optimization',
      description: 'Best practices for reducing cart abandonment and increasing conversion rates.',
      category: 'E-commerce',
      downloadUrl: '#',
      publishDate: '2024-01-18'
    },
    {
      type: 'checklist',
      title: 'Merchant Account Application Checklist',
      description: 'Essential documents and information needed for payment processor applications.',
      category: 'Applications',
      downloadUrl: '#',
      publishDate: '2024-01-12'
    },
    {
      type: 'blog',
      title: 'Understanding Interchange Fees',
      description: 'Demystifying the complex world of credit card interchange rates and fees.',
      category: 'Education',
      downloadUrl: '#',
      publishDate: '2024-01-08'
    },
    {
      type: 'guide',
      title: 'Fraud Prevention Best Practices',
      description: 'Comprehensive guide to protecting your business from payment fraud.',
      category: 'Security',
      downloadUrl: '#',
      publishDate: '2024-01-03'
    },
    {
      type: 'checklist',
      title: 'Monthly Processing Review Checklist',
      description: 'Key metrics and indicators to monitor in your monthly processing statements.',
      category: 'Monitoring',
      downloadUrl: '#',
      publishDate: '2023-12-28'
    }
  ];

  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeFilter);

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'blog':
        return FiBook;
      case 'guide':
        return FiFileText;
      case 'checklist':
        return FiDownload;
      default:
        return FiFileText;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'guide':
        return 'bg-green-100 text-green-800';
      case 'checklist':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
              Payment Processing Resources
            </h1>
            <p className="text-lg md:text-xl text-night-indigo/80 max-w-3xl mx-auto">
              Expert insights, guides, and tools to help you optimize your payment processing and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-night-indigo mb-4">
              Featured Resources
            </h2>
            <p className="text-gray-600 text-lg">
              Our most popular and valuable resources for payment processing optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                    <SafeIcon icon={getTypeIcon(resource.type)} className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-montserrat font-medium ${getTypeColor(resource.type)}`}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-xl font-montserrat font-bold text-night-indigo mb-3 group-hover:text-warm-flame transition-colors duration-200">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {resource.category}
                  </span>
                  <a 
                    href={resource.downloadUrl}
                    className="flex items-center space-x-2 text-warm-flame hover:text-twilight-violet transition-colors duration-200 font-montserrat font-medium"
                  >
                    <span>{resource.type === 'blog' ? 'Read' : 'Download'}</span>
                    <SafeIcon icon={resource.type === 'blog' ? FiBook : FiDownload} className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-night-indigo mb-4">
              All Resources
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Comprehensive library of payment processing knowledge
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-warm-flame text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
                      <SafeIcon icon={getTypeIcon(resource.type)} className="w-5 h-5 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-montserrat font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-montserrat font-bold text-night-indigo mb-3 group-hover:text-warm-flame transition-colors duration-200">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {resource.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-500">
                        {new Date(resource.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4 group-hover:bg-warm-flame/10 transition-colors duration-200">
                  <a 
                    href={resource.downloadUrl}
                    className="flex items-center justify-center space-x-2 text-warm-flame hover:text-twilight-violet transition-colors duration-200 font-montserrat font-medium"
                  >
                    <span>{resource.type === 'blog' ? 'Read Article' : 'Download Resource'}</span>
                    <SafeIcon icon={resource.type === 'blog' ? FiBook : FiDownload} className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-dusk-purple to-night-indigo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest payment processing insights, industry updates, and exclusive resources delivered to your inbox.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-golden-sky focus:outline-none"
                />
                <button className="bg-golden-sky text-night-indigo font-montserrat font-bold px-6 py-3 rounded-lg hover:bg-soft-coral transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip title="Need Personalized Help?" buttonText="Talk to an Expert" />
    </div>
  );
};

export default Resources;