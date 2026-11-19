import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import LandingHeader from './components/LandingHeader';
import LandingHero from './components/LandingHero';
import LandingServices from './components/LandingServices';
import LandingAbout from './components/LandingAbout';
import LandingServiceArea from './components/LandingServiceArea';
import LandingWhyUs from './components/LandingWhyUs';
import LandingFaq from './components/LandingFaq';
import LandingContact from './components/LandingContact';
import LandingFooter from './components/LandingFooter';
import LandingSeo from './components/LandingSeo';
import { landingConfig } from './data/landingData';

export default function StandaloneLandingPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If not visiting an anchor directly, scroll to top on mount
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-navy-900 antialiased selection:bg-aqua-500 selection:text-navy-950">
      {/* Isolated SEO and Dynamic JSON-LD Schema (Zero company name) */}
      <LandingSeo />

      {/* Standalone Landing Navigation */}
      <LandingHeader />

      {/* Main Single-Page Anchor Flow */}
      <main className="flex-1">
        <LandingHero />
        <LandingServices />
        <LandingAbout />
        <LandingServiceArea />
        <LandingWhyUs />
        <LandingFaq />
        <LandingContact />
      </main>

      {/* Standalone Landing Footer */}
      <LandingFooter />

      {/* Mobile Sticky Quick-Call Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-navy-800 p-3 sm:hidden shadow-2xl">
        <a
          href={landingConfig.phoneHref}
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-aqua-500 py-3 text-base font-extrabold text-navy-950 shadow-lg shadow-aqua-500/25 active:scale-98 transition-transform"
        >
          <Phone className="h-5 w-5" />
          <span>Call {landingConfig.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
