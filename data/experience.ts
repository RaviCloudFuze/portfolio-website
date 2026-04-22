export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  website: string;
  logo: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "cloudfuze",
    company: "CloudFuze",
    role: "Software Engineer",
    duration: "Aug 2023 — Present",
    location: "Hyderabad, India",
    website: "https://www.cloudfuze.com",
    logo: "https://logo.clearbit.com/cloudfuze.com",
    description:
      "Working on CloudFuze X-Change, an enterprise-grade cloud data migration platform trusted by Fortune 500 companies for migrating petabytes of data across 40+ cloud services.",
    highlights: [
      "Designed and shipped scalable microservices that improved migration throughput by 35%.",
      "Owned the end-to-end lifecycle of several customer-facing features on the admin dashboard.",
      "Reduced API latency by 40% by introducing caching layers and query optimization.",
      "Mentored interns and led code reviews across a 12-engineer team.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Kafka",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "techtrainee",
    company: "Tech Trainee Program",
    role: "Software Engineering Intern",
    duration: "Jan 2023 — Jul 2023",
    location: "Remote",
    website: "https://www.cloudfuze.com",
    logo: "https://logo.clearbit.com/cloudfuze.com",
    description:
      "Built internal tooling and contributed to the core migration engine. Rotated across frontend, backend, and DevOps pods.",
    highlights: [
      "Implemented a real-time job monitoring dashboard using React + WebSockets.",
      "Automated release pipeline with GitHub Actions, cutting deploy time from 20 → 6 minutes.",
      "Wrote integration test suites that caught 20+ regressions before production.",
    ],
    stack: ["React", "Node.js", "Spring Boot", "PostgreSQL", "GitHub Actions"],
  },
];
