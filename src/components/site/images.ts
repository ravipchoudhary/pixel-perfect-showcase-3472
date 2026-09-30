import hero from "@/assets/hero.jpg";
import corporate from "@/assets/corporate.jpg";
import wedding from "@/assets/wedding.jpg";
import birthday from "@/assets/birthday.jpg";

export const IMAGES = { hero, corporate, wedding, birthday } as const;
export type ImageKey = keyof typeof IMAGES;
