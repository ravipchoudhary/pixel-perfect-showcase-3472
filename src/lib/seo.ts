import type { ImageKey } from "@/components/site/images";

export const SITE_ORIGIN = "https://thelittlebigexperience.com";

export const SOCIAL_IMAGES: Record<ImageKey, string> = {
  hero: "/og/brand.jpg",
  corporate: "/og/corporate.jpg",
  wedding: "/og/wedding.jpg",
  birthday: "/og/celebrations.jpg",
};

const SOCIAL_IMAGE_ALTS: Record<ImageKey, string> = {
  hero: "Guests sharing a moment around a photo booth",
  corporate: "Event guests looking at printed photo booth strips",
  wedding: "Wedding guests sharing a photo booth moment",
  birthday: "An Indian teenager celebrating a birthday with a cake",
};

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

const HOME: BreadcrumbItem = { name: "Home", path: "/" };
const EVENTS: BreadcrumbItem = { name: "Events", path: "/events" };
const CORPORATE: BreadcrumbItem = { name: "Corporate Events", path: "/events/corporate" };
const WEDDINGS: BreadcrumbItem = { name: "Weddings", path: "/events/weddings" };
const BIRTHDAYS: BreadcrumbItem = { name: "Birthdays & Celebrations", path: "/events/birthdays" };
const SERVICE_AREAS: BreadcrumbItem = { name: "Delhi NCR", path: "/photo-booth-rental-delhi-ncr" };

const BREADCRUMBS: Record<string, readonly BreadcrumbItem[]> = {
  "/about": [HOME, { name: "About" }],
  "/experiences": [HOME, { name: "Experiences" }],
  "/events": [HOME, { name: "Events" }],
  "/events/corporate": [HOME, EVENTS, { name: "Corporate Events" }],
  "/events/weddings": [HOME, EVENTS, { name: "Weddings" }],
  "/events/birthdays": [HOME, EVENTS, { name: "Birthdays & Celebrations" }],
  "/our-work": [HOME, { name: "Our Work" }],
  "/packages": [HOME, { name: "Packages" }],
  "/faq": [HOME, { name: "FAQ" }],
  "/contact": [HOME, { name: "Contact" }],
  "/photo-booth-rental-noida": [HOME, SERVICE_AREAS, { name: "Noida" }],
  "/photo-booth-rental-greater-noida": [HOME, SERVICE_AREAS, { name: "Greater Noida" }],
  "/photo-booth-rental-delhi": [HOME, SERVICE_AREAS, { name: "Delhi" }],
  "/photo-booth-rental-gurgaon": [HOME, SERVICE_AREAS, { name: "Gurgaon" }],
  "/photo-booth-rental-delhi-ncr": [HOME, { name: "Delhi NCR" }],
  "/corporate-photo-booth-noida": [
    HOME,
    EVENTS,
    CORPORATE,
    { name: "Corporate Photo Booth in Noida" },
  ],
  "/wedding-photo-booth-delhi-ncr": [
    HOME,
    EVENTS,
    WEDDINGS,
    { name: "Wedding Photo Booth · Delhi NCR" },
  ],
  "/birthday-photo-booth-gurgaon": [
    HOME,
    EVENTS,
    BIRTHDAYS,
    { name: "Birthday Photo Booth · Gurgaon" },
  ],
  "/privacy-policy": [HOME, { name: "Privacy Policy" }],
  "/terms-and-conditions": [HOME, { name: "Terms & Conditions" }],
};

export function getPageBreadcrumbs(path: string) {
  return BREADCRUMBS[path.replace(/\/$/, "") || "/"] ?? [];
}

type ServiceSchemaData = {
  name: string;
  serviceType: string;
  areaServed: string;
};

export function pageMeta({
  title,
  description,
  path,
  image = "hero",
  robots = "index,follow",
  faqItems,
  service,
  includeLocalBusiness = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: ImageKey;
  robots?: "index,follow" | "noindex,follow";
  faqItems?: readonly { q: string; a: string }[];
  service?: ServiceSchemaData;
  includeLocalBusiness?: boolean;
}) {
  const canonical = new URL(path, SITE_ORIGIN).toString();
  const imageUrl = new URL(SOCIAL_IMAGES[image], SITE_ORIGIN).toString();
  const breadcrumbs = getPageBreadcrumbs(path);
  const schemas: Record<string, unknown>[] = [];

  if (breadcrumbs.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(item.path && { item: new URL(item.path, SITE_ORIGIN).toString() }),
      })),
    });
  }

  if (faqItems?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  if (service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.serviceType,
      description,
      provider: { "@id": `${SITE_ORIGIN}/#localbusiness` },
      areaServed: { "@type": "Place", name: service.areaServed },
    });
  }

  if (includeLocalBusiness) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_ORIGIN}/#localbusiness`,
      name: "The Little Big Experience",
      url: SITE_ORIGIN,
      description:
        "Premium photo booth experiences for corporate events, weddings, birthdays and celebrations across Delhi NCR.",
      telephone: "+919821693647",
      email: "hello@thelittlebigexperience.com",
      areaServed: ["Noida", "Greater Noida", "Delhi", "Gurgaon", "Delhi NCR"],
      sameAs: ["https://instagram.com/thelittlebigexperience"],
    });
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: "The Little Big Experience" },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SOCIAL_IMAGE_ALTS[image] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: SOCIAL_IMAGE_ALTS[image] },
    ],
    links: [{ rel: "canonical", href: canonical }],
    ...(schemas.length && {
      scripts: schemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    }),
  };
}
