"use client";

import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200/60 bg-[rgb(var(--bg-alt))] dark:border-white/10">
      <div className="container-page flex flex-col items-center gap-2 py-8 text-center">
        <p className="font-display text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
