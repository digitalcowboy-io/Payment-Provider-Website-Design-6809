import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAStrip from '../components/CTAStrip';

const { FiPhone, FiMail, FiLinkedin, FiCalendar } = FiIcons;

const About = () => {
  const timeline = [
    {
      year: "2015",
      title: "SaaS Entrepreneur",
      description: "Founded first SaaS company, experienced payment processing challenges firsthand"
    },
    {
      year: "2017",
      title: "Fintech Discovery",
      description: "Discovered the complexity of payment processing while scaling subscription business"
    },
    {
      year: "2019",
      title: "Industry Transition",
      description: "Joined leading payment processor to understand the industry from the inside"
    },
    {
      year: "2021",
      title: "Sunset Swipe Founded",
      description: "Launched Sunset Swipe to provide honest, transparent payment solutions"
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Serving 500+ businesses nationwide with specialized high-risk solutions"
    }
  ];

  const values = [
    {
      title: "Transparency",
      description: "No hidden fees, no surprises. You'll always know exactly what you're paying for."
    },
    {
      title: "Expertise",
      description: "Deep industry knowledge from both merchant and processor perspectives."
    },
    {
      title: "Personalized Service",
      description: "Direct access to decision-makers, not call centers or ticket systems."
    },
    {
      title: "Results-Driven",
      description: "We're measured by your success and savings, not just transaction volume."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunset-peach to-warm-flame py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title text-4xl md:text-6xl font-gotham font-bold text-white mb-6">
                Meet Alex Rodriguez
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Founder & CEO of Sunset Swipe
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <p className="text-white leading-relaxed">
                  "I started Sunset Swipe because I experienced the frustration of dealing with payment processors as a business owner. 
                  Too many brokers, too many hidden fees, and not enough honest advice. I wanted to create a different kind of company – 
                  one that puts merchants first."
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-555-SUNSET" 
                  className="flex items-center justify-center space-x-2 bg-white text-warm-flame font-montserrat font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                  <span>Call Alex Direct: (555) SUNSET</span>
                </a>
                <a 
                  href="mailto:alex@sunsetswipe.com" 
                  className="flex items-center justify-center space-x-2 bg-white/20 text-white font-montserrat font-bold px-6 py-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <SafeIcon icon={FiMail} className="w-5 h-5" />
                  <span>Email Alex</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-golden-sky to-soft-coral rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-gotham font-bold text-night-indigo">AR</span>
                </div>
                <h3 className="text-2xl font-gotham font-bold text-white mb-2">
                  Alex Rodriguez
                </h3>
                <p className="text-white/80 mb-4">
                  Founder & CEO
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-white hover:text-golden-sky transition-colors duration-200">
                    <SafeIcon icon={FiLinkedin} className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-golden-sky transition-colors duration-200">
                    <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
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
              The Sunset Swipe Story
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From frustrated merchant to payment processing advocate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-gotham font-bold text-night-indigo mb-6">
                From Merchant to Advocate
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In 2015, I was running a successful SaaS company when I encountered the nightmare that is payment processing. 
                  Despite having a legitimate business with good credit, I was shuffled between brokers who promised the world 
                  but delivered hidden fees and poor service.
                </p>
                <p>
                  After being declined by three different processors and losing thousands in setup fees, I realized the system 
                  was broken. There had to be a better way to connect businesses with honest payment solutions.
                </p>
                <p>
                  That's when I decided to learn the industry from the inside. I spent four years working for a leading payment 
                  processor, understanding how the system really works and building relationships with underwriters who 
                  specialize in high-risk businesses.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-gotham font-bold text-night-indigo mb-6">
                The Sunset Swipe Difference
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In 2021, I founded Sunset Swipe with a simple mission: provide honest, transparent payment processing 
                  without the broker markup. No sales teams, no commissioned reps – just direct access to wholesale pricing 
                  and personalized service.
                </p>
                <p>
                  Today, we serve over 500 businesses nationwide, with a special focus on high-risk and hard-to-place 
                  industries. Our clients save an average of 25-35% on their processing costs while getting the personal 
                  attention they deserve.
                </p>
                <p>
                  When you work with Sunset Swipe, you're not just getting a payment processor – you're getting a partner 
                  who understands your business and fights for your success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              The path from frustrated merchant to payment processing advocate
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-golden-sky to-warm-flame"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-gotham font-bold text-warm-flame mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-montserrat font-bold text-night-indigo mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-warm-flame rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-montserrat font-bold text-golden-sky mb-4">
                  {value.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Alex */}
      <section className="py-20 bg-golden-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-3xl md:text-4xl font-gotham font-bold text-night-indigo mb-6">
              Talk to Alex Directly
            </h2>
            <p className="text-night-indigo/80 text-lg mb-8 max-w-2xl mx-auto">
              No sales teams, no call centers. When you call Sunset Swipe, you get direct access to the founder.
            </p>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiPhone} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-night-indigo mb-2">
                    Call Alex Direct
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Available Monday-Friday, 8 AM - 6 PM PST
                  </p>
                  <a 
                    href="tel:+1-555-SUNSET" 
                    className="btn-primary"
                  >
                    (555) SUNSET
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-night-indigo mb-2">
                    Email Alex
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get a response within 2 hours during business hours
                  </p>
                  <a 
                    href="mailto:alex@sunsetswipe.com" 
                    className="btn-secondary"
                  >
                    alex@sunsetswipe.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip title="Ready to Experience the Difference?" buttonText="Get Started Today" />
    </div>
  );
};

export default About;