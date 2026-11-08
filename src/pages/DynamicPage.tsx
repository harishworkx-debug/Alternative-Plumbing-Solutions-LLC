import { useParams, Navigate } from 'react-router-dom';
import {
  getService,
  findLocation,
  parseServiceLocationSlug,
  getServiceUrl,
  getLocationUrl,
} from '@/data/business';
import ServiceAreaDetailPage from './ServiceAreaDetailPage';
import ServiceLocationPage from './ServiceLocationPage';
import NotFoundPage from './NotFoundPage';

/**
 * Universal dynamic router for top-level clean URLs:
 * 1. /plumber-[location] -> Service Area Landing Page
 * 2. /[service]-[location] -> Combined Service Landing Page
 * 3. /[service] -> Redirects to main location service page
 * 4. /[location] -> Redirects to /plumber-[location]
 * 5. Anything else -> 404
 */
export default function DynamicPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFoundPage />;
  }

  // 1. Plumber location landing page (/plumber-pearland-tx, /plumber-pearland, etc.)
  if (slug.startsWith('plumber-')) {
    const location = findLocation(slug);
    if (location) {
      return <ServiceAreaDetailPage />;
    }
    return <NotFoundPage />;
  }

  // 2. Direct location name without 'plumber-' prefix -> Redirect to /plumber-[location]
  const directLocation = findLocation(slug);
  if (directLocation) {
    return <Navigate to={getLocationUrl(directLocation.slug)} replace />;
  }

  // 3. Direct service slug without location -> Redirect to /[service]-[mainLocation]
  const directService = getService(slug);
  if (directService) {
    return <Navigate to={getServiceUrl(directService.slug)} replace />;
  }

  // 4. Combined service-location landing page (/[service]-[location])
  const parsed = parseServiceLocationSlug(slug);
  if (parsed) {
    return <ServiceLocationPage />;
  }

  // 5. Unrecognized URL
  return <NotFoundPage />;
}
