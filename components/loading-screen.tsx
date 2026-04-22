"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function LoadingScreen() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgb(var(--bg))]"
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow"
            >
              <span className="font-display text-2xl font-bold text-white">
                {siteConfig.name.charAt(0)}
              </span>
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-white/40"
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
              Loading portfolio…
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
