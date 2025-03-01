"use client";
import JsonLd from "./JsonLd";

export default function LayoutWrapper({ jsonLdData, children }: { jsonLdData: any; children: React.ReactNode }) {
  return (
    <>
      <JsonLd jsonLdData={jsonLdData} />
      {children}
    </>
  );
}