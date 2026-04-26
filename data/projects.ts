export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "insurance-portal",
    title: "Insurance Portal",
    description:
      "An insurance management platform that lets users explore, select, and claim policies. Implements policy management, eligibility verification, and claims processing to streamline client offerings and improve engagement.",
    image: "/projects/insurance-portal.svg",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "REST APIs",
      "MySQL",
    ],
    github: "https://github.com/RaviTejaDudipalli/insurance-management-system",
    featured: true,
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "A real-time inventory tracking system with order processing, supplier management, and detailed reporting. Reduces manual errors through automation and an intuitive interface.",
    image: "/projects/inventory-management-system.svg",
    stack: [
      "Java",
      "Spring Boot",
      "JPA / Hibernate",
      "MySQL",
      "Maven",
      "Postman",
    ],
    github: "https://github.com/RaviTejaDudipalli/IMS",
    featured: true,
  },
];
