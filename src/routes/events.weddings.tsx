import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { ButtonLink, Display, Eyebrow, Reveal } from "@/components/site/primitives";
import { CTASection, Customization, PageHero } from "@/components/site/sections";
import wedding from "@/assets/wedding.jpg";

const PERFECT_FOR = [
  "Engagements",
  "Mehendi",
  "Sangeet",
  "Cocktail Parties",
  "Wedding Receptions",
  "Wedding After-Parties",
];

const INCLUDED = [
  "Unlimited Photos",
  "Instant Prints",
  "Custom Wedding Templates",
  "Digital Sharing",
  "Props",
  "Boomerangs",
  "Professional Attendant",
];

export const Route = createFileRoute("/events/weddings")({
  head: () =>
    pageMeta({
      title: "Wedding Photo Booth | The Little Big Experience",
      description:
        "Photo booth experiences for engagements, mehendi, sangeet, cocktail nights and wedding receptions across Delhi NCR.",
      path: "/events/weddings",
    }),
  component: Weddings,
});

function Weddings() {
  return (
    <>
      <PageHero
        eyebrow="Weddings"
        title={
          <>
            Because every celebration
            <br />
            deserves a little more fun.
          </>
        }
        copy="Your wedding is about bringing people together. Our photo booth gives your guests something to do, laugh about and take home."
        image="wedding"
      />

      <section className="section-y bg-background pt-0">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <Eyebrow>Perfect for</Eyebrow>
              <Display className="mt-6 text-3xl sm:text-4xl">
                Every night of the celebration.
              </Display>
            </Reveal>
            <div className="mt-9 grid gap-y-3 gap-x-8 sm:grid-cols-2">
              {PERFECT_FOR.map((t, i) => (
                <Reveal key={t} delay={i * 0.04}>
                  <div className="flex items-start gap-3 border-b border-border pb-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                    <span className="text-sm text-foreground/80">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="hover-zoom aspect-4/5 bg-sand">
              <img
                src={wedding}
                alt="Couple and guests laughing at a wedding photo booth in Delhi NCR"
                loading="lazy"
                width={1200}
                height={1504}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-sand">
        <div className="shell">
          <Reveal>
            <Eyebrow>Your wedding</Eyebrow>
            <Display className="mt-6">
              Your wedding.
              <br />
              Your style.
            </Display>
          </Reveal>
          <div className="mt-12 grid gap-y-4 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((b, i) => (
              <Reveal key={b} delay={i * 0.04}>
                <div className="flex items-start gap-3 border-b border-border pb-4">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                  <span className="text-sm text-foreground/80">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-4">
              <ButtonLink to="/contact">Make Your Wedding More Fun</ButtonLink>
              <ButtonLink to="/contact" variant="outline">
                Check Availability
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Customization />
      <CTASection title="Let's make your wedding unforgettable." />
    </>
  );
}
