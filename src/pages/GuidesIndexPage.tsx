import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import Seo, { breadcrumbSchema, organizationSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import { articles } from '@/data/articles';
import { business, services, getServiceUrl } from '@/data/business';

const heroImage =
  'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

export default function GuidesIndexPage() {
  const jsonLd = [
    organizationSchema,
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Plumbing Guides', path: '/guides' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Plumbing Guides & Homeowner Tips | Alternative Plumbing Solutions"
        description="Practical plumbing guides from Alternative Plumbing Solutions in Pearland, TX covering drain clogs, water heaters, sewer inspections, leaks, and repiping."
        path="/guides"
        ogImage={heroImage}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Homeowner Resources"
        title="Plumbing Guides & Troubleshooting Tips"
        description={`Clear, practical guides to help Pearland and Greater Houston homeowners spot plumbing warning signs early and know when to call ${business.shortName}.`}
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Plumbing Guides' }]}
        image={heroImage}
      >
        <div className="mt-6">
          <CallButton size="lg" label="Call Now" />
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Educational Guides</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Learn Before a Small Issue Becomes Major Damage
            </h2>
            <p className="mt-4 text-lg text-navy-600 text-pretty">
              Explore diagnostic guides covering drains, water heaters, sewer camera inspections,
              hidden pipe leaks, and residential repiping.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/guides/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-800 shadow">
                    {article.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-navy-400">
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5 text-aqua-600" />
                      {article.category}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-aqua-600" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold text-navy-900 group-hover:text-aqua-700">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 group-hover:text-aqua-700">
                    {article.title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-navy-50 p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">
                  Looking for Plumbing Service in Pearland, TX?
                </h2>
                <p className="mt-2 text-navy-600">
                  Go directly to our core plumbing service pages or call {business.phone} to discuss your issue.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {services.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    to={getServiceUrl(s.slug)}
                    className="btn-ghost"
                  >
                    {s.seo.primaryServiceName} in Pearland
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

