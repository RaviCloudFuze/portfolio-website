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
  SiIntellijidea,
  SiAndroidstudio,
} from "react-icons/si";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import {
  FiShield,
  FiGrid,
  FiDatabase,
  FiLayers,
  FiAward,
  FiZap,
  FiTrendingUp,
  FiBox,
  FiCode,
  FiMousePointer,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, IconType> = {
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Spring Boot": SiSpringboot,
  "Spring MVC": SiSpring,
  "Spring Security": FiShield,
  "JPA / Hibernate": SiHibernate,
  Hibernate: SiHibernate,
  "REST APIs": TbApi,
  "Rest API's": TbApi,
  Microservices: FiBox,
  OOPS: FiLayers,
  "SOLID Principles": FiAward,
  "Design Patterns": FiGrid,
  SQL: FiDatabase,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
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
  "Google Cloud Platform": SiGooglecloud,
  GCP: SiGooglecloud,
  AWS: SiAmazonaws,
  "Google Apps Script": SiGoogle,
  "GCP Cloud Digital Leader (Certified)": FiAward,
  "GCP Associate Cloud Engineer (Certified)": FiAward,
  "Agile / Scrum": FiTrendingUp,
  "IntelliJ IDEA": SiIntellijidea,
  "VS Code": TbBrandVscode,
  Cursor: FiMousePointer,
  "Android Studio": SiAndroidstudio,
};

const COLOR_MAP: Record<string, string> = {
  Java: "#f89820",
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  "Spring Boot": "#6db33f",
  "Spring MVC": "#6db33f",
  "Spring Security": "#6db33f",
  "JPA / Hibernate": "#bcae79",
  Hibernate: "#bcae79",
  "REST APIs": "#6366f1",
  "Rest API's": "#6366f1",
  Microservices: "#8b5cf6",
  OOPS: "#a78bfa",
  "SOLID Principles": "#eab308",
  "Design Patterns": "#3b82f6",
  SQL: "#00758f",
  MySQL: "#00758f",
  MongoDB: "#47a248",
  Git: "#f05032",
  Maven: "#c71a36",
  Gradle: "#0fa7e0",
  Jenkins: "#d33833",
  "CI / CD": "#2088ff",
  Docker: "#2496ed",
  Kubernetes: "#326ce5",
  Postman: "#ff6c37",
  Kafka: "#94a3b8",
  "Kafka (familiar)": "#94a3b8",
  "Google Cloud Platform": "#4285f4",
  GCP: "#4285f4",
  AWS: "#ff9900",
  "Google Apps Script": "#4285f4",
  "GCP Cloud Digital Leader (Certified)": "#eab308",
  "GCP Associate Cloud Engineer (Certified)": "#eab308",
  "Agile / Scrum": "#0ea5e9",
  "IntelliJ IDEA": "#fe4a56",
  "VS Code": "#007acc",
  Cursor: "#94a3b8",
  "Android Studio": "#3ddc84",
};

const DEFAULT_COLOR = "#6366f1";

function iconFor(skill: string): IconType {
  return ICON_MAP[skill] ?? FiCode;
}
function colorFor(skill: string): string {
  return COLOR_MAP[skill] ?? DEFAULT_COLOR;
}

const SIZES = {
  sm: { box: "h-9 w-9", icon: 17 },
  md: { box: "h-14 w-14", icon: 26 },
  lg: { box: "h-16 w-16", icon: 30 },
} as const;

type Size = keyof typeof SIZES;

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
  const color = colorFor(skill);
  const s = SIZES[size];

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={cn(
        "group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur transition-colors hover:border-brand-400/60 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.6)] dark:border-white/10 dark:bg-white/5",
        className,
      )}
      style={{ ["--tile-color" as string]: color }}
    >
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-xl transition-transform group-hover:scale-110",
          s.box,
        )}
        style={{ backgroundColor: `${color}1F`, color }}
      >
        <Icon size={s.icon} />
      </div>
      <span className="text-xs font-semibold leading-tight text-slate-800 sm:text-sm dark:text-slate-200">
        {skill}
      </span>
    </motion.div>
  );
}

export function SkillPill({
  skill,
  className,
}: {
  skill: string;
  className?: string;
}) {
  const Icon = iconFor(skill);
  const color = colorFor(skill);

  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[0.8rem] font-medium text-slate-700 backdrop-blur transition-colors hover:border-brand-400/60 hover:text-slate-900 hover:shadow-[0_0_20px_-6px_rgba(99,102,241,0.7)] dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white",
        className,
      )}
    >
      <Icon
        size={15}
        style={{ color }}
        className="shrink-0 transition-transform group-hover:scale-110"
      />
      {skill}
    </motion.span>
  );
}
