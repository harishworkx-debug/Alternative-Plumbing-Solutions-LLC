import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import Seo, { breadcrumbSchema, serviceSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  services,
  getService,
  getServiceUrl,
  getLocationUrl,
  getLocalizedServiceSummary,
  getLocalizedServiceMetaDescription,
  getRelatedServices,
  getNearbyLocations,
  mainLocation,
  parseServiceLocationSlug,
  serviceLocationSlug as buildServiceLocationSlug,
  business,
} from '@/data/business';
import { getServiceLocationContent } from '@/data/serviceLocationContent';
import { getRelatedArticlesForService } from '@/data/articles';

export default function ServiceLocationPage() {
  const { serviceLocationSlug, slug } = useParams();
  const pathSlug = serviceLocationSlug || slug;

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
  const { primaryServiceName, secondaryKeywordsLabel } = service.seo;
  const localizedSummary = getLocalizedServiceSummary(service, location.city);
  const seoDesc = getLocalizedServiceMetaDescription(service, location.city);
  const seoTitle = `${primaryServiceName} in ${location.city}, ${location.state} | ${business.shortName}`;
  const content = getServiceLocationContent(service, location);

  const jsonLd = [
    serviceSchema(
      `${primaryServiceName} in ${location.city}, ${location.state}`,
      seoDesc,
      `/${pageSlug}`,
      `${location.city}, ${location.state}`
    ),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: `Plumber ${location.city}`, path: getLocationUrl(location.slug) },
      { name: `${primaryServiceName} in ${location.city}, ${location.state}`, path: `/${pageSlug}` },
    ]),
  ];

  // Curated related services, nearby areas, and educational guides (Section 9)
  const relatedServices = getRelatedServices(service.slug);
  const nearbyLocations = getNearbyLocations(location.slug);
  const relatedGuides = getRelatedArticlesForService(service.slug);
  const otherServices = services.filter((s) => s.slug !== service.slug);

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
        eyebrow={`${primaryServiceName} · ${location.city}, ${location.state}`}
        title={content.h1}
        description={`${localizedSummary} Call ${business.phone} for service information and an estimate.`}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: `Plumber ${location.city}`, path: getLocationUrl(location.slug) },
          { name: `${primaryServiceName} in ${location.city}` },
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
                alt={content.h1}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="prose-plumbing mt-8 max-w-none">
              <h2>{content.overviewH2}</h2>
              {content.introParagraphs.map((para, i) => (
                <p key={`intro-${i}`}>{para}</p>
              ))}

              <h2>{content.expertiseH2}</h2>
              {content.expertiseParagraphs.map((para, i) => (
                <p key={`exp-${i}`}>{para}</p>
              ))}
            </div>

            {/* Service scope breakdown cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {content.comparisonNotes.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-navy-100 bg-navy-50/60 p-5"
                >
                  <h3 className="font-display text-base font-bold text-navy-900">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="prose-plumbing mt-8 max-w-none">
              <h2>{content.problemsH2}</h2>
              <p>If you are in {location.city}, {location.state} and experiencing any of these issues, call us:</p>
              <ul>
                {service.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-aqua-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <h2>{content.signsH2}</h2>
              <ul>
                {content.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-2">
                    <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>

              <h2>{content.processH2}</h2>
              <ol className="mb-4 space-y-4 pl-5 list-decimal">
                {service.process.map((step, i) => (
                  <li key={i} className="text-navy-600 leading-relaxed">{step}</li>
                ))}
              </ol>

              <h2>{content.localH2}</h2>
              {content.localRelevanceParagraphs.map((para, i) => (
                <p key={`local-${i}`}>{para}</p>
              ))}

              <h2>Why Choose {business.shortName} in {location.city}</h2>
              <ul>
                {content.whyChoosePoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <ShieldCheck className="mt-1 h-4 w-4 flex-shrink-0 text-aqua-600" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 9 Internal Linking: Related Services, Nearby Locations & Useful Guides */}
            <div className="mt-10 rounded-2xl border border-navy-100 bg-navy-50/60 p-6 md:p-8">
              <h2 className="font-display text-xl font-bold text-navy-900">
                Related Services &amp; Helpful Resources for {location.city}, {location.state}
              </h2>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                    Related Services in {location.city}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {relatedServices.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          to={`/${buildServiceLocationSlug(rel.slug, location.slug)}`}
                          className="group inline-flex items-center gap-2 text-sm font-semibold text-aqua-700 hover:text-aqua-600"
                        >
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          {rel.seo.primaryServiceName} in {location.city}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to={getLocationUrl(location.slug)}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-aqua-600"
                      >
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        Plumber in {location.city}, {location.state}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-aqua-600"
                      >
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        All Plumbing Services Overview
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                    Nearby Service Areas
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {location.slug !== mainLocation.slug && (
                      <li>
                        <Link
                          to={getServiceUrl(service.slug)}
                          className="group inline-flex items-center gap-2 text-sm font-semibold text-aqua-700 hover:text-aqua-600"
                        >
                          <MapPin className="h-3.5 w-3.5 text-aqua-600" />
                          {primaryServiceName} in {mainLocation.city}, {mainLocation.state}
                        </Link>
                      </li>
                    )}
                    {nearbyLocations
                      .filter((n) => n.slug !== mainLocation.slug || location.slug === mainLocation.slug)
                      .map((nearby) => (
                        <li key={nearby.slug}>
                          <Link
                            to={`/${buildServiceLocationSlug(service.slug, nearby.slug)}`}
                            className="group inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-aqua-600"
                          >
                            <MapPin className="h-3.5 w-3.5 text-aqua-500" />
                            {primaryServiceName} in {nearby.city}, {nearby.state}
                          </Link>
                        </li>
                      ))}
                  </ul>

                  {relatedGuides.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                        Helpful Plumbing Guides
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {relatedGuides.map((guide) => (
                          <li key={guide.slug}>
                            <Link
                              to={`/guides/${guide.slug}`}
                              className="inline-flex items-start gap-2 text-sm font-semibold text-aqua-700 hover:text-aqua-600"
                            >
                              <BookOpen className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                              <span>{guide.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Call CTA */}
            <div className="mt-10 rounded-2xl bg-navy-900 p-8 text-white">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold">{content.ctaH2}</h2>
                  <p className="mt-1 text-navy-200">
                    Speak directly with our plumbing team serving {location.city}, {location.state} — {business.hoursSummary}.
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
                  {primaryServiceName} in {location.city}
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  Call us for {primaryServiceName.toLowerCase()} and{' '}
                  {secondaryKeywordsLabel.toLowerCase()} in {location.city}, {location.state}.
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
                  Other Plumbing Services in {location.city}
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
                          {s.seo.primaryServiceName} in {location.city}
                        </span>
                        <ArrowRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-navy-50 p-6">
                <h3 className="font-display text-base font-semibold text-navy-900">
                  Local Plumber in {location.city}, {location.state}
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  Explore all residential and commercial plumbing services available in{' '}
                  {location.city}.
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <Link
                    to={getLocationUrl(location.slug)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 hover:text-aqua-700"
                  >
                    <MapPin className="h-4 w-4" />
                    Plumber in {location.city}, {location.state}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/service-areas"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-500 hover:text-navy-800"
                  >
                    View all service areas
                    <ArrowRight className="h-3.5 w-3.5" />
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
            <p className="eyebrow justify-center">
              {primaryServiceName} in {location.city} — FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              {content.faqH2}
            </h2>
          </div>
          <FaqList items={content.faqs} className="mt-12" />
        </div>
      </section>

      <CtaSection
        title={content.ctaH2}
        subtitle={`Need ${primaryServiceName.toLowerCase()} in ${location.city}? Call ${business.phone} to speak with our plumbing team and request an estimate.`}
      />
    </>
  );
}
