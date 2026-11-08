import { Phone } from 'lucide-react';
import { business } from '@/data/business';

interface CallButtonProps {
  variant?: 'primary' | 'navy' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showNumber?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-6 py-3.5 text-base gap-2',
  lg: 'px-7 py-4 text-lg gap-2.5',
};

const variantClasses = {
  primary: 'btn-primary',
  navy: 'btn-navy',
  'outline-light': 'btn-outline-light',
  ghost: 'btn-ghost',
};

export default function CallButton({
  variant = 'primary',
  size = 'md',
  label = 'Call Now',
  showNumber = true,
  className = '',
}: CallButtonProps) {
  return (
    <a
      href={`tel:${business.phoneTel}`}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={`Call ${business.name} at ${business.phone}`}
    >
      <Phone className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} strokeWidth={2.5} />
      <span>
        {label}
        {showNumber && <span className="ml-1.5 opacity-90">{business.phone}</span>}
      </span>
    </a>
  );
}
