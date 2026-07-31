import type { Metadata } from "next";
import { HomePage } from "@/components/sections/HomePage";
import { siteConfig } from "@/data/site";
import {
  JsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function Page() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <HomePage />
    </>
  );
}
