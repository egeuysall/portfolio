import JsonLd from './JsonLd';

interface LayoutWrapperProps {
  children: React.ReactNode;
  jsonLdData?: {
    '@context': string;
    '@type': string;
    name: string;
    image: string;
    description: string;
    [key: string]: unknown;
  };
}

export const LayoutWrapper = ({ jsonLdData, children }: LayoutWrapperProps) => {
  return (
    <>
      {jsonLdData && <JsonLd jsonLdData={jsonLdData} />}
      {children}
    </>
  );
};
