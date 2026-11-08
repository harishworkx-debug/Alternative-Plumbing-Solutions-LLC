import { Phone } from 'lucide-react';
import { business } from '@/data/business';
import CallButton from './CallButton';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CtaSection({
  title = 'Have a Plumbing Problem? Call Us Now.',
  subtitle = 'Speak directly with a trusted Pearland plumber. We will help you understand the issue and arrange the next steps by phone.',
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-aqua-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-aqua-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-base relative py-16 text-center md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-aqua-500/15 ring-1 ring-aqua-400/30">
            <Phone className="h-7 w-7 text-aqua-300" strokeWidth={2.25} />
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold text-white text-balance sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-navy-200 text-pretty">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton size="lg" variant="primary" label="Call Now" />
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              View on Google Maps
            </a>
          </div>
          <p className="mt-6 text-sm text-navy-300">{business.hoursSummary}</p>
        </div>
      </div>
    </section>
  );
}
