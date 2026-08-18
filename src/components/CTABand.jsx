import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTABand({ title = 'Ready to Get Your Business Online?', variant = 'coral' }) {
  const bg = variant === 'coral' ? 'bg-coral' : 'bg-ink';
  return (
    <section className={`${bg} text-white`}>
      <div className="container-x py-16 md:py-20 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">{title}</h2>
        <p className="mt-4 text-white/80 text-base md:text-lg max-w-xl mx-auto">Call or WhatsApp us today — your website could be live in 2-3 days.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="tel:+917032199830" className="btn-light"><Phone className="w-4 h-4" /> Call Now</a>
          <a href="https://wa.me/917032199830" target="_blank" rel="noreferrer" className="btn-outline-light">
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
