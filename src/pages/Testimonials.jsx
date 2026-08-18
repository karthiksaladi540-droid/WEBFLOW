import { Star } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CTABand from '../components/CTABand.jsx';

const testimonials = [
  { quote: 'Our old shop had zero online presence. WEBFLOW built us a clean, professional site in under a week — patients now find us on Google before they even walk in.', client: 'Galaxy Dental Care' },
  { quote: 'They understood exactly what a car detailing brand needs — premium look, fast load time, easy booking. Worth every rupee.', client: 'Gentech Signature Studio' },
  { quote: 'From zero web presence to a site that actually gets inquiries. Simple, fast process.', client: 'House of Luxury Cars' },
  { quote: 'Chai Loaded\'s site captures our vibe perfectly — menu, location, ambience, all in one clean page. Customers compliment it.', client: 'Chai Loaded' }
];

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <>
      <section className="bg-lavender pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">Testimonials</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] mb-5">Real businesses. Real outcomes.</h1>
            <p className="text-lg text-charcoal/75">See what clients say after going live with WEBFLOW.</p>
          </Reveal>
        </div>
      </section>

      {/* Auto-scrolling carousel */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="In Their Words" title="What clients say after going live." center />
        </div>
        <div className="mt-12 overflow-hidden relative">
          <div className="flex marquee-track whitespace-nowrap gap-5">
            {doubled.map((t, i) => (
              <div key={i} className="inline-block whitespace-normal bg-white rounded-xl p-7 border border-lavender shrink-0" style={{ width: 'min(420px, 80vw)' }}>
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-coral text-coral" />)}</div>
                <p className="text-charcoal/80 leading-relaxed mb-5">"{t.quote}"</p>
                <p className="font-display font-bold text-coral">— {t.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Your story could be next." />
    </>
  );
}
