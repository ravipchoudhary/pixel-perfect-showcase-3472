import { createFileRoute } from "@tanstack/react-router";
import { EventLanding } from "@/components/site/EventLanding";
import { EVENT_LANDING_PAGES } from "@/data/landingPages";
import { pageMeta } from "@/lib/seo";

const page = EVENT_LANDING_PAGES.weddingDelhiNcr;

export const Route = createFileRoute("/wedding-photo-booth-delhi-ncr")({
  head: () =>
    pageMeta({
      title: page.title,
      description: page.description,
      path: "/wedding-photo-booth-delhi-ncr",
      image: page.image,
      faqItems: page.faqs,
      service: { name: page.title, serviceType: page.serviceType, areaServed: page.serviceArea },
    }),
  component: () => <EventLanding page={page} />,
});
