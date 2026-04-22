export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Languages I reach for day to day.",
    skills: [
      "Java",
      "TypeScript",
      "JavaScript",
      "Python",
      "Go",
      "SQL",
      "Bash",
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    description: "Stacks I've shipped production code in.",
    skills: [
      "Spring Boot",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "The plumbing around the code.",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "GitHub Actions",
      "Jenkins",
      "Grafana",
      "Prometheus",
      "Postman",
    ],
  },
  {
    id: "current",
    title: "At CloudFuze (current stack)",
    description: "What I'm hands-on with at my current company.",
    skills: [
      "Java 17",
      "Spring Boot",
      "MongoDB",
      "Redis",
      "Kafka",
      "React",
      "TypeScript",
      "AWS",
      "Docker",
      "JUnit",
      "Mockito",
    ],
  },
];
