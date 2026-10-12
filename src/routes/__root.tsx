import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "motion/react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

const GOOGLE_ANALYTICS_ID = import.meta.env["VITE_GA_MEASUREMENT_ID"];
const VALID_GOOGLE_ANALYTICS_ID =
  GOOGLE_ANALYTICS_ID && /^G-[A-Z0-9]+$/.test(GOOGLE_ANALYTICS_ID) ? GOOGLE_ANALYTICS_ID : null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function NotFoundComponent() {
  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex,follow";
    robots.dataset["notFound"] = "true";
    document.head.append(robots);
    return () => robots.remove();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl text-ink">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-ink px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-accent"
          >
            Go home
          </Link>
          <Link
            to="/experiences"
            className="inline-flex items-center justify-center border border-ink/25 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Explore Experiences
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-ink/25 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-3xl text-ink">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-ink px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-accent"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-ink/25 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo%20little%20big.png" },
      { rel: "apple-touch-icon", href: "/logo%20little%20big.png" },
      {
        rel: "preload",
        href: "/fonts/poppins-400.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: VALID_GOOGLE_ANALYTICS_ID
      ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${VALID_GOOGLE_ANALYTICS_ID}`,
            async: true,
          },
          {
            children: `window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${VALID_GOOGLE_ANALYTICS_ID}',{send_page_view:false});`,
          },
        ]
      : undefined,
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pageHref = useRouterState({ select: (state) => state.location.href });

  useEffect(() => {
    if (VALID_GOOGLE_ANALYTICS_ID && window.gtag) {
      window.gtag("event", "page_view", { page_path: pageHref });
    }
  }, [pageHref]);

  return (
    <MotionConfig reducedMotion="user">
      <>
        <Navbar />
        <main>
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <FloatingCTA />
      </>
    </MotionConfig>
  );
}
