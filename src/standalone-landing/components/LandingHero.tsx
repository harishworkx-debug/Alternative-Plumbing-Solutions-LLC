import { Phone, ArrowDown, Shield, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { landingConfig } from '../data/landingData';

export default function LandingHero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
      {/* Background visual atmospheric elements */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-aqua-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-navy-600/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800/20 via-transparent to-transparent" />
      </div>

      <div className="container-base relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7">
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-aqua-500/30 bg-aqua-500/10 px-3.5 py-1.5 text-xs font-semibold text-aqua-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Brazoria County Local Plumbing Support</span>
              <span className="text-aqua-400/60">•</span>
              <span className="text-navy-200">Pearland, TX</span>
            </div>

            {/* Main H1 - Exact Niche + Location */}
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Plumber in <span className="text-aqua-400">Pearland, TX</span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="mt-5 text-lg sm:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Professional residential &amp; commercial plumbing repairs, water heater replacements,
              drain clearing, and precision leak detection across Pearland and neighboring Texas
              communities. Transparent quotes provided upfront before any work starts.
            </p>

            {/* Urgent Dispatch Advisory Box */}
            <div className="mt-6 rounded-2xl border border-navy-700/80 bg-navy-850/70 p-4 sm:p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-aqua-400 mt-0.5" />
                <div className="text-sm text-navy-200">
                  <strong className="text-white font-semibold">
                    Experiencing a plumbing emergency or leak?
                  </strong>{' '}
                  Call during operating hours (Mon–Sat 7:00 AM – 7:00 PM) for rapid Pearland
                  dispatch. We prioritize active water leaks, burst pipes, and sudden water heater
                  failures.
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={landingConfig.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-aqua-500 px-6 py-4 text-base font-extrabold text-navy-950 shadow-xl shadow-aqua-500/30 transition-all hover:bg-aqua-400 hover:shadow-aqua-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-5 w-5" />
                <span>Call {landingConfig.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-600 bg-navy-800/80 px-6 py-4 text-base font-bold text-white shadow-md transition-all hover:border-aqua-400/50 hover:bg-navy-750 hover:text-aqua-300"
              >
                <span>Request Service Estimate</span>
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            {/* Verified Quick Trust Badges */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-navy-800/80 pt-6 sm:grid-cols-4">
              <div className="flex items-center gap-2.5">
                <Shield className="h-5 w-5 flex-shrink-0 text-aqua-400" />
                <span className="text-xs font-semibold text-navy-200">
                  TSBPE Licensed Standards
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-aqua-400" />
                <span className="text-xs font-semibold text-navy-200">
                  Upfront Written Estimates
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 flex-shrink-0 text-aqua-400" />
                <span className="text-xs font-semibold text-navy-200">
                  Mon–Sat 7 AM – 7 PM
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 flex-shrink-0 text-aqua-400" />
                <span className="text-xs font-semibold text-navy-200">
                  Pearland &amp; Surrounding
                </span>
              </div>
            </div>
          </div>

          {/* Hero Quick Highlights Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-navy-700/80 bg-gradient-to-b from-navy-850 to-navy-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-navy-700/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-aqua-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-aqua-400">
                      Direct Local Service
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    Pearland Plumbing Hub
                  </h3>
                </div>
                <div className="rounded-xl bg-aqua-500/10 px-3 py-1.5 text-xs font-bold text-aqua-300 border border-aqua-500/20">
                  ZIP 77581
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-navy-950/70 p-4 border border-navy-800">
                  <div className="text-xs font-semibold text-navy-300">Primary Dispatch Location</div>
                  <div className="mt-1 text-sm font-bold text-white">
                    2911 Piccadilly Circus, Pearland, TX 77581
                  </div>
                  <div className="mt-1 text-xs text-aqua-400">
                    Serving Pearland, Friendswood, Alvin, Manvel &amp; South Houston
                  </div>
                </div>

                <div className="rounded-2xl bg-navy-950/70 p-4 border border-navy-800">
                  <div className="text-xs font-semibold text-navy-300">Direct Phone Support</div>
                  <a
                    href={landingConfig.phoneHref}
                    className="mt-1 block font-display text-2xl font-extrabold text-aqua-400 hover:text-aqua-300 transition-colors"
                  >
                    {landingConfig.phoneDisplay}
                  </a>
                  <div className="mt-1 text-xs text-navy-400">
                    Direct line to speak with a local technician
                  </div>
                </div>

                <div className="rounded-2xl bg-navy-950/70 p-4 border border-navy-800">
                  <div className="text-xs font-semibold text-navy-300">Verified Service Hours</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    Monday – Saturday: 7:00 AM – 7:00 PM
                  </div>
                  <div className="mt-0.5 text-xs text-navy-400">Sunday: Closed</div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#services"
                  onClick={scrollToServices}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy-800 py-3 text-sm font-bold text-white border border-navy-700 hover:border-aqua-500 hover:text-aqua-300 transition-colors"
                >
                  <span>Explore All 6 Core Plumbing Services</span>
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
