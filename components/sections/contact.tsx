"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiMail,
  FiPaperclip,
  FiPhone,
  FiSend,
  FiX,
} from "react-icons/fi";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import SectionHeading from "@/components/section-heading";
import { siteConfig } from "@/data/site";

type Status = "idle" | "sending" | "sent";

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [file, setFile] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null);
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const lines = [
      `Hi Ravi, my name is ${form.name}.`,
      "",
      form.message,
      "",
      form.email && `You can reach me back at ${form.email}.`,
      file &&
        `(I'd also like to share a file: ${file.name}, ${formatBytes(file.size)}. I'll attach it here on WhatsApp.)`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => setStatus("sent"), 400);
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
      clearFile();
    }, 3500);
  };

  const inputClass =
    "rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:shadow-[0_0_22px_-6px_rgba(99,102,241,0.55)] focus:ring-2 focus:ring-brand-500/30 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500";

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          kicker="Contact"
          align="center"
          title="Let's build something that ships"
          description="Open to Backend Engineer / Backend Product Engineer roles — Java/Spring shops, distributed systems, data-heavy products. Drop a note and I'll reply within 24 hours."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="card flex flex-col gap-5 p-7 sm:p-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold">
                Reach me directly
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Email, phone, or LinkedIn work best.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 hover:shadow-[0_0_22px_-6px_rgba(99,102,241,0.55)] dark:border-white/10 dark:bg-white/5 dark:hover:text-brand-300"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <FiMail size={19} />
                </span>
                <span className="truncate">{siteConfig.email}</span>
              </Link>

              <div className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium dark:border-white/10 dark:bg-white/5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <FiPhone size={19} />
                </span>
                <span className="select-all font-mono tracking-wide text-slate-800 dark:text-slate-100">
                  {siteConfig.phone}
                </span>
              </div>

              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium transition-all hover:-translate-y-0.5 hover:border-[#0A66C2]/60 hover:text-[#0A66C2] hover:shadow-[0_0_22px_-6px_rgba(10,102,194,0.55)] dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2]">
                  <SiLinkedin size={19} />
                </span>
                <span>Message me on LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            onSubmit={onSubmit}
            className="card relative overflow-hidden p-7 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
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
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
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
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-700 dark:text-slate-200"
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
                className={`resize-none ${inputClass}`}
              />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Attachment{" "}
                <span className="font-normal text-slate-500 dark:text-slate-400">
                  (optional)
                </span>
              </span>

              {!file ? (
                <label
                  htmlFor="attachment"
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
                >
                  <FiPaperclip size={16} />
                  <span>Click to attach a file. Its name will be shared in the message.</span>
                </label>
              ) : (
                <div className="flex items-center justify-between gap-3 rounded-xl border border-brand-400/40 bg-brand-500/5 px-4 py-3 text-sm">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300">
                      <FiPaperclip size={16} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-medium">{file.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {formatBytes(file.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={clearFile}
                    aria-label="Remove attachment"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-slate-100"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              )}

              <input
                ref={fileInputRef}
                id="attachment"
                name="attachment"
                type="file"
                onChange={onFileChange}
                className="sr-only"
              />
            </div>

            <div className="mt-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Opens WhatsApp in a new tab with your message prefilled. No
                data leaves your device.
              </p>
              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25d366] to-[#128c7e] px-6 py-3 text-base font-semibold text-white shadow-[0_0_30px_-6px_rgba(37,211,102,0.7)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
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
                      <FiCheckCircle size={18} /> WhatsApp opened
                    </motion.span>
                  ) : status === "sending" ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="inline-flex items-center gap-2"
                    >
                      <FiSend size={18} /> Opening…
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="inline-flex items-center gap-2"
                    >
                      <SiWhatsapp size={18} /> Send via WhatsApp
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
