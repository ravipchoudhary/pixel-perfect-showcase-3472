import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { ButtonLink, Display, Eyebrow, Reveal } from "@/components/site/primitives";
import { CTASection, PageHero, WhyChooseUs } from "@/components/site/sections";
import { IMAGE_SRCSETS, IMAGES } from "@/components/site/images";

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
      title: "Birthday Photo Booth Delhi NCR | The Little Big Experience",
      description:
        "Photo booth experiences for teen parties, Sweet 16s, milestone birthdays, family gatherings and private celebrations across Delhi NCR. Check your date.",
      path: "/events/birthdays",
      image: "birthday",
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
                src={IMAGES.birthday}
                srcSet={IMAGE_SRCSETS.birthday}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Indian teenager celebrating a birthday with a cake"
                loading="lazy"
                width={1200}
                height={1800}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Perfect for</Eyebrow>
              <Display className="mt-6 text-3xl sm:text-4xl">Every excuse to celebrate.</Display>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/75">
                Perfect for birthdays, teenage parties, family celebrations and private events.
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
      <section className="section-y bg-sand">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Local enquiries</Eyebrow>
            <Display className="mt-5 text-3xl sm:text-4xl">Planning a birthday in Gurgaon?</Display>
          </div>
          <ButtonLink to="/birthday-photo-booth-gurgaon" variant="outline">
            Birthday Photo Booth in Gurgaon
          </ButtonLink>
        </div>
      </section>
      <CTASection title="Let's make your party unforgettable." />
    </>
  );
}
