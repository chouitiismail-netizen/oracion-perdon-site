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
  title: "Oraciones por los hijos - Oraciones para encomendar a los hijos a Dios",
  description: "Oraciones originales para encomendar a los hijos a Dios, pedir protección, guía y paz en cada etapa de su vida.",
  keywords: ["oraciones por los hijos", "oraciones por mis hijos", "oraciones católicas", "protección para hijos", "bendición para hijos"],
  openGraph: {
    title: "Oraciones por los hijos",
    description: "Oraciones originales para encomendar a los hijos a Dios, pedir protección, guía y paz en cada etapa de su vida.",
    url: baseUrl,
    siteName: "Oraciones por los hijos",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oraciones por los hijos",
    description: "Oraciones originales para encomendar a los hijos a Dios, pedir protección, guía y paz en cada etapa de su vida.",
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
