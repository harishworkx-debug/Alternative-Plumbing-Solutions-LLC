import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Clock, Building2 } from 'lucide-react';
import Seo, { breadcrumbSchema, localBusinessSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  locations, services, serviceInLocation, serviceLocationSlug, business, findLocation, getLocationUrl,
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

  const jsonLd = [
    localBusinessSchema,
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Service Areas', path: '/service-areas' },
      { name: `${location.city}, ${location.state}`, path: canonicalUrl },
    ]),
  ];

  const seoTitle = `Plumber in ${location.city}, ${location.state} | ${business.shortName}`;
  const seoDesc = `Alternative Plumbing Solutions provides plumbing services in ${location.city}, ${location.state} — water heater repair, drain cleaning, sewer line inspection, gas piping, and more. Call ${business.phone}.`;

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDesc}
        path={canonicalUrl}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Service Area"
        title={`Plumbing Services in ${location.city}, ${location.state}`}
        description={`Alternative Plumbing Solutions serves ${location.city} and the surrounding ${location.county} area with residential and commercial plumbing. Call us for fast, reliable service.`}
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
              <h2>Your Local {location.city} Plumber</h2>
              <p>{location.intro}</p>
              <h2>Plumbing in {location.city}: What to Know</h2>
              <p>{location.localInfo}</p>
            </div>

            {/* Services grid */}
            <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
              Plumbing Services Available in {location.city}
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
                    <h3 className="font-display text-base font-semibold text-navy-900">{s.shortName}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-navy-600 leading-relaxed">{s.summary}</p>
                  <div className="mt-4 flex items-center">
                    <Link
                      to={`/${serviceLocationSlug(s.slug, location.slug)}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 hover:text-aqua-700"
                    >
                      View {s.shortName} in {location.city}
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
                <h3 className="mt-4 font-display text-lg font-semibold">Based in Pearland, TX</h3>
                <p className="mt-2 text-sm text-navy-200">
                  We serve {location.city} from our Pearland base — so we can respond quickly to
                  your plumbing call.
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
                <h3 className="font-display text-lg font-semibold text-navy-900">Other Service Areas</h3>
                <ul className="mt-4 space-y-2">
                  {locations.filter((l) => l.slug !== location.slug).map((l) => (
                    <li key={l.slug}>
                      <Link
                        to={getLocationUrl(l.slug)}
                        className="flex items-center justify-between text-sm text-navy-700 hover:text-aqua-600"
                      >
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-aqua-500" /> {l.city}, {l.state}
                        </span>
                        <ArrowRight className="h-4 w-4 text-navy-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">{location.city} Plumbing Questions</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqList items={location.faqs} className="mt-12" />
        </div>
      </section>

      <CtaSection
        title={`Need a Plumber in ${location.city}?`}
        subtitle={`Call us now — we serve ${location.city} and the surrounding ${location.county} area.`}
      />
    </>
  );
}
