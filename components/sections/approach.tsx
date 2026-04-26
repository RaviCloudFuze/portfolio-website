"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiGitBranch,
  FiDatabase,
  FiActivity,
  FiEye,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { approachPrinciples } from "@/data/approach";

const ICONS: Record<string, IconType> = {
  "api-contracts": FiCode,
  "service-boundaries": FiGitBranch,
  "database-is-the-system": FiDatabase,
  "perf-measured": FiActivity,
  "operate-what-you-build": FiEye,
};

export default function Approach() {
  return (
    <section id="approach" className="section bg-[rgb(var(--bg-alt))]/60">
      <div className="container-page">
        <SectionHeading
          kicker="Engineering approach"
          title="How I Build Systems"
          description="A few principles I keep coming back to. Boundaries, contracts, and failure modes — not just classes."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {approachPrinciples.map((p) => {
            const Icon = ICONS[p.id] ?? FiCode;
            return (
              <motion.div
                key={p.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="card group flex h-full flex-col gap-4 p-6 transition-colors hover:border-brand-400/60 hover:shadow-[0_0_36px_-12px_rgba(99,102,241,0.55)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 transition-transform group-hover:scale-110 dark:text-brand-300">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
