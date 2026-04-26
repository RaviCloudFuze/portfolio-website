"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub, SiLeetcode, SiCodechef } from "react-icons/si";
import type { IconType } from "react-icons";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { codingProfiles } from "@/data/profiles";

const ICON_MAP: Record<string, { Icon: IconType; brandColor?: string }> = {
  github: { Icon: SiGithub },
  leetcode: { Icon: SiLeetcode, brandColor: "#FFA116" },
  codechef: { Icon: SiCodechef, brandColor: "#8B6F47" },
};

export default function Profiles() {
  return (
    <section id="profiles" className="section">
      <div className="container-page">
        <SectionHeading
          kicker="Coding Profiles"
          title="Find me across the web"
          description="Where I write code, solve problems, and occasionally show off."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((p) => {
            const entry = ICON_MAP[p.id] ?? { Icon: SiGithub };
            const { Icon, brandColor } = entry;
            return (
              <motion.div key={p.id} variants={staggerItem}>
                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full"
                >
                  <div className="card flex h-full flex-col overflow-hidden p-7 transition-all group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-hover:border-brand-400/60 group-hover:shadow-[0_0_48px_-10px_rgba(99,102,241,0.65)] sm:p-8">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-500/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                    />
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 text-slate-800 shadow-sm transition-transform group-hover:scale-110 dark:border-white/10 dark:from-white/10 dark:to-white/5 dark:text-slate-100">
                        <Icon
                          size={30}
                          style={brandColor ? { color: brandColor } : undefined}
                        />
                      </div>
                      <FiArrowUpRight
                        size={22}
                        className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-500"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-sm text-brand-600 dark:text-brand-300">
                      {p.handle}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {p.description}
                    </p>
                    {p.stat && (
                      <span className="mt-6 inline-flex w-fit items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold text-brand-700 dark:text-brand-200">
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
