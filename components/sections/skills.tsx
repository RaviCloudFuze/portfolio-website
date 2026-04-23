"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiCode,
  FiLayers,
  FiSettings,
  FiBriefcase,
  FiMonitor,
} from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { skillCategories } from "@/data/skills";
import { SkillTile } from "@/components/skill-icon";

const ICON_MAP: Record<string, IconType> = {
  languages: FiCode,
  frameworks: FiLayers,
  tools: FiSettings,
  current: FiBriefcase,
  ide: FiMonitor,
};

export default function Skills() {
  return (
    <section id="skills" className="section bg-[rgb(var(--bg-alt))]/60">
      <div className="container-page">
        <SectionHeading
          kicker="Skills"
          title="Tools of the trade"
          description="The languages, frameworks, and platforms I use to ship production software."
        />

        <Stagger className="space-y-10">
          {skillCategories.map((cat) => {
            const Icon = ICON_MAP[cat.id] ?? ICON_MAP.tools;
            return (
              <motion.div key={cat.id} variants={staggerItem}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                  <div className="ml-auto hidden h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10 sm:block" />
                </div>

                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
                  {cat.skills.map((skill) => (
                    <SkillTile key={skill} skill={skill} />
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
