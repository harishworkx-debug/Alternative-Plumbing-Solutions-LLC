import { MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';
import { landingConfig, nearbyCities } from '../data/landingData';

export default function LandingServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-navy-50">
      <div className="container-base">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-aqua-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-aqua-800">
            Local Coverage Area
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
            Serving Pearland &amp; Surrounding Communities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-700 leading-relaxed">
            Centrally dispatched from our Pearland base on Piccadilly Circus, we provide prompt
            residential and commercial plumbing assistance across northern Brazoria, western Galveston,
            and southern Harris counties.
          </p>
        </div>

        {/* Primary Location Spotlight Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-aqua-500/20 text-aqua-400 border border-aqua-500/30">
                <Navigation className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-aqua-400">
                  Primary Operating Hub
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  Pearland, TX (77581)
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-navy-200">
                  Physical Service Base: 2911 Piccadilly Circus, Pearland, TX 77581
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={landingConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl bg-aqua-500 px-5 py-3 text-sm font-bold text-navy-950 shadow-md shadow-aqua-500/20 hover:bg-aqua-400 transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Call {landingConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Grid of 10 Genuine Served Cities with ZIP Codes */}
        <div className="mt-10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy-500 mb-4 text-center sm:text-left">
            Confirmed Service Communities &amp; Postal Zones:
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {nearbyCities.map((city) => (
              <div
                key={city.name}
                className="rounded-2xl border border-navy-100 bg-white p-4 shadow-sm transition-all hover:border-aqua-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                  <MapPin className="h-4 w-4 text-aqua-600 flex-shrink-0" />
                  <span>{city.name}, TX</span>
                </div>
                <div className="mt-2 text-xs font-medium text-navy-500">
                  ZIP: <span className="text-navy-800">{city.zipCodes}</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{city.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Generic Google Maps Embed Centered on Pearland, TX */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-navy-200 bg-white shadow-lg">
          <div className="border-b border-navy-100 bg-white px-6 py-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 className="font-display text-sm font-bold text-navy-900">
                Pearland, Texas Service Radius
              </h4>
              <p className="text-xs text-navy-500">
                Interactive Map Centered on Pearland &amp; Surrounding Brazoria County
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
              Active Service Area
            </span>
          </div>

          <div className="relative h-96 w-full bg-navy-100">
            <iframe
              title="Pearland, Texas Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111000.0!2d-95.286!3d29.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864090956b6b3e81%3A0x6b8c9d1df5e8c1b0!2sPearland%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
