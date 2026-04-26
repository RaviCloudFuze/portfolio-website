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
  SiAmazonaws,
  SiGoogle,
  SiJavascript,
  SiTypescript,
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
} from "react-icons/fi";
import { cn } from "@/lib/utils";

/** Cursor AI logo — animated GIF served from /public/icons. Rendered as an
 *  <img> so the animation plays; satisfies IconType's signature for the
 *  ICON_MAP. The size prop maps to width/height in px. */
const CursorIcon: IconType = (props) => {
  const { size = "1em", title, className } = props;
  const dim = typeof size === "number" ? `${size}px` : size;
  return (
    <img
      src="/icons/cursor_style_animation.gif"
      alt={title ?? "Cursor"}
      className={className as string | undefined}
      style={{ width: dim, height: dim, objectFit: "contain" }}
    />
  );
};

/** Google Cloud Platform — official 4-color "G" mark (Google brand colors). */
const GoogleCloudIcon: IconType = (props) => {
  const { size = "1em", title, className } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className as string | undefined}
    >
      {title && <title>{title}</title>}
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
};

/** IntelliJ IDEA — multi-color rounded square with the IJ mark.
 *  Uses official JetBrains brand colors (red, blue, yellow). */
const IntellijIcon: IconType = (props) => {
  const { size = "1em", title, className } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className as string | undefined}
    >
      {title && <title>{title}</title>}
      <rect x="0" y="0" width="24" height="24" rx="4" fill="#000000" />
      <path d="M24 4v6L14 0h6a4 4 0 0 1 4 4z" fill="#FE2857" />
      <path d="M0 14v6a4 4 0 0 0 4 4h6L0 14z" fill="#087CFA" />
      <path d="M24 14v6a4 4 0 0 1-4 4h-6l10-10z" fill="#FCF84A" />
      <text
        x="12"
        y="16.5"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontWeight="bold"
        fill="#FFFFFF"
        textAnchor="middle"
      >
        IJ
      </text>
    </svg>
  );
};

/** Android Studio — green-to-blue gradient circle with the compass mark. */
const AndroidStudioIcon: IconType = (props) => {
  const { size = "1em", title, className } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className as string | undefined}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id="as-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3DDC84" />
          <stop offset="55%" stopColor="#0F9D58" />
          <stop offset="100%" stopColor="#073042" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#as-grad)" />
      <path
        d="M12 5.5l3.2 7.4-3.2 1.6-3.2-1.6z"
        fill="#FFFFFF"
        opacity="0.95"
      />
      <path
        d="M12 18.5l-3.2-5.6 3.2 1.6 3.2-1.6z"
        fill="#FFFFFF"
        opacity="0.55"
      />
      <circle cx="9.6" cy="9" r="0.7" fill="#073042" />
      <circle cx="14.4" cy="9" r="0.7" fill="#073042" />
    </svg>
  );
};

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
  "Google Cloud Platform": GoogleCloudIcon,
  GCP: GoogleCloudIcon,
  AWS: SiAmazonaws,
  "Google Apps Script": SiGoogle,
  "GCP Cloud Digital Leader (Certified)": FiAward,
  "GCP Associate Cloud Engineer (Certified)": FiAward,
  "Agile / Scrum": FiTrendingUp,
  "IntelliJ IDEA": IntellijIcon,
  "VS Code": TbBrandVscode,
  Cursor: CursorIcon,
  "Android Studio": AndroidStudioIcon,
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
  Cursor: "#d4d4d8",
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
        "group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-base font-medium text-slate-700 backdrop-blur transition-colors hover:border-brand-400/60 hover:text-slate-900 hover:shadow-[0_0_20px_-6px_rgba(99,102,241,0.7)] dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white",
        className,
      )}
    >
      <Icon
        size={18}
        style={{ color }}
        className="shrink-0 transition-transform group-hover:scale-110"
      />
      {skill}
    </motion.span>
  );
}
