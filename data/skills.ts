export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

// NOTE: `id` values map to icons in components/sections/skills.tsx.
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Backend",
    description: "My core stack for building services and APIs.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "JPA / Hibernate",
      "REST APIs",
      "Microservices",
      "SQL",
      "OOPS",
      "SOLID Principles",
      "Design Patterns",
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description: "What I reach for to build, ship, and debug.",
    skills: [
      "Git",
      "Maven",
      "Gradle",
      "Jenkins",
      "CI / CD",
      "Docker",
      "Kubernetes",
      "Postman",
      "Kafka",
    ],
  },
  {
    id: "frameworks",
    title: "Databases",
    description: "Relational and NoSQL systems I work with.",
    skills: ["MySQL", "MongoDB"],
  },
  {
    id: "current",
    title: "Cloud",
    description: "Cloud platforms and certifications.",
    skills: [
      "Google Cloud Platform",
      "GCP Cloud Digital Leader (Certified)",
      "GCP Associate Cloud Engineer (Certified)",
      "AWS",
    ],
  },
  {
    id: "ide",
    title: "IDE",
    description: "Editors I live in day to day.",
    skills: ["IntelliJ IDEA", "VS Code", "Cursor", "Android Studio"],
  },
];
