import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { CTASection, PageHero, TestimonialGrid } from "@/components/site/sections";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageMeta({
      title: "Testimonials | The Little Big Experience",
      description:
        "What guests and hosts say about our photo booth experiences at events across Delhi NCR.",
      path: "/testimonials",
    }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Real people.
            <br />
            Real experiences.
          </>
        }
      />
      <TestimonialGrid />
      <CTASection />
    </>
  );
}
