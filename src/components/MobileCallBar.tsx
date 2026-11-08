import { Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="mx-auto max-w-md p-3">
        <a
          href={`tel:${business.phoneTel}`}
          className="flex items-center justify-center gap-2.5 rounded-2xl bg-aqua-500 px-6 py-4 text-base font-bold text-navy-950 shadow-2xl shadow-navy-950/40 ring-1 ring-aqua-300/50 transition active:scale-[0.98]"
          aria-label={`Call ${business.name} at ${business.phone}`}
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-navy-950/15">
            <Phone className="h-4 w-4" strokeWidth={2.75} />
          </span>
          Call Now — {business.phone}
        </a>
      </div>
    </div>
  );
}
