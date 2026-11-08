import Seo, { breadcrumbSchema } from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import { business } from '@/data/business';

export default function PrivacyPolicyPage() {
  const jsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ]);

  return (
    <>
      <Seo
        title="Privacy Policy | Alternative Plumbing Solutions, LLC"
        description="Privacy policy for Alternative Plumbing Solutions, LLC. Learn how we handle information on our website."
        path="/privacy-policy"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Alternative Plumbing Solutions, LLC handles information on this website."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy' }]}
      />

      <section className="py-20">
        <div className="container-prose">
          <div className="prose-plumbing max-w-none">
            <p className="text-sm text-navy-400">Last updated: November 2026</p>

            <p>
              This Privacy Policy describes how {business.legalName} ("we," "us," or "our") handles
              information collected through our website at {business.website} (the "Site"). By using
              the Site, you agree to the practices described in this policy.
            </p>

            <h2>Information We Do Not Collect</h2>
            <p>
              This website does not use online forms, booking tools, chat widgets, or any other
              lead-capture functionality. We do not ask you to submit personal information through
              the Site. The primary way we interact with customers is by telephone.
            </p>

            <h2>Information Collected Automatically</h2>
            <p>
              Like most websites, this Site may collect certain technical information automatically
              when you visit, which may include:
            </p>
            <ul>
              <li>Your IP address and approximate location</li>
              <li>The browser and device you are using</li>
              <li>The pages you visit and the links you click</li>
              <li>The referring website that brought you to the Site</li>
            </ul>
            <p>
              This information is used in aggregate to understand how the Site is used and to improve
              its content and performance.
            </p>

            <h2>Cookies and Analytics</h2>
            <p>
              The Site may use cookies or similar technologies for basic functionality and analytics.
              You can control or disable cookies through your browser settings. Disabling cookies
              will not prevent you from using the Site or calling us by phone.
            </p>

            <h2>Telephone Calls</h2>
            <p>
              When you call us at {business.phone}, standard telephone practices apply. Information
              you share during a call is used solely to understand and address your plumbing needs.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              The Site embeds a Google Maps listing and may link to third-party services such as
              Google Maps. These third parties have their own privacy policies, and we encourage you
              to review them. We do not control how third-party services handle your information.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              This Site is intended for adults seeking plumbing services. We do not knowingly collect
              information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, call us at {business.phone} or email
              us at {business.email}.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-navy-900 p-6 text-center text-white">
            <p className="font-display text-lg font-semibold">Questions? Call us.</p>
            <div className="mt-4 flex justify-center">
              <CallButton size="md" label="Call Now" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
