"use client";

import JsonLd from "./JsonLd";

interface JsonLdData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  sameAs: string[];
  image: string;
  description: string;
  jobTitle: string;
  worksFor: {
    "@type": string;
    name: string;
  };
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string[];
  };
  creator: {
    "@type": string;
    name: string;
  };
}

export default function LayoutWrapper({ jsonLdData, children }: { jsonLdData: JsonLdData; children: React.ReactNode }) {
  return (
    <>
      <JsonLd jsonLdData={jsonLdData} />
      {children}
    </>
  );
}