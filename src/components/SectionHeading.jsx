import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <Reveal className={center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`font-display font-extrabold text-3xl md:text-4xl leading-tight ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base md:text-lg ${light ? 'text-white/70' : 'text-charcoal/70'}`}>{subtitle}</p>}
    </Reveal>
  );
}
