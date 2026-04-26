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
    id: "neutara",
    company: "CloudFuze (Neutara Technologies)",
    role: "Senior Product Engineer",
    duration: "Dec 2025 – Present",
    location: "Hyderabad, India",
    website: "https://www.cloudfuze.com/",
    logo: "/company-logos/cloudfuze.jpg",
    description:
      "Part of the product engineering team building secure, high-availability enterprise systems for the CloudFuze Manage product, with a focus on compliance and data protection.",
    highlights: [
      "Designed, developed, and delivered an end-to-end security model from scratch for CloudFuze Manage, enforcing secure access and data integrity.",
      "Engineered backend services for an AI Adoption Dashboard that surfaces actionable insights on AI feature usage across domains, enabling leadership to monitor adoption, trends, and product impact.",
      "Refactored core migration services, significantly improving the reliability and performance of email, message, and content migrations.",
      "Collaborated with DevOps, UI/UX, and product teams to ship user-focused enhancements in an Agile environment.",
      "Drove code reviews, sprint planning, and production issue resolution with a focus on performance and scalability.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Microservices",
      "REST APIs",
      "JPA / Hibernate",
      "MySQL",
      "MongoDB",
      "Docker",
      "Postman",
      "Jenkins",
      "AWS",
      "GCP",
    ],
  },
  {
    id: "accenture",
    company: "Accenture",
    role: "Software Development Analyst",
    duration: "Jan 2023 – Dec 2025",
    location: "Hyderabad, India",
    website: "https://www.accenture.com",
    logo: "/company-logos/accenture.gif",
    description:
      "Worked on the Google Flight Search project, writing clean, maintainable code for partner integrations and building automation tooling that streamlined team workflows.",
    highlights: [
      "Integrated deep and shallow links into Google Flight Search, redirecting users to airline and OTA sites through partner APIs, while also resolved numerous customer-impacting bugs affecting partners on the flight search page that had the potential to affect their revenue in agile environment.",
      "Resolved numerous customer-impacting bugs on the flight search page that had the potential to affect partner revenue, working in a fast-paced Agile environment.",
      "Conducted peer code reviews to ensure adherence to best practices and coding standards.",
      "Built an end-to-end automation tool that extracts working URLs from raw text and produces a filtered CSV for downstream processing.",
      "Developed custom automation scripts using Google Apps Script to extract and analyze data from Google Sheets and other workflow tools, generating comprehensive reports for leadership alongside streamlining the reporting process by creating bi-weekly report generation tools, enabling leads to present up-to-date workflow data and insights to clients during key meetings",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Google Apps Script",
      "SQL",
      "Git",
      "Postman",
      "Agile / Scrum",
      "GCP",
      "Microservices",
      "Rest API's",
    ],
  },
];
