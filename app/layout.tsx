import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "./Components/LayoutWrapper";

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
  metadataBase: new URL("https://egeuysal.com"),
};

// Basic data fetching logic for JSON‑LD
async function getProduct() {
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
        <LayoutWrapper jsonLdData={jsonLd}>{children}</LayoutWrapper>
      </body>
    </html>
  );
}