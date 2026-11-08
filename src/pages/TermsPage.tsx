import Seo, { breadcrumbSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import { business } from '@/data/business';

export default function TermsPage() {
  const jsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ]);

  return (
    <>
      <Seo
        title="Terms & Conditions | Alternative Plumbing Solutions, LLC"
        description="Terms and conditions for the Alternative Plumbing Solutions, LLC website."
        path="/terms-and-conditions"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that govern your use of the Alternative Plumbing Solutions, LLC website."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Terms & Conditions' }]}
      />

      <section className="py-20">
        <div className="container-prose">
          <div className="prose-plumbing max-w-none">
            <p className="text-sm text-navy-400">Last updated: November 2026</p>

            <p>
              These Terms and Conditions govern your use of the website operated by
              {' '}{business.legalName} ("we," "us," or "our") at {business.website} (the "Site"). By
              accessing or using the Site, you agree to these terms. If you do not agree, please do
              not use the Site.
            </p>

            <h2>Use of the Site</h2>
            <p>
              This Site provides information about our plumbing services, service areas, and
              business contact details. The Site is intended for personal, non-commercial use. You
              agree not to misuse the Site, attempt to gain unauthorized access to it, or interfere
              with its operation.
            </p>

            <h2>No Online Booking or Estimates</h2>
            <p>
              This Site does not offer online booking, appointment scheduling, quote requests, or
              estimate forms. All service requests are handled by telephone. Calling us does not
              create a contractual relationship until a service is agreed upon by both parties.
            </p>

            <h2>Service Availability</h2>
            <p>
              We serve Pearland, Friendswood, and the greater Houston area. Service availability
              depends on your location, the nature of the work, and our current schedule. The
              information on this Site about services and service areas is provided for general
              guidance and does not guarantee availability for every request.
            </p>

            <h2>No Warranties</h2>
            <p>
              The information on this Site is provided "as is" without warranties of any kind, either
              express or implied. We do not guarantee that the information is accurate, complete, or
              current at all times. Plumbing advice provided on the Site is general in nature and is
              not a substitute for an in-person assessment by a qualified plumber.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {business.legalName} shall not be liable for
              any direct, indirect, incidental, or consequential damages arising from your use of the
              Site or reliance on any information it contains.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites, including Google Maps. We are not
              responsible for the content, accuracy, or practices of any third-party website.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms and Conditions at any time. Continued use of the Site after
              changes are posted constitutes your acceptance of the updated terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms and Conditions, call us at {business.phone} or
              email us at {business.email}.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-navy-900 p-6 text-center text-white">
            <p className="font-display text-lg font-semibold">Need to talk to us? Call.</p>
            <div className="mt-4 flex justify-center">
              <CallButton size="md" label="Call Now" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
