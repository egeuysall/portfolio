"use client";

import JsonLd from "./JsonLd";

// Define the correct prop type
interface LayoutWrapperProps {
  jsonLdData: {
    "@context": string;
    "@type": string;
    name: string;
    image: string;
    description: string;
  };
  children: React.ReactNode;
}

export default function LayoutWrapper({ jsonLdData, children }: LayoutWrapperProps) {
  return (
    <>
      <JsonLd jsonLdData={jsonLdData} />
      {children}
    </>
  );
}