import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesIndexPage from '@/pages/ServicesIndexPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServiceAreasIndexPage from '@/pages/ServiceAreasIndexPage';
import ServiceAreaDetailPage from '@/pages/ServiceAreaDetailPage';
import DynamicPage from '@/pages/DynamicPage';
import ContactPage from '@/pages/ContactPage';
import GuidesIndexPage from '@/pages/GuidesIndexPage';
import GuideDetailPage from '@/pages/GuideDetailPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import StandaloneLandingPage from '@/standalone-landing/StandaloneLandingPage';
import { USE_LANDING_PAGE_AS_HOME } from '@/siteMode';

function MainSiteLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      {/* 🚀 Standalone Landing Page Routes (Zero Main Website Layout/Branding) */}
      {USE_LANDING_PAGE_AS_HOME && <Route path="/" element={<StandaloneLandingPage />} />}
      {USE_LANDING_PAGE_AS_HOME && (
        <Route path="/plumber-pearland-tx" element={<StandaloneLandingPage />} />
      )}
      <Route path="/home-page" element={<StandaloneLandingPage />} />

      {/* 🏛️ Main Multi-Page Website Routes (Inside Original Layout) */}
      <Route element={<MainSiteLayout />}>
        {!USE_LANDING_PAGE_AS_HOME && <Route path="/" element={<HomePage />} />}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesIndexPage />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
        <Route path="/service-areas" element={<ServiceAreasIndexPage />} />
        <Route path="/service-areas/:locationSlug" element={<ServiceAreaDetailPage />} />
        <Route path="/service-area" element={<Navigate to="/service-areas" replace />} />
        <Route path="/service-area/:locationSlug" element={<ServiceAreaDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/guides" element={<GuidesIndexPage />} />
        <Route path="/guides/:slug" element={<GuideDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/:slug" element={<DynamicPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
