import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { CTASection, FaqSection, PackagesGrid, PageHero } from "@/components/site/sections";
import { FAQS } from "@/data/site";

export const Route = createFileRoute("/packages")({
  head: () =>
    pageMeta({
      title: "Photo Booth Packages | The Little Big Experience",
      description:
        "Explore Little, Big, Grand and bespoke photo booth experiences for events and celebrations across Delhi NCR.",
      path: "/packages",
      image: "birthday",
      faqItems: FAQS.slice(0, 5),
    }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title={
          <>
            The right booth
            <br />
            for every celebration.
          </>
        }
        copy="Choose from our Little, Big and Grand experiences, or tell us what you have in mind and we'll create a bespoke package."
        image="birthday"
      />
      <PackagesGrid />
      <FaqSection items={FAQS.slice(0, 5)} />
      <CTASection primary="Get a Quote" />
    </>
  );
}
