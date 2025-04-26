// Global CSS
import "./globals.css";

// External Libraries
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
import { inter, geist, geistMono } from "@/lib/fonts";

// Internal Components
import Footer from "@/components/Footer";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "sonner";

async function getProduct() {
  return {
    name: "Ege Uysal Portfolio: Innovate, Optimize, Create.",
    image: "/og-image.jpg",
    description:
      "Welcome to my portfolio. I am Ege Uysal, a designer, developer, and innovator creating high-performance, beautiful, and impactful digital experiences.",
  };
}

export async function generateMetadata(): Promise<Metadata> {
  // Fetch data needed for metadata
  const product = await getProduct();

  return {
    title: {
      default: product.name,
      template: "%s | Ege Uysal",
    },
    description: product.description,
    metadataBase: new URL("https://egeuysal.com/"),
    authors: [{ name: "Ege Uysal" }],
    [
  "Ege Uysal",
  "Ege Uysal portfolio",
  "full-stack developer",
  "front-end developer",
  "backend developer",
  "React developer",
  "Next.js developer",
  "TypeScript developer",
  "UI/UX designer",
  "web designer",
  "digital creator",
  "creative technologist",
  "software engineer",
  "product designer",
  "digital product creator",
  "minimalist web designer",
  "innovative developer",
  "professional portfolio",
  "developer portfolio",
  "designer portfolio",
  "creative portfolio",
  "Figma designer",
  "user experience designer",
  "user interface designer",
  "performance-focused developer",
  "digital innovator",
  "young entrepreneur",
  "personal brand website",
  "Apple ecosystem developer",
  "modern web creator",
  "app developer",
  "SaaS developer",
  "design-driven developer",
  "high-performance websites",
  "beautiful user interfaces",
  "technology enthusiast",
  "visionary creator",
  "future-ready developer",
  "coding and design expert"
],
    openGraph: {
      title: product.name,
      description: product.description,
      url: "https://egeuysal.com/",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: "Ege Uysal Portfolio",
        },
      ],
      type: "website",
      locale: "en_US",
      siteName: product.name,
    },
    twitter: {
      card: "summary_large_image",
      site: "@egecreates",
      title: product.name,
      description: product.description,
      images: [product.image],
      creator: "@egecreates",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    manifest: "/manifest.json",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://egeuysal.com/",
    },
    applicationName: "Ege Uysal Portfolio",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
    },
    other: {
      appleMobileWebAppCapable: "yes",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const product = await getProduct();

  // Format current date for schema (ISO format)
  const currentDate = new Date().toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: product.name,
    image: `https://egeuysal.com/${product.image}`,
    description: product.description,
    url: "https://egeuysal.com/",
    dateModified: currentDate,
    sameAs: [
      "https://twitter.com/egecreates",
      "https://www.linkedin.com/in/egeuysal",
      "https://www.instagram.com/egeuysalo",
    ],
  };

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} pb-18`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="w-full h-full flex-center bg-white dark:bg-black">
        <LayoutWrapper jsonLdData={jsonLd}>
          <main className="w-[90vw] md:w-[92.5vw] lg:w-[95vw] my-12">
            <Toaster />
            <Analytics />
            {children}
            <SpeedInsights />
            <aside className="w-full flex-center mt-24">
              <Footer />
            </aside>
          </main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
