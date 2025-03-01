import "./globals.css";
import JsonLd from "./Components/JsonLd"; // Importing the JsonLd component
import { Geist, Geist_Mono } from "@geist-ui/react"; // Assuming these are for font settings

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
    default: "Ege Uysal Portfolio",
    template: "%s | Ege Uysal",
  },
  description:
    "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design.",
  keywords: [
    "Photography Portfolio",
    "Web Development",
    "UI/UX Design",
    "Ege Uysal",
    "React Developer",
    "Next.js",
    "JavaScript",
    "CSS",
    "Web Design",
    "Front-End Development",
    "App Development",
    "Creative Technology",
    "Photography",
    "Web Designer",
    "Tech Portfolio",
    "Full-Stack Developer",
    "Front-End Developer",
    "UI/UX",
    "Creative Projects",
    "Digital Design",
    "Freelance Web Developer Portfolio",
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
    description:
      "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design.",
    url: "https://egeuysal.com",
    siteName: "Ege Uysal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/portfolio.png",
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
    description:
      "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design.",
    images: ["/assets/portfolio.png"],
  },
  icons: {
    icon: "/icon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/icon.ico",
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

// Basic data fetching logic for JSON‑LD
async function getProduct() {
  // Replace this with your actual data fetching logic if needed
  return {
    name: "Ege Uysal Portfolio",
    image: "/assets/portfolio.png",
    description:
      "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design.",
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const product = await getProduct();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Pass JSON-LD data to the JsonLd component */}
        <JsonLd jsonLdData={jsonLd} />
        {children}
      </body>
    </html>
  );
}