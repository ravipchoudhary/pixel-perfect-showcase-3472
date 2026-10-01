import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { ButtonAnchor, Display, Eyebrow, Reveal } from "@/components/site/primitives";
import { CTASection, PageHero } from "@/components/site/sections";
import { B2B_INCLUDES, EMAIL } from "@/data/site";
import corporate from "@/assets/corporate.jpg";

export const Route = createFileRoute("/b2b")({
  head: () =>
    pageMeta({
      title: "Start Your Own Photo Booth Business | The Little Big Experience",
      description:
        "Photo booth setup, printing equipment, software, custom templates, training and operational support to launch your own photo booth service.",
      path: "/b2b",
    }),
  component: B2B,
});

function B2B() {
  return (
    <>
      <PageHero
        eyebrow="B2B"
        title={
          <>
            Want to start your own
            <br />
            photo booth business?
          </>
        }
        image="corporate"
      />

      <section className="section-y bg-background pt-0">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="space-y-6 text-base leading-relaxed text-foreground/75 max-w-xl">
                <p>
                  We provide everything you need to get started — from the photo booth
                  setup and printing equipment to software, custom templates, training and
                  operational support.
                </p>
                <p>
                  Whether you're an event planner, photographer, entrepreneur or an
                  existing event business, our ready-to-use solutions help you launch your
                  own photo booth service and start taking bookings with confidence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ButtonAnchor
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("B2B Enquiry — Photo Booth Business")}`}
                className="mt-10"
              >
                Send B2B Enquiry
              </ButtonAnchor>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="hover-zoom aspect-4/5 bg-sand">
              <img
                src={corporate}
                alt="Photo booth setup running at a professional event"
                loading="lazy"
                width={1200}
                height={1504}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-ink text-background">
        <div className="shell">
          <Reveal>
            <p className="eyebrow rule-label text-background/50">What's Included</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl text-background">
              Everything you need
              <br />
              to launch.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-3 border border-background/15">
            {B2B_INCLUDES.map((b, i) => (
              <Reveal key={b} delay={i * 0.05} className="bg-ink">
                <div className="flex items-start gap-3 p-8 h-full">
                  <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                  <span className="display text-xl text-background">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's talk about your photo booth business." primary="Get in Touch" />
    </>
  );
}
