import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ege Uysal Portfolio",
    template: "%s | Ege Uysal",
  },
  description: "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design.",
  keywords: [
    "Photography Portfolio", "Web Development", "UI/UX Design", "Ege Uysal", "React Developer", "Next.js",
    "JavaScript", "CSS", "Web Design", "Front-End Development", "App Development", "Creative Technology",
    "Photography", "Web Designer", "Tech Portfolio", "Full-Stack Developer", "Front-End Developer",
    "UI/UX", "Creative Projects", "Digital Design", "Freelance Web Developer Portfolio"
  ],
  authors: [{ name: "Ege Uysal", url: "https://egeuysal.com" }],
  creator: "Ege Uysal",
  publisher: "Ege Uysal",
  applicationName: "Ege Uysal Portfolio",
  metadataBase: new URL("https://egeuysal.com"),

  alternates: {
    canonical: "https://www.egeuysal.com/",
    languages: {
      "en-US": "https://egeuysal.com/",
      "tr-TR": "https://egeuysal.com/",
    },
  },

  openGraph: {
    title: "Ege Uysal Portfolio | Creativity",
    description: "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design.",
    url: "https://egeuysal.com",
    siteName: "Ege Uysal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ege Uysal Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@egecreates",
    creator: "@egecreates",
    title: "Ege Uysal Portfolio | Creativity",
    description: "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon/favicon-96x96.png",
    apple: "/icon/apple-touch-icon.png",
    shortcut: "/icon/favicon-96x96.png",
  },

  manifest: "/manifest.json",

  robots: {
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
      noarchive: false,
    },
  },
};

import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

export const metadata = {
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      "availableLanguage": "English, Turkish"
    },
    "creator": {
      "@type": "Organization",
      "name": "Ege Uysal"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}