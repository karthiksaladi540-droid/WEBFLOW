import { Zap, Clock, MessageCircle, CheckCircle2, RefreshCw, TrendingUp, Settings, Sparkles, Rocket, LifeBuoy } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CTABand from '../components/CTABand.jsx';

const whatItMeans = [
  { icon: Zap, title: 'Automated Replies', desc: 'Customers get an instant response the moment they message you.' },
  { icon: Clock, title: 'Instant Responses', desc: 'No more waiting hours for a reply — automation handles it.' },
  { icon: MessageCircle, title: 'Booking & Lead Capture', desc: 'Capture enquiries and book appointments directly in WhatsApp.' }
];

const howItHelps = [
  { title: 'Never miss a message', desc: 'Every customer gets a response, even when you are busy or closed.' },
  { title: 'Respond instantly after hours', desc: 'Automation works 24/7, so after-hours messages are never ignored.' },
  { title: 'Faster conversions', desc: 'Quick replies keep customers engaged and more likely to buy.' },
  { title: 'Less manual work', desc: 'Spend less time answering the same questions and more time serving customers.' },
  { title: 'More repeat customers', desc: 'Automated follow-ups bring people back without lifting a finger.' }
];

const revenue = [
  { icon: Zap, title: 'Faster response = higher conversion', desc: 'Customers who get quick answers are far more likely to book or buy.' },
  { icon: RefreshCw, title: 'Automated follow-ups = more bookings', desc: 'Gentle reminders and nudges recover enquiries that would otherwise go cold.' },
  { icon: TrendingUp, title: 'Professional communication = more referrals', desc: 'A polished, responsive experience makes customers recommend you.' }
];

const process = [
  { num: '01', icon: Settings, title: 'Setup', desc: 'We connect WhatsApp automation to your business number.' },
  { num: '02', icon: Sparkles, title: 'Customize Auto-Replies', desc: 'We craft replies that match your brand and services.' },
  { num: '03', icon: Rocket, title: 'Go Live', desc: 'Automation starts working for you immediately.' },
  { num: '04', icon: LifeBuoy, title: 'Ongoing Support', desc: 'We tweak and improve your flows as your business grows.' }
];

export default function WhatsAppAutomationServices() {
  return (
    <>
      <section className="bg-green text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">WhatsApp Automation Services</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] mb-5">WhatsApp Automation Services</h1>
            <p className="text-lg text-white/80">Never miss a customer inquiry — automated WhatsApp replies, lead capture, and booking that work for your business around the clock.</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="What It Means" title="What WhatsApp automation actually does." center />
          <div className="grid sm:grid-cols-3 gap-5 mt-12">
            {whatItMeans.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="bg-lavender rounded-xl p-6 h-full text-center">
                    <div className="w-12 h-12 rounded-full bg-coral/10 grid place-items-center mx-auto mb-4"><Icon className="w-5 h-5 text-coral" /></div>
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
          <SectionHeading eyebrow="How It Helps" title="How it helps your business." />
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
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Revenue Impact" title="How it drives revenue." />
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {revenue.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="border-t-2 border-coral pt-4">
                    <Icon className="w-7 h-7 text-coral mb-3" />
                    <h3 className="font-display font-bold text-sm text-ink mb-2">{item.title}</h3>
                    <p className="text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-lavender">
        <div className="container-x">
          <SectionHeading eyebrow="Process" title="Up and running in 4 steps." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="text-center bg-white rounded-xl p-6">
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

      <section className="section bg-lavender">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Why WhatsApp" title="Your customers already use it every day." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-charcoal/80 leading-relaxed">WhatsApp is where your customers already are. Automating it means every message gets an instant answer, every enquiry is captured, and every follow-up happens on time — without you watching your phone all day. It is the simplest way to turn conversations into bookings.</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              { t: 'No missed enquiries', d: 'Every message gets a reply, even when you are busy or closed.' },
              { t: 'More bookings', d: 'Quick answers and easy scheduling move customers faster.' },
              { t: 'Less repetition', d: 'Automated answers handle the same common questions for you.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-5 h-full">
                  <h3 className="font-display font-bold text-ink mb-1">{item.t}</h3>
                  <p className="text-sm text-charcoal/70">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Ready to automate your WhatsApp?" />
    </>
  );
}
