import { EMAIL, PHONE_DISPLAY } from "@/data/site";
import { Display, Eyebrow, Reveal } from "./primitives";
import { CTASection, PageHero } from "./sections";

type LegalSection = { title: string; paragraphs: readonly string[] };

const PRIVACY_SECTIONS: readonly LegalSection[] = [
  {
    title: "Enquiries and contact details",
    paragraphs: [
      "The enquiry form is a static frontend form. Submitting it opens WhatsApp with the details you entered; this website does not send the form to a booking server or store it in a website database.",
      "If you contact us by WhatsApp, phone, email or Instagram, the details you choose to share are handled through that service and the resulting conversation.",
    ],
  },
  {
    title: "How information is used",
    paragraphs: [
      "Information you choose to provide is used to respond to your enquiry, discuss event availability and prepare a quotation when requested.",
      "The website does not currently include an analytics provider or advertising tracker. It loads typefaces from Google Fonts and links to third-party communication and social services, which may process data under their own policies.",
    ],
  },
  {
    title: "Cookies and retention",
    paragraphs: [
      "The site does not intentionally set analytics or advertising cookies. Your browser and any third-party service you choose to open may apply their own storage or privacy controls.",
      "Enquiry details are not retained by this website. Messages in WhatsApp, email or other services remain subject to those services and the settings of the accounts used in the conversation.",
    ],
  },
  {
    title: "Your choices and contact",
    paragraphs: [
      "You can choose what information to include before opening WhatsApp, and can contact us to request access to or deletion of enquiry information within our control.",
      `For privacy questions, contact ${EMAIL} or call ${PHONE_DISPLAY}.`,
    ],
  },
];

const TERMS_SECTIONS: readonly LegalSection[] = [
  {
    title: "Website information",
    paragraphs: [
      "This website provides general information about The Little Big Experience and its photo booth services. Content may be updated as offerings and availability change.",
      "Website enquiries are not a confirmed booking. A booking is confirmed only through the applicable quotation or booking confirmation shared with you.",
    ],
  },
  {
    title: "Enquiries, availability and pricing",
    paragraphs: [
      "Availability and service details depend on the event date, location and requirements. Any pricing, inclusions and applicable booking terms will be specified in the applicable quotation or booking confirmation.",
      "Cancellation and rescheduling are subject to the terms specified in the applicable booking confirmation or quotation. No particular fee, refund or notice period is created by this website.",
    ],
  },
  {
    title: "Event responsibilities and equipment",
    paragraphs: [
      "Please provide accurate event details and share relevant venue requirements when requesting a quotation. The agreed service and responsibilities will be set out in the booking confirmation.",
      "Equipment should be used with reasonable care. Any specific arrangements for setup, access or equipment care will be agreed for the event; these website terms do not set a separate penalty or charge.",
    ],
  },
  {
    title: "Content, liability and events outside control",
    paragraphs: [
      "Website text, design and images are provided for this site and may not be reused without permission. If event photography or other client content is to be used, arrangements will be discussed and specified separately in the applicable booking confirmation.",
      "To the extent permitted by applicable law, the website is provided for general information and does not guarantee uninterrupted access. Event-service responsibilities and any limitations are governed by the applicable booking confirmation. Events outside either party's reasonable control should be addressed through that confirmation.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [`Questions about these terms: ${EMAIL} or ${PHONE_DISPLAY}.`],
  },
];

export function LegalPage({ page }: { page: "privacy" | "terms" }) {
  const isPrivacy = page === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
  const sections = isPrivacy ? PRIVACY_SECTIONS : TERMS_SECTIONS;

  return (
    <>
      <PageHero
        eyebrow="The Little Big Experience"
        title={title}
        copy={
          isPrivacy
            ? "How this website handles information you choose to share."
            : "The terms that apply when you use this website and make an event enquiry."
        }
      />
      <section className="section-y bg-background pt-0">
        <div className="shell max-w-4xl">
          <p className="eyebrow">Last updated: 1 October 2026</p>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.03}>
                <article className="py-8 sm:py-10">
                  <Eyebrow>0{index + 1}</Eyebrow>
                  <Display as="h2" className="mt-3 text-2xl sm:text-3xl">
                    {section.title}
                  </Display>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/75">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Questions? Talk to us." primary="Contact Us" />
    </>
  );
}
