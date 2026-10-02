import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    pageMeta({
      title: "Terms & Conditions | The Little Big Experience",
      description:
        "Review website, enquiry and event-service terms, including availability, quotations, equipment care and booking confirmations.",
      path: "/terms-and-conditions",
      robots: "noindex,follow",
    }),
  component: () => <LegalPage page="terms" />,
});
