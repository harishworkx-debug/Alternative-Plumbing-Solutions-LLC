import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, CheckCircle2, AlertTriangle } from 'lucide-react';
import Seo, {
  breadcrumbSchema, localBusinessSchema, serviceSchema,
} from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  services, locations, serviceLocationSlug, business,
} from '@/data/business';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) return <Navigate to="/404" replace />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = [
    localBusinessSchema,
    serviceSchema(service.name, service.description, `/services/${service.slug}`),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Plumbing Services', path: '/services' },
      { name: service.name, path: `/services/${service.slug}` },
    ]),
  ];

  const seoTitle = `${service.name} in Pearland & Greater Houston | ${business.shortName}`;
  const seoDesc = service.summary;

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDesc}
        path={`/services/${service.slug}`}
        ogImage={service.image}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Plumbing Service"
        title={service.name}
        description={service.summary}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Plumbing Services', path: '/services' },
          { name: service.shortName },
        ]}
        image={service.image}
      >
        <div className="mt-6">
          <CallButton size="lg" label="Call Now" />
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="container-base grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-lg shadow-navy-900/10">
              <img
                src={service.image}
                alt={`${service.name} - professional plumbing service`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="prose-plumbing mt-8 max-w-none">
              <h2>About Our {service.name} Service</h2>
              <p>{service.description}</p>

              <h2>Common {service.shortName} Problems</h2>
              <p>If you are noticing any of the following, it is time to call a professional plumber:</p>
              <ul>
                {service.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <AlertTriangle className="mt-1 h-4 w-4 flex-shrink-0 text-aqua-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <h2>Our {service.shortName} Process</h2>
              <p>Here is what to expect when you call us about {service.shortName.toLowerCase()}:</p>
              <ol className="mb-4 space-y-4 pl-5 list-decimal">
                {service.process.map((step, i) => (
                  <li key={i} className="text-navy-600 leading-relaxed">{step}</li>
                ))}
              </ol>

              <h2>Serving Pearland, Friendswood &amp; Greater Houston</h2>
              <p>
                We provide {service.name.toLowerCase()} throughout our verified service area. Find
                this service in your community:
              </p>
            </div>

            {/* Location links */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {locations.map((l) => (
                <Link
                  key={l.slug}
                  to={`/${serviceLocationSlug(service.slug, l.slug)}`}
                  className="group flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 transition-all hover:border-aqua-300 hover:shadow-md"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 text-aqua-600" />
                  <span className="text-sm font-semibold text-navy-800 group-hover:text-aqua-700">
                    {service.shortName} in {l.city}
                  </span>
                </Link>
              ))}
            </div>

            {/* Call CTA */}
            <div className="mt-8 rounded-2xl bg-navy-900 p-8 text-white">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold">Need {service.shortName}?</h2>
                  <p className="mt-1 text-navy-200">Call us now — we are ready to help.</p>
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
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">Talk to a Plumber</h3>
                <p className="mt-2 text-sm text-navy-600">
                  Call us to discuss your {service.shortName.toLowerCase()} needs. We handle both
                  residential and commercial work.
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
                <h3 className="font-display text-lg font-semibold text-navy-900">Related Services</h3>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/services/${r.slug}`}
                        className="group flex items-center justify-between gap-2 text-sm text-navy-700 hover:text-aqua-600"
                      >
                        <span className="flex items-center gap-2.5">
                          <ServiceIcon name={r.icon} className="h-4 w-4 text-aqua-500" />
                          {r.shortName}
                        </span>
                        <ArrowRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-navy-50 p-6">
                <h3 className="font-display text-lg font-semibold text-navy-900">All Service Areas</h3>
                <ul className="mt-4 space-y-2">
                  {locations.map((l) => (
                    <li key={l.slug}>
                      <Link
                        to={`/service-areas/${l.slug}`}
                        className="flex items-center gap-2 text-sm text-navy-600 hover:text-aqua-600"
                      >
                        <MapPin className="h-4 w-4 text-aqua-500" /> {l.city}, {l.state}
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
            <p className="eyebrow justify-center">{service.shortName} Questions</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqList items={service.faqs} className="mt-12" />
          <div className="mt-10 text-center">
            <CallButton size="lg" label="Call Now" />
          </div>
        </div>
      </section>

      <CtaSection
        title={`Need ${service.shortName}? Call Us Now.`}
        subtitle={`Speak directly with a Pearland plumber about your ${service.shortName.toLowerCase()} needs.`}
      />
    </>
  );
}
