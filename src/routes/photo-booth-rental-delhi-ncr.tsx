import { createFileRoute } from "@tanstack/react-router";
import { LocationLanding } from "@/components/site/LocationLanding";
import { LOCATION_PAGES } from "@/data/landingPages";
import { pageMeta } from "@/lib/seo";

const page = LOCATION_PAGES.delhiNcr;

export const Route = createFileRoute("/photo-booth-rental-delhi-ncr")({
  head: () =>
    pageMeta({
      title: page.title,
      description: page.description,
      path: "/photo-booth-rental-delhi-ncr",
      image: page.image,
      faqItems: page.faqs,
      service: {
        name: `Photo booth rental across ${page.name}`,
        serviceType: "Photo booth rental",
        areaServed: page.name,
      },
    }),
  component: () => <LocationLanding page={page} />,
});
