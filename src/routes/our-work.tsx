import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { CTASection, PageHero, WorkGallery } from "@/components/site/sections";

export const Route = createFileRoute("/our-work")({
  head: () =>
    pageMeta({
      title: "Our Work | The Little Big Experience",
      description:
        "Browse corporate, wedding, birthday and private celebration categories for our photo booth experience in Delhi NCR. Discuss your event with our team.",
      path: "/our-work",
      image: "hero",
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
            Moments made
            <br />
            together.
          </>
        }
        copy="Explore the kinds of corporate, wedding, birthday and private celebrations a photo booth can complement."
      />
      <WorkGallery />
      <CTASection />
    </>
  );
}
