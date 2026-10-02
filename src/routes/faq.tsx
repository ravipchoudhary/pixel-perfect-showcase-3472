import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { CTASection, FaqSection, PageHero } from "@/components/site/sections";
import { FAQS } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageMeta({
      title: "Photo Booth FAQ | The Little Big Experience",
      description:
        "Find answers about photo booth features, event types, custom templates and Delhi NCR coverage. Learn what is included, then check your date or request a quote.",
      path: "/faq",
      image: "hero",
      faqItems: FAQS,
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
