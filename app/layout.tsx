import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    description:
      "Explore the portfolio of Ege Uysal, a creative professional in photography, web development, and UI/UX design.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icon/favicon-96x96.png" />
        <link rel="icon" href="/icon/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/icon/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}