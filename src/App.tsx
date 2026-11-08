import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesIndexPage from '@/pages/ServicesIndexPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServiceAreasIndexPage from '@/pages/ServiceAreasIndexPage';
import ServiceAreaDetailPage from '@/pages/ServiceAreaDetailPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/service-areas" element={<ServiceAreasIndexPage />} />
          <Route path="/service-areas/:locationSlug" element={<ServiceAreaDetailPage />} />
          <Route path="/plumber-:locationSlug" element={<ServiceAreaDetailPage />} />
          <Route path="/:serviceLocationSlug" element={<ServiceLocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
