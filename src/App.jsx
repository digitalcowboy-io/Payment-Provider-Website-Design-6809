import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Resources from './pages/Resources';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { SupabaseProvider } from './context/SupabaseContext';

function App() {
  return (
    <SupabaseProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Navigation />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SupabaseProvider>
  );
}

export default App;