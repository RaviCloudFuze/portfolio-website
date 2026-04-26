"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Stagger, staggerItem } from "@/components/animated";
import { impactItems } from "@/data/impact";

export default function Impact() {
  return (
    <section id="impact" className="section">
      <div className="container-page">
        <SectionHeading
          kicker="Selected outcomes"
          title="Key Impact"
          description="What I've actually shipped were production systems, refactors, and automation that moved metrics or unblocked teams."
        />

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {impactItems.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="card group flex h-full items-start gap-4 p-5 transition-colors hover:border-brand-400/60 hover:shadow-[0_0_36px_-12px_rgba(99,102,241,0.55)] sm:p-6"
            >
              <span
                aria-hidden
                className="mt-1.5 inline-flex h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand-500 to-accent-500"
              />
              <div>
                <h3 className="font-display text-base font-semibold leading-snug text-slate-900 sm:text-lg dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
