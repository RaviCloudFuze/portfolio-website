"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiApachemaven,
  SiGradle,
  SiJenkins,
  SiPostman,
  SiApachekafka,
  SiGooglecloud,
  SiAmazonaws,
  SiGoogle,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import {
  FiShield,
  FiGrid,
  FiDatabase,
  FiLayers,
  FiAward,
  FiZap,
  FiTrendingUp,
  FiBox,
  FiCloud,
  FiCode,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, IconType> = {
  // Languages
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  // Backend
  "Spring Boot": SiSpringboot,
  "Spring MVC": SiSpring,
  "Spring Security": FiShield,
  "JPA / Hibernate": SiHibernate,
  Hibernate: SiHibernate,
  // APIs / services
  "REST APIs": TbApi,
  "Rest API's": TbApi,
  Microservices: FiBox,
  // Principles
  OOPS: FiLayers,
  "SOLID Principles": FiAward,
  "Design Patterns": FiGrid,
  // Databases
  SQL: FiDatabase,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  // DevOps / tools
  Git: SiGit,
  Maven: SiApachemaven,
  Gradle: SiGradle,
  Jenkins: SiJenkins,
  "CI / CD": FiZap,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Postman: SiPostman,
  Kafka: SiApachekafka,
  "Kafka (familiar)": SiApachekafka,
  // Cloud
  "Google Cloud Platform": SiGooglecloud,
  GCP: SiGooglecloud,
  AWS: SiAmazonaws,
  "Google Apps Script": SiGoogle,
  // Certifications
  "GCP — Cloud Digital Leader (Certified)": FiAward,
  "GCP — Associate Cloud Engineer (Certified)": FiAward,
  // Methodology
  "Agile / Scrum": FiTrendingUp,
};

function iconFor(skill: string): IconType {
  return ICON_MAP[skill] ?? FiCode;
}

const SIZES = {
  sm: { box: "h-8 w-8", icon: 15 },
  md: { box: "h-12 w-12", icon: 22 },
  lg: { box: "h-14 w-14", icon: 26 },
} as const;

type Size = keyof typeof SIZES;

/**
 * Big tile — used in the Skills grid.
 * Icon lives inside a rounded square; name sits below.
 */
export function SkillTile({
  skill,
  size = "md",
  className,
}: {
  skill: string;
  size?: Size;
  className?: string;
}) {
  const Icon = iconFor(skill);
  const s = SIZES[size];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className={cn(
        "group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur transition-colors hover:border-brand-400/60 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.65)] dark:border-white/10 dark:bg-white/5",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-600 transition-all group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white group-hover:shadow-glow dark:text-brand-300",
          s.box,
        )}
      >
        <Icon size={s.icon} />
      </div>
      <span className="text-xs font-medium leading-tight text-slate-800 sm:text-sm dark:text-slate-200">
        {skill}
      </span>
    </motion.div>
  );
}

/**
 * Small inline pill — used inside Experience cards for tech stack chips.
 * Shows the icon + name on one line.
 */
export function SkillPill({
  skill,
  className,
}: {
  skill: string;
  className?: string;
}) {
  const Icon = iconFor(skill);
  return (
    <span
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-400/60 hover:text-brand-700 hover:shadow-[0_0_18px_-8px_rgba(99,102,241,0.7)] dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-200",
        className,
      )}
    >
      <Icon
        size={13}
        className="shrink-0 text-brand-500 transition group-hover:scale-110 dark:text-brand-300"
      />
      {skill}
    </span>
  );
}
