import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Reveal, Eyebrow, Display, ButtonLink } from "@/components/site/primitives";
import {
  CTASection,
  Customization,
  EventCategories,
  ExperienceGrid,
  FaqSection,
  LocationSection,
  PackagesGrid,
  TestimonialGrid,
  WhyChooseUs,
  WorkGallery,
} from "@/components/site/sections";
import { FAQS } from "@/data/site";
import wedding from "@/assets/wedding.jpg";

const TITLE =
  "Photo Booth Rental in Noida, Delhi & Gurgaon | The Little Big Experience";
const DESC =
  "Premium photo booth experiences for weddings, corporate events, birthdays and celebrations across Noida, Delhi, Gurgaon and Delhi NCR.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Intro() {
  return (
    <section className="section-y bg-background">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="hover-zoom aspect-4/5 bg-sand">
            <img
              src={wedding}
              alt="Guests gathering around a photo booth at a celebration in Delhi NCR"
              loading="lazy"
              width={1200}
              height={1504}
              className="size-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>The Experience</Eyebrow>
            <Display className="mt-6">
              More than a photo booth.
              <br />
              It's an experience.
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/75 max-w-xl">
              <p>
                At The Little Big Experience, we bring people together, get them laughing,
                posing and creating memories they'll actually want to keep.
              </p>
              <p>
                Whether you're planning a corporate celebration, a wedding or a birthday
                party, our photo booth becomes one of the most talked-about experiences at
                the event.
              </p>
            </div>
            <ButtonLink to="/about" variant="outline" className="mt-10">
              About Us
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Intro />
      <ExperienceGrid />
      <EventCategories />
      <WhyChooseUs />
      <Customization />
      <WorkGallery />
      <PackagesGrid />
      <TestimonialGrid />
      <LocationSection />
      <FaqSection items={FAQS.slice(0, 6) as unknown as { q: string; a: string }[]} />
      <CTASection />
    </>
  );
}
