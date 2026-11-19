import { Phone, MapPin, Clock, Wrench, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { landingConfig } from '../data/landingData';

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-white">
      {/* Upper Footer: Contact Summary */}
      <div className="container-base py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Identity & Badge */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-aqua-500 text-navy-950 shadow-md">
                <Wrench className="h-5 w-5 stroke-[2.2]" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                {landingConfig.identity}
              </span>
            </div>
            <p className="text-xs text-navy-300 leading-relaxed">
              Professional residential &amp; commercial plumbing services based in Pearland, Texas.
              Dedicated to upfront estimates, reliable diagnostics, and code-compliant installations.
            </p>
            <div className="flex items-center gap-2 text-xs text-aqua-400">
              <Shield className="h-4 w-4 flex-shrink-0" />
              <span>TSBPE Code Standards Compliant</span>
            </div>
          </div>

          {/* Col 2: Service Anchor Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-navy-200">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a href="#services" className="text-navy-300 hover:text-aqua-400 transition-colors">
                  Plumbing Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-navy-300 hover:text-aqua-400 transition-colors">
                  Local Craftsmanship &amp; Soil
                </a>
              </li>
              <li>
                <a href="#service-area" className="text-navy-300 hover:text-aqua-400 transition-colors">
                  Coverage Areas &amp; Cities
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-navy-300 hover:text-aqua-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-navy-300 hover:text-aqua-400 transition-colors">
                  Homeowner FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-300 hover:text-aqua-400 transition-colors">
                  Request an Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Phone & Hours */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-navy-200">
              Telephone &amp; Hours
            </h4>
            <div className="mt-4 space-y-3 text-xs text-navy-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-aqua-400 flex-shrink-0" />
                <a
                  href={landingConfig.phoneHref}
                  className="font-bold text-sm text-aqua-400 hover:text-aqua-300 transition-colors"
                >
                  {landingConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-aqua-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong>Mon–Sat:</strong> {landingConfig.hours.monSat}
                  </p>
                  <p className="text-navy-400">
                    <strong>Sunday:</strong> {landingConfig.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Physical Location & Legal */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-navy-200">
              Service Base
            </h4>
            <div className="mt-4 space-y-3 text-xs text-navy-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-aqua-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{landingConfig.address.street}</p>
                  <p>
                    {landingConfig.address.city}, {landingConfig.address.state}{' '}
                    {landingConfig.address.zip}
                  </p>
                  <p className="text-navy-400">{landingConfig.address.county}</p>
                </div>
              </div>
              <div className="pt-2 flex flex-col space-y-1.5 text-xs text-navy-400">
                <Link
                  to="/privacy-policy"
                  className="hover:text-aqua-300 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-aqua-300 transition-colors"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer: Copyright */}
      <div className="border-t border-navy-900 bg-navy-950 py-6 text-center text-xs text-navy-400">
        <div className="container-base flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} {landingConfig.identity}. All rights reserved.</p>
          <p className="text-navy-500">
            Professional Plumbing, Water Heater &amp; Drain Services in Pearland, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
