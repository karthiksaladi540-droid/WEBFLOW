import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src="/assets/logo-transparent.png" alt="WEBFLOW Creative Agency" decoding="async" draggable="false" className="h-16 md:h-20 w-auto object-contain mb-5" />
            <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">Creative websites and WhatsApp automation for ambitious local businesses in Hyderabad.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <li><Link to="/" className="hover:text-coral transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-coral transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-coral transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-coral transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <li><Link to="/website-design-services" className="hover:text-coral transition-colors">Website Design</Link></li>
              <li><Link to="/whatsapp-automation-services" className="hover:text-coral transition-colors">WhatsApp Automation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <li><a href="tel:+917032199830" className="inline-flex items-center gap-2 hover:text-coral transition-colors"><Phone className="w-4 h-4" /> +91 70321 99830</a></li>
              <li><a href="https://wa.me/917032199830" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-coral transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} WEBFLOW Creative Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
