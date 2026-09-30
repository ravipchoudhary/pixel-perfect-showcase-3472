import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";

export function FloatingCTA() {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="hidden md:flex fixed bottom-7 right-7 z-40 size-14 items-center justify-center rounded-full bg-ink text-background shadow-lg transition-colors duration-500 hover:bg-accent"
      >
        <MessageCircle className="size-6" strokeWidth={1.5} />
      </a>

      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-background/95 backdrop-blur-md">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="py-4 text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink"
        >
          WhatsApp Us
        </a>
        <Link
          to="/contact"
          className="py-4 text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] bg-ink text-background"
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
