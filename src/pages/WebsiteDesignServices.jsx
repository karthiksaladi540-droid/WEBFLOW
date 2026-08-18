import { Phone, PenTool, Smartphone, Zap, CheckCircle2, Rocket, Code2 } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CTABand from '../components/CTABand.jsx';

const whatWeDo = [
  { icon: PenTool, title: 'Custom Design', desc: 'Every website is built around your brand — never a template.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Looks and works perfectly on phones, tablets, and desktops.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Your website goes live in 2-3 days, fully ready for customers.' },
  { icon: CheckCircle2, title: 'Built for Local Business', desc: 'Designed around how local customers search, decide, and contact you.' }
];

const howItHelps = [
  { title: 'Improves online visibility', desc: 'Customers find you on Google instead of only your competitors.' },
  { title: 'Builds customer trust', desc: 'A professional site signals credibility before the first conversation.' },
  { title: 'Appears on Google search', desc: 'SEO-friendly structure helps you rank for local searches.' },
  { title: 'Works as a 24/7 sales tool', desc: 'Your website keeps selling even when you are closed.' },
  { title: 'Gives a professional edge', desc: 'Stand out from competitors who still have no online presence.' }
];

const process = [
  { num: '01', icon: Phone, title: 'Consultation', desc: 'We understand your business and goals.' },
  { num: '02', icon: PenTool, title: 'Design', desc: 'We create a custom layout for your brand.' },
  { num: '03', icon: Code2, title: 'Development', desc: 'We build a fast, responsive website.' },
  { num: '04', icon: Rocket, title: 'Launch', desc: 'Your website goes live in 2-3 days.' }
];

export default function WebsiteDesignServices() {
  return (
    <>
      <section className="bg-coral text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow text-white/80 mb-3">Website Design Services</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] mb-5">Website Design Services</h1>
            <p className="text-lg text-white/85">Custom, fast-loading websites built for local businesses in Hyderabad — live in 2-3 days, designed to get you found and trusted.</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="What We Do" title="Custom websites, built to perform." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {whatWeDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="bg-lavender rounded-xl p-6 h-full">
                    <div className="w-12 h-12 rounded-full bg-coral/10 grid place-items-center mb-4"><Icon className="w-5 h-5 text-coral" /></div>
                    <h3 className="font-display font-bold text-ink mb-1.5">{item.title}</h3>
                    <p className="text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-lavender">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="How It Helps" title="How a website helps your business." />
          <div className="mt-8 space-y-3">
            {howItHelps.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-lavender">
                  <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-ink text-sm mb-0.5">{item.title}</h3>
                    <p className="text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Process" title="From idea to launch in 4 steps." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="text-center bg-lavender rounded-xl p-6">
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

      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Why It Matters" title="Your website is your first impression." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-charcoal/80 leading-relaxed">Before a customer calls you or walks in, they look you up. A clean, fast website tells them you are serious, professional, and open for business. No website — or an outdated one — quietly costs you enquiries you never even hear about.</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              { t: 'Found on Google', d: 'Local searches lead customers straight to your site.' },
              { t: 'Trusted instantly', d: 'A professional design signals credibility in seconds.' },
              { t: 'Always working', d: 'Your site answers questions even when you are closed.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-lavender rounded-xl p-5 h-full">
                  <h3 className="font-display font-bold text-ink mb-1">{item.t}</h3>
                  <p className="text-sm text-charcoal/70">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Ready for your new website?" />
    </>
  );
}
