import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import { landingConfig, landingServices } from '../data/landingData';

export default function LandingContact() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(landingServices[0].name);
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form client-side validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const cleanDigits = phoneNumber.replace(/\D/g, '');
    if (cleanDigits.length < 10) {
      setErrorMsg('Please enter a valid 10-digit telephone number.');
      return;
    }

    if (!message.trim()) {
      setErrorMsg('Please describe your plumbing issue or service need.');
      return;
    }

    setSubmitting(true);

    // Simulate submission with immediate confirmation feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setMessage('');
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container-base">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-800">
            Get in Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
            Contact a Pearland Plumbing Specialist
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-700 leading-relaxed">
            Call directly for immediate dispatch during business hours, or submit the service inquiry
            form below for upfront pricing and scheduling.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Call & Physical Base Cards (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Primary Direct Call Card */}
            <div className="rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-7 text-white shadow-xl border border-navy-800">
              <span className="inline-flex items-center gap-2 rounded-full bg-aqua-500/20 px-3 py-1 text-xs font-bold text-aqua-400 border border-aqua-500/30">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Direct Telephone Line
              </span>

              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                Call for Fast Pearland Dispatch
              </h3>
              <p className="mt-2 text-xs text-navy-300">
                Speak directly with a licensed plumbing technician to discuss your symptoms and get an
                honest estimate.
              </p>

              <a
                href={landingConfig.phoneHref}
                className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-aqua-500 py-4 text-xl font-extrabold text-navy-950 shadow-lg shadow-aqua-500/30 hover:bg-aqua-400 transition-all hover:scale-102"
              >
                <Phone className="h-6 w-6" />
                <span>{landingConfig.phoneDisplay}</span>
              </a>

              <p className="mt-3 text-center text-xs text-navy-400">
                Direct phone support • Mon–Sat 7:00 AM – 7:00 PM
              </p>
            </div>

            {/* Physical Location Card */}
            <div className="rounded-3xl border border-navy-200 bg-navy-50/60 p-6 sm:p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-aqua-600 shadow-sm border border-navy-100">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-navy-950">
                    Physical Service Base
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-navy-800">
                    {landingConfig.address.street}
                  </p>
                  <p className="text-xs text-navy-600">
                    {landingConfig.address.city}, {landingConfig.address.state}{' '}
                    {landingConfig.address.zip} ({landingConfig.address.county})
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-navy-200/80 pt-4 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-navy-700 shadow-sm border border-navy-100">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-navy-950">
                    Operating Hours
                  </h4>
                  <p className="mt-1 text-xs text-navy-700">
                    <strong>Monday – Saturday:</strong> {landingConfig.hours.monSat}
                  </p>
                  <p className="text-xs text-navy-500">
                    <strong>Sunday:</strong> {landingConfig.hours.sunday}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-navy-200/80 pt-4 flex items-center gap-2 text-xs text-navy-600">
                <Shield className="h-4 w-4 text-aqua-600 flex-shrink-0" />
                <span>TSBPE standards &amp; City of Pearland permit compliance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Service Inquiry Form (7 cols) */}
          <div className="rounded-3xl border border-navy-200 bg-white p-7 sm:p-9 shadow-xl lg:col-span-7">
            <h3 className="font-display text-2xl font-bold text-navy-950">
              Request a Service Estimate
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              Fill out the details below. We review requests promptly and respond during operating
              hours.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center animate-in fade-in duration-300">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="font-display text-xl font-bold text-emerald-900">
                  Inquiry Successfully Received!
                </h4>
                <p className="mt-2 text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. A Pearland plumbing specialist will call you
                  shortly at <strong>{phoneNumber}</strong> to discuss your{' '}
                  <strong>{selectedService}</strong> request.
                </p>
                <div className="mt-5 border-t border-emerald-200 pt-4">
                  <p className="text-xs text-emerald-700">
                    Need immediate emergency help? Call us now at{' '}
                    <a
                      href={landingConfig.phoneHref}
                      className="font-bold underline hover:text-emerald-900"
                    >
                      {landingConfig.phoneDisplay}
                    </a>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-800 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {errorMsg && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-semibold text-red-700">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Miller"
                      className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-400 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone-number"
                      className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone-number"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. (713) 555-0123"
                      className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-400 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service-select"
                    className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5"
                  >
                    Select Plumbing Service Needed *
                  </label>
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20"
                  >
                    {landingServices.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message-text"
                    className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5"
                  >
                    Describe Your Plumbing Issue or Request *
                  </label>
                  <textarea
                    id="message-text"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you are experiencing (e.g., water heater leaking from base, slow bathroom drain, sudden loss of water pressure)..."
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-400 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy-950 py-4 text-base font-bold text-white shadow-lg hover:bg-navy-850 hover:text-aqua-300 transition-all disabled:opacity-60"
                  >
                    {submitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Service Request</span>
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-navy-500">
                    Your information is used strictly to provide you with plumbing assistance.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
