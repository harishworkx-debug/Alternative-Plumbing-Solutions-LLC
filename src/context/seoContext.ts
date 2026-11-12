import { createContext } from 'react';

export interface CollectedSeoData {
  title: string;
  description: string;
  url: string;
  canonicalUrl: string | null;
  robots: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

export interface SeoCollector {
  data: CollectedSeoData | null;
}

export const SeoContext = createContext<SeoCollector | null>(null);

