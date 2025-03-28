import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "./Components/LayoutWrapper";
import Head from "next/head"; // Import Head for managing metadata

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Ege Uysal",
    template: "%s | Ege Uysal",
  },
  description:
    "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design. Showcasing innovative work and creative solutions.",
  metadataBase: new URL("https://www.egeuysal.com"),
  author: "Ege Uysal",
  keywords: "Ege Uysal, photography portfolio, web development, UI/UX design, creative professional, developer portfolio, designer portfolio, modern portfolio, UI designer, frontend developer, creative solutions",
  openGraph: {
    title: "Ege Uysal",
    description:
      "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design. Showcasing innovative work and creative solutions.",
    url: "https://egeuysal.com",
    image: "/assets/og-portfolio.jpg",
    type: "website",
    locale: "en_US",
    site_name: "Ege Uysal",
    images: [
      {
        url: "/assets/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Ege Uysal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@egecreates",
    title: "Ege Uysal",
    description:
      "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design. Showcasing innovative work and creative solutions.",
    image: "/assets/og-portfolio.jpg",
    creator: "@egecreates",
  },
  icons: {
    icon: "/icon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/icon.ico",
  },
  manifest: "manifest.json",
  robots: "index, follow",
  canonical: "https://www.egeuysal.com",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
  themeColor: "#2e2e2e",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black-translucent", // Translucent bar for mobile apps
};

// Basic data fetching logic for JSON‑LD
async function getProduct() {
  return {
    name: "Ege Uysal",
    image: "/assets/portfolio.png",
    description:
      "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design. Showcasing innovative work and creative solutions.",
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const product = await getProduct();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: product.name,
    image: product.image,
    description: product.description,
    url: "https://www.egeuysal.com/",
    creator: {
      "@type": "Person",
      name: "Ege Uysal",
      jobTitle: "Creative Professional",
      worksFor: {
        "@type": "Organization",
        name: "Self-employed",
      },
    },
    sameAs: [
      "https://twitter.com/egecreates",
      "https://www.linkedin.com/in/egeuysal",
      "https://www.instagram.com/egeuysalo",
    ],
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Ege Uysal" />
          <link rel="icon" href="icon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="canonical" href="https://www.egeuysal.com" />
          <meta name="theme-color" content="#2e2e2e" />
          <title>Ege Uysal</title>
          
          {/* Open Graph Metadata */}
          <meta property="og:title" content="Ege Uysal" />
          <meta property="og:description" content="Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design. Showcasing innovative work and creative solutions." />
          <meta property="og:url" content="https://www.egeuysal.com" />
          <meta property="og:image" content="/assets/og-portfolio.jpg" />
          <meta property="og:type" content="website" />

          {/* Twitter Metadata */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@egecreates" />
          <meta name="twitter:title" content="Ege Uysal" />
          <meta name="twitter:description" content="Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design. Showcasing innovative work and creative solutions." />
          <meta name="twitter:image" content="/assets/og-portfolio.jpg" />

          {/* Schema.org JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
          />
        </Head>
        <LayoutWrapper jsonLdData={jsonLd}>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
