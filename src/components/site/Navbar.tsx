import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, PHONE_DISPLAY } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/92 backdrop-blur-md border-b border-border py-3"
            : "py-5",
        )}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Link to="/" className="shrink-0 leading-none">
            <span className="display block text-base sm:text-lg tracking-[0.06em] text-ink">
              The Little Big
            </span>
            <span className="eyebrow block text-[0.58rem] mt-0.5">Experience</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.16em] text-foreground/75 hover:text-ink transition-colors"
                activeProps={{ className: "text-ink" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-6 py-3 bg-ink text-background text-[0.68rem] font-medium uppercase tracking-[0.18em] rounded-xs hover:bg-accent transition-colors duration-500"
            >
              Book Now
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="xl:hidden p-2 -mr-2 text-ink"
            >
              <Menu className="size-6" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-60 bg-ink text-background overflow-y-auto"
          >
            <div className="shell flex items-center justify-between py-5">
              <span className="display text-base tracking-[0.06em]">
                The Little Big Experience
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 -mr-2"
              >
                <X className="size-6" strokeWidth={1.4} />
              </button>
            </div>
            <nav className="shell flex flex-col gap-1 pt-6 pb-10">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.035, duration: 0.5 }}
                >
                  <Link
                    to={l.to}
                    className="display block py-2.5 text-3xl sm:text-4xl text-background/85 hover:text-background transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center px-7 py-4 bg-background text-ink text-[0.7rem] font-medium uppercase tracking-[0.2em]"
              >
                Book Now
              </Link>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                className="mt-4 text-center text-sm text-background/60 tracking-[0.1em]"
              >
                {PHONE_DISPLAY}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
