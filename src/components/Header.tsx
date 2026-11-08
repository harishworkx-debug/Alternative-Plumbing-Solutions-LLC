import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X, Droplet, ArrowRight, MapPin } from 'lucide-react';
import { business, services, locations, getServiceUrl, getLocationUrl } from '@/data/business';
import CallButton from './CallButton';
import { ServiceIcon } from './ServiceIcon';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const keepOpen = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  };
  const scheduleClose = () => {
    keepOpen();
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false);
      setAreasOpen(false);
    }, 150);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-aqua-600' : 'text-navy-700 hover:text-aqua-600'
    }`;

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-navy-950 text-navy-100 lg:block">
        <div className="container-base flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <Droplet className="h-3.5 w-3.5 text-aqua-400" />
            Serving Pearland, Friendswood &amp; Greater Houston
          </p>
          <div className="flex items-center gap-5">
            <span className="text-navy-200">{business.hoursSummary}</span>
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-aqua-300"
            >
              <Phone className="h-3.5 w-3.5" /> {business.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? 'shadow-md shadow-navy-900/5' : 'shadow-sm'
        }`}
      >
        <div className="container-base flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" aria-label={business.name}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 shadow-md">
              <Droplet className="h-5 w-5 text-aqua-400" strokeWidth={2.5} fill="currentColor" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-bold text-navy-900 sm:text-lg">
                Alternative Plumbing
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-wider text-aqua-600">
                Solutions, LLC
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                keepOpen();
                setServicesOpen(true);
                setAreasOpen(false);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/services') ||
                  locations.some(
                    (l) =>
                      location.pathname.endsWith(`-${l.slug}`) ||
                      location.pathname.endsWith(`-${l.slug.replace(/-tx$/, '')}`)
                  )
                    ? 'text-aqua-600'
                    : 'text-navy-700 hover:text-aqua-600'
                }`}
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 animate-slide-down">
                  <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-3 shadow-2xl shadow-navy-900/15">
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between rounded-xl bg-navy-50 px-4 py-3 font-semibold text-navy-800 transition-colors hover:bg-navy-100"
                    >
                      All 10 Plumbing Services
                      <ArrowRight className="h-4 w-4 text-aqua-600" />
                    </Link>
                    <div className="mt-2 flex flex-col space-y-0.5 max-h-[30rem] overflow-y-auto">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={getServiceUrl(s.slug)}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-navy-700 transition-colors hover:bg-aqua-50 hover:text-navy-900"
                        >
                          <ServiceIcon name={s.icon} className="h-4 w-4 flex-shrink-0 text-aqua-500" />
                          <span className="font-medium">{s.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                keepOpen();
                setAreasOpen(true);
                setServicesOpen(false);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/service-areas') || location.pathname.startsWith('/plumber-')
                    ? 'text-aqua-600'
                    : 'text-navy-700 hover:text-aqua-600'
                }`}
                onClick={() => setAreasOpen((v) => !v)}
                aria-expanded={areasOpen}
              >
                Service Areas <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 animate-slide-down">
                  <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-3 shadow-2xl shadow-navy-900/15">
                    <Link
                      to="/service-areas"
                      onClick={() => setAreasOpen(false)}
                      className="flex items-center justify-between rounded-xl bg-navy-50 px-4 py-3 font-semibold text-navy-800 transition-colors hover:bg-navy-100"
                    >
                      All 10 Service Areas
                      <ArrowRight className="h-4 w-4 text-aqua-600" />
                    </Link>
                    <div className="mt-2 flex flex-col space-y-0.5 max-h-[30rem] overflow-y-auto">
                      {locations.map((l) => (
                        <Link
                          key={l.slug}
                          to={getLocationUrl(l.slug)}
                          onClick={() => setAreasOpen(false)}
                          className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-navy-700 transition-colors hover:bg-aqua-50 hover:text-navy-900"
                        >
                          <span className="flex items-center gap-2.5">
                            <MapPin className="h-4 w-4 flex-shrink-0 text-aqua-500" />
                            <span className="font-medium">{l.city}, {l.state}</span>
                          </span>
                          <span className="text-xs text-navy-400 group-hover:text-aqua-700">{l.county.replace(' County', '')}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CallButton size="sm" label="Call" showNumber />
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg text-navy-800 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
            <span className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900">
                <Droplet className="h-4 w-4 text-aqua-400" fill="currentColor" />
              </span>
              <span className="font-display text-sm font-bold text-navy-900">Alternative Plumbing</span>
            </span>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col px-3 py-4">
            <MobileLink to="/" label="Home" />
            <MobileLink to="/about" label="About" />
            <MobileGroup label="Plumbing Services" to="/services">
              {services.map((s) => (
                <MobileLink key={s.slug} to={getServiceUrl(s.slug)} label={s.shortName} nested />
              ))}
            </MobileGroup>
            <MobileGroup label="Service Areas" to="/service-areas">
              {locations.map((l) => (
                <MobileLink key={l.slug} to={getLocationUrl(l.slug)} label={`${l.city}, ${l.state}`} nested />
              ))}
            </MobileGroup>
            <MobileLink to="/contact" label="Contact" />
          </nav>

          <div className="border-t border-navy-100 px-5 py-5">
            <CallButton size="lg" variant="primary" label="Call Now" className="w-full" />
            <p className="mt-3 text-center text-sm text-navy-500">{business.hoursSummary}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileLink({ to, label, nested = false }: { to: string; label: string; nested?: boolean }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `block rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
          nested ? 'ml-3 py-2 text-sm' : ''
        } ${isActive ? 'bg-aqua-50 text-aqua-700' : 'text-navy-700 hover:bg-navy-50'}`
      }
    >
      {label}
    </NavLink>
  );
}

function MobileGroup({ label, to, children }: { label: string; to: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-navy-50">
      <div className="flex items-center justify-between">
        <NavLink
          to={to}
          className={({ isActive }) =>
            `flex-1 rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
              isActive ? 'bg-aqua-50 text-aqua-700' : 'text-navy-700 hover:bg-navy-50'
            }`
          }
        >
          {label}
        </NavLink>
        <button
          className="flex h-10 w-10 items-center justify-center text-navy-500"
          onClick={() => setOpen((v) => !v)}
          aria-label={`Toggle ${label}`}
          aria-expanded={open}
        >
          <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {open && <div className="pb-2">{children}</div>}
    </div>
  );
}
