import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import WebsiteDesignServices from './pages/WebsiteDesignServices.jsx';
import WhatsAppAutomationServices from './pages/WhatsAppAutomationServices.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';

const pageMap = {
  'index.html': '/',
  'about.html': '/about',
  'website-design-services.html': '/website-design-services',
  'whatsapp-automation-services.html': '/whatsapp-automation-services',
  'portfolio.html': '/portfolio',
  'testimonials.html': '/testimonials',
  'contact.html': '/contact'
};

const filename = window.location.pathname.split('/').pop() || 'index.html';
const initialPath = pageMap[filename] || '/';

if (!window.location.hash) {
  window.location.replace(`#${initialPath}`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="website-design-services" element={<WebsiteDesignServices />} />
          <Route path="whatsapp-automation-services" element={<WhatsAppAutomationServices />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
