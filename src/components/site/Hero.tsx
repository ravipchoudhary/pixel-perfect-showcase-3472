import { motion } from "motion/react";
import { IMAGE_SRCSETS, IMAGES } from "./images";
import { ButtonAnchor, ButtonLink } from "./primitives";
import { WHATSAPP_URL } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-ink">
      <motion.img
        src={IMAGES.hero}
        srcSet={IMAGE_SRCSETS.hero}
        sizes="100vw"
        alt="Indian guests celebrating together at a wedding"
        width={1600}
        height={1008}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/35" />

      <div className="shell relative z-10 pb-28 pt-40 md:pb-24">
        <p className="eyebrow text-background/70">Noida • Delhi • Gurgaon • Delhi NCR</p>

        <h1 className="display mt-6 text-[clamp(2.75rem,6vw,6.5rem)] text-background">
          <span className="block">Premium photo booth</span>
          <span className="block">experiences for</span>
          <span className="block">unforgettable celebrations</span>
        </h1>

        <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-background/75">
          Corporate events, weddings, birthdays and celebrations across Delhi NCR.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <ButtonLink to="/contact">Book Your Experience</ButtonLink>
          <ButtonAnchor href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="light">
            WhatsApp Us
          </ButtonAnchor>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-background/20 pt-6 text-[0.68rem] uppercase tracking-[0.18em] text-background/60"
        >
          <span>Instant Prints</span>
          <span className="text-accent">•</span>
          <span>Digital Sharing</span>
          <span className="text-accent">•</span>
          <span>Boomerangs</span>
          <span className="text-accent">•</span>
          <span>Custom Templates</span>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 right-6 hidden h-16 w-px overflow-hidden bg-background/20 md:block"
      >
        <span className="scroll-hint-bar block h-full w-px bg-accent" />
      </div>
    </section>
  );
}
