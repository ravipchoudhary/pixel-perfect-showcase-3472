import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Display, Eyebrow, Reveal } from "@/components/site/primitives";
import { CTASection, PageHero, WhyChooseUs } from "@/components/site/sections";
import { IMAGE_SRCSETS, IMAGES } from "@/components/site/images";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About Us | The Little Big Experience",
      description:
        "Meet the women-led photo booth brand creating interactive moments, instant prints and digital memories for celebrations across Delhi NCR. Get in touch.",
      path: "/about",
      image: "wedding",
    }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            We believe every celebration
            <br />
            deserves an experience.
          </>
        }
        image="wedding"
      />

      <section className="section-y bg-background pt-0">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <div className="hover-zoom aspect-4/5 bg-sand">
              <img
                src={IMAGES.wedding}
                srcSet={IMAGE_SRCSETS.wedding}
                sizes="(min-width: 1024px) 42vw, 100vw"
                alt="Guests celebrating together"
                loading="lazy"
                width={1200}
                height={1504}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 space-y-7 text-lg leading-relaxed text-foreground/80">
                <p className="display text-3xl sm:text-4xl text-ink normal-case">
                  Celebrations should be experienced, not just attended.
                </p>
                <p>
                  The Little Big Experience was created with one simple idea — celebrations should
                  be experienced, not just attended.
                </p>
                <p>
                  We're a women-led experience business bringing fun, interactive photo booths to
                  celebrations across Delhi NCR.
                </p>
                <p>
                  From corporate events and weddings to birthdays and private parties, we create
                  experiences that bring people together, make them laugh and leave them with
                  something tangible to remember.
                </p>
                <p>
                  We're passionate about creating experiences that make people stop, smile and say,
                  “Let's take one more!”
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
