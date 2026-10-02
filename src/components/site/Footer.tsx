import { Link } from "@tanstack/react-router";
import {
  BRAND,
  EMAIL,
  EXPERIENCES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATIONS,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/data/site";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-background/70 mb-5">{title}</p>
      <ul className="space-y-2.5 text-sm text-background/70">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-background pt-20 pb-28 md:pb-12">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="display text-3xl sm:text-4xl leading-[0.95]">{BRAND}</p>
            <p className="mt-5 text-sm text-background/60 max-w-xs">
              Premium Photo Booth &amp; Event Experiences across Delhi NCR.
            </p>
          </div>

          <div className="lg:col-span-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Col title="Quick Links">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="link-underline hover:text-background">
                    {l.label}
                  </Link>
                </li>
              ))}
            </Col>

            <Col title="Experiences">
              <li>
                <Link to="/events/corporate" className="link-underline hover:text-background">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/events/weddings" className="link-underline hover:text-background">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/events/birthdays" className="link-underline hover:text-background">
                  Birthdays &amp; Celebrations
                </Link>
              </li>
              {EXPERIENCES.slice(0, 4).map((e) => (
                <li key={e.name}>
                  <Link to="/experiences" className="link-underline hover:text-background">
                    {e.name}
                  </Link>
                </li>
              ))}
            </Col>

            <Col title="Service Areas">
              {LOCATIONS.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="link-underline hover:text-background">
                    {l.name}
                  </Link>
                </li>
              ))}
            </Col>

            <Col title="Contact">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="link-underline hover:text-background">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="link-underline hover:text-background break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-background"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </Col>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-[0.7rem] uppercase tracking-[0.16em] text-background/65">
          <p>© 2026 {BRAND}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-background">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-background">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
