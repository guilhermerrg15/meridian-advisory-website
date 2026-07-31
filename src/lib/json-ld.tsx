import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    description: `${siteConfig.description} ${siteConfig.portfolioDisclosure}`,
    url: siteConfig.url,
    email: siteConfig.contact.emailLabel,
    areaServed: ["Americas", "Europe"],
    knowsAbout: services.map((service) => service.title),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: `${siteConfig.description} ${siteConfig.portfolioDisclosure}`,
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} services`,
    description: siteConfig.portfolioDisclosure,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        url: `${siteConfig.url}/services#${service.slug}`,
      },
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
