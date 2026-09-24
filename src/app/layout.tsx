import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import { gymConfig } from "@/config/gymConfig";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ironforgegym.mx"),
  title: {
    default: gymConfig.seo.title,
    template: `%s | ${gymConfig.shortName}`
  },
  description: gymConfig.seo.description,
  keywords: gymConfig.seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: gymConfig.seo.title,
    description: gymConfig.seo.description,
    url: "https://www.ironforgegym.mx",
    siteName: gymConfig.name,
    images: [{ url: gymConfig.seo.ogImage, width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: gymConfig.seo.title,
    description: gymConfig.seo.description,
    images: [gymConfig.seo.ogImage]
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bebas.variable} ${inter.variable}`}>
      <body className="font-body">
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
