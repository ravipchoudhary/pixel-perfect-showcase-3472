import hero from "@/assets/hero.jpg";
import heroSmall from "@/assets/hero-800.jpg";
import corporate from "@/assets/corporate.jpg";
import corporateSmall from "@/assets/corporate-600.jpg";
import wedding from "@/assets/wedding.jpg";
import weddingSmall from "@/assets/wedding-600.jpg";
import birthday from "@/assets/birthday.jpg";
import birthdaySmall from "@/assets/birthday-600.jpg";

export const IMAGES = { hero, corporate, wedding, birthday } as const;
export type ImageKey = keyof typeof IMAGES;

export const IMAGE_ALTS: Record<ImageKey, string> = {
  hero: "Indian guests enjoying a photo booth at a wedding",
  corporate: "Indian guests holding photo prints at a corporate event",
  wedding: "Indian couple celebrating with friends at a wedding",
  birthday: "Indian teenager celebrating a birthday with a cake",
};

export const IMAGE_SRCSETS: Record<ImageKey, string> = {
  hero: `${heroSmall} 800w, ${hero} 1600w`,
  corporate: `${corporateSmall} 600w, ${corporate} 1200w`,
  wedding: `${weddingSmall} 600w, ${wedding} 1200w`,
  birthday: `${birthdaySmall} 600w, ${birthday} 1200w`,
};
