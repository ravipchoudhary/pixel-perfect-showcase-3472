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

      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Start a WhatsApp enquiry"
          className="min-h-14 px-2 py-4 text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent"
        >
          WhatsApp
        </a>
        <Link
          to="/contact"
          aria-label="Book or enquire about an event"
          className="min-h-14 px-2 py-4 text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] bg-ink text-background focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent"
        >
          Book / Enquire
        </Link>
      </div>
    </>
  );
}
