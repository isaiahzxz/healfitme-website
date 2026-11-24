import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms | HealFitMe" };

export default function Terms() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-44">
      <Link href="/" className="text-sm text-ink-soft hover:text-ink">
        &larr; Back to HealFitMe
      </Link>
      <h1 className="display mt-8 text-5xl">Terms</h1>
      <p className="mt-6 rounded-2xl bg-mist p-4 text-sm text-ink-soft">
        Draft placeholder. Replace with terms reviewed by a lawyer before launch.
      </p>
      <h2 className="mt-10 text-xl font-medium">Not medical advice</h2>
      <p className="mt-2 text-ink-soft">
        HealFitMe is a wellness tool and does not provide medical advice,
        diagnosis or treatment. Talk to a clinician about any injury or
        health condition.
      </p>
    </main>
  );
}
