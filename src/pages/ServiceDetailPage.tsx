import { useParams, Navigate } from 'react-router-dom';
import { getService, getServiceUrl } from '@/data/business';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = serviceSlug ? getService(serviceSlug) : null;

  if (!service) return <Navigate to="/404" replace />;

  // Redirect /services/:serviceSlug directly to the main location URL /{serviceSlug}-{mainLocation}
  return <Navigate to={getServiceUrl(service.slug)} replace />;
}
