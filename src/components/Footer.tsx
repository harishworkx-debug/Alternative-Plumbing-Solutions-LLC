import { Link } from 'react-router-dom';
import { Droplet, Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import { business, services, locations } from '@/data/business';
import CallButton from './CallButton';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-100">
      {/* Top CTA band */}
      <div className="border-b border-navy-800/60">
        <div className="container-base flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">
              Need a Plumber in Pearland or Greater Houston?
            </h2>
            <p className="mt-2 text-navy-200">Call us now — we are ready to help with your plumbing problem.</p>
          </div>
          <CallButton size="lg" label="Call Now" />
        </div>
      </div>

      <div className="container-base grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand / contact */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5" aria-label={business.name}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800">
              <Droplet className="h-5 w-5 text-aqua-400" fill="currentColor" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-bold text-white">Alternative Plumbing</span>
              <span className="text-[0.7rem] font-medium uppercase tracking-wider text-aqua-400">Solutions, LLC</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-navy-200">{business.description}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`tel:${business.phoneTel}`} className="flex items-center gap-2.5 text-navy-100 hover:text-aqua-300">
                <Phone className="h-4 w-4 text-aqua-400" /> {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-navy-200">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-400" />
              <span>{business.address.full}</span>
            </li>
            <li className="flex items-start gap-2.5 text-navy-200">
              <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-400" />
              <span>{business.hoursSummary}</span>
            </li>
            <li className="flex items-start gap-2.5 text-navy-200">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-400" />
              <span>{business.email}</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Plumbing Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-navy-200 transition-colors hover:text-aqua-300">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link to={`/service-areas/${l.slug}`} className="text-navy-200 transition-colors hover:text-aqua-300">
                  {l.city}, {l.state}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-navy-200 hover:text-aqua-300">About Us</Link></li>
            <li><Link to="/services" className="text-navy-200 hover:text-aqua-300">All Services</Link></li>
            <li><Link to="/service-areas" className="text-navy-200 hover:text-aqua-300">All Service Areas</Link></li>
            <li><Link to="/contact" className="text-navy-200 hover:text-aqua-300">Contact</Link></li>
          </ul>
        </div>

        {/* Legal + map */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Legal &amp; Location</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="text-navy-200 hover:text-aqua-300">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="text-navy-200 hover:text-aqua-300">Terms &amp; Conditions</Link></li>
            <li>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-navy-200 hover:text-aqua-300"
              >
                Google Maps Listing <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
          <div className="mt-5 overflow-hidden rounded-xl border border-navy-800">
            <iframe
              title="Map of Alternative Plumbing Solutions"
              src={business.googleMapsEmbedSrc}
              className="h-36 w-full"
              style={{ border: 0, filter: 'grayscale(0.3) invert(0.9) hue-rotate(180deg)' }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800/60">
        <div className="container-base flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300 sm:flex-row">
          <p>&copy; {year} {business.legalName}. All rights reserved.</p>
          <p className="text-navy-400">
            Plumber in Pearland, Friendswood &amp; Greater Houston, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
