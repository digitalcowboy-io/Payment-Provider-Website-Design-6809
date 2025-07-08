import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useSupabase } from '../context/SupabaseContext';

const { FiPhone, FiMail, FiMapPin, FiCalendar, FiSend, FiCheck, FiTrendingUp } = FiIcons;

const Contact = () => {
  const { supabase } = useSupabase();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    monthlyVolume: '',
    painPoint: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const painPoints = [
    'High processing fees',
    'Frequent declines',
    'Poor customer service',
    'Hidden fees',
    'Chargeback issues',
    'Integration problems',
    'Need high-risk approval',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            monthly_volume: formData.monthlyVolume,
            pain_point: formData.painPoint,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        // Handle error (show error message to user)
      } else {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          monthlyVolume: '',
          painPoint: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="hero-title text-4xl md:text-6xl font-gotham font-bold text-white mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Talk directly with Alex Rodriguez, founder of Sunset Swipe. No sales teams, no pressure - just honest advice about your payment processing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-gotham font-bold text-night-indigo mb-6">
                Tell Us About Your Business
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your quote request has been submitted successfully. Alex will personally review your information and get back to you within 2 hours during business hours.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <p className="text-sm text-green-700">
                      <strong>Next Steps:</strong><br />
                      • Alex will call you within 2 hours<br />
                      • Free rate audit of your current processing<br />
                      • Personalized quote with potential savings
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-flame focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-flame focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="monthlyVolume" className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                      Monthly Processing Volume *
                    </label>
                    <select
                      id="monthlyVolume"
                      name="monthlyVolume"
                      value={formData.monthlyVolume}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-flame focus:border-transparent"
                    >
                      <option value="">Select your monthly volume</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="painPoint" className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                      Primary Pain Point *
                    </label>
                    <select
                      id="painPoint"
                      name="painPoint"
                      value={formData.painPoint}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-flame focus:border-transparent"
                    >
                      <option value="">What's your biggest challenge?</option>
                      {painPoints.map((point) => (
                        <option key={point} value={point}>{point}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-flame focus:border-transparent"
                      placeholder="Tell us more about your business, current processor, or specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 btn-primary ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <SafeIcon icon={FiSend} className="w-5 h-5" />
                        <span>Get My Free Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to receive communication from Sunset Swipe. We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-gotham font-bold text-night-indigo mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Skip the sales process and talk directly with Alex Rodriguez, founder of Sunset Swipe. 
                  Get honest advice about your payment processing needs without any pressure.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-night-indigo mb-2">
                      Call Alex Direct
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Available Monday-Friday, 8 AM - 6 PM PST
                    </p>
                    <a 
                      href="tel:+1-555-SUNSET" 
                      className="text-warm-flame hover:text-twilight-violet transition-colors duration-200 font-montserrat font-medium"
                    >
                      (555) SUNSET
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-night-indigo mb-2">
                      Email Alex
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Response within 2 hours during business hours
                    </p>
                    <a 
                      href="mailto:alex@sunsetswipe.com" 
                      className="text-warm-flame hover:text-twilight-violet transition-colors duration-200 font-montserrat font-medium"
                    >
                      alex@sunsetswipe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-night-indigo mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      Orange County, California<br />
                      Serving businesses nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiCalendar} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-night-indigo mb-2">
                      Schedule a Call
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Book a 15-minute consultation
                    </p>
                    <a 
                      href="https://calendly.com/alex-sunsetswipe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-warm-flame hover:text-twilight-violet transition-colors duration-200 font-montserrat font-medium"
                    >
                      Book on Calendly
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <SafeIcon icon={FiMapPin} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-gray-700 mb-2">
                  Orange County, CA
                </h3>
                <p className="text-gray-600 text-sm">
                  Serving businesses nationwide with personalized payment processing solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Sunset Swipe?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference of working with a payment processor that puts your success first
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiPhone} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-night-indigo mb-4">
                Direct Access to the Founder
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No call centers, no account managers. When you call, you get Alex Rodriguez, the founder who personally handles your account.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiCheck} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-night-indigo mb-4">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees, no broker markups. You get wholesale pricing with complete transparency on every transaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-night-indigo mb-4">
                High-Risk Specialists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We specialize in industries others won't touch. Our 95% approval rate for high-risk businesses speaks for itself.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;