import hero from "@/assets/hero.webp";
import heroSmall from "@/assets/hero-800.webp";
import corporateBooth from "@/assets/corporate.webp";
import corporateBoothSmall from "@/assets/corporate-600.webp";
import wedding from "@/assets/wedding.webp";
import weddingSmall from "@/assets/wedding-600.webp";
import birthday from "@/assets/birthday.webp";
import birthdaySmall from "@/assets/birthday-600.webp";

const corporate = "/event-gallery/corporate-prints.webp";
const corporateTable = corporateBooth;
const corporateAudience = "/event-gallery/corporate-02.webp";
const corporateStage = "/event-gallery/corporate-03.webp";
const corporateMeeting = "/event-gallery/corporate-meeting-01.png";
const corporateBoothEvent = "/event-gallery/corporate-booth-01.png";
const weddingCouple = "/event-gallery/wedding-01.webp";
const weddingVenue = "/event-gallery/wedding-02.webp";
const weddingCelebration = "/event-gallery/wedding-03.webp";
const birthdayBalloons = "/event-gallery/birthday-01.webp";
const birthdayCake = "/event-gallery/birthday-02.webp";
const birthdayConfetti = "/event-gallery/birthday-03.webp";

const eventGallerySrcSets = {
  corporatePrints:
    "/event-gallery/corporate-prints-600.webp 600w, /event-gallery/corporate-prints.webp 1254w",
  corporateTable: `${corporateBoothSmall} 600w, ${corporateBooth} 1200w`,
  corporateAudience:
    "/event-gallery/corporate-02-600.webp 600w, /event-gallery/corporate-02.webp 1000w",
  corporateStage:
    "/event-gallery/corporate-03-600.webp 600w, /event-gallery/corporate-03.webp 1000w",
  weddingCouple: "/event-gallery/wedding-01-600.webp 600w, /event-gallery/wedding-01.webp 1000w",
  weddingVenue: "/event-gallery/wedding-02-600.webp 600w, /event-gallery/wedding-02.webp 1000w",
  weddingCelebration:
    "/event-gallery/wedding-03-600.webp 600w, /event-gallery/wedding-03.webp 1000w",
  birthdayBalloons:
    "/event-gallery/birthday-01-600.webp 600w, /event-gallery/birthday-01.webp 1000w",
  birthdayCake: "/event-gallery/birthday-02-600.webp 600w, /event-gallery/birthday-02.webp 1000w",
  birthdayConfetti:
    "/event-gallery/birthday-03-600.webp 600w, /event-gallery/birthday-03.webp 1000w",
} as const;

export const IMAGES = {
  hero,
  corporate,
  corporateTable,
  corporateAudience,
  corporateStage,
  corporateMeeting,
  corporateBoothEvent,
  wedding,
  weddingCouple,
  weddingVenue,
  weddingCelebration,
  birthday,
  birthdayBalloons,
  birthdayCake,
  birthdayConfetti,
} as const;
export type ImageKey = keyof typeof IMAGES;

export const IMAGE_ALTS: Record<ImageKey, string> = {
  hero: "Indian guests enjoying a photo booth at a wedding",
  corporate: "Custom photo-booth print-strip designs for celebrations",
  corporateTable: "Corporate event guests holding photo strips beside a photo booth",
  corporateAudience: "Audience attending a corporate conference",
  corporateStage: "Presenter speaking at a corporate event",
  corporateMeeting: "Indian colleagues sharing ideas at a corporate conference",
  corporateBoothEvent: "Indian colleagues posing together at a corporate event photo booth",
  wedding: "Indian couple celebrating with friends at a wedding",
  weddingCouple: "A newlywed couple with a wedding bouquet",
  weddingVenue: "A decorated wedding reception venue",
  weddingCelebration: "A couple celebrating their wedding by the sea",
  birthday: "Indian teenager celebrating a birthday with a cake",
  birthdayBalloons: "Colourful balloons at a birthday party",
  birthdayCake: "A birthday cake lit with candles",
  birthdayConfetti: "Bright confetti for a birthday celebration",
};

export const IMAGE_SRCSETS: Record<ImageKey, string> = {
  hero: `${heroSmall} 800w, ${hero} 1600w`,
  corporate: eventGallerySrcSets.corporatePrints,
  corporateTable: eventGallerySrcSets.corporateTable,
  corporateAudience: eventGallerySrcSets.corporateAudience,
  corporateStage: eventGallerySrcSets.corporateStage,
  corporateMeeting: `${corporateMeeting} 1152w`,
  corporateBoothEvent: `${corporateBoothEvent} 1152w`,
  wedding: `${weddingSmall} 600w, ${wedding} 1200w`,
  weddingCouple: eventGallerySrcSets.weddingCouple,
  weddingVenue: eventGallerySrcSets.weddingVenue,
  weddingCelebration: eventGallerySrcSets.weddingCelebration,
  birthday: `${birthdaySmall} 600w, ${birthday} 1200w`,
  birthdayBalloons: eventGallerySrcSets.birthdayBalloons,
  birthdayCake: eventGallerySrcSets.birthdayCake,
  birthdayConfetti: eventGallerySrcSets.birthdayConfetti,
};

export const EVENT_GALLERY_IMAGES = {
  corporate: [
    {
      src: corporateTable,
      srcSet: eventGallerySrcSets.corporateTable,
      alt: IMAGE_ALTS.corporateTable,
    },
    {
      src: corporateMeeting,
      srcSet: IMAGE_SRCSETS.corporateMeeting,
      alt: IMAGE_ALTS.corporateMeeting,
    },
    {
      src: corporateBoothEvent,
      srcSet: `${corporateBoothEvent} 1152w`,
      alt: "Indian colleagues posing together at a corporate event photo booth",
    },
  ],
  wedding: [
    {
      src: weddingCouple,
      srcSet: eventGallerySrcSets.weddingCouple,
      alt: IMAGE_ALTS.weddingCouple,
    },
    { src: weddingVenue, srcSet: eventGallerySrcSets.weddingVenue, alt: IMAGE_ALTS.weddingVenue },
    {
      src: weddingCelebration,
      srcSet: eventGallerySrcSets.weddingCelebration,
      alt: IMAGE_ALTS.weddingCelebration,
    },
  ],
  birthday: [
    {
      src: birthdayBalloons,
      srcSet: eventGallerySrcSets.birthdayBalloons,
      alt: IMAGE_ALTS.birthdayBalloons,
    },
    { src: birthdayCake, srcSet: eventGallerySrcSets.birthdayCake, alt: IMAGE_ALTS.birthdayCake },
    {
      src: birthdayConfetti,
      srcSet: eventGallerySrcSets.birthdayConfetti,
      alt: IMAGE_ALTS.birthdayConfetti,
    },
  ],
} as const;
