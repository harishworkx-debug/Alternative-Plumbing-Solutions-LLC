import { Phone, MapPin, Clock, Mail, ExternalLink, Droplet } from 'lucide-react';
import Seo, { localBusinessSchema, breadcrumbSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import { business } from '@/data/business';

const heroImage =
  'https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

export default function ContactPage() {
  const jsonLd = [
    localBusinessSchema,
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Contact Alternative Plumbing Solutions, LLC | Pearland Plumber"
        description={`Call ${business.phone} to speak with a trusted plumber in Pearland, TX. We serve Pearland, Friendswood, and Greater Houston. No forms — just call us.`}
        path="/contact"
        ogImage={heroImage}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Contact Us"
        title="Call Us — We're Ready to Help"
        description="The fastest way to get help is by phone. Call us, explain your plumbing issue, and we will confirm service availability and arrange the next steps."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact' }]}
        image={heroImage}
      >
        <div className="mt-6">
          <CallButton size="lg" label="Call Now" />
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="container-base grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Phone Is the Fastest Way
            </h2>
            <p className="mt-4 text-lg text-navy-600 text-pretty">
              We do not use online forms or booking pages. When you call, you speak directly with
              our plumbing team — so you get real answers right away.
            </p>

            <div className="mt-8 space-y-5">
              {/* Phone */}
              <a
                href={`tel:${business.phoneTel}`}
                className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:border-aqua-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-aqua-500 text-navy-950">
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-sm font-medium text-navy-400">Phone</p>
                  <p className="font-display text-xl font-bold text-navy-900 group-hover:text-aqua-600">
                    {business.phone}
                  </p>
                  <p className="mt-1 text-sm text-navy-500">Tap to call — we answer during business hours.</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900 text-aqua-400">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-navy-400">Address</p>
                  <p className="font-display text-lg font-bold text-navy-900">{business.address.full}</p>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-aqua-600 hover:text-aqua-700"
                  >
                    View on Google Maps <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900 text-aqua-400">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-navy-400">Business Hours</p>
                  <p className="font-display text-lg font-bold text-navy-900">{business.hoursSummary}</p>
                  <ul className="mt-3 grid gap-1.5 text-sm text-navy-600 sm:grid-cols-2">
                    {business.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span className="font-medium text-navy-700">{h.day}</span>
                        <span className={h.open === 'Closed' ? 'text-red-500' : 'text-navy-600'}>
                          {h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900 text-aqua-400">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-navy-400">Email</p>
                  <p className="font-display text-lg font-bold text-navy-900">{business.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-aqua-50 p-5 ring-1 ring-aqua-200">
              <p className="flex items-start gap-2 text-sm text-navy-700">
                <Droplet className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-600" fill="currentColor" />
                <span>
                  <strong>Prefer to text?</strong> You can text the same number — {business.phone} — and
                  we will get back to you.
                </span>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-lg shadow-navy-900/10">
              <iframe
                title="Alternative Plumbing Solutions, LLC location map"
                src={business.googleMapsEmbedSrc}
                className="h-[420px] w-full lg:h-[560px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="mt-4 rounded-2xl bg-navy-900 p-5 text-center text-white">
              <p className="text-sm text-navy-200">Have a plumbing problem?</p>
              <p className="mt-1 font-display text-lg font-bold">Call us right now.</p>
              <div className="mt-4">
                <CallButton size="md" label="Call Now" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
