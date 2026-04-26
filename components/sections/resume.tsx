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
  "3+ years designing Java and Spring Boot microservices for enterprise cloud, saas and web based products",
  "Built a complete security model from scratch for the CloudFuze Manage workspace governance product",
  "Engineered backend services for an AI Adoption Dashboard that surfaces real feature usage and cost insights",
  "Refactored core migration services, significantly improving email, message, and content migration reliability",
  "Cloud and DevOps fluent: GCP (Cloud Digital Leader, Associate Cloud Engineer), Docker, Kubernetes, Jenkins, Kafka",
];

export default function Resume() {
  const [pdfFailed, setPdfFailed] = React.useState(false);

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
          description="Preview my resume below or download the PDF."
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
                <span>{siteConfig.name}, Resume.pdf</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
            </div>

            {/* Aspect tuned to US-Letter (8.5 x 11) so the page fits cleanly without cropping */}
            <div className="relative flex aspect-[8.5/11] w-full items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-900">
              {pdfFailed ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                    <FiAlertCircle size={22} />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold">
                      Resume preview unavailable
                    </p>
                    <p className="mt-1 max-w-sm text-base leading-relaxed text-slate-500 dark:text-slate-400">
                      The PDF hasn&apos;t been uploaded yet. Drop it at{" "}
                      <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-sm dark:bg-white/10">
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
                <iframe
                  src={`${siteConfig.resumeUrl}#view=FitH&toolbar=0&navpanes=0&pagemode=none`}
                  title={`${siteConfig.name} resume`}
                  className="absolute inset-0 block h-full w-full border-0"
                  loading="lazy"
                />
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
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Senior Software Engineer with 3+ years building scalable Java and
              Spring Boot services for enterprise cloud products. I ship secure,
              high-availability distributed systems, owning features end-to-end
              from design through production. Currently working on workspace
              governance, security, and AI adoption analytics at CloudFuze.
            </p>
            <ul className="space-y-3 text-base leading-relaxed">
              {snapshotBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
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
