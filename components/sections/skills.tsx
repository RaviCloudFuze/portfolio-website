"use client";

import { motion } from "framer-motion";
import { FiCode, FiLayers, FiSettings, FiBriefcase } from "react-icons/fi";
import type { IconBaseProps } from "react-icons";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { skillCategories } from "@/data/skills";

const ICON_MAP: Record<string, (p: IconBaseProps) => JSX.Element> = {
  languages: (p) => <FiCode {...p} />,
  frameworks: (p) => <FiLayers {...p} />,
  tools: (p) => <FiSettings {...p} />,
  current: (p) => <FiBriefcase {...p} />,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          kicker="Skills"
          title="Tools of the trade"
          description="A grouped view of what I'm comfortable with — and what I use every day."
        />

        <Stagger className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = ICON_MAP[cat.id] ?? ICON_MAP.tools;
            return (
              <motion.div
                key={cat.id}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="card relative overflow-hidden p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-brand-500/15 to-accent-500/15 blur-2xl"
                />
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.06 }}
                      className="chip border-brand-500/20 bg-gradient-to-r from-brand-500/5 to-accent-500/5 hover:border-brand-400"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
