import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { ButtonLink, Display, Eyebrow, Reveal } from "@/components/site/primitives";
import { CTASection, PageHero, WhyChooseUs } from "@/components/site/sections";
import { EVENT_CATEGORIES } from "@/data/site";
import corporate from "@/assets/corporate.jpg";

const BRANDING = [
  "Branded photo templates",
  "Company logos",
  "Custom overlays",
  "Event-specific designs",
  "Instant prints",
  "Digital sharing",
  "Boomerangs",
  "Professional attendant",
];

export const Route = createFileRoute("/events/corporate")({
  head: () =>
    pageMeta({
      title: "Corporate Photo Booth Experiences | The Little Big Experience",
      description:
        "Branded photo booth experiences for annual days, Diwali parties, product launches, brand activations and town halls across Delhi NCR.",
      path: "/events/corporate",
    }),
  component: Corporate,
});

function Corporate() {
  const items = EVENT_CATEGORIES[0].items;
  return (
    <>
      <PageHero
        eyebrow="Corporate Events"
        title={
          <>
            Turn your corporate event
            <br />
            into an experience.
          </>
        }
        copy="From Annual Days and Diwali celebrations to employee engagement events and brand activations, our photo booths give employees something fun to do, share and remember."
        image="corporate"
      />

      <section className="section-y bg-background pt-0">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="hover-zoom aspect-4/5 bg-sand">
              <img
                src={corporate}
                alt="Colleagues holding printed photo strips at a corporate annual day"
                loading="lazy"
                width={1200}
                height={1504}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Where we work</Eyebrow>
              <Display className="mt-6 text-3xl sm:text-4xl">
                Every kind of company celebration.
              </Display>
            </Reveal>
            <div className="mt-9 grid gap-y-3 gap-x-8 sm:grid-cols-2">
              {items.map((t, i) => (
                <Reveal key={t} delay={i * 0.03}>
                  <div className="flex items-start gap-3 border-b border-border pb-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                    <span className="text-sm text-foreground/80">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-background">
        <div className="shell">
          <Reveal>
            <p className="eyebrow rule-label text-background/50">Branding</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl text-background">
              Your brand.
              <br />
              Your event.
              <br />
              Your photo booth.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-y-4 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDING.map((b, i) => (
              <Reveal key={b} delay={i * 0.04}>
                <div className="flex items-start gap-3 border-b border-background/15 pb-4">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                  <span className="text-sm text-background/80">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <ButtonLink to="/contact" variant="light" className="mt-12">
              Get a Corporate Quote
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection title="Let's plan your corporate experience." primary="Get a Corporate Quote" />
    </>
  );
}
