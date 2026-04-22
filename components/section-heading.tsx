"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && <p className="section-kicker mb-3">{kicker}</p>}
      <h2 className="section-title">
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="gradient-text">
              {" "}
              {word}
            </span>
          ) : (
            <span key={i}>{i === 0 ? word : ` ${word}`}</span>
          ),
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
