import { Link } from 'react-router-dom';
import { Home, Droplet, ArrowLeft, Phone } from 'lucide-react';
import Seo from '@/components/Seo';
import CallButton from '@/components/CallButton';
import { business, services, locations, getServiceUrl, getLocationUrl } from '@/data/business';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | Alternative Plumbing Solutions, LLC"
        description="The page you are looking for could not be found. Call us or browse our plumbing services and service areas."
        path="/404"
      />

      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-aqua-500/15 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-aqua-400/10 blur-3xl" aria-hidden="true" />

        <div className="container-base relative py-20 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-aqua-500/15 ring-1 ring-aqua-400/30">
            <Droplet className="h-8 w-8 text-aqua-400" fill="currentColor" />
          </span>
          <p className="mt-6 font-display text-7xl font-bold text-white sm:text-8xl">404</p>
          <h1 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-navy-200 text-pretty">
            The page you are looking for may have moved or no longer exists. Try one of the links
            below, or call us — we are happy to help.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton size="lg" label="Call Now" />
            <Link to="/" className="btn-outline-light">
              <Home className="h-4 w-4" /> Back to Home
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-navy-800/60 p-5 text-left ring-1 ring-navy-700/50">
                <h2 className="font-display text-base font-semibold text-white">Plumbing Services</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {services.slice(0, 5).map((s) => (
                    <li key={s.slug}>
                      <Link to={getServiceUrl(s.slug)} className="text-navy-200 hover:text-aqua-300">
                        {s.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-aqua-400 hover:text-aqua-300">
                  All Services <ArrowLeft className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl bg-navy-800/60 p-5 text-left ring-1 ring-navy-700/50">
                <h2 className="font-display text-base font-semibold text-white">Service Areas</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {locations.map((l) => (
                    <li key={l.slug}>
                      <Link to={getLocationUrl(l.slug)} className="text-navy-200 hover:text-aqua-300">
                        {l.city}, {l.state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-navy-300">
            <Phone className="h-4 w-4 text-aqua-400" />
            Or call us directly: <a href={`tel:${business.phoneTel}`} className="font-semibold text-white hover:text-aqua-300">{business.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
