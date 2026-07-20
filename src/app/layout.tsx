import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import Layout from "@/components/Layout";
import { siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.name,
  description: `${siteConfig.name} – ${siteConfig.tagline}. ${siteConfig.claim}`,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${syne.variable} ${outfit.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
