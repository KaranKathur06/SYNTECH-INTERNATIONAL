import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const siteName = "SYNTECH INTERNATIONAL";
const siteTitle =
  "Cylinder Liner Manufacturer in Rajkot, Gujarat | SYNTECH INTERNATIONAL";
const siteDescription =
  "SYNTECH INTERNATIONAL is a Rajkot-based manufacturer and supplier of precision cylinder liners, sleeves and air cooled blocks, with bulk manufacturing capability, disciplined foundry operations, CNC machining and strict industrial quality control for OEMs and export buyers in India.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://www.syntech-international.example"), // replace with live domain
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName,
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SYNTECH INTERNATIONAL",
    url: "https://www.syntech-international.example",
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9099990905",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: [],
    logo: "/favicon.ico",
  };

  return (
    <html lang="en">
      <body className="antialiased bg-[color:var(--color-page-bg)] text-[color:var(--color-text-dark)]">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
