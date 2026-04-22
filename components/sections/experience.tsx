"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading
          kicker="Experience"
          title="Where I've worked"
          description="Companies, roles, and what I actually shipped."
        />

        <Stagger className="relative space-y-6">
          {/* Timeline line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500/60 via-accent-500/40 to-transparent sm:block"
          />

          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              variants={staggerItem}
              className="group relative"
            >
              <div className="card relative overflow-hidden p-5 transition-all hover:-translate-y-0.5 hover:border-brand-400/60 hover:shadow-glow sm:pl-20 sm:p-6">
                {/* Timeline dot */}
                <span
                  aria-hidden
                  className="absolute left-3.5 top-7 hidden h-3 w-3 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 ring-4 ring-[rgb(var(--bg))] sm:block"
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 dark:border-white/10 dark:bg-white/5">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        sizes="48px"
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold leading-snug">
                        {exp.role}{" "}
                        <span className="text-slate-500 dark:text-slate-400">
                          @
                        </span>{" "}
                        <Link
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-brand-600 hover:underline dark:text-brand-300"
                        >
                          {exp.company}
                          <FiExternalLink
                            size={13}
                            className="opacity-70 transition group-hover:opacity-100"
                          />
                        </Link>
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono">{exp.duration}</span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1">
                            <FiMapPin size={11} /> {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
