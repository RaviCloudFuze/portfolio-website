export type ImpactItem = {
  id: string;
  title: string;
  detail: string;
};

export const impactItems: ImpactItem[] = [
  {
    id: "security-model",
    title: "Owned a security model end-to-end",
    detail:
      "Designed auth flows, access boundaries, and data-integrity checks for CloudFuze Manage Product and shipped as the system of record for the product.",
  },
  {
    id: "migration-refactor",
    title: "Refactored core migration services",
    detail:
      "Improved reliability and performance of the email, message, and content migration paths that move customer data between SaaS workspaces.",
  },
  {
    id: "ai-analytics",
    title: "Built an AI Adoption analytics backend",
    detail:
      "Aggregates feature-usage and cost signals across enterprise tenants so leadership can track adoption trends per domain.",
  },
  {
    id: "google-flight",
    title: "Shipped on Google Flight Search",
    detail:
      "Deep and shallow link routing through airline and OTA partner APIs; resolved customer-impacting defects on a revenue-critical surface.",
  },
  {
    id: "reporting-automation",
    title: "Replaced manual reporting with automation",
    detail:
      "Bi-weekly client reports now generate themselves via a Google Apps Script + URL-extraction pipeline, saved hours of QA lead time across the team.",
  },
];
