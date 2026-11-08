import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import Seo, {
  breadcrumbSchema, localBusinessSchema, serviceSchema,
} from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  services, locations, getService, getServiceUrl, getLocationUrl, parseServiceLocationSlug, serviceLocationSlug as buildServiceLocationSlug, business,
} from '@/data/business';

export default function ServiceLocationPage() {
  const { serviceLocationSlug: pathSlug } = useParams();

  // If path is just a service slug without location, redirect to main location page
  if (pathSlug) {
    const directService = getService(pathSlug);
    if (directService) {
      return <Navigate to={getServiceUrl(directService.slug)} replace />;
    }
  }

  const parsed = pathSlug ? parseServiceLocationSlug(pathSlug) : null;

  // If it doesn't match a service-location pattern, render 404
  if (!parsed) return <Navigate to="/404" replace />;

  const { service, location } = parsed;
  const pageSlug = buildServiceLocationSlug(service.slug, location.slug);

  // Location-specific FAQ derived from service + location context
  const localizedFaqs = [
    {
      q: `Do you offer ${service.name.toLowerCase()} in ${location.city}, ${location.state}?`,
      a: `Yes. Alternative Plumbing Solutions provides ${service.name.toLowerCase()} in ${location.city} and the surrounding ${location.county} area. Call us at ${business.phone} to confirm availability for your address.`,
    },
    ...service.faqs,
  ];

  const jsonLd = [
    localBusinessSchema,
    serviceSchema(service.name, `${service.description} Serving ${location.city}, ${location.state}.`, `/${pageSlug}`),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'All Services', path: '/services' },
      { name: `${service.shortName} in ${location.city}, ${location.state}`, path: `/${pageSlug}` },
    ]),
  ];

  const seoTitle = `${service.name} in ${location.city}, ${location.state} | ${business.shortName}`;
  const seoDesc = `${service.summary} Available in ${location.city}, ${location.state}. Call ${business.phone} for ${service.shortName.toLowerCase()} in ${location.county}.`;

  // Other services in this location
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  // Other locations for this service
  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDesc}
        path={`/${pageSlug}`}
        ogImage={service.image}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        title={`${service.name} in ${location.city}, ${location.state}`}
        description={`${service.summary} Available in ${location.city} and the surrounding ${location.county} area — call us for fast, reliable service.`}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: `${service.shortName} in ${location.city}` },
        ]}
        image={service.image}
      >
        <div className="mt-6">
          <CallButton size="lg" label="Call Now" />
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="container-base grid gap-12 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-lg shadow-navy-900/10">
              <img
                src={service.image}
                alt={`${service.name} in ${location.city}, ${location.state}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="prose-plumbing mt-8 max-w-none">
              <h2>{service.shortName} in {location.city}</h2>
              <p>
                {location.intro.slice(0, 180)} When it comes to {service.shortName.toLowerCase()},
                our team is ready to help {location.city} homeowners and businesses get the problem
                solved quickly and correctly.
              </p>
              <p>{service.description}</p>

              <h2>Common {service.shortName} Problems in {location.city}</h2>
              <p>If you are in {location.city} and noticing any of the following, call us:</p>
              <ul>
                {service.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-aqua-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <h2>How Our {service.shortName} Process Works</h2>
              <ol className="mb-4 space-y-4 pl-5 list-decimal">
                {service.process.map((step, i) => (
                  <li key={i} className="text-navy-600 leading-relaxed">{step}</li>
                ))}
              </ol>

              <h2>Why {location.city} Calls Alternative Plumbing Solutions</h2>
              <p>{location.localInfo}</p>
            </div>

            {/* Call CTA */}
            <div className="mt-8 rounded-2xl bg-navy-900 p-8 text-white">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    {service.shortName} in {location.city}? Call Us.
                  </h2>
                  <p className="mt-1 text-navy-200">
                    Speak directly with a plumber serving {location.city}, {location.state}.
                  </p>
                </div>
                <CallButton size="lg" label="Call Now" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-aqua-400">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                  {service.shortName} in {location.city}
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  Call us about your {service.shortName.toLowerCase()} needs in {location.city}. We
                  serve both residential and commercial properties.
                </p>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-aqua-500 px-5 py-3 font-semibold text-navy-950 transition hover:bg-aqua-400"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} />
                  {business.phone}
                </a>
                <p className="mt-3 text-center text-xs text-navy-400">{business.hoursSummary}</p>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-base font-semibold text-navy-900">
                  Other Services in {location.city}
                </h3>
                <ul className="mt-4 space-y-3">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/${buildServiceLocationSlug(s.slug, location.slug)}`}
                        className="group flex items-center justify-between gap-2 text-sm text-navy-700 hover:text-aqua-600"
                      >
                        <span className="flex items-center gap-2.5">
                          <ServiceIcon name={s.icon} className="h-4 w-4 text-aqua-500" />
                          {s.shortName}
                        </span>
                        <ArrowRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {otherLocations.length > 0 && (
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    {service.shortName} in Other Areas
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {otherLocations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to={`/${buildServiceLocationSlug(service.slug, l.slug)}`}
                          className="group flex items-center justify-between gap-2 text-sm text-navy-700 hover:text-aqua-600"
                        >
                          <span className="flex items-center gap-2.5">
                            <MapPin className="h-4 w-4 text-aqua-500" />
                            {service.shortName} in {l.city}
                          </span>
                          <ArrowRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl bg-navy-50 p-6">
                <h3 className="font-display text-base font-semibold text-navy-900">
                  All {location.city} Services
                </h3>
                <Link
                  to={getLocationUrl(location.slug)}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 hover:text-aqua-700"
                >
                  <MapPin className="h-4 w-4" />
                  View All {location.city} Plumbing Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">
              {service.shortName} in {location.city} — Questions
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqList items={localizedFaqs} className="mt-12" />
        </div>
      </section>

      <CtaSection
        title={`${service.shortName} in ${location.city}? Call Now.`}
        subtitle={`We serve ${location.city} and the surrounding ${location.county} area. Call us to arrange your ${service.shortName.toLowerCase()} today.`}
      />
    </>
  );
}
