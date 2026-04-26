"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiMail,
} from "react-icons/fi";
import { SiLeetcode, SiCodechef, SiLinkedin } from "react-icons/si";
import { siteConfig } from "@/data/site";

type Social = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  brandColor?: string;
};

const socials: Social[] = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: FiGithub },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    Icon: SiLinkedin,
    brandColor: "#0A66C2",
  },
  { label: "LeetCode", href: siteConfig.socials.leetcode, Icon: SiLeetcode },
  { label: "CodeChef", href: siteConfig.socials.codechef, Icon: SiCodechef },
];

export default function Hero() {
  return (
    <section id="home" className="section pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" />
        <motion.div
          aria-hidden
          className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-40 right-0 h-[380px] w-[380px] rounded-full bg-accent-500/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-page">
        <div className="flex flex-col items-start gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="origin-center"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-2 ring-brand-500/40 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.5)] transition-shadow duration-300 hover:shadow-[0_0_60px_-10px_rgba(99,102,241,0.75)] sm:h-36 sm:w-36 lg:h-44 lg:w-44 dark:bg-slate-800 dark:ring-brand-400/40">
                <Image
                  src="/company-logos/myself.jpg"
                  alt={siteConfig.name}
                  width={480}
                  height={480}
                  quality={100}
                  priority
                  className="h-full w-full scale-[1.45] select-none object-cover"
                  style={{ objectPosition: "50% 42%" }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="chip gap-2 border-brand-500/30 bg-brand-500/10 text-brand-700 dark:text-brand-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Available for new opportunities
          </motion.span>

          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-mono text-sm text-slate-500 dark:text-slate-400"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {siteConfig.name}.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-500 sm:text-5xl lg:text-6xl dark:text-slate-400"
            >
              I build scalable{" "}
              <span className="gradient-text">backend systems</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
            >
              Result Oriented Backend Product Engineer with{" "}
              <span className="font-medium text-slate-800 dark:text-slate-200">
                3+ years
              </span>{" "}
              shipping{" "}
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Java and Spring Boot
              </span>{" "}
              services that hold up in production, security models, migration
              pipelines, and analytics backends. I design for clean
              architecture, API contracts, and database performance, and own
              features from{" "}
              <span className="font-medium text-slate-800 dark:text-slate-200">
                schema to deploy
              </span>
              . Currently at CloudFuze building workspace governance, security,
              and an AI Adoption analytics backend.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-2xl"
            >
            <ul className="space-y-2.5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
                <span>
                  Designed and shipped a{" "}
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    security model from scratch
                  </span>{" "}
                  for CloudFuze Manage - auth, access control, data integrity.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
                <span>
                  Built backend services for an{" "}
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    AI Adoption Dashboard
                  </span>{" "}
                  surfacing feature usage and cost signals across enterprise
                  tenants.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
                <span>
                  Shipped partner-integration code on{" "}
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    Google Flight Search
                  </span>{" "}
                  at Accenture - deep/shallow link routing, bug fixes on a
                  revenue-critical surface.
                </span>
              </li>
            </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiDownload /> View Resume
            </Link>
            <Link href="#contact" className="btn-ghost">
              <FiMail /> Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-4 pt-2"
          >
            {socials.map(({ label, href, Icon, brandColor }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-600 hover:shadow-[0_0_28px_-6px_rgba(99,102,241,0.75)] dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:text-brand-300"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/0 to-accent-500/0 opacity-0 transition-opacity group-hover:from-brand-500/15 group-hover:to-accent-500/15 group-hover:opacity-100"
                  />
                  <Icon
                    size={20}
                    style={brandColor ? { color: brandColor } : undefined}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="#resume"
            className="flex flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
          >
            <span className="font-mono uppercase tracking-[0.2em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <FiArrowDown size={16} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
