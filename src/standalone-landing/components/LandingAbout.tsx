import { Shield, Hammer, MapPin, CheckCircle2 } from 'lucide-react';
import { landingConfig } from '../data/landingData';

export default function LandingAbout() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container-base">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual feature display */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-navy-900 p-8 text-white shadow-2xl">
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-aqua-500/20 blur-2xl pointer-events-none" />

              <span className="inline-flex items-center gap-2 rounded-full bg-aqua-500/10 px-3.5 py-1 text-xs font-semibold text-aqua-400 border border-aqua-500/20">
                <MapPin className="h-3.5 w-3.5" />
                Pearland, Texas (Brazoria County)
              </span>

              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                Plumbing Engineered for Gulf Coast Conditions
              </h3>

              <p className="mt-3 text-sm text-navy-200 leading-relaxed">
                Homes throughout Pearland, Friendswood, and southern Brazoria County face unique
                environmental challenges that demand specialized local plumbing know-how.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-navy-950/70 p-4 border border-navy-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-aqua-400">
                    Expansive Clay Gumbo Soil
                  </h4>
                  <p className="mt-1 text-xs text-navy-300 leading-relaxed">
                    Severe ground swelling during rainy seasons and shrinkage during hot dry summers
                    places continual tension on under-slab pipes and sewer tie-ins.
                  </p>
                </div>

                <div className="rounded-2xl bg-navy-950/70 p-4 border border-navy-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-aqua-400">
                    High Humidity &amp; Hard Water
                  </h4>
                  <p className="mt-1 text-xs text-navy-300 leading-relaxed">
                    Mineral buildup inside water heaters and corrosion on brass or galvanized
                    fittings require resilient PEX piping and proactive sediment maintenance.
                  </p>
                </div>

                <div className="rounded-2xl bg-navy-950/70 p-4 border border-navy-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-aqua-400">
                    City of Pearland Permitting
                  </h4>
                  <p className="mt-1 text-xs text-navy-300 leading-relaxed">
                    Major water heater replacements and gas extensions are installed strictly to
                    current municipal code and safety inspection standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Craftsmanship & Philosophy */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-800">
              Local Plumbing Craftsmanship
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
              Reliable Local Plumbing Expertise in Pearland, TX
            </h2>

            <p className="mt-6 text-base sm:text-lg text-navy-700 leading-relaxed">
              When plumbing issues arise in your home or commercial building, you need a local
              specialist who understands the construction history of Pearland neighborhoods. From
              older homes with cast iron drain lines to modern developments with tankless water heaters
              and multi-zone fixtures, we bring diagnostic precision to every service call.
            </p>

            <p className="mt-4 text-base text-navy-600 leading-relaxed">
              We operate on a straightforward diagnostic philosophy: pinpoint the root cause first,
              explain the repair options in plain terms, and provide a clear upfront estimate before
              any wrenches turn. No guesswork, no unnecessary teardowns, and no surprise charges.
            </p>

            {/* Checklist of craftsmanship standards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 border-t border-navy-100 pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-aqua-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-950">TSBPE Regulatory Compliance</h4>
                  <p className="mt-0.5 text-xs text-navy-600">
                    Adhering to Texas State Board of Plumbing Examiners guidelines and state safety
                    statutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Hammer className="h-5 w-5 text-aqua-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-950">Premium Grade Materials</h4>
                  <p className="mt-0.5 text-xs text-navy-600">
                    Using durable PEX-A piping, heavy-duty brass valves, and manufacturer-certified
                    components.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-aqua-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-950">Clean Worksite Guarantee</h4>
                  <p className="mt-0.5 text-xs text-navy-600">
                    Shoe covers, floor protection tarps, and thorough post-repair cleanup on every
                    job.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-aqua-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-950">Direct Master Communication</h4>
                  <p className="mt-0.5 text-xs text-navy-600">
                    Speak directly with a knowledgeable plumbing technician when you call{' '}
                    {landingConfig.phoneDisplay}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
