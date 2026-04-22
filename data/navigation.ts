export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "profiles", label: "Profiles", href: "#profiles" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export type NavId = (typeof navLinks)[number]["id"];
