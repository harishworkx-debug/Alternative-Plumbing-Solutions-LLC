import { useParams, Link } from 'react-router-dom';
import { BookOpen, Clock, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import Seo, { articleSchema, breadcrumbSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import { ServiceIcon } from '@/components/ServiceIcon';
import NotFoundPage from './NotFoundPage';
import { articles, getArticleBySlug } from '@/data/articles';
import { business, services, getServiceUrl, getLocationUrl, mainLocation } from '@/data/business';

export default function GuideDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFoundPage />;
  }

  const pagePath = `/guides/${article.slug}`;
  const relatedServices = article.relatedServiceSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const relatedArticles = article.relatedArticleSlugs
    .map((aSlug) => articles.find((a) => a.slug === aSlug))
    .filter((a): a is (typeof articles)[number] => Boolean(a));

  const jsonLd = [
    articleSchema({
      headline: article.title,
      description: article.metaDescription,
      path: pagePath,
      datePublished: article.publishedDate,
      dateModified: article.updatedDate,
      keywords: `${article.targetKeyword}, ${article.category}, Pearland TX plumbing`,
      image: article.image,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Plumbing Guides', path: '/guides' },
      { name: article.title, path: pagePath },
    ]),
  ];

  return (
    <>
      <Seo
        title={article.metaTitle}
        description={article.metaDescription}
        path={pagePath}
        ogImage={article.image}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow={`${article.category} · ${article.readTime}`}
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Plumbing Guides', path: '/guides' },
          { name: article.title },
        ]}
        image={article.image}
      >
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-navy-200">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-aqua-400" />
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-aqua-400" />
            {article.readTime}
          </span>
          <span>Updated {article.updatedDate}</span>
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="container-base grid gap-12 lg:grid-cols-3">
          {/* Article body */}
          <article className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-lg shadow-navy-900/10">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="prose-plumbing mt-8 max-w-none">
              {article.intro.map((para, i) => (
                <p key={`intro-${i}`}>{para}</p>
              ))}

              {article.sections.map((section) => (
                <div key={section.heading} className="mt-8">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-aqua-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-10 rounded-2xl border border-aqua-200 bg-aqua-50/70 p-6 md:p-8">
              <h2 className="font-display text-xl font-bold text-navy-900">Key Takeaways</h2>
              <ul className="mt-4 space-y-2.5">
                {article.keyTakeaways.map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5 text-sm text-navy-700 leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-600" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related commercial service links */}
            <div className="mt-10 rounded-2xl border border-navy-100 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="font-display text-xl font-bold text-navy-900">
                Related Plumbing Services in {mainLocation.city}, {mainLocation.state}
              </h2>
              <p className="mt-2 text-sm text-navy-600">
                If you are dealing with this issue at your property, explore our service pages or call{' '}
                {business.phone} directly:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={getServiceUrl(s.slug)}
                    className="group flex items-center justify-between rounded-xl border border-navy-100 bg-navy-50/60 px-4 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-aqua-300 hover:bg-aqua-50 hover:text-aqua-700"
                  >
                    <span className="flex items-center gap-2.5">
                      <ServiceIcon name={s.icon} className="h-4 w-4 text-aqua-600" />
                      {s.seo.primaryServiceName} in {mainLocation.city}
                    </span>
                    <ArrowRight className="h-4 w-4 text-navy-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
                <Link
                  to={getLocationUrl(mainLocation.slug)}
                  className="group flex items-center justify-between rounded-xl border border-navy-100 bg-navy-50/60 px-4 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-aqua-300 hover:bg-aqua-50 hover:text-aqua-700"
                >
                  <span>Local Plumber in {mainLocation.city}, {mainLocation.state}</span>
                  <ArrowRight className="h-4 w-4 text-navy-400 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Call CTA */}
            <div className="mt-10 rounded-2xl bg-navy-900 p-8 text-white">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold">Need Help Diagnosing Your Plumbing Issue?</h2>
                  <p className="mt-1 text-navy-200">
                    Speak directly with our plumbing team in Pearland, TX — {business.hoursSummary}.
                  </p>
                </div>
                <CallButton size="lg" label="Call Now" />
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  Speak With a Local Plumber
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  Have symptoms right now in Pearland or Greater Houston? Call {business.shortName} directly.
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
                  Related Plumbing Guides
                </h3>
                <ul className="mt-4 space-y-3">
                  {relatedArticles.map((ra) => (
                    <li key={ra.slug}>
                      <Link
                        to={`/guides/${ra.slug}`}
                        className="group flex items-start justify-between gap-2 text-sm font-medium text-navy-700 hover:text-aqua-600"
                      >
                        <span>{ra.title}</span>
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-300 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/guides"
                      className="inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-aqua-600 hover:text-aqua-700"
                    >
                      All Plumbing Guides <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Common Questions</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqList items={article.faqs} className="mt-12" />
        </div>
      </section>

      <CtaSection />
    </>
  );
}

