import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { CTASection, FaqSection, PackagesGrid, PageHero } from "@/components/site/sections";
import { FAQS } from "@/data/site";

export const Route = createFileRoute("/packages")({
  head: () =>
    pageMeta({
      title: "Photo Booth Packages | The Little Big Experience",
      description:
        "Explore photo booth packages for corporate events, weddings and private celebrations across Delhi NCR. Share your date and needs to request pricing.",
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
            One booth.
            <br />
            Three ways to celebrate.
          </>
        }
        copy="Pick the package closest to your event and we'll shape the rest around it."
        image="birthday"
      />
      <PackagesGrid />
      <FaqSection items={FAQS.slice(0, 5)} />
      <CTASection primary="Get a Quote" />
    </>
  );
}
