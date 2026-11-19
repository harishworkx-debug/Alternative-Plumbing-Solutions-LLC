import { ShieldCheck, MapPin, Calculator, Search, CheckCircle2 } from 'lucide-react';
import { whyChooseUsPillars, landingConfig } from '../data/landingData';

export default function LandingWhyUs() {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="h-8 w-8 text-aqua-400" />;
      case 1:
        return <MapPin className="h-8 w-8 text-aqua-400" />;
      case 2:
        return <Calculator className="h-8 w-8 text-aqua-400" />;
      case 3:
      default:
        return <Search className="h-8 w-8 text-aqua-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="container-base">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-800">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
            Reliable Standards You Can Count On
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-700 leading-relaxed">
            Plumbing repairs shouldn&apos;t come with surprises. Here are the core professional
            standards applied to every service call in Pearland and surrounding communities.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-3xl border border-navy-100 bg-navy-50/50 p-6 sm:p-7 transition-all duration-300 hover:border-aqua-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-white shadow-md shadow-navy-950/20">
                {getPillarIcon(index)}
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-navy-950 leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-navy-600 leading-relaxed flex-1">
                {pillar.description}
              </p>
              <div className="mt-5 border-t border-navy-100 pt-4 flex items-center gap-1.5 text-xs font-bold text-aqua-700">
                <CheckCircle2 className="h-4 w-4 text-aqua-600" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 rounded-3xl bg-navy-900 p-8 sm:p-10 text-white text-center shadow-2xl">
          <h3 className="font-display text-2xl sm:text-3xl font-bold">
            Need an Honest Assessment for Your Plumbing Problem?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-navy-200 text-sm sm:text-base">
            Call us directly to discuss your symptoms. We provide upfront guidance and can schedule a
            qualified technician to evaluate your Pearland property.
          </p>
          <div className="mt-6">
            <a
              href={landingConfig.phoneHref}
              className="inline-flex items-center gap-3 rounded-xl bg-aqua-500 px-6 py-3.5 text-base font-bold text-navy-950 shadow-lg shadow-aqua-500/25 hover:bg-aqua-400 transition-all hover:scale-105"
            >
              <span>Call {landingConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
