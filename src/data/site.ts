export const BRAND = "The Little Big Experience";

export const PHONE_DISPLAY = "+91 98216 93647";
export const PHONE_TEL = "+919821693647";
export const WHATSAPP_URL =
  "https://wa.me/919821693647?text=Hi%20The%20Little%20Big%20Experience!%20I'd%20like%20to%20check%20availability%20for%20my%20event.";
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
  { label: "Testimonials", to: "/testimonials" },
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
    description:
      "Every shot is easy to share digitally, so the fun travels far beyond the room.",
  },
  {
    num: "03",
    name: "Boomerangs",
    tagline: "Turn every pose into a moment in motion.",
    description:
      "Looping, playful clips that guests love posting the second they're made.",
  },
  {
    num: "04",
    name: "Custom Templates",
    tagline: "Your event. Your colours. Your branding.",
    description:
      "Print and digital layouts designed around your celebration or your brand.",
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
    description:
      "Our attendant sets up, runs and looks after the booth from first guest to last.",
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
  title: string;
  category: "Corporate" | "Weddings" | "Birthdays" | "Celebrations";
  location: string;
  description: string;
  image: "corporate" | "wedding" | "birthday" | "hero";
};

export const WORK: WorkItem[] = [
  {
    title: "Annual Day Celebration",
    category: "Corporate",
    location: "Noida",
    description:
      "Sample placeholder project — replace with a real corporate event once photos are supplied.",
    image: "corporate",
  },
  {
    title: "Sangeet Night",
    category: "Weddings",
    location: "Delhi NCR",
    description:
      "Sample placeholder project — replace with a real wedding once photos are supplied.",
    image: "wedding",
  },
  {
    title: "Milestone Birthday",
    category: "Birthdays",
    location: "Gurgaon",
    description:
      "Sample placeholder project — replace with a real birthday once photos are supplied.",
    image: "birthday",
  },
  {
    title: "Diwali Party",
    category: "Corporate",
    location: "Gurgaon",
    description:
      "Sample placeholder project — replace with a real corporate event once photos are supplied.",
    image: "hero",
  },
  {
    title: "Cocktail Evening",
    category: "Weddings",
    location: "Delhi",
    description:
      "Sample placeholder project — replace with a real wedding once photos are supplied.",
    image: "hero",
  },
  {
    title: "Society Celebration",
    category: "Celebrations",
    location: "Greater Noida",
    description:
      "Sample placeholder project — replace with a real celebration once photos are supplied.",
    image: "birthday",
  },
];

export const PACKAGES = [
  {
    name: "Essential",
    for: "For intimate celebrations.",
    price: "Starting from ₹XX,XXX",
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
    price: "Starting from ₹XX,XXX",
    featured: true,
    features: [
      "Professional attendant",
      "Unlimited photos",
      "Instant prints",
      "Digital sharing",
      "Custom template",
      "Boomerangs",
      "Props",
    ],
  },
  {
    name: "Corporate",
    for: "For branded and corporate experiences.",
    price: "Starting from ₹XX,XXX",
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

export const TESTIMONIALS = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  quote: "Add verified Google/customer review here.",
  name: "Customer Name",
  event: [
    "Corporate Event",
    "Wedding",
    "Birthday",
    "Corporate Event",
    "Wedding",
    "Private Celebration",
  ][i],
}));

export const LOCATIONS = [
  { name: "Noida", to: "/photo-booth-rental-noida" as const },
  { name: "Greater Noida", to: "/photo-booth-rental-noida" as const },
  { name: "Delhi", to: "/photo-booth-rental-delhi" as const },
  { name: "Gurgaon / Gurugram", to: "/photo-booth-rental-gurgaon" as const },
  { name: "Delhi NCR", to: "/wedding-photo-booth-delhi-ncr" as const },
] as const;

export const FAQS = [
  {
    q: "What does a photo booth rental include?",
    a: "Our photo booth setup comes with unlimited photos, instant prints, digital sharing, boomerangs, a custom template designed for your event and a professional attendant who runs the booth throughout.",
  },
  {
    q: "How long can we book the photo booth for?",
    a: "Booking durations are planned around your event schedule. Share your timings with us and we'll confirm what works for your celebration.",
  },
  {
    q: "Do you provide an attendant?",
    a: "Yes. A professional attendant is part of the experience — they set up the booth, guide your guests and manage everything while you enjoy the event.",
  },
  {
    q: "Do you provide instant prints?",
    a: "Yes. Guests receive physical photo strips on the spot, printed moments after the photo is taken.",
  },
  {
    q: "Can we customize the photo templates?",
    a: "Absolutely. Templates are designed around your event — your colours, your branding, your occasion. Corporate clients can include logos and custom overlays.",
  },
  {
    q: "Can guests share photos digitally?",
    a: "Yes. Digital sharing is built into the experience so guests can take the moment with them straight away.",
  },
  {
    q: "Do you offer boomerangs?",
    a: "Yes. Boomerangs are part of the experience and are usually the most shared thing to come out of the booth.",
  },
  {
    q: "Do you provide photo booth services outside Noida?",
    a: "Yes. We serve Noida, Greater Noida, Delhi, Gurgaon / Gurugram and the wider Delhi NCR region.",
  },
  {
    q: "How far in advance should we book?",
    a: "Dates during peak wedding and festive season go quickly, so it's best to reach out as early as you can. Message us with your date and we'll tell you what's open.",
  },
  {
    q: "How can I check availability?",
    a: "Send us a WhatsApp message, call +91 98216 93647 or fill in the enquiry form on our contact page with your date and location.",
  },
  {
    q: "Do you provide corporate photo booth experiences?",
    a: "Yes. We work on annual days, Diwali and Christmas parties, employee engagement events, product launches, brand activations, dealer meets, conferences and town halls.",
  },
  {
    q: "Do you provide wedding photo booth services?",
    a: "Yes. Engagements, mehendi, sangeet, cocktail nights, receptions and wedding after-parties across Delhi NCR.",
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
