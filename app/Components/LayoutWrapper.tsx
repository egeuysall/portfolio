"use client";
import JsonLd from "./Components/JsonLd";

export default function LayoutWrapper({ jsonLdData, children }: { jsonLdData: any; children: React.ReactNode }) {
  return (
    <>
      <JsonLd jsonLdData={jsonLdData} />
      {children}
    </>
  );
}