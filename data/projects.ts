export type Project = {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
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
      "Policy-management platform where customers explore policies, verify eligibility, and file claims end-to-end.",
    bullets: [
      "Designed REST APIs around policy, eligibility, and claims as separate resources with clear request/response contracts.",
      "Standard Controller → Service → Repository layering; auth and role-based access via Spring Security.",
      "Modeled the schema for policy versioning and claim state transitions so historical claims stay queryable through schema evolution.",
      "Used JPA projections and indexed lookups on hot read paths (policy search, claim status) to keep response times stable as the dataset grows.",
      "Validation, exception handling, and audit logging at the service layer — controllers stay thin and testable.",
    ],
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
      "Real-time inventory and order-processing system with supplier management and reporting for SMB warehouses.",
    bullets: [
      "REST APIs for inventory, orders, suppliers, and reports — each with its own service boundary so changes don't cascade.",
      "Concurrency-aware stock updates using transactional writes and optimistic locking to prevent overselling on simultaneous orders.",
      "Schema designed for report-heavy reads with composite indexes on (product_id, created_at) for stock-movement and order-history queries.",
      "Explicit order state machine (PLACED → PACKED → SHIPPED → DELIVERED / CANCELLED) instead of a free-text status column.",
      "DTOs decoupled from JPA entities so the API contract stays stable across schema changes.",
    ],
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
