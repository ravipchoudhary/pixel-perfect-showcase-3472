import { createFileRoute } from "@tanstack/react-router";
import { LocationLanding } from "@/components/site/LocationLanding";
import { LOCATION_PAGES } from "@/data/landingPages";
import { pageMeta } from "@/lib/seo";

const page = LOCATION_PAGES.greaterNoida;

export const Route = createFileRoute("/photo-booth-rental-greater-noida")({
  head: () =>
    pageMeta({
      title: page.title,
      description: page.description,
      path: "/photo-booth-rental-greater-noida",
      image: page.image,
      faqItems: page.faqs,
      service: {
        name: `Photo booth rental in ${page.name}`,
        serviceType: "Photo booth rental",
        areaServed: page.name,
      },
    }),
  component: () => <LocationLanding page={page} />,
});
