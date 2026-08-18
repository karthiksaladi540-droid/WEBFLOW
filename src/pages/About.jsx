import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CTABand from '../components/CTABand.jsx';

export default function About() {
  return (
    <>
      <section className="bg-lavender pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">About WEBFLOW</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] mb-5">A Hyderabad agency focused on websites that work.</h1>
            <p className="text-lg text-charcoal/75">We help local businesses get online fast — with custom websites and WhatsApp automation that turn searches into customers.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-x py-12 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '4+', label: 'Businesses online' },
              { stat: '2-3', label: 'Day delivery' },
              { stat: '100%', label: 'Custom built' },
              { stat: '24/7', label: 'WhatsApp response' }
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="font-display font-extrabold text-4xl md:text-5xl text-coral">{s.stat}</p>
                <p className="text-white/60 text-sm mt-2">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Who We Are" title="A small agency with one focus: your online presence." />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-charcoal/80 leading-relaxed">
              <p>WEBFLOW is a creative agency based in Hyderabad, building professional websites and WhatsApp automation for local businesses. We believe every business — no matter how small — deserves a website that makes customers trust them instantly.</p>
              <p>Our mission is simple: make it fast, affordable, and stress-free for local businesses to get online and stay connected with their customers.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-lavender">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="How We Help" title="How we help local businesses grow." />
          <div className="mt-8 space-y-4">
            {[
              { t: 'Online visibility', d: 'Your business shows up when customers search, so you are found before your competitors.' },
              { t: 'Professional presence', d: 'A clean, modern website builds trust before the first conversation happens.' },
              { t: 'Converting visitors to customers', d: 'Clear calls to action and contact options turn visits into enquiries and bookings.' },
              { t: 'Automated WhatsApp replies', d: 'Never miss a message — instant responses keep customers engaged, even after hours.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-lavender">
                  <CheckCircle2 className="w-6 h-6 text-coral shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-ink mb-1">{item.t}</h3>
                    <p className="text-sm text-charcoal/70">{item.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Our Approach" title="Fast. Affordable. Direct." />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Fast delivery', d: 'Most websites go live in 2-3 days, built to a standard that looks like it took weeks.' },
              { t: 'Affordable pricing', d: 'Fair, transparent pricing that works for any business, big or small.' },
              { t: 'Direct communication', d: 'You speak directly with the founder — no middlemen, no confusion.' },
              { t: 'Real results', d: 'We focus on what matters: more visibility, more enquiries, more customers.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-t-2 border-coral pt-4">
                  <h3 className="font-display font-bold text-lg text-ink mb-1">{item.t}</h3>
                  <p className="text-sm text-charcoal/70">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center font-display font-bold text-xl text-ink max-w-xl mx-auto">“We provide our services at affordable prices for any business.”</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-lavender">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="What You Get" title="Every project includes." />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Custom design', d: 'A layout built around your brand and your customers — not a reused template.' },
              { t: 'Mobile-first build', d: 'Your site looks sharp and loads fast on the phones your customers actually use.' },
              { t: 'WhatsApp-ready', d: 'Click-to-chat buttons and automation options so enquiries never get missed.' },
              { t: 'Local SEO basics', d: 'Clean structure and metadata that help you appear in local Google searches.' },
              { t: 'Ongoing support', d: 'We stay reachable after launch for tweaks, updates, and questions.' },
              { t: 'Honest pricing', d: 'Clear, fair quotes with no surprise add-ons — built for any business budget.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-white rounded-xl p-5 border border-lavender">
                  <h3 className="font-display font-bold text-ink mb-1">{item.t}</h3>
                  <p className="text-sm text-charcoal/70">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Let's build your online presence." />
    </>
  );
}
