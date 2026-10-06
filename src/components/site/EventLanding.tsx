import { Check } from "lucide-react";
import { EXPERIENCES } from "@/data/site";
import type { EventLandingPageContent } from "@/data/landingPages";
import { ButtonLink, Display, Eyebrow, Reveal } from "./primitives";
import { CTASection, FaqSection, PageHero, WhyChooseUs } from "./sections";
import { IMAGE_SRCSETS, IMAGES } from "./images";

export function EventLanding({ page }: { page: EventLandingPageContent }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.h1} copy={page.intro} image={page.image} />

      <section className="section-y bg-background pt-0">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="hover-zoom aspect-4/5 bg-sand">
              <img
                src={IMAGES[page.image]}
                srcSet={IMAGE_SRCSETS[page.image]}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Guests sharing a moment around a photo booth"
                loading="lazy"
                width={1200}
                height={page.image === "birthday" ? 1800 : 1504}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Made for your occasion</Eyebrow>
              <Display className="mt-6 text-3xl sm:text-4xl">{page.focusHeading}</Display>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">{page.focusCopy}</p>
            </Reveal>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {page.occasions.map((occasion, index) => (
                <Reveal key={occasion} delay={index * 0.025}>
                  <li className="flex items-start gap-3 border-b border-border py-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                    {occasion}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-background">
        <div className="shell">
          <Reveal>
            <Eyebrow>Included in the experience</Eyebrow>
            <h2 className="display mt-6 text-4xl sm:text-5xl text-background">
              The details guests remember.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((experience, index) => (
              <Reveal key={experience.name} delay={index * 0.04} className="bg-ink">
                <div className="h-full p-7">
                  <span className="display text-xl text-accent">{experience.num}</span>
                  <h3 className="display mt-4 text-xl text-background">{experience.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/65">
                    {experience.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FaqSection items={page.faqs} heading="Questions about your event?" />

      <section className="section-y bg-sand">
        <div className="shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Plan your event</Eyebrow>
            <Display className="mt-6 text-3xl sm:text-4xl">{page.serviceHeading}</Display>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/70">
              {page.serviceCopy}
            </p>
          </div>
          <ButtonLink to={page.serviceLink} variant="outline">
            Explore the service area
          </ButtonLink>
        </div>
      </section>

      <CTASection
        title="Let's shape an experience around your event."
        primary="Check Availability"
      />
    </>
  );
}
