"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiAlertCircle,
  FiDownload,
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/section-heading";

const snapshotBullets = [
  "3+ years shipping production Java & Spring Boot services",
  "Designed an end-to-end security model for the CloudFuze Manage product",
  "Integrated deep/shallow linking into Google Flight Search at Accenture",
  "GCP certified — Cloud Digital Leader & Associate Cloud Engineer",
];

export default function Resume() {
  const [pdfFailed, setPdfFailed] = React.useState(false);

  // Basic HEAD probe — if the PDF is missing, swap to a clear fallback UI.
  React.useEffect(() => {
    let cancelled = false;
    fetch(siteConfig.resumeUrl, { method: "HEAD" })
      .then((r) => {
        if (!cancelled && !r.ok) setPdfFailed(true);
      })
      .catch(() => {
        if (!cancelled) setPdfFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

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
              {pdfFailed ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                    <FiAlertCircle size={22} />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold">
                      Resume preview unavailable
                    </p>
                    <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
                      The PDF hasn&apos;t been uploaded yet — drop it at{" "}
                      <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs dark:bg-white/10">
                        public/resume.pdf
                      </code>{" "}
                      and it will appear here.
                    </p>
                  </div>
                  <Link
                    href={siteConfig.resumeUrl}
                    download
                    className="btn-primary"
                  >
                    <FiDownload /> Try download
                  </Link>
                </div>
              ) : (
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
              )}
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
              Quick snapshot
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Senior Software Engineer building scalable Java &amp; Spring Boot
              backends — microservices, REST APIs, and data-driven systems. I
              own features end-to-end, from design and estimation through
              deployment, optimization, and mentoring.
            </p>
            <ul className="space-y-3 text-sm">
              {snapshotBullets.map((item) => (
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
