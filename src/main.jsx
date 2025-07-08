import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Add JSON-LD structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sunset Swipe",
  "description": "Your dedicated payments concierge for high-risk and hard-to-place businesses. No brokers, no boilerplate - just honest payment solutions.",
  "url": "https://sunsetswipe.com",
  "logo": "https://sunsetswipe.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-SUNSET",
    "contactType": "customer service",
    "email": "alex@sunsetswipe.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Alex Rodriguez",
    "jobTitle": "Founder & CEO"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sunset-swipe",
    "https://twitter.com/sunsetswipe"
  ],
  "service": {
    "@type": "Service",
    "name": "Payment Processing Services",
    "description": "Comprehensive payment processing solutions for high-risk and hard-to-place businesses",
    "serviceType": "Financial Services",
    "provider": {
      "@type": "Organization",
      "name": "Sunset Swipe"
    }
  }
};

// Add structured data to head
const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);