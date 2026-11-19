import { useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { SeoContext } from '@/context/seoContext';
import { business } from '@/data/business';
import { landingConfig, nearbyCities } from '../data/landingData';

interface LandingSeoProps {
  customPath?: string;
}

export default function LandingSeo({ customPath }: LandingSeoProps) {
  const location = useLocation();
  const currentPath = customPath || location.pathname || '/';

  // Base production origin from configuration
  const siteUrl = business.website;

  // Differentiate titles and canonicals so SSR prerender never encounters duplicate titles
  let title = 'Plumber in Pearland, TX | Professional Plumbing Services & Repairs';
  let canonicalPath = '/';

  if (currentPath === '/plumber-pearland-tx') {
    title = 'Plumber in Pearland, TX | Local Plumbing Services & Repairs';
    canonicalPath = '/plumber-pearland-tx';
  } else if (currentPath === '/home-page') {
    title = 'Plumber in Pearland, TX | Fast Plumbing Repairs & Installations';
    canonicalPath = '/home-page';
  }

  const description =
    'Professional plumbing services in Pearland, TX. Fast repairs, water heaters, drain cleaning & leak detection. Call (713) 501-1214 for upfront estimates.';
  const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '/' : canonicalPath}`;
  const pageUrl = `${siteUrl}${currentPath === '/' ? '/' : currentPath}`;
  const robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // Standalone JSON-LD Schema strictly using Niche + Location identity
  const schemaData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': ['Plumber', 'LocalBusiness'],
      '@id': `${siteUrl}/#plumber-pearland-tx`,
      name: landingConfig.identity,
      description,
      telephone: '+17135011214',
      url: pageUrl,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: landingConfig.address.street,
        addressLocality: landingConfig.address.city,
        addressRegion: landingConfig.address.state,
        postalCode: landingConfig.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: landingConfig.address.geo.lat,
        longitude: landingConfig.address.geo.lng,
      },
      areaServed: nearbyCities.map((c) => ({
        '@type': 'City',
        name: `${c.name}, TX`,
      })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: landingConfig.hours.openDays,
          opens: '07:00',
          closes: '19:00',
        },
      ],
    }),
    [siteUrl, description, pageUrl]
  );

  const schemaJson = useMemo(() => JSON.stringify(schemaData), [schemaData]);

  // SSR Prerender metadata collector
  const collector = useContext(SeoContext);
  if (collector) {
    collector.data = {
      title,
      description,
      url: pageUrl,
      canonicalUrl,
      robots,
      jsonLd: schemaData,
    };
  }

  // Client-side DOM head updates & cleanup
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: 'name' | 'property', key: string, val: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('name', 'description', description);
    setMeta('name', 'robots', robots);
    setLink('canonical', canonicalUrl);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:locale', 'en_US');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    // Injected schema with cleanup
    let scriptEl = document.getElementById('landing-jsonld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'landing-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = schemaJson;

    return () => {
      document.getElementById('landing-jsonld')?.remove();
    };
  }, [title, description, canonicalUrl, pageUrl, robots, schemaJson]);

  return null;
}
