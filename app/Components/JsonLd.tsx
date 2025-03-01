"use client";

import { useEffect } from "react";

interface JsonLdProps {
  jsonLdData: {
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
  };
}

const JsonLd = ({ jsonLdData }: JsonLdProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLdData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [jsonLdData]);

  return null; // This component doesn't render anything to the DOM
};

export default JsonLd;