import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';
import { SeoContext, type SeoCollector } from '@/context/seoContext';
import {
  business,
  services,
  locations,
  getLocationUrl,
  serviceLocationSlug,
} from '@/data/business';
import { articles } from '@/data/articles';

export const siteUrl = business.website;

export function getIndexableRoutes(): string[] {
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/service-areas',
    '/contact',
    '/guides',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  const locationRoutes = locations.map((loc) => getLocationUrl(loc.slug));

  const serviceLocationRoutes = services.flatMap((service) =>
    locations.map((location) => `/${serviceLocationSlug(service.slug, location.slug)}`)
  );

  const articleRoutes = articles.map((article) => `/guides/${article.slug}`);

  return [...staticRoutes, ...locationRoutes, ...serviceLocationRoutes, ...articleRoutes];
}

export function render(url: string) {
  const collector: SeoCollector = { data: null };

  const html = renderToString(
    <StrictMode>
      <SeoContext.Provider value={collector}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </SeoContext.Provider>
    </StrictMode>
  );

  return {
    html,
    seo: collector.data,
  };
}

