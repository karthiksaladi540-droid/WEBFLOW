import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, MessageCircle, ArrowRight, ArrowLeft,
  Palette, Smartphone, Zap, Search, MousePointerClick, MapPin, Mail, Share2,
  Clock, UserPlus, CalendarCheck, Send, ClipboardList, Sparkles, RefreshCw,
  Rocket, PenTool, Code2, ChevronDown, Star, TrendingUp, ShieldCheck, Heart
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import CTABand from '../components/CTABand.jsx';

const slides = [
  {
    eyebrow: 'WEBFLOW / Creative Agency',
    title: 'Websites for Any Business, Delivered in 2-3 Days',
    sub: 'Professional, affordable websites that help your business get found and turn visits into enquiries.',
    ctas: [{ label: 'Call Now', href: 'tel:+917032199830', icon: Phone, solid: true }, { label: 'WhatsApp Us', href: 'https://wa.me/917032199830', icon: MessageCircle, solid: false }],
    bg: 'bg-lavender'
  },
  {
    eyebrow: 'Never miss a customer',
    title: 'WhatsApp Automation That Never Misses a Customer',
    sub: 'Instant auto-replies, lead capture, and booking — working for your business 24/7.',
    ctas: [{ label: 'Learn More', to: '/whatsapp-automation-services', icon: ArrowRight, solid: false, link: true }],
    bg: 'bg-green'
  },
  {
    eyebrow: 'Real results',
    title: '4+ Local Businesses, Live and Growing Online',
    sub: 'From dental clinics to luxury car dealers — see what a focused website can do.',
    ctas: [{ label: 'View Portfolio', to: '/portfolio', icon: ArrowRight, solid: false, link: true }],
    bg: 'bg-ink'
  }
];

const websiteFeatures = [
  { icon: Palette, title: 'Custom Design', desc: 'Built around your brand, never a template.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Looks sharp on every phone and tablet.' },
  { icon: Zap, title: 'Fast Loading', desc: 'Quick pages keep visitors engaged.' },
  { icon: Search, title: 'SEO Friendly', desc: 'Structured to be found on Google.' },
  { icon: MousePointerClick, title: 'Easy Navigation', desc: 'Visitors find what they need fast.' },
  { icon: MapPin, title: 'Google Map Integration', desc: 'Show customers exactly where you are.' },
  { icon: Mail, title: 'Contact Form', desc: 'Enquiries delivered straight to you.' },
  { icon: Share2, title: 'Social Media Integration', desc: 'Connect your profiles in one click.' }
];

const whatsappFeatures = [
  { icon: Zap, title: 'Instant Auto-Replies', desc: 'Customers get an answer the moment they message.' },
  { icon: Clock, title: '24/7 Customer Response', desc: 'Never miss a message, even after hours.' },
  { icon: UserPlus, title: 'Lead Capture via WhatsApp', desc: 'Every conversation becomes a tracked lead.' },
  { icon: CalendarCheck, title: 'Appointment Booking', desc: 'Let customers book directly in chat.' },
  { icon: Send, title: 'Broadcast Messages', desc: 'Reach all your customers at once.' },
  { icon: ClipboardList, title: 'Order/Inquiry Tracking', desc: 'Keep every enquiry organised.' },
  { icon: Sparkles, title: 'Custom Greeting Messages', desc: 'Welcome each customer your way.' },
  { icon: RefreshCw, title: 'Follow-Up Automation', desc: 'Automatic nudges that bring people back.' }
];

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'We understand your business and goals.', icon: Phone },
  { num: '02', title: 'Design', desc: 'We create a custom layout for your brand.', icon: PenTool },
  { num: '03', title: 'Development', desc: 'We build a fast, responsive website.', icon: Code2 },
  { num: '04', title: 'Launch', desc: 'Your website goes live in 2-3 days.', icon: Rocket }
];

const whyChooseUs = [
  '2-3 day delivery — no long waiting',
  'Affordable pricing for any business',
  'WhatsApp automation included as an upsell',
  'Direct access to the founder — no middlemen',
  'Mobile-first, fast-loading websites',
  'Ongoing support after launch',
  'Custom-built, not templated',
  'Transparent, simple process'
];

const projects = [
  { name: 'Galaxy Dental Care', url: 'https://galaxydentalcare.in', desc: 'A patient-friendly dental clinic website that builds trust and drives appointment inquiries.', tag: 'Clinic', thumb: 'https://images.pexels.com/photos/17485352/pexels-photo-17485352.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Gentech Signature Studio', url: 'https://gentechcarcare.com', desc: 'A premium car detailing brand site showcasing services with fast load speed.', tag: 'Automotive', thumb: 'https://images.pexels.com/photos/6638402/pexels-photo-6638402.png?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'House of Luxury Cars', url: 'https://houseofluxurycars.in', desc: 'A luxury pre-owned car dealership site built to showcase inventory and drive walk-ins.', tag: 'Dealership', thumb: 'https://images.pexels.com/photos/221043/pexels-photo-221043.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Chai Loaded', url: 'https://chailoaded.com', desc: 'A café website capturing brand vibe, menu, and location in one clean page.', tag: 'Café', thumb: 'https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' }
];

const industries = [
  { label: 'Dental Clinics', icon: Heart },
  { label: 'Salons', icon: Sparkles },
  { label: 'Car Wash & Detailing', icon: Zap },
  { label: 'Restaurants & Cafés', icon: Star },
  { label: 'Jewellery Stores', icon: Star },
  { label: 'Car Dealerships', icon: Rocket },
  { label: 'Gyms', icon: RefreshCw },
  { label: 'Boutiques', icon: Palette }
];

const testimonials = [
  { quote: 'Our old shop had zero online presence. WEBFLOW built us a clean, professional site in under a week — patients now find us on Google before they even walk in.', client: 'Galaxy Dental Care' },
  { quote: 'They understood exactly what a car detailing brand needs — premium look, fast load time, easy booking. Worth every rupee.', client: 'Gentech Signature Studio' },
  { quote: 'From zero web presence to a site that actually gets inquiries. Simple, fast process.', client: 'House of Luxury Cars' },
  { quote: "Chai Loaded's site captures our vibe perfectly — menu, location, ambience, all in one clean page. Customers compliment it.", client: 'Chai Loaded' }
];

const faqs = [
  { q: 'Why should I choose WEBFLOW for my website?', a: 'We deliver custom, fast-loading websites in 2-3 days at affordable prices, with direct access to the founder and ongoing support after launch.' },
  { q: 'How fast can you deliver my website?', a: 'Most websites go live in 2-3 days from the moment we have your content and requirements confirmed.' },
  { q: 'Do I need any technical knowledge to get started?', a: 'Not at all. You tell us about your business and we handle everything from design to going live.' },
  { q: 'Will my website work on mobile phones?', a: 'Yes. Every site we build is mobile-first and responsive, so it looks great on phones, tablets, and desktops.' },
  { q: 'What is WhatsApp automation and do I need it?', a: 'WhatsApp automation sends instant replies, captures leads, and books appointments automatically. It is ideal if you get customer messages and want to respond faster.' },
  { q: 'Do you provide support after the website is live?', a: 'Yes. We stay reachable after launch so your website keeps working as your business grows.' }
];

const trustBadges = [
  { icon: Zap, label: 'Fast Delivery', sub: 'Live in 2-3 days' },
  { icon: TrendingUp, label: 'Affordable Pricing', sub: 'Built for any budget' },
  { icon: ShieldCheck, label: 'Local Support', sub: 'We are here after launch' },
  { icon: Star, label: '4+ Businesses Live', sub: 'Real work, real results' }
];

const clientNames = ['Galaxy Dental Care', 'Gentech Signature Studio', 'House of Luxury Cars', 'Chai Loaded'];

const marqueeItems = ['WEBSITE DESIGN', 'WHATSAPP AUTOMATION', 'FAST DELIVERY', 'AFFORDABLE PRICING', 'CUSTOM BUILT', 'LOCAL SUPPORT'];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[slide];

  return (
    <>
      {/* Hero Slider */}
      <section className={`relative ${current.bg} overflow-hidden transition-colors duration-700`}>
        <div className="container-x min-h-[540px] md:min-h-[600px] flex items-center py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="eyebrow mb-4 text-coral">{current.eyebrow}</p>
              <h1 className={`font-display font-extrabold text-4xl md:text-6xl leading-[1.05] mb-5 ${slide >= 1 ? 'text-white' : 'text-ink'}`}>{current.title}</h1>
              <p className={`text-lg mb-8 max-w-xl ${slide >= 1 ? 'text-white/80' : 'text-charcoal/75'}`}>{current.sub}</p>
              <div className="flex flex-wrap gap-3">
                {current.ctas.map((cta, i) => {
                  const Icon = cta.icon;
                  const cls = cta.solid
                    ? 'btn-coral'
                    : (slide >= 1 ? 'btn-outline-light' : 'btn-outline');
                  return cta.link
                    ? <Link key={i} to={cta.to} className={cls}><Icon className="w-4 h-4" /> {cta.label}</Link>
                    : <a key={i} href={cta.href} target={cta.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}><Icon className="w-4 h-4" /> {cta.label}</a>;
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white grid place-items-center transition-colors" aria-label="Previous slide">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setSlide((s) => (s + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white grid place-items-center transition-colors" aria-label="Next slide">
          <ArrowRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`h-2 rounded-full transition-all ${i === slide ? 'w-8 bg-coral' : 'w-2 bg-white/40'}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Coral banner */}
      <div className="bg-coral text-white text-center py-3 px-4">
        <p className="font-display font-bold text-sm md:text-base">
          WEBFLOW is the Best Web Design & WhatsApp Automation Company in Hyderabad. Call: <a href="tel:+917032199830" className="underline">+91 70321 99830</a>
        </p>
      </div>

      {/* Client strip */}
      <section className="bg-white border-b border-lavender">
        <div className="container-x py-6">
          <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-2 text-center">
            <span className="font-display font-bold text-xs text-charcoal/40 uppercase tracking-[0.18em] mr-2">Trusted by</span>
            {clientNames.map((name, i) => (
              <span key={name} className="font-display font-bold text-sm text-ink/70">
                {name}
                {i < clientNames.length - 1 && <span className="text-coral ml-3">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges — redesigned */}
      <section className="bg-lavender">
        <div className="container-x py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex items-center gap-4 bg-white rounded-xl border border-lavender px-5 py-5 h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-coral/10 grid place-items-center shrink-0">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-coral" />
                    </div>
                    <div>
                      <p className="font-display font-extrabold text-sm md:text-base text-ink leading-tight">{badge.label}</p>
                      <p className="text-xs text-charcoal/50 mt-0.5">{badge.sub}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section A: Website Design Features */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Website Design" title="Everything your website needs to succeed." subtitle="Eight essentials built into every site we create." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {websiteFeatures.map((f, i) => <FeatureCard key={i} index={i} icon={f.icon} title={f.title} description={f.desc} />)}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-lavender">
        <div className="container-x">
          <SectionHeading eyebrow="How We Work" title="Our Process" subtitle="From first conversation to launch in four simple steps." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="text-center bg-white rounded-xl border border-lavender p-6">
                  <div className="w-16 h-16 rounded-full bg-coral/10 grid place-items-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-coral" />
                  </div>
                  <p className="font-display font-extrabold text-coral text-sm mb-1">{step.num}</p>
                  <h3 className="font-display font-bold text-lg text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal/70">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marquee banner */}
      <div className="bg-coral text-white py-4 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-display font-extrabold text-lg md:text-xl mx-6 inline-flex items-center gap-6">
              {item} <span className="text-white/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Section B: WhatsApp Automation Features */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="WhatsApp Automation" title="Never miss a customer message." subtitle="Eight ways automation keeps your business responsive." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {whatsappFeatures.map((f, i) => {
              const colors = [
                { bg: 'bg-coral/10', c: 'text-coral' },
                { bg: 'bg-green/10', c: 'text-green' },
                { bg: 'bg-blue-500/10', c: 'text-blue-600' },
                { bg: 'bg-amber-500/10', c: 'text-amber-600' },
                { bg: 'bg-teal-500/10', c: 'text-teal-600' },
                { bg: 'bg-rose-500/10', c: 'text-rose-600' },
                { bg: 'bg-coral/10', c: 'text-coral' },
                { bg: 'bg-green/10', c: 'text-green' }
              ];
              const col = colors[i % colors.length];
              return <FeatureCard key={i} index={i} icon={f.icon} title={f.title} description={f.desc} iconBg={col.bg} iconColor={col.c} />;
            })}
          </div>
        </div>
      </section>

      {/* Grow Your Business Online — light */}
      <section className="bg-lavender text-ink section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <p className="eyebrow mb-3">Grow With WEBFLOW</p>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 text-ink">Grow Your Business Online</h2>
              <p className="text-charcoal/70 max-w-xl mx-auto mb-8">A professional website plus WhatsApp automation is the fastest way to get found and stay responsive.</p>
              <Link to="/contact" className="btn-coral">Contact Us Today <ArrowRight className="w-4 h-4" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us — deep green */}
      <section className="bg-green text-white section">
        <div className="container-x">
          <div className="text-center mb-12 md:mb-14">
            <p className="eyebrow mb-3">Why Choose Us</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-white">Why local businesses pick WEBFLOW.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {whyChooseUs.map((point, i) => (
              <Reveal key={point} delay={i * 0.07}>
                <div className="h-full min-h-[150px] rounded-xl border border-white/15 bg-white/[0.06] p-5 md:p-6 transition-colors hover:bg-white/[0.1]">
                  <span className="font-display font-extrabold text-coral text-3xl leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-5 text-white/90 text-sm leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <SectionHeading eyebrow="Portfolio" title="Recent work." />
            <Link to="/portfolio" className="btn-outline">View All Projects <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p) => (
              <motion.a key={p.name} href={p.url} target="_blank" rel="noreferrer"
                whileHover={{ y: -6 }} className="block bg-white border border-lavender rounded-xl overflow-hidden h-full hover:shadow-soft transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-lavender">
                  <img src={p.thumb} alt={`${p.name} website preview`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-coral font-display font-bold text-xs uppercase tracking-wider">{p.tag}</span>
                  <h3 className="font-display font-bold text-base text-ink mt-1.5 mb-1.5">{p.name}</h3>
                  <p className="text-xs text-charcoal/70 mb-3 leading-relaxed">{p.desc}</p>
                  <span className="text-coral font-display font-bold text-xs inline-flex items-center gap-1">View Live Site <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-lavender">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="eyebrow mb-3">Who We Serve</p>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-4">Industries We Serve</h2>
              <p className="text-charcoal/70 mb-6 max-w-md">From clinics to cafés, we build websites that fit the way your business works and the customers you serve.</p>
              <Link to="/contact" className="btn-coral">Get a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            </Reveal>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.label} className="flex items-center gap-3 min-h-[64px] rounded-xl bg-white border border-lavender px-4 py-3 hover:border-coral hover:-translate-y-0.5 transition-all">
                    <Icon className="w-5 h-5 text-coral shrink-0" />
                    <span className="font-display font-bold text-xs text-ink">{ind.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" center />
          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-lavender rounded-xl border border-lavender overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center px-5 py-4 text-left">
                  <span className="font-display font-bold text-sm text-ink">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-coral shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div initial={false} animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }} className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm text-charcoal/70 leading-relaxed">{faq.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview — 2x2 grid */}
      <section className="section bg-lavender">
        <div className="container-x">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <SectionHeading eyebrow="Testimonials" title="What clients say." />
            <Link to="/testimonials" className="btn-outline">See All Testimonials <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-lavender">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-coral text-coral" />)}</div>
                <p className="text-sm text-charcoal/80 leading-relaxed mb-4">"{t.quote}"</p>
                <p className="font-display font-bold text-sm text-coral">— {t.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Your Competitors Already Have a Website. Do You?" />
    </>
  );
}
