import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { absoluteAssetUrl } from "@/lib/gallery-utils";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
}: PageSeo): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ? absoluteAssetUrl(siteConfig.url, image) : undefined;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "de_DE",
      type,
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                alt: title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
