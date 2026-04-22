"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/section-heading";

export default function Resume() {
  return (
    <section id="resume" className="section bg-[rgb(var(--bg-alt))]/60">
      <div className="container-page">
        <SectionHeading
          kicker="Resume"
          title="The long-form version"
          description="Preview my resume inline or download the PDF."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="card overflow-hidden p-0"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FiFileText className="text-brand-500" />
                <span>{siteConfig.name} — Resume.pdf</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full bg-slate-100 dark:bg-slate-900">
              <object
                data={`${siteConfig.resumeUrl}#view=FitH&toolbar=0`}
                type="application/pdf"
                className="h-full w-full"
                aria-label="Resume PDF preview"
              >
                <iframe
                  src={`${siteConfig.resumeUrl}#view=FitH`}
                  title="Resume"
                  className="h-full w-full"
                />
                <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                  <FiFileText size={32} className="text-slate-400" />
                  <p className="text-sm text-slate-500">
                    Your browser can&apos;t display this PDF inline.
                  </p>
                  <Link
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FiExternalLink /> Open in new tab
                  </Link>
                </div>
              </object>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="card flex flex-col gap-5 p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold">
              A quick snapshot
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {siteConfig.role} with hands-on experience shipping enterprise
              cloud products end-to-end — from architecture to production
              operations. I thrive in systems where scale, reliability, and
              UX all matter.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "3+ years building distributed, high-throughput systems",
                "Polyglot — Java, TypeScript, Python, Go",
                "Comfortable on both sides of the stack",
                "Active on open source and competitive programming",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <Link
                href={siteConfig.resumeUrl}
                download
                className="btn-primary"
              >
                <FiDownload /> Download PDF
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FiExternalLink /> Open in new tab
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
