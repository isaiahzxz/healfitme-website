import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy | HealFitMe" };

export default function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <Link href="/" className="text-sm text-ink-soft hover:text-ink">
        &larr; Back to HealFitMe
      </Link>
      <h1 className="display mt-8 text-5xl">Privacy</h1>
      <p className="mt-6 rounded-2xl bg-mist p-4 text-sm text-ink-soft">
        Draft placeholder. Replace with a policy reviewed by a lawyer before launch.
      </p>
      <h2 className="mt-10 text-xl font-medium">Waitlist</h2>
      <p className="mt-2 text-ink-soft">
        When you join the waitlist we store your email address, and your first
        name and goal if you share them. We use them only to contact you about
        HealFitMe early access. Email us to have your details removed.
      </p>
    </main>
  );
}
