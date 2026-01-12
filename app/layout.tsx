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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://REPLACE_AFTER_VERCEL.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Oraciones para la tristeza - Consuelo, esperanza y paz para el corazón cansado",
  description: "Oraciones y reflexiones para el desánimo, las lágrimas y el corazón cansado; para recibir consuelo, esperanza y una paz que sostiene.",
  keywords: ["oraciones para la tristeza", "oración para el desánimo", "oración cuando estoy triste", "oraciones por consuelo", "oraciones para el corazón roto"],
  openGraph: {
    title: "Oraciones para la tristeza",
    description: "Oraciones y reflexiones para el desánimo, las lágrimas y el corazón cansado; para recibir consuelo, esperanza y una paz que sostiene.",
    url: baseUrl,
    siteName: "Oraciones para la tristeza",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oraciones para la tristeza",
    description: "Oraciones y reflexiones para el desánimo, las lágrimas y el corazón cansado; para recibir consuelo, esperanza y una paz que sostiene.",
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
