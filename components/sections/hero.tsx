"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { siteConfig } from "@/data/site";

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: FiGithub },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: FiLinkedin },
  { label: "LeetCode", href: siteConfig.socials.leetcode, Icon: SiLeetcode },
  {
    label: "HackerRank",
    href: siteConfig.socials.hackerrank,
    Icon: SiHackerrank,
  },
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
        <div className="flex flex-col items-start gap-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              I build things for the{" "}
              <span className="gradient-text">web</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-400"
            >
              {siteConfig.tagline} Currently a{" "}
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {siteConfig.role}
              </span>{" "}
              crafting cloud data platforms.
            </motion.p>
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
            className="flex items-center gap-3 pt-2"
          >
            {socials.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-300"
              >
                <Icon size={16} />
              </Link>
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
