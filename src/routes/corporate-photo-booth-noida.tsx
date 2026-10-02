import { createFileRoute } from "@tanstack/react-router";
import { EventLanding } from "@/components/site/EventLanding";
import { EVENT_LANDING_PAGES } from "@/data/landingPages";
import { pageMeta } from "@/lib/seo";

const page = EVENT_LANDING_PAGES.corporateNoida;

export const Route = createFileRoute("/corporate-photo-booth-noida")({
  head: () =>
    pageMeta({
      title: page.title,
      description: page.description,
      path: "/corporate-photo-booth-noida",
      image: page.image,
      faqItems: page.faqs,
      service: { name: page.title, serviceType: page.serviceType, areaServed: page.serviceArea },
    }),
  component: () => <EventLanding page={page} />,
});
