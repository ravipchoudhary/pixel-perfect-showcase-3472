import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Eyebrow, Reveal } from "@/components/site/primitives";
import { PageHero } from "@/components/site/sections";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Photo Booth Enquiry & Availability | The Little Big Experience",
      description:
        "Enquire about photo booth availability for corporate events, weddings, birthdays and private celebrations across Noida, Delhi, Gurgaon and Delhi NCR.",
      path: "/contact",
      image: "hero",
    }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Book Now"
        title={
          <>
            Let's make your event
            <br />
            unforgettable.
          </>
        }
        copy="Share your date and location and we'll come back with availability and a quote."
      />

      <section className="section-y bg-background pt-0">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <EnquiryForm />
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <Reveal delay={0.1}>
              <Eyebrow>Or reach us directly</Eyebrow>
              <div className="mt-8 space-y-7">
                <div>
                  <p className="eyebrow">Call Now</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="display mt-2 block text-2xl text-ink hover:text-accent transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div>
                  <p className="eyebrow">Email Us</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-2 block break-all text-base text-ink hover:text-accent transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <p className="eyebrow">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-base text-ink hover:text-accent transition-colors"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
                <div>
                  <p className="eyebrow">Service Area</p>
                  <p className="mt-2 text-base text-foreground/75">
                    Noida • Greater Noida • Delhi • Gurgaon / Gurugram • Delhi NCR
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-ink px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-background transition-colors duration-500 hover:bg-accent"
                >
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
