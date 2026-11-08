import {
  Flame, Droplets, Search, Bath, Building2, Wrench, Droplet,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Droplets,
  Search,
  Bath,
  Building2,
  Wrench,
  Droplet,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Wrench;
  return <Icon className={className} strokeWidth={2} />;
}
