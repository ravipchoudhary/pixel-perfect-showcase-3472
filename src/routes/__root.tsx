import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "motion/react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
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
