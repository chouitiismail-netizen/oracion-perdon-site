import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oracion-perdon-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Oraciones por el perdón - Paz, reconciliación y misericordia divina",
  description: "Oraciones y reflexiones para pedir perdón, perdonar de corazón y volver a empezar con paz y misericordia.",
  keywords: ["oraciones por el perdón", "oración para pedir perdón", "oración para perdonar", "reconciliación", "misericordia de Dios"],
  openGraph: {
    title: "Oraciones por el perdón",
    description: "Oraciones y reflexiones para pedir perdón, perdonar de corazón y volver a empezar con paz y misericordia.",
    url: baseUrl,
    siteName: "Oraciones por el perdón",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oraciones por el perdón",
    description: "Oraciones y reflexiones para pedir perdón, perdonar de corazón y volver a empezar con paz y misericordia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
