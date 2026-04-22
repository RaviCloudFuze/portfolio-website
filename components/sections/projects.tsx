"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section bg-[rgb(var(--bg-alt))]/60">
      <div className="container-page">
        <SectionHeading
          kicker="Projects"
          title="Some things I've built"
          description="A selection of side projects and open-source work. The full catalog lives on GitHub."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="card group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                {p.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-glow">
                    Featured
                  </span>
                )}
                <div className="absolute right-3 top-3 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                  {p.github && (
                    <Link
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-800 backdrop-blur transition hover:scale-110 hover:bg-white"
                    >
                      <FiGithub size={14} />
                    </Link>
                  )}
                  {p.demo && (
                    <Link
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-800 backdrop-blur transition hover:scale-110 hover:bg-white"
                    >
                      <FiExternalLink size={14} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 pt-2 text-sm">
                  {p.github && (
                    <Link
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                    >
                      <FiGithub size={14} /> Code
                    </Link>
                  )}
                  {p.demo && (
                    <Link
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                    >
                      <FiExternalLink size={14} /> Live demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
