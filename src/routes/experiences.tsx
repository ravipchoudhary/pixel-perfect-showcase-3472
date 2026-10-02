import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import {
  CTASection,
  Customization,
  ExperienceGrid,
  PageHero,
  WhyChooseUs,
} from "@/components/site/sections";

export const Route = createFileRoute("/experiences")({
  head: () =>
    pageMeta({
      title: "Photo Booth Experiences | The Little Big Experience",
      description:
        "Instant prints, digital sharing, boomerangs, custom templates and a professional attendant — the full photo booth experience across Delhi NCR.",
      path: "/experiences",
      image: "birthday",
    }),
  component: Experiences,
});

function Experiences() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title={
          <>
            Built around the
            <br />
            moment, not the machine.
          </>
        }
        copy="Every booking includes the pieces that make a photo booth worth queuing for — prints in hand, clips to share and someone looking after it all."
        image="birthday"
      />
      <ExperienceGrid />
      <Customization />
      <WhyChooseUs />
      <CTASection primary="Book Your Photo Booth" />
    </>
  );
}
