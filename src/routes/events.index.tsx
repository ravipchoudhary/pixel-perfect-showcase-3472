import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Display, Eyebrow, Reveal } from "@/components/site/primitives";
import { CTASection, EventCategories, PageHero } from "@/components/site/sections";
import { EVENT_CATEGORIES } from "@/data/site";

export const Route = createFileRoute("/events/")({
  head: () =>
    pageMeta({
      title: "Photo Booth Event Experiences | The Little Big Experience",
      description:
        "Explore corporate events, weddings, birthdays and private celebrations suited to our photo booth experience across Delhi NCR. Find your occasion and enquire.",
      path: "/events",
      image: "corporate",
    }),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={
          <>
            Unique experiences
            <br />
            for every occasion.
          </>
        }
        copy="From annual days to after-parties, we bring a booth people actually gather around."
        image="corporate"
      />

      <EventCategories />

      <section className="section-y bg-background">
        <div className="shell grid gap-12 lg:grid-cols-3">
          {EVENT_CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Eyebrow>{c.title}</Eyebrow>
              <ul className="mt-6 space-y-2.5">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border pb-2.5 text-sm text-foreground/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={c.to}
                className="eyebrow mt-6 inline-block text-ink hover:text-accent transition-colors"
              >
                Explore {c.title} →
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
