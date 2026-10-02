import { createFileRoute } from "@tanstack/react-router";
import { EventLanding } from "@/components/site/EventLanding";
import { EVENT_LANDING_PAGES } from "@/data/landingPages";
import { pageMeta } from "@/lib/seo";

const page = EVENT_LANDING_PAGES.birthdayGurgaon;

export const Route = createFileRoute("/birthday-photo-booth-gurgaon")({
  head: () =>
    pageMeta({
      title: page.title,
      description: page.description,
      path: "/birthday-photo-booth-gurgaon",
      image: page.image,
      faqItems: page.faqs,
      service: { name: page.title, serviceType: page.serviceType, areaServed: page.serviceArea },
    }),
  component: () => <EventLanding page={page} />,
});
