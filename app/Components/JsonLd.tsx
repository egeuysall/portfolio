"use client";

import { useEffect } from "react";

const JsonLd = () => {
  useEffect(() => {
    const jsonLdData = {
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Ege Uysal",
      "url": "https://www.egeuysal.com",
      "sameAs": [
        "https://www.linkedin.com/in/egeuysall",
        "https://twitter.com/egecreates",
        "https://www.instagram.com/egeuysalo"
      ],
      "image": "https://res.cloudinary.com/ddjnqljd8/image/upload/v1739920346/Portfolio/profile-image.png",
      "description": "Ege Uysal is a skilled developer, photographer, and creator, passionate about building innovative digital solutions and capturing the beauty of the world through photography.",
      "jobTitle": "Developer, Photographer, Creator",
      "worksFor": {
        "@type": "Organization",
        "name": "Ege Uysal"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2371 Madiera Ct.",
        "addressLocality": "Chicago",
        "addressRegion": "Illinois",
        "postalCode": "60089",
        "addressCountry": "United States"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 (657) 900-0231",
        "contactType": "Customer Service",
        "areaServed": "EN",
        "availableLanguage": ["English", "Turkish"]
      },
      "creator": {
        "@type": "Organization",
        "name": "Ege Uysal"
      }
    };

    // Create and inject JSON‑LD script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLdData);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything to the DOM
};

export default JsonLd;