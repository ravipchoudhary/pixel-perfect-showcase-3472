import type { ImageKey } from "@/components/site/images";
import { EVENT_CATEGORIES, FAQS } from "@/data/site";

type LocationEventSection = {
  title: string;
  copy: string;
  items: readonly string[];
  to: "/events/corporate" | "/events/weddings" | "/events/birthdays";
};

export type LocationLandingPageContent = {
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  secondary: string;
  image: ImageKey;
  serviceAreaCopy: string;
  serviceAreas: readonly string[];
  eventSections: readonly LocationEventSection[];
  faqs: readonly { q: string; a: string }[];
};

const sharedLocationFaqs = FAQS.slice(0, 4);

function makeLocationPage({
  name,
  title,
  description,
  h1,
  intro,
  secondary,
  image,
  serviceAreaCopy,
  serviceAreas,
  eventCopy,
}: {
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  secondary: string;
  image: ImageKey;
  serviceAreaCopy: string;
  serviceAreas: readonly string[];
  eventCopy: readonly [string, string, string];
}): LocationLandingPageContent {
  return {
    name,
    title,
    description,
    h1,
    intro,
    secondary,
    image,
    serviceAreaCopy,
    serviceAreas,
    eventSections: [
      {
        title: "Corporate Events",
        copy: eventCopy[0],
        items: EVENT_CATEGORIES[0].items,
        to: "/events/corporate",
      },
      {
        title: "Weddings",
        copy: eventCopy[1],
        items: EVENT_CATEGORIES[1].items,
        to: "/events/weddings",
      },
      {
        title: "Birthdays & Private Celebrations",
        copy: eventCopy[2],
        items: EVENT_CATEGORIES[2].items,
        to: "/events/birthdays",
      },
    ],
    faqs: [
      {
        q: `What kinds of events can I book in ${name}?`,
        a: `The experience can be arranged for corporate events, weddings, birthdays and private celebrations in ${name}, subject to availability.`,
      },
      ...sharedLocationFaqs,
    ],
  };
}

export const LOCATION_PAGES = {
  noida: makeLocationPage({
    name: "Noida",
    title: "Photo Booth Rental in Noida | The Little Big Experience",
    description:
      "Plan a photo booth experience in Noida for a company celebration, wedding, birthday or private event. Ask about availability and request a quote.",
    h1: "Premium Photo Booth Rental in Noida",
    intro:
      "An interactive photo booth experience for Noida events, with instant prints and digital sharing for guests to enjoy in the moment.",
    secondary:
      "From office celebrations to wedding festivities and milestone birthdays, the booth gives guests a shared activity and a photo to keep.",
    image: "corporate",
    serviceAreaCopy:
      "Noida bookings can be discussed alongside events in nearby Greater Noida and the wider Delhi NCR service area. Share the venue and date to check availability.",
    serviceAreas: ["Noida", "Greater Noida", "Delhi", "Gurgaon", "Delhi NCR"],
    eventCopy: [
      "Make space for an easy, social activity at a team gathering. Custom templates can carry event or company branding.",
      "Bring guests together between the ceremony and dance floor with custom photo templates, instant prints and digital sharing.",
      "For birthdays and private get-togethers, guests can take home a printed moment and share their photos digitally.",
    ],
  }),
  greaterNoida: makeLocationPage({
    name: "Greater Noida",
    title: "Photo Booth Rental in Greater Noida | The Little Big Experience",
    description:
      "Explore photo booth rentals in Greater Noida for corporate events, weddings, birthdays and private celebrations. Contact us to check your date.",
    h1: "Photo Booth Rental in Greater Noida",
    intro:
      "Give guests at your Greater Noida event a reason to gather, pose together and leave with instant prints and shareable photos.",
    secondary:
      "The experience works across formal company occasions and personal celebrations, with templates tailored to the event rather than a fixed design.",
    image: "wedding",
    serviceAreaCopy:
      "Greater Noida events can be planned with coverage across Noida and Delhi NCR. Tell us the venue, event date and approximate guest count for an availability check.",
    serviceAreas: ["Greater Noida", "Noida", "Delhi", "Gurgaon", "Delhi NCR"],
    eventCopy: [
      "Add an interactive moment to an annual day, product launch or team celebration, with custom templates for the occasion.",
      "Engagements, mehendi, sangeet and receptions can each have a template that feels connected to the celebration.",
      "Family parties and milestone birthdays get a shared activity, unlimited photos, instant prints and digital sharing.",
    ],
  }),
  delhi: makeLocationPage({
    name: "Delhi",
    title: "Photo Booth Rental in Delhi | The Little Big Experience",
    description:
      "Photo booth experiences in Delhi for weddings, corporate functions, birthdays and private events. Share your event details to request a quote.",
    h1: "Photo Booth Rental in Delhi",
    intro:
      "Create an inviting photo moment at your Delhi event with unlimited photos, instant prints, boomerangs and digital sharing.",
    secondary:
      "Whether the gathering is a company celebration or a personal milestone, a professional attendant looks after the booth while guests take part.",
    image: "birthday",
    serviceAreaCopy:
      "We discuss Delhi bookings as part of the wider Delhi NCR service area. Send the event date and venue or city so we can confirm availability.",
    serviceAreas: ["Delhi", "Noida", "Greater Noida", "Gurgaon", "Delhi NCR"],
    eventCopy: [
      "For conferences, town halls and brand events, custom templates can reflect the event identity and approved branding.",
      "Give guests another way to celebrate together at an engagement, cocktail night, reception or wedding after-party.",
      "Birthday and private-event guests can enjoy an attendant-supported booth with instant prints and digital copies.",
    ],
  }),
  gurgaon: makeLocationPage({
    name: "Gurgaon",
    title: "Photo Booth Rental in Gurgaon | The Little Big Experience",
    description:
      "Arrange a photo booth for a Gurgaon corporate event, wedding, birthday or private celebration. Check availability and request a tailored quote.",
    h1: "Photo Booth Rental in Gurgaon",
    intro:
      "Bring a guest-friendly photo experience to your Gurgaon celebration, with unlimited photos, instant prints and digital sharing.",
    secondary:
      "From a branded office gathering to a wedding evening or house party, the setup is shaped around the occasion and supported by a professional attendant.",
    image: "corporate",
    serviceAreaCopy:
      "Gurgaon is part of our stated Delhi NCR service area. Include your venue or city, preferred date and event details when you enquire.",
    serviceAreas: ["Gurgaon", "Delhi", "Noida", "Greater Noida", "Delhi NCR"],
    eventCopy: [
      "A booth can give employees a relaxed activity at office celebrations, annual days, festive parties and team events.",
      "From cocktail nights and sangeet to receptions, custom templates help tie the prints to the wedding celebration.",
      "Sweet 16s, milestone birthdays, family parties and society events can all make room for a shared photo moment.",
    ],
  }),
  delhiNcr: makeLocationPage({
    name: "Delhi NCR",
    title: "Photo Booth Rental Across Delhi NCR | The Little Big Experience",
    description:
      "Explore photo booth experiences for corporate events, weddings, birthdays and private celebrations across Delhi NCR. Enquire with your date and location.",
    h1: "Photo Booth Rental for Events Across Delhi NCR",
    intro:
      "An interactive photo booth for events across Noida, Greater Noida, Delhi and Gurgaon, bringing instant prints and digital sharing to the celebration.",
    secondary:
      "Choose the event, share the location and shape a custom template around the occasion. A professional attendant manages the booth while guests enjoy it.",
    image: "hero",
    serviceAreaCopy:
      "Service-area enquiries include Noida, Greater Noida, Delhi and Gurgaon. Availability depends on the event date and location, so contact us with both to discuss your booking.",
    serviceAreas: ["Noida", "Greater Noida", "Delhi", "Gurgaon", "Delhi NCR"],
    eventCopy: [
      "Corporate events can include custom templates and event branding alongside prints and digital sharing.",
      "For wedding celebrations, the booth can be part of the guest experience from engagement events through the reception.",
      "Birthdays, family gatherings and private celebrations can all include an attendant-supported interactive booth.",
    ],
  }),
} as const;

export type EventLandingPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: ImageKey;
  serviceType: string;
  serviceArea: string;
  focusHeading: string;
  focusCopy: string;
  occasions: readonly string[];
  serviceHeading: string;
  serviceCopy: string;
  serviceLink:
    "/photo-booth-rental-noida" | "/photo-booth-rental-gurgaon" | "/photo-booth-rental-delhi-ncr";
  faqs: readonly { q: string; a: string }[];
};

export const EVENT_LANDING_PAGES = {
  corporateNoida: {
    title: "Corporate Photo Booth Rental Noida | The Little Big Experience",
    description:
      "Plan a corporate photo booth in Noida for annual days, Diwali parties, launches, conferences and team events. Check availability and request a quote.",
    eyebrow: "Corporate Events · Noida",
    h1: "Corporate Photo Booth in Noida",
    intro:
      "Give colleagues and guests an easy way to take part in your Noida company event, with instant prints and custom templates for your brand.",
    image: "corporate",
    serviceType: "Corporate photo booth experience",
    serviceArea: "Noida",
    focusHeading: "For the moments that bring a team together.",
    focusCopy:
      "From a town hall to a festive office celebration, the booth becomes an activity guests can enjoy together. Custom templates can include event branding.",
    occasions: EVENT_CATEGORIES[0].items,
    serviceHeading: "Planning a corporate event in Noida?",
    serviceCopy:
      "Share your event date, venue or city and approximate guest count. We will check availability and discuss a quote based on your requirements.",
    serviceLink: "/photo-booth-rental-noida",
    faqs: [
      {
        q: "Can the photo template include company branding?",
        a: "Yes. Custom templates can be designed around your event, including approved company branding and logos.",
      },
      {
        q: "Which corporate event formats can I enquire about?",
        a: "Annual days, Diwali parties, employee engagement events, product launches, brand activations, dealer meets, conferences, town halls and team parties are among the listed occasions.",
      },
      {
        q: "How do I check availability in Noida?",
        a: "Send the event date and venue or city by WhatsApp or through the enquiry form to request an availability check and quote.",
      },
    ],
  },
  weddingDelhiNcr: {
    title: "Wedding Photo Booth Rental Delhi NCR | The Little Big Experience",
    description:
      "Wedding photo booth for Delhi NCR engagements, mehendi, sangeet, cocktail nights, receptions and after-parties. Check your date and request a quote.",
    eyebrow: "Weddings · Delhi NCR",
    h1: "Wedding Photo Booth for Delhi NCR Celebrations",
    intro:
      "Give wedding guests a place to gather, make photos together and take home instant prints from the celebration.",
    image: "wedding",
    serviceType: "Wedding photo booth experience",
    serviceArea: "Delhi NCR",
    focusHeading: "A little more to remember from the day.",
    focusCopy:
      "Custom templates can follow the celebration's visual direction, while digital sharing and boomerangs let guests revisit the moment later.",
    occasions: EVENT_CATEGORIES[1].items,
    serviceHeading: "Planning a wedding celebration in Delhi NCR?",
    serviceCopy:
      "Share your date, event location and approximate guest count. We can check availability and discuss the experience for your celebration.",
    serviceLink: "/photo-booth-rental-delhi-ncr",
    faqs: [
      {
        q: "Can the photo template match our wedding?",
        a: "Yes. Custom templates can be designed around your event colours and wedding details.",
      },
      {
        q: "Which wedding occasions can include the booth?",
        a: "The experience is listed for engagements, cocktail nights, receptions, mehendi, sangeet, wedding celebrations and after-parties.",
      },
      {
        q: "How can we check our wedding date?",
        a: "Send your wedding date and event location through WhatsApp or the enquiry form to ask about availability and request a quote.",
      },
    ],
  },
  birthdayGurgaon: {
    title: "Birthday Photo Booth Rental Gurgaon | The Little Big Experience",
    description:
      "Birthday photo booth experiences in Gurgaon for teen parties, milestone celebrations, family gatherings and private events. Check your date and enquire.",
    eyebrow: "Birthdays & Private Events · Gurgaon",
    h1: "Birthday Photo Booth in Gurgaon",
    intro:
      "Make room for a shared photo moment at a Gurgaon birthday or private celebration, with unlimited photos, instant prints and digital sharing.",
    image: "birthday",
    serviceType: "Birthday photo booth experience",
    serviceArea: "Gurgaon",
    focusHeading: "A birthday activity everyone can join.",
    focusCopy:
      "A professional attendant looks after the booth while friends and family make photos, receive instant prints and share their digital copies.",
    occasions: EVENT_CATEGORIES[2].items,
    serviceHeading: "Planning a birthday in Gurgaon?",
    serviceCopy:
      "Send your event date, venue or city and approximate guest count. We will check availability and discuss a quote for your celebration.",
    serviceLink: "/photo-booth-rental-gurgaon",
    faqs: [
      {
        q: "Which birthday celebrations can I enquire about?",
        a: "Teen parties, Sweet 16s, 18th birthdays, milestone birthdays, family parties, house parties, society events and private celebrations are listed occasions.",
      },
      {
        q: "Are instant prints and digital sharing included?",
        a: "Instant prints and digital sharing are confirmed parts of the experience. Share your event details to discuss availability.",
      },
      {
        q: "How do I request availability in Gurgaon?",
        a: "Use the enquiry form or WhatsApp with your date and venue or city to check availability and request a quote.",
      },
    ],
  },
} as const satisfies Record<string, EventLandingPageContent>;
