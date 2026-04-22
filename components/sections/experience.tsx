"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { SkillPill } from "@/components/skill-icon";
import { experiences } from "@/data/experience";

/**
 * Plain <img> so animated GIFs (e.g. Accenture logo) play, with a
 * graceful fallback to a branded initial tile if the asset is missing.
 */
function CompanyLogo({
  src,
  alt,
  fallbackChar,
}: {
  src: string;
  alt: string;
  fallbackChar: string;
}) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-2xl font-bold text-white shadow-glow">
        {fallbackChar}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
  );
}

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
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 transition-transform dark:border-white/10 dark:bg-white/5 sm:h-20 sm:w-20">
                      <CompanyLogo
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fallbackChar={exp.company.charAt(0)}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold leading-snug sm:text-xl">
                        {exp.role}
                        <span className="text-slate-400 dark:text-slate-500">
                          {", "}
                        </span>
                        <Link
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-600 hover:underline dark:text-brand-300"
                        >
                          {exp.company}
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

                <p className="mt-5 text-[17px] leading-[1.7] text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>

                <ul className="mt-6 space-y-4">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[17px] leading-[1.7] text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <SkillPill key={tech} skill={tech} />
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
