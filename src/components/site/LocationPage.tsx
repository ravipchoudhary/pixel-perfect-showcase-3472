import { Check } from "lucide-react";
import { ButtonAnchor, ButtonLink, Display, Eyebrow, Reveal } from "./primitives";
import {
  CTASection,
  FaqSection,
  PageHero,
  WhyChooseUs,
} from "./sections";
import { IMAGES, type ImageKey } from "./images";
import { EMAIL, EXPERIENCES, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/data/site";

export type LocationPageProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  secondary: string;
  eventTypes: readonly string[];
  eventTypesTitle: string;
  image?: ImageKey;
  faqs: { q: string; a: string }[];
};

export function LocationPage({
  eyebrow,
  h1,
  intro,
  secondary,
  eventTypes,
  eventTypesTitle,
  image = "hero",
  faqs,
}: LocationPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={h1} copy={intro} image={image} />

      <section className="section-y bg-background pt-0">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="hover-zoom aspect-4/5 bg-sand">
              <img
                src={IMAGES[image]}
                alt={`Photo booth experience — ${h1}`}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>{eventTypesTitle}</Eyebrow>
              <p className="mt-6 text-base leading-relaxed text-foreground/75 max-w-xl">
                {secondary}
              </p>
            </Reveal>
            <div className="mt-9 grid gap-y-3 gap-x-8 sm:grid-cols-2">
              {eventTypes.map((t, i) => (
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

      <section className="section-y bg-sand">
        <div className="shell">
          <Reveal>
            <Eyebrow>What's Included</Eyebrow>
            <Display className="mt-6">The experience, end to end.</Display>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.num} delay={i * 0.05} className="bg-sand">
                <div className="p-8 h-full">
                  <span className="display text-xl text-accent">{e.num}</span>
                  <h3 className="display mt-4 text-2xl text-ink">{e.name}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{e.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FaqSection items={faqs} heading="Local questions, answered." />

      <section className="py-16 bg-background">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-y border-border py-10">
          <div>
            <p className="eyebrow">Talk to us</p>
            <p className="display mt-3 text-2xl text-ink">{PHONE_DISPLAY}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="link-underline mt-2 inline-block text-sm text-muted-foreground"
            >
              {EMAIL}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonAnchor href={`tel:${PHONE_TEL}`} variant="outline">
              Call Us
            </ButtonAnchor>
            <ButtonAnchor href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp Us
            </ButtonAnchor>
            <ButtonLink to="/contact" variant="outline">
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
