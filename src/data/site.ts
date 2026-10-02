export const BRAND = "The Little Big Experience";

export const PHONE_DISPLAY = "+91 98216 93647";
export const PHONE_TEL = "+919821693647";
export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/919821693647?text=${encodeURIComponent(message)}`;
}
export const WHATSAPP_URL = buildWhatsAppUrl(
  "Hi The Little Big Experience! I'd like to check availability for my event.",
);
export const EMAIL = "hello@thelittlebigexperience.com";
export const INSTAGRAM_HANDLE = "@thelittlebigexperience";
export const INSTAGRAM_URL = "https://instagram.com/thelittlebigexperience";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Experiences", to: "/experiences" },
  { label: "Events", to: "/events" },
  { label: "Our Work", to: "/our-work" },
  { label: "Packages", to: "/packages" },
  { label: "B2B", to: "/b2b" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const EXPERIENCES = [
  {
    num: "01",
    name: "Instant Prints",
    tagline: "Take the memory home.",
    description:
      "Guests walk away with a physical photo strip in their hands, printed moments after the shutter clicks.",
  },
  {
    num: "02",
    name: "Digital Sharing",
    tagline: "Share the moment instantly.",
    description: "Every shot is easy to share digitally, so the fun travels far beyond the room.",
  },
  {
    num: "03",
    name: "Boomerangs",
    tagline: "Turn every pose into a moment in motion.",
    description: "Looping, playful clips that guests love posting the second they're made.",
  },
  {
    num: "04",
    name: "Custom Templates",
    tagline: "Your event. Your colours. Your branding.",
    description: "Print and digital layouts designed around your celebration or your brand.",
  },
  {
    num: "05",
    name: "Interactive Experience",
    tagline: "More than a photo — an activity guests participate in.",
    description:
      "A gathering point at your event where people queue up, laugh and come back for one more.",
  },
  {
    num: "06",
    name: "Professional Attendant",
    tagline: "We manage the booth while you enjoy your event.",
    description: "Our attendant sets up, runs and looks after the booth from first guest to last.",
  },
  {
    num: "07",
    name: "Unlimited Photos",
    tagline: "Keep the moments coming.",
    description: "Guests can take as many photos as they like during the experience.",
  },
] as const;

export const WHY_US = [
  {
    title: "Unlimited Photos",
    copy: "Let your guests capture as many memories as they want.",
  },
  {
    title: "Instant Prints",
    copy: "Guests can take home physical photo strips instantly.",
  },
  { title: "Digital Sharing", copy: "Easy digital sharing for guests." },
  {
    title: "Custom Templates",
    copy: "Your event. Your colours. Your branding.",
  },
  {
    title: "Fun Interactive Experience",
    copy: "More than just taking a picture — it's an activity guests actually participate in.",
  },
  {
    title: "Professional Attendant",
    copy: "We manage the booth while you enjoy your event.",
  },
] as const;

export const EVENT_CATEGORIES = [
  {
    slug: "corporate",
    title: "Corporate Events",
    to: "/events/corporate" as const,
    blurb:
      "Annual days, Diwali parties, brand activations and everything in between — with your branding on every print.",
    items: [
      "Annual Days",
      "Diwali Parties",
      "Employee Engagement",
      "Brand Events",
      "Office Celebrations",
      "Christmas Parties",
      "Product Launches",
      "Brand Activations",
      "Dealer Meets",
      "Conferences",
      "Town Halls",
      "Team Parties",
    ],
  },
  {
    slug: "weddings",
    title: "Weddings",
    to: "/events/weddings" as const,
    blurb:
      "From mehendi to the after-party, a place where your guests gather, pose and take something home.",
    items: [
      "Engagements",
      "Cocktail Nights",
      "Receptions",
      "Mehendi",
      "Sangeet",
      "Wedding Celebrations",
      "Wedding After-Parties",
    ],
  },
  {
    slug: "birthdays",
    title: "Birthdays & Celebrations",
    to: "/events/birthdays" as const,
    blurb:
      "Teen parties, milestone birthdays and house parties that everybody leaves with a ridiculous photo strip.",
    items: [
      "Birthdays",
      "Teen Parties",
      "Sweet 16",
      "18th Birthdays",
      "Milestone Birthdays",
      "Family Parties",
      "House Parties",
      "Society Events",
      "Private Celebrations",
    ],
  },
] as const;

export const CUSTOMIZATION = [
  "Custom photo templates",
  "Custom colours",
  "Event branding",
  "Company logos",
  "Custom overlays",
  "Wedding designs",
  "Branded prints",
  "Event-specific designs",
] as const;

export type WorkItem = {
  category:
    "Corporate Celebrations" | "Wedding Experiences" | "Birthday Celebrations" | "Private Events";
  image: "corporate" | "wedding" | "birthday" | "hero";
};

export const WORK: WorkItem[] = [
  { category: "Corporate Celebrations", image: "corporate" },
  { category: "Wedding Experiences", image: "wedding" },
  { category: "Birthday Celebrations", image: "birthday" },
  { category: "Private Events", image: "birthday" },
];

export const PACKAGES = [
  {
    name: "Essential",
    for: "For intimate celebrations.",
    price: "Get a Quote",
    features: [
      "Professional attendant",
      "Unlimited photos",
      "Instant prints",
      "Digital sharing",
      "Custom template",
    ],
  },
  {
    name: "Signature",
    for: "For weddings and parties.",
    price: "Get a Quote",
    featured: true,
    features: [
      "Professional attendant",
      "Unlimited photos",
      "Instant prints",
      "Digital sharing",
      "Custom template",
      "Boomerangs",
    ],
  },
  {
    name: "Corporate",
    for: "For branded and corporate experiences.",
    price: "Get a Quote",
    features: [
      "Professional attendant",
      "Unlimited photos",
      "Instant prints",
      "Digital sharing",
      "Branded templates & logos",
      "Custom overlays",
      "Boomerangs",
    ],
  },
] as const;

export const B2B_INCLUDES = [
  "Photo booth setup",
  "Printing equipment",
  "Software",
  "Custom templates",
  "Training",
  "Operational support",
] as const;

export const LOCATIONS = [
  { name: "Noida", to: "/photo-booth-rental-noida" as const },
  { name: "Greater Noida", to: "/photo-booth-rental-greater-noida" as const },
  { name: "Delhi", to: "/photo-booth-rental-delhi" as const },
  { name: "Gurgaon", to: "/photo-booth-rental-gurgaon" as const },
  { name: "Delhi NCR", to: "/photo-booth-rental-delhi-ncr" as const },
] as const;

export const FAQS = [
  {
    q: "What areas do you cover?",
    a: "We serve Noida, Greater Noida, Delhi, Gurgaon / Gurugram and the wider Delhi NCR region. Share your venue or city and date to check availability.",
  },
  {
    q: "What is included with the photo booth?",
    a: "The confirmed experience includes unlimited photos, instant prints, digital sharing, boomerangs, custom templates, an interactive guest experience and a professional attendant.",
  },
  {
    q: "Are prints included?",
    a: "Yes. Instant prints are part of the experience, so guests can take a physical photo away from the event.",
  },
  {
    q: "Can we customize the photo templates?",
    a: "Yes. Templates can be designed around your event colours, style and approved branding.",
  },
  {
    q: "Do you provide a professional attendant?",
    a: "Yes. A professional attendant looks after the booth while you and your guests enjoy the event.",
  },
  {
    q: "Can corporate branding be added?",
    a: "Custom templates can include approved event or company branding. Share your requirements when you enquire.",
  },
  {
    q: "Do guests receive digital copies?",
    a: "Yes. Digital sharing is part of the confirmed experience.",
  },
  {
    q: "Do you offer boomerangs?",
    a: "Yes. Boomerangs are part of the experience, along with photos, prints and digital sharing.",
  },
  {
    q: "What types of events do you cover?",
    a: "Corporate events, weddings, birthdays and private celebrations are among the occasions we cover. See the Events pages for examples of event formats.",
  },
  {
    q: "How can I check availability?",
    a: "Send your event date and location through WhatsApp, call us or use the enquiry form to ask about availability.",
  },
  {
    q: "How far in advance should I book?",
    a: "Reach out once you have an event date in mind. We can check current availability and discuss the next steps.",
  },
  {
    q: "How do I request a quote?",
    a: "Share your event type, date, venue or city and approximate guest count through the enquiry form or WhatsApp. We will discuss availability and a quote for your requirements.",
  },
] as const;

export const EVENT_TYPE_OPTIONS = [
  "Corporate Event",
  "Wedding",
  "Birthday",
  "Private Celebration",
  "Brand Activation",
  "Other",
] as const;
