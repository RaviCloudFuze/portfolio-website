"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { siteConfig } from "@/data/site";

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: FiGithub },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: FiLinkedin },
  { label: "LeetCode", href: siteConfig.socials.leetcode, Icon: SiLeetcode },
  {
    label: "CodeChef",
    href: siteConfig.socials.codechef,
    Icon: SiCodechef,
  },
  { label: "Email", href: `mailto:${siteConfig.email}`, Icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200/60 bg-[rgb(var(--bg-alt))] dark:border-white/10">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">
            {siteConfig.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} — Built with Next.js, Tailwind &amp;
            Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:-translate-y-0.5 hover:scale-105 hover:border-brand-400 hover:text-brand-600 hover:shadow-[0_0_24px_-6px_rgba(99,102,241,0.7)] dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:text-brand-300"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
