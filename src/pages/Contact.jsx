import { useState } from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello WEBFLOW, I would like to discuss a website.\nName: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(`https://wa.me/917032199830?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
    setForm({ name: '', business: '', phone: '', message: '' });
  };

  const inputClass = "w-full border border-lavender rounded-lg px-4 py-3 text-sm font-sans text-ink outline-none transition-all focus:border-coral focus:shadow-[0_0_0_4px_rgba(232,66,46,.08)] focus:-translate-y-0.5 bg-white";

  return (
    <>
      <section className="bg-lavender pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">Contact</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] mb-5">Let's talk about your website.</h1>
            <p className="text-lg text-charcoal/75">Call or WhatsApp us — we reply fast and your site could be live in 2-3 days.</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          {/* Left: contact actions + map */}
          <Reveal>
            <SectionHeading eyebrow="Talk to us" title="Call or WhatsApp — we reply fast." />
            <p className="mt-4 text-charcoal/70 mb-6">Tell us about your business and what you want your website to achieve. We'll guide you to the right solution.</p>
            <div className="space-y-3 max-w-sm">
              <a href="tel:+917032199830" className="btn-coral w-full"><Phone className="w-4 h-4" /> Call Now</a>
              <a href="https://wa.me/917032199830" target="_blank" rel="noreferrer" className="btn-coral w-full"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Send a message" title="Tell us what you need." />
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-xs font-display font-bold text-ink mb-1.5">Name</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-display font-bold text-ink mb-1.5">Business Name</label>
                <input type="text" name="business" required value={form.business} onChange={handleChange} placeholder="Your business" className={inputClass} />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-display font-bold text-ink mb-1.5">Phone</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="Your phone number" className={inputClass} />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-display font-bold text-ink mb-1.5">Message</label>
                <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us what you need" rows="5" className={inputClass} />
              </div>
              <div className="col-span-2">
                <button type="submit" className="btn-coral w-full"><Send className="w-4 h-4" /> Send via WhatsApp</button>
                {sent && <p className="mt-3 text-sm text-coral font-medium">Opening WhatsApp with your message…</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
