import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { CTASection, FaqSection, PackagesGrid, PageHero } from "@/components/site/sections";
import { FAQS } from "@/data/site";

export const Route = createFileRoute("/packages")({
  head: () =>
    pageMeta({
      title: "Photo Booth Packages in Delhi NCR | Little Big Experience",
      description:
        "Compare Little, Big, Grand and bespoke photo booth packages for Delhi NCR celebrations.",
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
            Photo booth packages
            <br />
            for Delhi NCR celebrations.
          </>
        }
        copy="Compare Little, Big and Grand photo booth packages for Delhi NCR celebrations, or request a bespoke package."
        image="birthday"
      />
      <PackagesGrid />
      <FaqSection items={FAQS.slice(0, 5)} />
      <CTASection primary="Get a Quote" />
    </>
  );
}
