import { Link } from 'react-router-dom';
import {
  Droplet, Wrench, ShieldCheck, MapPin, Building2, Clock, Phone, CheckCircle2,
} from 'lucide-react';
import Seo, {
  localBusinessSchema, organizationSchema, breadcrumbSchema,
} from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import ReviewsSection from '@/components/ReviewsSection';
import { business } from '@/data/business';

const values = [
  {
    icon: Wrench,
    title: 'Quality Craftsmanship',
    desc: 'Every job, big or small, gets the same attention to detail. We want the plumbing we install or repair to hold up over the long term.',
  },
  {
    icon: ShieldCheck,
    title: 'Alternative Solutions',
    desc: 'Our name says it: we look for alternative, time-saving solutions for our customers rather than defaulting to the most expensive option.',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial',
    desc: 'We serve both homeowners and businesses — from a single faucet repair to full new construction plumbing.',
  },
  {
    icon: MapPin,
    title: 'Local to Pearland',
    desc: 'We are based in Pearland, Texas, so we know the area and the common plumbing issues our neighbors run into.',
  },
];

const heroImage =
  'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

export default function AboutPage() {
  const jsonLd = [
    organizationSchema,
    localBusinessSchema,
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
    ]),
  ];

  return (
    <>
      <Seo
        title="About Alternative Plumbing Solutions, LLC | Pearland Plumber"
        description="Learn about Alternative Plumbing Solutions, LLC — a Pearland, TX based plumbing company serving the greater Houston area with residential and commercial plumbing services."
        path="/about"
        ogImage={heroImage}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="About Us"
        title="A Pearland Plumber Focused on Real Solutions"
        description="Alternative Plumbing Solutions, LLC is a local plumbing company serving Pearland, Friendswood, and the greater Houston area with residential and commercial plumbing services."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us' }]}
        image={heroImage}
      />

      {/* Company intro */}
      <section className="py-20 lg:py-28">
        <div className="container-base grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="prose-plumbing max-w-none">
            <p className="eyebrow">Our Company</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Simplifying the Plumbing Process
            </h2>
            <p>
              Alternative Plumbing Solutions, LLC is a plumbing company based in Pearland, Texas,
              serving Pearland, Friendswood, and the greater Houston area. We are equipped to
              handle all of your commercial and residential plumbing projects — and we are
              committed to delivering exceptional craftsmanship and service, no matter how big or
              small the job might be.
            </p>
            <p>
              We offer a wide range of plumbing services for homeowners and businesses in Pearland
              and the surrounding area. From water heater repair and installation to drain
              cleaning, sewer line inspection, gas piping, fixture installation, and new
              construction plumbing, our team is ready to simplify the plumbing process and keep
              your property protected.
            </p>
            <p>
              What sets us apart is our focus on finding alternative solutions. When a plumbing
              problem comes up, we look for the most effective, time-saving option for you — not
              just the most expensive one. Call us, and we will help you understand the issue and
              the best way forward.
            </p>
            <div className="mt-8 not-prose">
              <CallButton size="lg" label="Call Now" />
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
              <img
                src="https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                alt="Plumber installing a pipe with specialized tools"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-aqua-500 px-5 py-4 text-navy-950 shadow-xl sm:block">
              <p className="font-display text-2xl font-bold">Local</p>
              <p className="text-sm font-medium">Pearland, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What We Stand For</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Our Approach to Plumbing
            </h2>
            <p className="mt-4 text-lg text-navy-600 text-pretty">
              We keep it straightforward: diagnose the real problem, explain it clearly, and do
              quality work that lasts.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-navy-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service & contact summary */}
      <section className="py-20 lg:py-28">
        <div className="container-base grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-navy-900 p-8 text-white shadow-xl md:p-10">
            <Droplet className="h-10 w-10 text-aqua-400" fill="currentColor" />
            <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">Ready to Help</h2>
            <p className="mt-3 text-navy-200">
              Whether it is a dripping faucet, a water heater that has stopped working, or a full
              new construction plumbing project, call us. We serve both residential and commercial
              customers across Pearland, Friendswood, and the greater Houston area.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-navy-100">
                <CheckCircle2 className="h-5 w-5 text-aqua-400" /> Based in Pearland, TX
              </li>
              <li className="flex items-center gap-3 text-navy-100">
                <CheckCircle2 className="h-5 w-5 text-aqua-400" /> Open Monday–Saturday, 7 AM – 7 PM
              </li>
              <li className="flex items-center gap-3 text-navy-100">
                <CheckCircle2 className="h-5 w-5 text-aqua-400" /> Residential &amp; commercial plumbing
              </li>
              <li className="flex items-center gap-3 text-navy-100">
                <CheckCircle2 className="h-5 w-5 text-aqua-400" /> Water heaters, drains, sewer lines, gas piping &amp; more
              </li>
            </ul>
            <div className="mt-8">
              <CallButton size="lg" label="Call Now" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Call Us — We Answer
            </h2>
            <p className="mt-4 text-lg text-navy-600 text-pretty">
              The fastest way to get help is by phone. Call us, explain your plumbing issue, and we
              will confirm service availability and arrange the next steps.
            </p>
            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-aqua-600" />
                <div>
                  <dt className="text-sm font-medium text-navy-400">Phone</dt>
                  <dd>
                    <a href={`tel:${business.phoneTel}`} className="font-display text-lg font-bold text-navy-900 hover:text-aqua-600">
                      {business.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-aqua-600" />
                <div>
                  <dt className="text-sm font-medium text-navy-400">Address</dt>
                  <dd className="font-display text-lg font-bold text-navy-900">{business.address.full}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-aqua-600" />
                <div>
                  <dt className="text-sm font-medium text-navy-400">Hours</dt>
                  <dd className="font-display text-lg font-bold text-navy-900">{business.hoursSummary}</dd>
                </div>
              </div>
            </dl>
            <div className="mt-8">
              <Link to="/contact" className="btn-ghost">
                View Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <ReviewsSection />

      <CtaSection
        title="Let's Solve Your Plumbing Problem"
        subtitle="Call us now and speak directly with a Pearland plumber who can help."
      />
    </>
  );
}
