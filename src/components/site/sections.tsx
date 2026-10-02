import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonAnchor, ButtonLink, Display, Eyebrow, Reveal } from "./primitives";
import { IMAGE_SRCSETS, IMAGES, type ImageKey } from "./images";
import { getPageBreadcrumbs } from "@/lib/seo";
import {
  CUSTOMIZATION,
  EMAIL,
  EVENT_CATEGORIES,
  EXPERIENCES,
  FAQS,
  LOCATIONS,
  PACKAGES,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  WHY_US,
  WORK,
} from "@/data/site";

/* ---------------- Page hero (inner pages) ---------------- */

export function PageHero({
  eyebrow,
  title,
  copy,
  image = "hero",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  image?: ImageKey;
}) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const breadcrumbs = getPageBreadcrumbs(pathname);

  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES[image]}
          srcSet={IMAGE_SRCSETS[image]}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          width={image === "hero" ? 1600 : 1200}
          height={image === "hero" ? 1008 : 1504}
          className="size-full object-cover opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/70 to-background" />
      </div>
      <div className="shell max-w-4xl">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {breadcrumbs.map((item, index) => {
                const isCurrent = index === breadcrumbs.length - 1;

                return (
                  <li key={`${item.name}-${index}`} className="flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    {item.path && !isCurrent ? (
                      <Link
                        to={item.path}
                        className="hover:text-ink focus-visible:outline focus-visible:outline-accent"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span aria-current={isCurrent ? "page" : undefined}>{item.name}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <Display as="h1" className="mt-6 text-5xl sm:text-6xl lg:text-7xl">
            {title}
          </Display>
        </Reveal>
        {copy && (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              {copy}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------------- Experiences ---------------- */

export function ExperienceGrid() {
  return (
    <section className="section-y bg-background">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>The Experiences</Eyebrow>
            <Display className="mt-6">
              Everything guests
              <br />
              actually remember.
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink to="/contact" variant="outline">
              Check Availability
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.num} delay={i * 0.06} className="bg-background">
              <Link
                to="/experiences"
                className="group flex h-full flex-col justify-between gap-10 p-8 lg:p-10 transition-colors duration-500 hover:bg-sand"
              >
                <div>
                  <span className="display text-2xl text-accent">{e.num}</span>
                  <h3 className="display mt-6 text-2xl lg:text-3xl text-ink">{e.name}</h3>
                  <p className="mt-4 text-sm italic text-muted-foreground">{e.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{e.description}</p>
                </div>
                <span className="eyebrow text-ink group-hover:text-accent transition-colors">
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Event categories ---------------- */

export function EventCategories() {
  const imgs = {
    corporate: "corporate",
    weddings: "wedding",
    birthdays: "birthday",
  } as const satisfies Record<(typeof EVENT_CATEGORIES)[number]["slug"], ImageKey>;
  return (
    <section className="section-y bg-sand">
      <div className="shell">
        <Reveal>
          <Eyebrow>Occasions</Eyebrow>
          <Display className="mt-6">
            Unique experiences
            <br />
            for every occasion.
          </Display>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {EVENT_CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link to={c.to} className="group block">
                <div className="hover-zoom aspect-4/5 bg-sand-deep">
                  <img
                    src={IMAGES[imgs[c.slug]]}
                    srcSet={IMAGE_SRCSETS[imgs[c.slug]]}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt={`${c.title} photo booth experience`}
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="display mt-7 text-3xl text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{c.blurb}</p>
                <span className="eyebrow mt-5 inline-block text-ink group-hover:text-accent transition-colors">
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function B2BSection() {
  return (
    <section className="section-y bg-ink text-background">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>For event professionals</Eyebrow>
            <h2 className="display mt-6 text-4xl sm:text-5xl text-background">
              Start your photo booth business.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/70">
              Photo booth setup, printing equipment, software, custom templates, training and
              operational support for planners, photographers and entrepreneurs.
            </p>
            <ButtonLink to="/b2b" variant="light" className="mt-8">
              Explore the B2B offer
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={0.08} className="lg:col-span-5">
          <div className="hover-zoom aspect-4/3 bg-background/10">
            <img
              src={IMAGES.corporate}
              srcSet={IMAGE_SRCSETS.corporate}
              sizes="(min-width: 1024px) 41vw, 100vw"
              alt="Photo booth equipment set up for an event"
              loading="lazy"
              width={1200}
              height={1504}
              className="size-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */

export function WhyChooseUs() {
  return (
    <section className="section-y bg-ink text-background">
      <div className="shell">
        <Reveal>
          <p className="eyebrow rule-label text-background/50">Why Us</p>
          <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl text-background">
            We bring the fun.
            <br />
            You enjoy the moment.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-3 border border-background/15">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05} className="bg-ink">
              <div className="p-8 lg:p-10 h-full">
                <span className="text-xs tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-5 text-2xl text-background">{w.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-background/65">{w.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Customization ---------------- */

export function Customization() {
  return (
    <section className="section-y bg-background">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="hover-zoom aspect-4/5 lg:aspect-square bg-sand">
            <img
              src={IMAGES.corporate}
              srcSet={IMAGE_SRCSETS.corporate}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="A photo template being printed"
              loading="lazy"
              width={1200}
              height={1504}
              className="size-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Customization</Eyebrow>
            <Display className="mt-6">Make it yours.</Display>
            <p className="mt-5 text-lg text-muted-foreground">
              Your event. Your style. Your memories.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-y-4 gap-x-8 sm:grid-cols-2">
            {CUSTOMIZATION.map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <div className="flex items-start gap-3 border-b border-border pb-4">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                  <span className="text-sm text-foreground/80">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work gallery ---------------- */

const WORK_FILTERS = ["All", ...new Set(WORK.map((item) => item.category))] as const;

export function WorkGallery() {
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]>("All");
  const items = WORK.filter((w) => filter === "All" || w.category === filter);

  return (
    <section className="section-y bg-sand">
      <div className="shell">
        <Reveal>
          <Eyebrow>Our Work</Eyebrow>
          <Display className="mt-6">
            Moments made
            <br />
            together.
          </Display>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
          {WORK_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "text-[0.7rem] font-medium uppercase tracking-[0.18em] pb-1 border-b transition-colors",
                filter === f
                  ? "text-ink border-accent"
                  : "text-muted-foreground border-transparent hover:text-ink",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((w, i) => (
            <motion.article
              key={w.category}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div
                className={cn("hover-zoom bg-sand-deep", i % 5 === 0 ? "aspect-4/5" : "aspect-3/4")}
              >
                <img
                  src={IMAGES[w.image]}
                  srcSet={IMAGE_SRCSETS[w.image]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt={`${w.category} photo booth experience`}
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="display mt-5 text-2xl text-ink">{w.category}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Packages ---------------- */

export function PackagesGrid() {
  return (
    <section className="section-y bg-background">
      <div className="shell">
        <Reveal>
          <Eyebrow>Packages</Eyebrow>
          <Display className="mt-6">
            Choose the experience
            <br />
            that fits your event.
          </Display>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col p-9 lg:p-11 border",
                  "featured" in p && p.featured
                    ? "bg-ink text-background border-ink"
                    : "bg-background border-border",
                )}
              >
                <h3
                  className={cn(
                    "display text-3xl",
                    "featured" in p && p.featured ? "text-background" : "text-ink",
                  )}
                >
                  {p.name}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm",
                    "featured" in p && p.featured ? "text-background/60" : "text-muted-foreground",
                  )}
                >
                  {p.for}
                </p>
                <p className="mt-8 text-[0.72rem] uppercase tracking-[0.18em] text-accent">
                  {p.price}
                </p>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                      <span
                        className={
                          "featured" in p && p.featured
                            ? "text-background/80"
                            : "text-foreground/80"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  to="/contact"
                  variant={"featured" in p && p.featured ? "light" : "solid"}
                  className="mt-10 w-full"
                >
                  Get a Quote
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

export function FaqSection({
  items = FAQS,
  heading = "Questions, answered.",
}: {
  items?: readonly { q: string; a: string }[];
  heading?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y bg-background">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <Display className="mt-6 text-4xl lg:text-5xl">{heading}</Display>
            <p className="mt-6 text-sm text-muted-foreground">
              Still unsure? Message us on WhatsApp and we'll answer in minutes.
            </p>
            <ButtonAnchor
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              className="mt-7"
            >
              WhatsApp Us
            </ButtonAnchor>
          </Reveal>
        </div>

        <div className="lg:col-span-8 border-t border-border">
          {items.map((f, i) => (
            <div key={f.q} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="text-base sm:text-lg text-ink">{f.q}</span>
                {open === i ? (
                  <Minus className="mt-1 size-4 shrink-0 text-accent" strokeWidth={1.6} />
                ) : (
                  <Plus className="mt-1 size-4 shrink-0 text-muted-foreground" strokeWidth={1.6} />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 pr-10 text-sm leading-relaxed text-foreground/70">{f.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Locations ---------------- */

export function LocationSection() {
  const marquee = ["Noida", "Greater Noida", "Delhi", "Gurgaon", "Gurugram", "Delhi NCR"];
  return (
    <section className="section-y bg-ink text-background overflow-hidden">
      <div className="shell">
        <Reveal>
          <p className="eyebrow rule-label text-background/50">Where We Work</p>
          <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl text-background">
            Photo booth experiences
            <br />
            across Delhi NCR.
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 border-y border-background/15 py-6" aria-hidden="true">
        <div className="marquee-track gap-10">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="display text-3xl sm:text-5xl text-background/40 whitespace-nowrap"
            >
              {m} <span className="text-accent">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="shell mt-14 grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-5 border border-background/15">
        {LOCATIONS.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.05} className="bg-ink">
            <Link
              to={l.to}
              className="group flex h-full items-center justify-between gap-4 p-7 transition-colors hover:bg-background hover:text-ink"
            >
              <span className="display text-xl">{l.name}</span>
              <span className="text-accent">→</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

export function CTASection({
  title = "Let's make your event unforgettable.",
  primary = "Check Availability",
}: {
  title?: string;
  primary?: string;
}) {
  return (
    <section className="relative section-y overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.hero}
          srcSet={IMAGE_SRCSETS.hero}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={1008}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/78" />
      </div>
      <div className="shell text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl text-background">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/contact">{primary}</ButtonLink>
            <ButtonAnchor href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="light">
              WhatsApp Us
            </ButtonAnchor>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.7rem] uppercase tracking-[0.18em] text-background/60">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-background">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-background">
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
