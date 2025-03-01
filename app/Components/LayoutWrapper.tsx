"use client";
import JsonLd from "./JsonLd";

type JsonLdData = {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  description: string;
};

export default function LayoutWrapper({
  jsonLdData,
  children,
}: {
  jsonLdData: JsonLdData;
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd jsonLdData={jsonLdData} />
      {children}
    </>
  );
}