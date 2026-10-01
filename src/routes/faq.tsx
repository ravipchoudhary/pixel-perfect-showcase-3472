import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { CTASection, FaqSection, PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageMeta({
      title: "Photo Booth FAQ | The Little Big Experience",
      description:
        "Answers about photo booth rentals, instant prints, custom templates, attendants, availability and coverage across Delhi NCR.",
      path: "/faq",
    }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Everything you
            <br />
            might be wondering.
          </>
        }
      />
      <FaqSection />
      <CTASection />
    </>
  );
}
