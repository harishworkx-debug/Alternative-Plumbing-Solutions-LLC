import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Clock, Building2, BookOpen } from 'lucide-react';
import Seo, { breadcrumbSchema, serviceSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  services,
  serviceInLocation,
  serviceLocationSlug,
  business,
  findLocation,
  getLocationUrl,
  getNearbyLocations,
  getLocalizedServiceSummary,
} from '@/data/business';

export default function ServiceAreaDetailPage() {
  const { locationSlug, slug } = useParams();
  const currentPath = useLocation().pathname;
  const rawParam = locationSlug || slug;
  const location = rawParam ? findLocation(rawParam) : null;

  if (!location) return <Navigate to="/404" replace />;

  const canonicalUrl = getLocationUrl(location.slug);

  // If accessed through legacy /service-areas/:locationSlug or /service-area/:locationSlug, redirect to /plumber-[location]
  if (currentPath.startsWith('/service-areas/') || currentPath.startsWith('/service-area/')) {
    return <Navigate to={canonicalUrl} replace />;
  }

  const availableSlugs = serviceInLocation[location.slug] ?? [];
  const availableServices = services.filter((s) => availableSlugs.includes(s.slug));
  const nearbyLocations = getNearbyLocations(location.slug);

  const seoTitle = `Plumber in ${location.city}, ${location.state} | ${business.shortName}`;
  const seoDesc = `Looking for a local plumber in ${location.city}, ${location.state}? We handle plumbing repairs, drain cleaning, water heaters, and leak detection. Call ${business.phone}.`;

  const jsonLd = [
    serviceSchema(
      `Plumber in ${location.city}, ${location.state}`,
      seoDesc,
      canonicalUrl,
      `${location.city}, ${location.state}`
    ),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Service Areas', path: '/service-areas' },
      { name: `Plumber in ${location.city}, ${location.state}`, path: canonicalUrl },
    ]),
  ];

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDesc}
        path={canonicalUrl}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Local Plumber & Plumbing Contractor"
        title={`Plumber in ${location.city}, ${location.state}`}
        description={`Alternative Plumbing Solutions is a local plumber and plumbing contractor serving residential and commercial customers in ${location.city}, ${location.state}. Call ${business.phone} for plumbing services and estimates.`}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: `${location.city}, ${location.state}` },
        ]}
      >
        <div className="mt-6">
          <CallButton size="lg" label="Call Now" />
        </div>
      </PageHero>

      {/* Intro + info */}
      <section className="py-20 lg:py-28">
        <div className="container-base grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose-plumbing max-w-none">
              <h2>Your Local Plumber &amp; Plumbing Contractor in {location.city}</h2>
              <p>{location.intro}</p>
              <h2>Plumbing in {location.city}, {location.state}: What to Know</h2>
              <p>{location.localInfo}</p>
            </div>

            {/* Services grid */}
            <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
              Plumbing Services Available in {location.city}, {location.state}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {availableServices.map((s) => (
                <div
                  key={s.slug}
                  className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-navy-900">
                      {s.seo.primaryServiceName}
                    </h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-navy-600 leading-relaxed">
                    {getLocalizedServiceSummary(s, location.city)}
                  </p>
                  <div className="mt-4 flex items-center">
                    <Link
                      to={`/${serviceLocationSlug(s.slug, location.slug)}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 hover:text-aqua-700"
                    >
                      {s.seo.primaryServiceName} in {location.city}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-lg">
                <MapPin className="h-8 w-8 text-aqua-400" />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  Plumber in {location.city}, {location.state}
                </h3>
                <p className="mt-2 text-sm text-navy-200">
                  Serving residential and commercial properties in {location.city} and{' '}
                  {location.county}. Call to confirm availability or request an estimate.
                </p>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-aqua-500 px-5 py-3 font-semibold text-navy-950 transition hover:bg-aqua-400"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} />
                  {business.phone}
                </a>
                <div className="mt-5 space-y-3 border-t border-navy-700 pt-5 text-sm">
                  <p className="flex items-center gap-2 text-navy-200">
                    <Clock className="h-4 w-4 text-aqua-400" /> {business.hoursSummary}
                  </p>
                  <p className="flex items-center gap-2 text-navy-200">
                    <Building2 className="h-4 w-4 text-aqua-400" /> Residential &amp; Commercial
                  </p>
                  <p className="flex items-center gap-2 text-navy-200">
                    <MapPin className="h-4 w-4 text-aqua-400" /> {location.county}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  Nearby Service Areas
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  Explore nearby cities we serve around {location.city}, {location.state}:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {nearbyLocations.map((nearby) => (
                    <li key={nearby.slug}>
                      <Link
                        to={getLocationUrl(nearby.slug)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 hover:text-aqua-700"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        Plumber in {nearby.city}, {nearby.state}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 space-y-2 border-t border-navy-100 pt-4">
                  <Link
                    to="/service-areas"
                    className="flex items-center gap-1.5 text-xs font-semibold text-navy-700 hover:text-aqua-600"
                  >
                    All Service Areas Directory <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 text-xs font-semibold text-navy-700 hover:text-aqua-600"
                  >
                    All Plumbing Services Overview <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/guides"
                    className="flex items-center gap-1.5 text-xs font-semibold text-navy-700 hover:text-aqua-600"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-aqua-600" />
                    Helpful Plumbing Guides
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">{location.city}, {location.state} — FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqList items={location.faqs} className="mt-12" />
        </div>
      </section>

      <CtaSection
        title={`Need a Plumber in ${location.city}, ${location.state}?`}
        subtitle={`Call ${business.phone} to reach a local plumber serving ${location.city} and ${location.county}.`}
      />
    </>
  );
}
