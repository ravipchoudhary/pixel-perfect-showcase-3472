import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { CTASection, PageHero, WorkGallery } from "@/components/site/sections";

export const Route = createFileRoute("/our-work")({
  head: () =>
    pageMeta({
      title: "Our Work | The Little Big Experience",
      description:
        "A look at the corporate events, weddings, birthdays and celebrations we bring our photo booth experience to across Delhi NCR.",
      path: "/our-work",
    }),
  component: OurWork,
});

function OurWork() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Real events.
            <br />
            Real memories.
          </>
        }
        copy="A case-study look at the celebrations our booth has been part of."
      />
      <WorkGallery />
      <CTASection />
    </>
  );
}
