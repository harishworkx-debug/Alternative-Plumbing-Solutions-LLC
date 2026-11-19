import { CheckCircle2, ArrowRight, Flame, Droplet, Video, Zap, Wrench, Search } from 'lucide-react';
import { landingServices } from '../data/landingData';

export default function LandingServices() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'water-heaters':
        return <Flame className="h-6 w-6 text-aqua-400" />;
      case 'drain-cleaning':
        return <Droplet className="h-6 w-6 text-aqua-400" />;
      case 'sewer-inspection':
        return <Video className="h-6 w-6 text-aqua-400" />;
      case 'gas-piping':
        return <Zap className="h-6 w-6 text-aqua-400" />;
      case 'fixture-installation':
        return <Wrench className="h-6 w-6 text-aqua-400" />;
      case 'leak-detection':
      default:
        return <Search className="h-6 w-6 text-aqua-400" />;
    }
  };

  const scrollToContactWithService = (serviceName: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-select service in dropdown if form element exists
      const selectEl = document.querySelector<HTMLSelectElement>('#service-select');
      if (selectEl) {
        selectEl.value = serviceName;
      }
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-navy-50">
      <div className="container-base">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-aqua-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-aqua-800">
            Professional Plumbing Solutions
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
            Plumbing Services in Pearland, TX
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-700 leading-relaxed">
            Every service begins with a thorough diagnosis to identify the true source of your plumbing
            issue. We provide honest recommendations, upfront pricing, and durable workmanship.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {landingServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-3xl border border-navy-100 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-aqua-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-52 w-full overflow-hidden bg-navy-900">
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950/90 text-white shadow-lg border border-navy-700">
                  {getServiceIcon(service.id)}
                </div>
              </div>

              {/* Service Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold text-navy-950 group-hover:text-aqua-700 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm text-navy-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Bullet Points */}
                <div className="mt-5 border-t border-navy-100 pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400">
                    Key Problems Solved:
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {service.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-700">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-aqua-600 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-5 border-t border-navy-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToContactWithService(service.name)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-aqua-700 hover:text-aqua-800 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
