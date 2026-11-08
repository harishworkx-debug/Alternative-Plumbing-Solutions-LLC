import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Seo, { breadcrumbSchema, localBusinessSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import CallButton from '@/components/CallButton';
import { locations, services, serviceInLocation, serviceLocationSlug } from '@/data/business';

const heroImage =
  'https://images.pexels.com/photos/7710011/pexels-photo-7710011.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

export default function ServiceAreasIndexPage() {
  const jsonLd = [
    localBusinessSchema,
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Service Areas', path: '/service-areas' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Service Areas | Plumber in Pearland, Friendswood & Greater Houston"
        description="Alternative Plumbing Solutions serves Pearland, Friendswood, and the greater Houston area with residential and commercial plumbing services. See if we serve your area."
        path="/service-areas"
        ogImage={heroImage}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Where We Work"
        title="Service Areas in Greater Houston"
        description="We are based in Pearland, TX and serve surrounding communities across the greater Houston area. Call us with your address to confirm service availability."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Service Areas' }]}
        image={heroImage}
      >
        <div className="mt-6">
          <CallButton size="lg" label="Call Now" />
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="container-base">
          <div className="grid gap-6 lg:grid-cols-3">
            {locations.map((l) => (
              <div
                key={l.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1"
              >
                <Link to={`/service-areas/${l.slug}`} className="relative block h-44 overflow-hidden bg-navy-900">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-aqua-500/20 blur-2xl" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <MapPin className="h-9 w-9 text-aqua-400" />
                    <span className="mt-3 font-display text-2xl font-bold text-white">{l.city}, {l.state}</span>
                    <span className="mt-1 text-sm text-navy-200">{l.county}</span>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-navy-600 leading-relaxed">{l.intro.slice(0, 120)}…</p>
                  <Link
                    to={`/service-areas/${l.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 hover:text-aqua-700"
                  >
                    View {l.city} Services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <div className="mt-5 border-t border-navy-50 pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-navy-400">Popular Services</p>
                    <ul className="mt-2 space-y-1.5">
                      {services.slice(0, 4).map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/${serviceLocationSlug(s.slug, l.slug)}`}
                            className="text-sm text-navy-600 hover:text-aqua-600"
                          >
                            {s.shortName} in {l.city}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
