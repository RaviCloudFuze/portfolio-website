"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { codingProfiles } from "@/data/profiles";

const ICON_MAP = {
  github: FiGithub,
  leetcode: SiLeetcode,
  hackerrank: SiHackerrank,
} as const;

export default function Profiles() {
  return (
    <section id="profiles" className="section bg-[rgb(var(--bg-alt))]/60">
      <div className="container-page">
        <SectionHeading
          kicker="Coding Profiles"
          title="Find me across the web"
          description="Where I write code, solve problems, and occasionally show off."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((p) => {
            const Icon =
              ICON_MAP[p.id as keyof typeof ICON_MAP] ?? FiGithub;
            return (
              <motion.div key={p.id} variants={staggerItem}>
                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full"
                >
                  <div className="card flex h-full flex-col overflow-hidden p-6 transition-all group-hover:-translate-y-1 group-hover:border-brand-400/60 group-hover:shadow-glow">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-500/15 to-accent-500/15 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                    />
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
                        <Icon size={20} />
                      </div>
                      <FiArrowUpRight
                        size={18}
                        className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-brand-600 dark:text-brand-300">
                      {p.handle}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                      {p.description}
                    </p>
                    {p.stat && (
                      <span className="mt-5 inline-flex w-fit items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-200">
                        {p.stat}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
