import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="section-kicker">404</p>
      <h1 className="section-title mt-2">This page wandered off.</h1>
      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">
        The link might be broken, or the page may have moved. Let&apos;s get
        you back home.
      </p>
      <Link href="/" className="btn-primary mt-6">
        Back to portfolio
      </Link>
    </section>
  );
}
