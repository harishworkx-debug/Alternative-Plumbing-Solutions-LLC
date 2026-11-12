import { useContext, useEffect } from 'react';
import { business } from '@/data/business';
import { SeoContext } from '@/context/seoContext';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeLink(rel: string) {
  document.head.querySelector(`link[rel="${rel}"]`)?.remove();
}

function setJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

export default function Seo({
  title,
  description,
  path = '',
  ogImage,
  jsonLd,
  noindex = false,
}: SeoProps) {
  const url = `${business.website}${path === '/' ? '/' : path}`;
  const fullTitle = title.includes(business.shortName) ? title : `${title} | ${business.shortName}`;
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const collector = useContext(SeoContext);
  if (collector) {
    collector.data = {
      title: fullTitle,
      description,
      url,
      canonicalUrl: noindex ? null : url,
      robots,
      ogImage,
      jsonLd,
    };
  }

  useEffect(() => {
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', robots);
    if (noindex) {
      removeLink('canonical');
    } else {
      setLink('canonical', url);
    }

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', business.name);
    setMeta('property', 'og:locale', 'en_US');
    if (ogImage) setMeta('property', 'og:image', ogImage);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    if (ogImage) setMeta('name', 'twitter:image', ogImage);

    if (jsonLd) {
      setJsonLd('page-jsonld', jsonLd);
    } else {
      removeJsonLd('page-jsonld');
    }

    return () => {
      removeJsonLd('page-jsonld');
    };
  }, [fullTitle, description, url, robots, noindex, ogImage, jsonLd]);

  return null;
}

// Reusable JSON-LD builders
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Plumber', 'LocalBusiness'],
  '@id': `${business.website}/#business`,
  name: business.name,
  legalName: business.legalName,
  telephone: business.phoneTel,
  email: business.email,
  url: business.website,
  image: `${business.website}/apple-touch-icon.svg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.address.geo.lat,
    longitude: business.address.geo.lng,
  },
  areaServed: [
    { '@type': 'City', name: 'Pearland, TX' },
    { '@type': 'City', name: 'Friendswood, TX' },
    { '@type': 'City', name: 'Houston, TX' },
    { '@type': 'City', name: 'Alvin, TX' },
    { '@type': 'City', name: 'Manvel, TX' },
    { '@type': 'City', name: 'League City, TX' },
    { '@type': 'City', name: 'Pasadena, TX' },
    { '@type': 'City', name: 'Webster, TX' },
    { '@type': 'City', name: 'Clear Lake, TX' },
    { '@type': 'City', name: 'Sugar Land, TX' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
  ],
  hasMap: business.googleMapsUrl,
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${business.website}/#organization`,
  name: business.name,
  legalName: business.legalName,
  url: business.website,
  logo: `${business.website}/apple-touch-icon.svg`,
  image: `${business.website}/apple-touch-icon.svg`,
  telephone: business.phoneTel,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: 'US',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${business.website}/#website`,
  name: business.name,
  url: business.website,
  publisher: { '@id': `${business.website}/#organization` },
  inLanguage: 'en-US',
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${business.website}${it.path}`,
    })),
  };
}

export function serviceSchema(
  serviceName: string,
  serviceDesc: string,
  path: string,
  areaServedCity?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDesc,
    provider: {
      '@type': 'Plumber',
      '@id': `${business.website}/#business`,
      name: business.name,
      url: business.website,
      telephone: business.phoneTel,
    },
    areaServed: areaServedCity
      ? { '@type': 'City', name: areaServedCity }
      : [
          { '@type': 'City', name: 'Pearland, TX' },
          { '@type': 'City', name: 'Friendswood, TX' },
          { '@type': 'City', name: 'Houston, TX' },
        ],
    url: `${business.website}${path}`,
  };
}

export function articleSchema(params: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  keywords: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${business.website}${params.path}`,
    },
    url: `${business.website}${params.path}`,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    keywords: params.keywords,
    ...(params.image ? { image: params.image } : {}),
    author: {
      '@type': 'Organization',
      '@id': `${business.website}/#organization`,
      name: business.name,
      url: business.website,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${business.website}/#organization`,
      name: business.name,
      url: business.website,
      logo: {
        '@type': 'ImageObject',
        url: `${business.website}/apple-touch-icon.svg`,
      },
    },
  };
}
