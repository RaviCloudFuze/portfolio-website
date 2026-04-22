"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import SectionHeading from "@/components/section-heading";
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
];

type Status = "idle" | "submitting" | "sent";

export default function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // No backend — open the user's mail client with prefilled content.
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 600);
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          kicker="Contact"
          align="center"
          title="Let's build something together"
          description="I'm always open to interesting problems, collaborations, or a friendly chat. My inbox is the fastest way in."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="card flex flex-col justify-between gap-6 p-6 sm:p-8"
          >
            <div>
              <h3 className="font-display text-lg font-semibold">
                Reach me directly
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Prefer email or socials? Here are all the ways to say hi.
              </p>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:hover:text-brand-300"
              >
                <FiMail /> {siteConfig.email}
              </Link>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-300"
                  >
                    <Icon size={13} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            onSubmit={onSubmit}
            className="card relative overflow-hidden p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Jane Doe"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="jane@example.com"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                placeholder="What's on your mind?"
                className="resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5"
              />
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                This opens your email client — no data is sent to any server.
              </p>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="btn-primary"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "sent" ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="inline-flex items-center gap-2"
                    >
                      <FiCheckCircle /> Opened mail
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="inline-flex items-center gap-2"
                    >
                      <FiSend /> Send message
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
