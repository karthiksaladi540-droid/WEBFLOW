import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/website-design-services', label: 'Services', dropdown: [
    { to: '/website-design-services', label: 'Website Design' },
    { to: '/whatsapp-automation-services', label: 'WhatsApp Automation' }
  ]},
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `font-display font-semibold text-sm transition-colors ${isActive ? 'text-coral' : 'text-charcoal hover:text-coral'}`;

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'shadow-[0_6px_24px_rgba(17,17,17,.08)] bg-white' : 'bg-white'}`}>
      <div className="bg-ink text-white text-xs">
        <div className="container-x flex items-center justify-center sm:justify-between h-9">
          <span className="hidden sm:block opacity-80">Free Consultation — Call or WhatsApp</span>
          <a href="tel:+917032199830" className="inline-flex items-center gap-1.5 font-semibold hover:text-coral transition-colors">
            <Phone className="w-3.5 h-3.5" /> +91 70321 99830
          </a>
        </div>
      </div>
      <div className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[64px]' : 'h-[80px]'}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          <img src="/assets/logo-transparent.png" alt="WEBFLOW Creative Agency" decoding="sync" fetchPriority="high" draggable="false" className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`} />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.to} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <NavLink to={link.to} className={linkClass}>
                  <span className="inline-flex items-center gap-1">{link.label} <ChevronDown className="w-3.5 h-3.5" /></span>
                </NavLink>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="bg-white border border-lavender shadow-soft rounded-lg overflow-hidden min-w-[220px]">
                      {link.dropdown.map((item) => (
                        <NavLink key={item.to} to={item.to} className="block px-4 py-3 text-sm font-medium hover:bg-lavender hover:text-coral transition-colors">
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>{link.label}</NavLink>
            )
          )}
        </nav>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-lavender">
          <nav className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.to}>
                <NavLink to={link.to} end={link.end} onClick={() => setOpen(false)} className={({isActive}) => `block py-3 font-display font-semibold ${isActive ? 'text-coral' : 'text-charcoal'}`}>
                  {link.label}
                </NavLink>
                {link.dropdown && (
                  <div className="pl-4">
                    {link.dropdown.map((item) => (
                      <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({isActive}) => `block py-2.5 text-sm ${isActive ? 'text-coral' : 'text-charcoal/70'}`}>
                        — {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
