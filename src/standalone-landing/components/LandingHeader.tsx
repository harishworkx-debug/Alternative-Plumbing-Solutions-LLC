import { useState, useEffect } from 'react';
import { Phone, Menu, X, Wrench, ShieldCheck } from 'lucide-react';
import { landingConfig } from '../data/landingData';

export default function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/20 border-b border-navy-800'
          : 'bg-navy-950 border-b border-navy-850'
      }`}
    >
      {/* Top micro bar for verified hours & dispatch status */}
      <div className="bg-navy-900/80 border-b border-navy-800/60 py-1.5 text-xs text-navy-200">
        <div className="container-base flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-emerald-300">Pearland Dispatch Available</span>
            <span className="text-navy-400 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-navy-300">Mon–Sat: 7:00 AM – 7:00 PM</span>
          </div>
          <div className="flex items-center gap-2 text-navy-300">
            <ShieldCheck className="h-3.5 w-3.5 text-aqua-400" />
            <span>TSBPE Code Compliant & Insured</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-base py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Text-based Identity Logo */}
          <a
            href="#root"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-500 to-aqua-600 text-navy-950 shadow-md shadow-aqua-500/20 transition-transform group-hover:scale-105">
              <Wrench className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-aqua-300 transition-colors">
                {landingConfig.identity}
              </div>
              <div className="text-xs font-medium text-aqua-400/90 tracking-wide uppercase">
                Brazoria County Local Service
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {landingConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-sm font-semibold text-navy-100 hover:text-aqua-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button (Phone CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={landingConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-aqua-500 px-4 py-2.5 text-sm font-bold text-navy-950 shadow-md shadow-aqua-500/25 transition-all hover:bg-aqua-400 hover:shadow-lg hover:shadow-aqua-500/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="h-4 w-4" />
              <span>{landingConfig.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-white hover:bg-navy-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-navy-800 bg-navy-950 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {landingConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-navy-100 hover:bg-navy-800 hover:text-aqua-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 border-t border-navy-800 pt-4">
            <a
              href={landingConfig.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-aqua-500 py-3 text-base font-bold text-navy-950 shadow-lg shadow-aqua-500/20"
            >
              <Phone className="h-5 w-5" />
              <span>Call {landingConfig.phoneDisplay}</span>
            </a>
            <p className="mt-2 text-center text-xs text-navy-400">
              Monday–Saturday: 7:00 AM – 7:00 PM
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
