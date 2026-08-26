import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfoliomk1.vercel.app"),
  title: {
    default: "Muzaffar Hassan | Enterprise Frontend Web Developer",
    template: "%s | Muzaffar Hassan",
  },
  description:
    "Portfolio of Muzaffar Hassan, an Enterprise Frontend Web Developer and Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Muzaffar Hassan",
    "Frontend Developer",
    "Enterprise Frontend Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Muzaffar Hassan", url: "https://github.com/devMuzaffar" }],
  creator: "Muzaffar Hassan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://portfoliomk1.vercel.app",
    title: "Muzaffar Hassan | Enterprise Frontend Web Developer",
    description:
      "Portfolio of Muzaffar Hassan, an Enterprise Frontend Web Developer and Software Engineer.",
    siteName: "Muzaffar Hassan Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/assets/profile.png",
        width: 640,
        height: 640,
        alt: "Muzaffar Hassan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzaffar Hassan | Enterprise Frontend Web Developer",
    description:
      "Portfolio of Muzaffar Hassan, an Enterprise Frontend Web Developer and Software Engineer.",
    images: ["/assets/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muzaffar Hassan",
  url: "https://portfoliomk1.vercel.app",
  image: "https://portfoliomk1.vercel.app/assets/profile.png",
  jobTitle: "Enterprise Frontend Web Developer",
  description:
    "Enterprise Frontend Web Developer and Software Engineer specializing in React, Next.js, and TypeScript.",
  sameAs: [
    "https://www.linkedin.com/in/muzaffar-hassan/",
    "https://github.com/devMuzaffar/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
