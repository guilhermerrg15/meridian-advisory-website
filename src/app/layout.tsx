import { SkipToContent } from "@/components/layout/SkipToContent";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  applicationName: siteConfig.name,
  authors: [{ name: "Portfolio demonstration" }],
  keywords: [
    "consulting website",
    "business strategy",
    "process optimization",
    "analytics consulting",
    "digital transformation",
    "portfolio project",
  ],
  icons: {
    icon: [
      { url: "/icons/icon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon.ico" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-navy">
        <SkipToContent />
        {children}
      </body>
    </html>
  );
}
