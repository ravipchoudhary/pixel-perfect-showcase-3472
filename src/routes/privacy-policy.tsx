import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageMeta({
      title: "Privacy Policy | The Little Big Experience",
      description:
        "Read how The Little Big Experience handles enquiry details, WhatsApp and email communication, cookies, third-party services and privacy requests.",
      path: "/privacy-policy",
      robots: "noindex,follow",
    }),
  component: () => <LegalPage page="privacy" />,
});
