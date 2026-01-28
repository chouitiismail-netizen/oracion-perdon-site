import type { Metadata } from 'next';
import HomeClient from '../components/HomeClient';
import SchemaScript from '../components/SchemaScript';
import { getSpiritualPages } from '../lib/content';
import { generateHomePageSchemas } from '../lib/schema';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oracion-perdon-site.vercel.app";

export const metadata: Metadata = {
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    images: [{ url: `${baseUrl}/og-image.svg`, width: 1200, height: 630, alt: 'Oraciones por el perdón' }],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#7c3aed',
  },
};

export default function HomePage() {
  const allPages = getSpiritualPages();
  const schemas = generateHomePageSchemas();

  return (
    <>
      <SchemaScript schemas={schemas} />
      <HomeClient allPages={allPages} />
    </>
  );
}
