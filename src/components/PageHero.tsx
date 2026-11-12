import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  image?: string;
  children?: React.ReactNode;
}

export default function PageHero({ eyebrow, title, description, breadcrumbs, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/70" />
        </>
      )}
      {!image && (
        <>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-aqua-500/15 blur-3xl" aria-hidden="true" />
        </>
      )}
      <div className="container-base relative py-12 md:py-16 lg:py-20">
        <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-navy-300" aria-label="Breadcrumb">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {b.path ? (
                <Link to={b.path} className="transition-colors hover:text-aqua-300">
                  {b.name}
                </Link>
              ) : (
                <span className="text-navy-200">{b.name}</span>
              )}
              {i < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-navy-400" />}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <p className="eyebrow text-aqua-400">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-navy-200 text-pretty">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
