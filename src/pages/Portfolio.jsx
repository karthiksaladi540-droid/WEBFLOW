import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CTABand from '../components/CTABand.jsx';

const projects = [
  { name: 'Galaxy Dental Care', url: 'https://galaxydentalcare.in', desc: 'A modern, patient-friendly dental clinic website built to build trust and drive appointment inquiries.', tag: 'Clinic', thumb: 'https://images.pexels.com/photos/17485352/pexels-photo-17485352.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Gentech Signature Studio', url: 'https://gentechcarcare.com', desc: 'A premium car detailing brand site showcasing services with fast load speed.', tag: 'Automotive', thumb: 'https://images.pexels.com/photos/6638402/pexels-photo-6638402.png?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'House of Luxury Cars', url: 'https://houseofluxurycars.in', desc: 'A luxury pre-owned car dealership site built to showcase inventory and drive walk-ins.', tag: 'Dealership', thumb: 'https://images.pexels.com/photos/221043/pexels-photo-221043.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Chai Loaded', url: 'https://chailoaded.com', desc: 'A café website capturing brand vibe, menu, and location in one clean page.', tag: 'Café', thumb: 'https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' }
];

export default function Portfolio() {
  return (
    <>
      <section className="bg-lavender pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">Portfolio</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] mb-5">Websites built to be found, trusted, and acted on.</h1>
            <p className="text-lg text-charcoal/75">Real projects for real local businesses — each one designed around the customers it serves.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-x py-12 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '4', label: 'Live projects' },
              { stat: '100%', label: 'Custom built' },
              { stat: '2-3', label: 'Day delivery' },
              { stat: '4+', label: 'Industries served' }
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
        <div className="container-x">
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <motion.a href={p.url} target="_blank" rel="noreferrer"
                  whileHover={{ y: -6 }} className="block bg-white border border-lavender rounded-xl overflow-hidden h-full hover:shadow-soft transition-shadow">
                  <div className="aspect-[16/10] overflow-hidden bg-lavender relative">
                    <img src={p.thumb} alt={`${p.name} website preview`} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="w-2 h-2 rounded-full bg-coral" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-coral font-display font-bold text-xs uppercase tracking-wider">{p.tag}</span>
                      <ExternalLink className="w-4 h-4 text-charcoal/30" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-ink mb-2">{p.name}</h3>
                    <p className="text-sm text-charcoal/70 mb-4 leading-relaxed">{p.desc}</p>
                    <p className="text-coral font-display font-bold text-xs mb-3">{p.url.replace('https://', '')}</p>
                    <span className="inline-flex items-center gap-1 text-coral font-display font-bold text-sm">View Live Site <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Your project could be next." />
    </>
  );
}
