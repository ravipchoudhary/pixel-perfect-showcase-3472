import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { ButtonLink, Display, Eyebrow, Reveal } from "@/components/site/primitives";
import { CTASection, PageHero, WhyChooseUs } from "@/components/site/sections";
import birthday from "@/assets/birthday.jpg";

const PERFECT_FOR = [
  "Teen birthdays",
  "Sweet 16",
  "18th birthdays",
  "Milestone birthdays",
  "Family parties",
  "House parties",
  "Society events",
  "Private celebrations",
];

export const Route = createFileRoute("/events/birthdays")({
  head: () =>
    pageMeta({
      title: "Birthday & Celebration Photo Booth | The Little Big Experience",
      description:
        "Photo booth experiences for teen parties, milestone birthdays, family celebrations and private events across Delhi NCR.",
      path: "/events/birthdays",
    }),
  component: Birthdays,
});

function Birthdays() {
  return (
    <>
      <PageHero
        eyebrow="Birthdays & Celebrations"
        title={
          <>
            More laughs.
            <br />
            More photos.
            <br />
            More memories.
          </>
        }
        copy="A birthday party is great. A party where everyone leaves with a ridiculous photo strip is even better."
        image="birthday"
      />

      <section className="section-y bg-background pt-0">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="hover-zoom aspect-4/5 bg-sand">
              <img
                src={birthday}
                alt="Friends posing with props at a birthday photo booth"
                loading="lazy"
                width={1200}
                height={1504}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Perfect for</Eyebrow>
              <Display className="mt-6 text-3xl sm:text-4xl">
                Every excuse to celebrate.
              </Display>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/75">
                Perfect for birthdays, teenage parties, family celebrations and private
                events.
              </p>
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
            <Reveal delay={0.1}>
              <ButtonLink to="/contact" className="mt-10">
                Make Your Party Unforgettable
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection title="Let's make your party unforgettable." />
    </>
  );
}
