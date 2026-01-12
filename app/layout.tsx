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
  title: "Oraciones de agradecimiento - Cultiva un corazón agradecido con Dios",
  description: "Oraciones originales para dar gracias a Dios por la vida, la familia y las bendiciones; para cultivar un corazón agradecido cada día, incluso en tiempos difíciles.",
  keywords: ["oraciones de agradecimiento", "oración para dar gracias a Dios", "oración de gratitud diaria", "oraciones de agradecimiento por la vida", "corazón agradecido"],
  openGraph: {
    title: "Oraciones de agradecimiento",
    description: "Oraciones originales para dar gracias a Dios por la vida, la familia y las bendiciones; para cultivar un corazón agradecido cada día, incluso en tiempos difíciles.",
    url: baseUrl,
    siteName: "Oraciones de agradecimiento",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oraciones de agradecimiento",
    description: "Oraciones originales para dar gracias a Dios por la vida, la familia y las bendiciones; para cultivar un corazón agradecido cada día, incluso en tiempos difíciles.",
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
