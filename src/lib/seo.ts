import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const imageUrl = `${siteConfig.url}/icons/og-default.png`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio concept`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
