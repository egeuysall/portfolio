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
      "availableLanguage": "English, Turkish"
    },
    "creator": {
      "@type": "Organization",
      "name": "Ege Uysal"
    }
  };

  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}