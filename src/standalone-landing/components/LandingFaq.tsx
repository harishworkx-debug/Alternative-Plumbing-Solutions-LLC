import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { landingFaqs, landingConfig } from '../data/landingData';

export default function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-navy-50">
      <div className="container-base">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-aqua-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-aqua-800">
            Common Inquiries
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-700 leading-relaxed">
            Clear answers to common questions about plumbing repairs, local Pearland permits, emergency
            steps, and water heaters.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {landingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-navy-200 bg-white transition-all shadow-sm hover:border-aqua-300"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-display text-base sm:text-lg font-bold text-navy-950 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-aqua-600 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-navy-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-aqua-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-navy-100 px-5 pb-6 pt-3 sm:px-6 sm:pb-6 text-sm sm:text-base text-navy-600 leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mx-auto mt-10 max-w-xl text-center">
          <p className="text-sm text-navy-600">
            Have a question about a specific repair or plumbing installation in Pearland?
          </p>
          <div className="mt-4">
            <a
              href={landingConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-5 py-3 text-sm font-bold text-white hover:bg-navy-850 hover:text-aqua-300 transition-colors shadow-md"
            >
              <Phone className="h-4 w-4 text-aqua-400" />
              <span>Call {landingConfig.phoneDisplay} to Speak With a Specialist</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
