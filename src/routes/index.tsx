import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
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
  WhyChooseUs,
  WorkGallery,
} from "@/components/site/sections";
import { FAQS } from "@/data/site";
import { IMAGE_SRCSETS, IMAGES } from "@/components/site/images";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Premium Photo Booth Rental in Delhi NCR | The Little Big Experience",
      description:
        "Premium photo booth rentals for corporate events, weddings, birthdays and private celebrations across Delhi NCR. Explore the experience and enquire today.",
      path: "/",
      image: "hero",
      faqItems: FAQS.slice(0, 6),
      includeLocalBusiness: true,
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
              src={IMAGES.corporate}
              srcSet={IMAGE_SRCSETS.corporate}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Indian guests enjoying a photo booth at a corporate celebration"
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
                At The Little Big Experience, we bring people together, get them laughing, posing
                and creating memories they'll actually want to keep.
              </p>
              <p>
                Whether you're planning a corporate celebration, a wedding or a birthday party, our
                photo booth becomes one of the most talked-about experiences at the event.
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
      <LocationSection />
      <FaqSection items={FAQS.slice(0, 6) as unknown as { q: string; a: string }[]} />
      <CTASection />
    </>
  );
}
