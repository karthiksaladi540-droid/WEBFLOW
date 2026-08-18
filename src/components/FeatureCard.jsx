import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, index = 0, iconBg = 'bg-coral/10', iconColor = 'text-coral' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="relative bg-white border border-lavender rounded-xl p-6 shadow-[0_2px_12px_rgba(17,17,17,.04)] hover:shadow-soft transition-shadow"
    >
      <div className={`w-12 h-12 rounded-full ${iconBg} grid place-items-center mb-4`}>
        {Icon && <Icon className={`w-5 h-5 ${iconColor}`} />}
      </div>
      <h3 className="font-display font-bold text-base text-ink mb-1.5">{title}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed">{description}</p>
      <span className="absolute bottom-4 right-4 font-display font-extrabold text-xs text-coral/30">
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.div>
  );
}
