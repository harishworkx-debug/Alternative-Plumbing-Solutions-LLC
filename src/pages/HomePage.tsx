import { Link } from 'react-router-dom';
import {
  Phone, Droplet, Wrench, Clock, ShieldCheck, MapPin,
  ArrowRight, CheckCircle2, Search, Building2, Home as HomeIcon,
  Flame, Droplets, Bath, AlertTriangle, Star, BookOpen,
} from 'lucide-react';
import Seo, {
  localBusinessSchema, organizationSchema, websiteSchema, breadcrumbSchema,
} from '@/components/Seo';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import ReviewsSection from '@/components/ReviewsSection';
import { ServiceIcon } from '@/components/ServiceIcon';
import { business, services, locations, getServiceUrl, getLocationUrl } from '@/data/business';
import { articles } from '@/data/articles';

const heroImage =
  'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

const homeFaqs = [
  {
    q: 'What areas does Alternative Plumbing Solutions serve?',
    a: 'We are based in Pearland, TX and serve Pearland, Friendswood, and the greater Houston area. Call us with your address and we will confirm service availability for your location.',
  },
  {
    q: 'What plumbing services do you offer?',
    a: 'We offer water heater repair and installation, drain cleaning, sewer line inspection, gas piping installation and repair, fixture installation, new construction plumbing, general plumbing repair, and leak detection — for both residential and commercial properties.',
  },
  {
    q: 'What are your business hours?',
    a: 'We are open Monday through Saturday, 7:00 AM to 7:00 PM. We are closed on Sunday. Call us during business hours and we will help you with your plumbing problem.',
  },
  {
    q: 'Do you work on both residential and commercial plumbing?',
    a: 'Yes. We handle both residential and commercial plumbing projects, from single-home repairs to new construction plumbing for commercial builds.',
  },
  {
    q: 'How do I schedule a plumbing service?',
    a: 'All scheduling is handled by phone. Call us at (713) 501-1214, describe your plumbing issue, and we will confirm availability and arrange the next steps directly with you.',
  },
  {
    q: 'Should I get a sewer line inspection before buying an older home?',
    a: 'Yes. If the home is more than 20 years old, we strongly recommend a camera sewer line inspection before closing. It can reveal hidden cracks, root intrusion, or bellied sections that would be expensive to discover after purchase.',
  },
  {
    q: 'Can you install a natural gas generator connection?',
    a: 'Yes. We install gas piping for natural gas generator connection points, including the pipe and fittings required for a safe hookup. Call us to discuss your generator setup.',
  },
  {
    q: 'Do you offer new construction plumbing?',
    a: 'Yes. We handle all the plumbing aspects of new construction and remodeling projects — from underground rough-in to final fixture installation — for both residential and commercial builds.',
  },
  {
    q: 'What should I do if I have a burst pipe or active leak?',
    a: 'Shut off your main water supply if you can, then call us right away at (713) 501-1214. We will work to get a plumber to you as quickly as possible to stop the leak and assess the damage.',
  },
];

const processSteps = [
  {
    icon: Phone,
    title: 'Call Our Team',
    desc: 'Pick up the phone and call us at (713) 501-1214. You will speak directly with our plumbing team.',
  },
  {
    icon: Wrench,
    title: 'Explain the Issue',
    desc: 'Tell us what is happening — what you see, hear, or smell. The more detail you give, the faster we can help.',
  },
  {
    icon: ShieldCheck,
    title: 'Confirm Availability',
    desc: 'We confirm that we serve your area and when a plumber can be there. No online forms to fill out.',
  },
  {
    icon: CheckCircle2,
    title: 'Arrange Next Steps',
    desc: 'We work out the details directly by phone — pricing, timing, and what to expect — so you are never left guessing.',
  },
];

const whyChoose = [
  {
    icon: MapPin,
    title: 'Based in Pearland',
    desc: 'We are a local Pearland plumbing company, so we know the area, the housing stock, and the common plumbing issues our neighbors face.',
  },
  {
    icon: Wrench,
    title: 'Residential & Commercial',
    desc: 'From a single-home faucet repair to full new construction plumbing, we handle both residential and commercial work.',
  },
  {
    icon: Search,
    title: 'Alternative Solutions',
    desc: 'We focus on finding alternative, time-saving solutions for our customers — not just the most expensive option.',
  },
  {
    icon: Clock,
    title: 'Six Days a Week',
    desc: 'We are available Monday through Saturday, 7 AM to 7 PM, so you can reach a real plumber when you need one.',
  },
];

const serviceTypeFeatures = [
  { icon: HomeIcon, label: 'Home Repairs' },
  { icon: Building2, label: 'Commercial' },
  { icon: Flame, label: 'Water Heaters' },
  { icon: Droplets, label: 'Drain Cleaning' },
  { icon: Bath, label: 'Fixtures' },
  { icon: Search, label: 'Leak Detection' },
];

export default function HomePage() {
  const jsonLd = [
    localBusinessSchema,
    organizationSchema,
    websiteSchema,
    breadcrumbSchema([{ name: 'Home', path: '/' }]),
  ];

  return (
    <>
      <Seo
        title="Alternative Plumbing Solutions | Plumber in Pearland, TX"
        description="Looking for a local plumber in Pearland, TX? Explore plumbing repairs, drain cleaning, water heater service, and leak detection. Call (713) 501-1214."
        path="/"
        ogImage={heroImage}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <img
          src={heroImage}
          alt="Professional plumber installing steel pipes"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-navy-900/60" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-aqua-500/15 blur-3xl" aria-hidden="true" />

        <div className="container-base relative py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full bg-aqua-500/10 px-4 py-1.5 text-sm font-semibold text-aqua-300 ring-1 ring-aqua-400/30 animate-fade-in-down">
                <Droplet className="h-4 w-4" fill="currentColor" />
                Local Plumber · Pearland, TX
              </span>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 transition-all hover:bg-white/20 animate-fade-in-down"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-white/30 text-white/30'}`} />
                  ))}
                </div>
                <span>4.0 (48 Google Reviews)</span>
              </a>
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white text-balance animate-fade-in-up sm:text-5xl lg:text-6xl">
              Professional Plumbing Services in Pearland, TX
            </h1>
            <p className="mt-5 max-w-xl text-lg text-navy-200 text-pretty animate-fade-in-up animate-delay-100">
              Alternative Plumbing Solutions is a trusted plumbing company and plumbing contractor in
              Pearland, TX. From residential plumber repairs, drain cleaning, and water heater
              services to leak detection and commercial plumbing installations, call us for service
              information and an estimate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-in-up animate-delay-200">
              <CallButton size="lg" variant="primary" label="Call Now" />
              <Link to="/services" className="btn-outline-light">
                View Plumbing Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-200 animate-fade-in-up animate-delay-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-aqua-400" /> Residential &amp; Commercial
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-aqua-400" /> Mon–Sat, 7 AM – 7 PM
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-aqua-400" /> Based in Pearland, TX
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-base grid grid-cols-2 gap-6 py-8 sm:grid-cols-3 md:grid-cols-5">
          <TrustStat icon={Star} label="Google Reviews" value="4.0 ★ (48 Reviews)" />
          <TrustStat icon={MapPin} label="Based In" value="Pearland, TX" />
          <TrustStat icon={Clock} label="Open" value="6 Days a Week" />
          <TrustStat icon={Building2} label="Service Type" value="Residential & Commercial" />
          <TrustStat icon={Droplet} label="Service Areas" value="10 Houston Areas" />
        </div>
      </section>

      {/* Intro / Emergency blurb */}
      <section className="py-20 lg:py-24">
        <div className="container-base">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
                <img
                  src="https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                  alt="Plumber fixing pipes with professional tools"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-aqua-500 px-5 py-4 text-navy-950 shadow-xl sm:block">
                <p className="font-display text-xl font-bold">{services.length} Services</p>
                <p className="text-sm font-medium">Home &amp; Commercial</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow">Plumbing Company Pearland, TX</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
                Your Local Plumber in Pearland — Ready When You Need Us
              </h2>
              <p className="mt-4 text-lg text-navy-600 text-pretty">
                Whether you need a residential plumber in Pearland for a dripping faucet or a
                commercial plumbing contractor in Pearland, TX, Alternative Plumbing Solutions is
                equipped to help. As a local plumbing company in Pearland, we deliver straightforward,
                dependable workmanship across the Greater Houston area.
              </p>
              <p className="mt-4 text-navy-600 text-pretty">
                We know plumbing problems do not wait. That is why we keep it simple — call us,
                explain what is going on, and we will help you figure out the best way forward. No
                forms, no waiting for an email reply. Just a real conversation with a plumber who
                cares about getting your problem solved.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {serviceTypeFeatures.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3.5 py-2 text-sm font-medium text-navy-700 ring-1 ring-navy-100"
                  >
                    <f.icon className="h-4 w-4 text-aqua-600" />
                    {f.label}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <CallButton size="md" label="Call Now" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Professional Plumbing Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Plumbing Services in Pearland, TX
            </h2>
            <p className="mt-4 text-lg text-navy-600 text-pretty">
              Explore our water heater services, drain cleaning, leak detection, plumbing repairs,
              and installations for homes and businesses in Pearland, TX.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={getServiceUrl(s.slug)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-lg">
                    <ServiceIcon name={s.icon} className="h-5 w-5 text-navy-800" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-navy-900">{s.shortName}</h3>
                  <p className="mt-2 flex-1 text-sm text-navy-600 leading-relaxed">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600 transition-colors group-hover:text-aqua-700">
                    {s.seo.primaryServiceName} in Pearland
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-navy">
              See All Plumbing Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Who We Serve</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Residential &amp; Commercial Plumbing in Pearland
            </h2>
            <p className="mt-4 text-lg text-navy-600 text-pretty">
              Whether you need a residential plumber in Pearland or a commercial plumbing contractor,
              we have the tools and experience to get the job done right.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Residential */}
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-xl md:p-10">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-aqua-500/15 blur-3xl" aria-hidden="true" />
              <HomeIcon className="h-10 w-10 text-aqua-400" />
              <h3 className="mt-5 font-display text-2xl font-bold">Residential Plumbing</h3>
              <p className="mt-3 text-navy-200">
                From water heater repairs and drain cleaning to fixture installation and sewer line
                inspections — we keep your home's plumbing working the way it should.
              </p>
              <ul className="mt-6 space-y-3">
                {['Water heater repair & installation', 'Drain cleaning & clog removal', 'Leak detection & pipe repair', 'Fixture & faucet installation', 'Sewer line camera inspection', 'Gas piping for appliances & generators'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy-100">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-aqua-400" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CallButton size="md" label="Call for Home Service" />
              </div>
            </div>

            {/* Commercial */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-navy-100 bg-white p-8 shadow-xl md:p-10">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-aqua-500/10 blur-3xl" aria-hidden="true" />
              <Building2 className="h-10 w-10 text-navy-700" />
              <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">Commercial Plumbing</h3>
              <p className="mt-3 text-navy-600">
                A plumbing problem can shut a business down. We handle commercial plumbing repairs,
                installations, and new construction — so your business stays up and running.
              </p>
              <ul className="mt-6 space-y-3">
                {['Commercial plumbing repair', 'New construction plumbing', 'Gas piping installation & repair', 'Water heater service for businesses', 'Drain & sewer line services', 'Fixture installation for commercial spaces'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-aqua-600" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CallButton size="md" variant="navy" label="Call for Business Service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-base">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
                A Local Plumber Focused on Real Solutions
              </h2>
              <p className="mt-4 text-lg text-navy-600 text-pretty">
                Alternative Plumbing Solutions, LLC is a Pearland-based plumbing company serving
                homeowners and businesses across the greater Houston area. We focus on finding
                alternative, time-saving solutions for our customers — and delivering
                craftsmanship that holds up.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {whyChoose.map((w) => (
                  <div key={w.title} className="flex gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua-600 ring-1 ring-aqua-200">
                      <w.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-navy-900">{w.title}</h3>
                      <p className="mt-1 text-sm text-navy-600 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
                <img
                  src="https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                  alt="Plumber holding a wrench, ready to help"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900">
                    <Phone className="h-5 w-5 text-aqua-400" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-navy-400">Call Us</p>
                    <a href={`tel:${business.phoneTel}`} className="font-display text-lg font-bold text-navy-900">
                      {business.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Where We Work</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Service Areas in Greater Houston
            </h2>
            <p className="mt-4 text-lg text-navy-600 text-pretty">
              We are based in Pearland and serve surrounding communities across the greater
              Houston area. Click your city to see the services available near you.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to={getLocationUrl(l.slug)}
                className="group relative overflow-hidden rounded-2xl bg-navy-900 p-7 text-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-aqua-500/15 blur-2xl transition-all group-hover:bg-aqua-500/25" />
                <MapPin className="h-8 w-8 text-aqua-400" />
                <h3 className="mt-4 font-display text-2xl font-bold">{l.city}, {l.state}</h3>
                <p className="mt-2 text-sm text-navy-200">{l.county}</p>
                <p className="mt-4 text-sm text-navy-300 leading-relaxed">
                  {l.intro.slice(0, 110)}…
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-300">
                  Plumber in {l.city}, {l.state}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/service-areas" className="btn-navy">
              Explore All Service Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* Process */}
      <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-aqua-500/15 blur-3xl" aria-hidden="true" />
        <div className="container-base relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-aqua-400">How It Works</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white text-balance sm:text-4xl">
              Getting Help Is Simple — Just Call
            </h2>
            <p className="mt-4 text-lg text-navy-200 text-pretty">
              No online forms, no booking pages. Everything is handled directly by phone.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-navy-800/60 p-6 ring-1 ring-navy-700/50 backdrop-blur"
              >
                <span className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-aqua-500 font-display text-sm font-bold text-navy-950 shadow-lg">
                  {i + 1}
                </span>
                <step.icon className="h-8 w-8 text-aqua-400" />
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-navy-200 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CallButton size="lg" label="Call Now" />
          </div>
        </div>
      </section>

      {/* Urgent plumbing highlight */}
      <section className="py-20 lg:py-24">
        <div className="container-base">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="eyebrow">Urgent Plumbing Problems</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
                Shut Off Water First — Then Call {business.phone}
              </h2>
              <p className="mt-4 text-navy-600 text-pretty">
                A burst pipe, active leak, or sudden loss of hot water can damage floors and walls
                quickly. Close your main shutoff valve right away and call our Pearland office at{' '}
                {business.phone} ({business.hoursSummary}) to arrange help.
              </p>
              <div className="mt-6">
                <CallButton size="lg" label="Call Now" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                { icon: Droplets, title: 'Burst Pipes', desc: 'A cracked or frozen pipe can flood a room quickly. Shut off your water supply and call us right away.' },
                { icon: Flame, title: 'No Hot Water', desc: 'A failing tank or tankless water heater disrupts your household. Call us for diagnostics and repair options.' },
                { icon: AlertTriangle, title: 'Active Leaks', desc: 'Seeing damp drywall or pooling water? We locate the leak source and repair compromised pipe sections.' },
                { icon: Wrench, title: 'Sewer Backups', desc: 'Multiple fixtures backing up indicates a main drain restriction. We clear blockages and inspect the line.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <item.icon className="h-7 w-7 text-aqua-600" />
                  <h3 className="mt-3 font-display text-base font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Plumbing Guides */}
      <section className="border-t border-navy-100 py-20 lg:py-24">
        <div className="container-base">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Homeowner Guides</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
                Helpful Plumbing Advice &amp; Troubleshooting
              </h2>
              <p className="mt-3 max-w-2xl text-navy-600">
                Learn common warning signs for drain clogs, water heater failures, hidden pipe
                leaks, and sewer camera inspections.
              </p>
            </div>
            <Link to="/guides" className="btn-ghost self-start md:self-auto">
              <BookOpen className="h-4 w-4 text-aqua-600" />
              All Plumbing Guides
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((guide) => (
              <Link
                key={guide.slug}
                to={`/guides/${guide.slug}`}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-aqua-50 px-3 py-1 text-xs font-semibold text-aqua-700">
                  {guide.category}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900 group-hover:text-aqua-700">
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-navy-600 leading-relaxed">
                  {guide.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-600">
                  {guide.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Questions &amp; Answers</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-navy-600 text-pretty">
              Common questions about our plumbing services. Have another? Call us.
            </p>
          </div>
          <FaqList items={homeFaqs} className="mt-12" />
          <div className="mt-10 text-center">
            <CallButton size="lg" label="Call Now" />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function TrustStat({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-navy-400">{label}</p>
        <p className="truncate font-display text-sm font-bold text-navy-900 sm:text-base">{value}</p>
      </div>
    </div>
  );
}
