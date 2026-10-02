import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { EXPERIENCES, LOCATIONS } from "@/data/site";
import type { LocationLandingPageContent } from "@/data/landingPages";
import { ButtonAnchor, ButtonLink, Display, Eyebrow, Reveal } from "./primitives";
import { CTASection, FaqSection, PageHero, WhyChooseUs } from "./sections";
import { IMAGE_SRCSETS, IMAGES } from "./images";

export function LocationLanding({ page }: { page: LocationLandingPageContent }) {
  return (
    <>
      <PageHero
        eyebrow={`Photo Booth Rental · ${page.name}`}
        title={page.h1}
        copy={page.intro}
        image={page.image}
      />

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
                height={1504}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>The Experience</Eyebrow>
            <Display className="mt-6 text-3xl sm:text-4xl">
              A reason to gather, pose and take a moment home.
            </Display>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
              {page.secondary}
            </p>
            <ButtonLink to="/contact" className="mt-8">
              Check Availability
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-sand">
        <div className="shell">
          <Reveal>
            <Eyebrow>Occasions in {page.name}</Eyebrow>
            <Display className="mt-6">A photo experience for every kind of gathering.</Display>
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {page.eventSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.05}>
                <article className="h-full border-t border-ink/20 pt-6">
                  <h2 className="display text-2xl text-ink">{section.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{section.copy}</p>
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-b border-border pb-3 text-sm text-foreground/80"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={section.to}
                    className="eyebrow mt-6 inline-block text-ink hover:text-accent"
                  >
                    Explore {section.title} →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="shell">
          <Reveal>
            <Eyebrow>What guests can enjoy</Eyebrow>
            <Display className="mt-6">The experience, end to end.</Display>
          </Reveal>
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((experience, index) => (
              <Reveal key={experience.name} delay={index * 0.04} className="bg-background">
                <div className="h-full p-8">
                  <span className="display text-xl text-accent">{experience.num}</span>
                  <h3 className="display mt-4 text-2xl text-ink">{experience.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {experience.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FaqSection items={page.faqs} heading={`Photo booth questions for ${page.name}.`} />

      <section className="section-y bg-ink text-background">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>Service Area</Eyebrow>
            <h2 className="display mt-5 text-3xl sm:text-4xl text-background">
              Around {page.name} and Delhi NCR.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-background/65">
              {page.serviceAreaCopy}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
            {page.serviceAreas.map((area) => (
              <span key={area} className="eyebrow text-background/80">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="shell mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-background/15 pt-6">
          {LOCATIONS.map((location) => (
            <Link
              key={location.name}
              to={location.to}
              className="text-sm text-background/65 hover:text-background"
            >
              {location.name}
            </Link>
          ))}
        </div>
        <div className="shell mt-8 flex flex-wrap gap-3">
          <ButtonAnchor href="tel:+919821693647" variant="light">
            Call Now
          </ButtonAnchor>
          <ButtonLink
            to="/contact"
            variant="outline"
            className="border-background/50 text-background hover:bg-background hover:text-ink"
          >
            Get a Quote
          </ButtonLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
