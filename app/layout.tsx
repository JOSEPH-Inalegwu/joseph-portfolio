import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Jonah - Full-Stack Developer Helping Businesses Scale Globally",
  description: "I help businesses scale by building web applications that reach customers beyond geographical boundaries. Specializing in SaaS products, e-commerce integrations, and browser extensions with Next.js, React, and TypeScript.",
  keywords: [
    "full-stack developer Nigeria",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "SaaS developer",
    "browser extension developer",
    "e-commerce integration developer",
    "Shopify developer",
    "business scaling developer",
    "web developer Jos Nigeria",
    "remote developer Nigeria",
    "global web applications",
    "location-independent business solutions",
  ],
  authors: [{ name: "Joseph Jonah" }],
  creator: "Joseph Jonah",
  publisher: "Joseph Jonah",

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://josephjonah.vercel.app",
    title: "Joseph Jonah - Full-Stack Developer Helping Businesses Scale",
    description: "I help businesses scale by building web applications that reach customers beyond geographical boundaries.",
    siteName: "Joseph Jonah Portfolio",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary",
    title: "Joseph Jonah - Full-Stack Developer",
    description: "Helping businesses scale with web applications that reach global audiences.",
    creator: "@JosephOnTech",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://josephjonah.vercel.app",
  },

  // Category
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joseph Jonah",
              alternateName: "Joseph Jonah",
              url: "https://josephjonah.vercel.app",
              jobTitle: "Full-Stack Web Developer",
              description: "I help businesses scale by building web applications that reach customers beyond geographical boundaries",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nasarawa",
                addressRegion: "Nasarawa State",
                addressCountry: "Nigeria",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Browser Extensions",
                "SaaS Development",
                "E-commerce Integration",
                "API Integration",
                "Full-Stack Development",
                "Shopify",
                "Stripe",
                "BigCommerce",
                "Business Scaling Solutions",
              ],
              sameAs: [
                "https://www.linkedin.com/in/inalegwu-joseph-jonah",
                "https://twitter.com/JosephOnTech",
                "https://github.com/JOSEPH-Inalegwu",
                "https://www.upwork.com/freelancers/~01048f15bf85eb9a01",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
