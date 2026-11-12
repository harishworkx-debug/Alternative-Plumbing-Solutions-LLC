import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo, { breadcrumbSchema, localBusinessSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import CallButton from '@/components/CallButton';
import { ServiceIcon } from '@/components/ServiceIcon';
import { services, locations, getServiceUrl, getLocationUrl } from '@/data/business';

const heroImage =
  'https://images.pexels.com/photos/12105083/pexels-photo-12105083.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

export default function ServicesIndexPage() {
  const jsonLd = [
    localBusinessSchema,
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Plumbing Services', path: '/services' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Plumbing Services in Pearland & Greater Houston | Alternative Plumbing Solutions"
        description="Explore 10 residential and commercial plumbing services in Pearland & Greater Houston: water heaters, drains, sewer cameras, gas piping, and leak detection."
        path="/services"
        ogImage={heroImage}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Our Services"
        title="Plumbing Services in Pearland & Greater Houston"
        description="Residential and commercial plumbing services from a Pearland-based plumber. From water heater repairs to new construction plumbing — call us for straightforward, quality work."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Plumbing Services' }]}
        image={heroImage}
      >
        <div className="mt-6">
          <CallButton size="lg" label="Call Now" />
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="container-base">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={getServiceUrl(s.slug)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-lg">
                    <ServiceIcon name={s.icon} className="h-5 w-5 text-navy-800" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-semibold text-navy-900">{s.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-navy-600 leading-relaxed">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 group-hover:text-aqua-700">
                    {s.seo.primaryServiceName} in Pearland
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Cross-link to service areas */}
          <div className="mt-16 rounded-3xl bg-navy-50 p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">Find Services in Your Area</h2>
                <p className="mt-2 text-navy-600">
                  We serve Pearland, Friendswood, and the greater Houston area. See the plumbing
                  services available near you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    to={getLocationUrl(l.slug)}
                    className="btn-ghost"
                  >
                    Plumber in {l.city}, {l.state}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
