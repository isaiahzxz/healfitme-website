import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

function Card({
  title,
  body,
  className = "",
  children,
}: {
  title: string;
  body: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Reveal className={className}>
      <article className="flex h-full flex-col overflow-hidden rounded-[32px] bg-sand">
        <div className="p-8 pb-0 md:p-10 md:pb-0">
          <h3 className="display text-[clamp(1.6rem,3vw,2.25rem)]">{title}</h3>
          <p className="mt-3 max-w-md text-[16px] text-ink-soft">{body}</p>
        </div>
        <div className="mt-8 flex flex-1 items-end justify-center px-8 md:px-10">
          {children}
        </div>
      </article>
    </Reveal>
  );
}

const panel =
  "w-full max-w-sm rounded-t-3xl bg-white p-5 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.25)]";

export function Features() {
  return (
    <section id="features" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-6">
        <Card
          className="md:col-span-3"
          title="Know where you are"
          body="Your sleep, training load and soreness become a single recovery picture, updated every day. Connect a wearable, or just log how you feel."
        >
          <div className={panel}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              This week
            </p>
            <div className="mt-3 flex h-24 items-end gap-2">
              {[54, 61, 48, 70, 76, 69, 82].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-lg ${i === 6 ? "bg-coral" : "bg-mint"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-ink-soft">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <span key={i} className="flex-1 text-center">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Card>

        <Card
          className="md:col-span-3"
          title="One clear next step"
          body="No dashboards to decode. Every day you get a short list of personalized actions, ranked by what will help most."
        >
          <div className={`${panel} space-y-2.5`}>
            {[
              ["Easy 20 min walk", "Today", true],
              ["Hip + hamstring mobility", "8 min", false],
              ["Lights out by 10:30", "Tonight", false],
            ].map(([t, m, done]) => (
              <div
                key={t as string}
                className="flex items-center gap-3 rounded-2xl bg-sand px-4 py-3"
              >
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full border ${
                    done ? "border-evergreen bg-evergreen" : "border-ink/25"
                  }`}
                >
                  {done && (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5" />
                    </svg>
                  )}
                </span>
                <span className="flex-1 text-[14px] font-medium">{t as string}</span>
                <span className="text-[12px] text-ink-soft">{m as string}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card
          className="md:col-span-2"
          title="Quick Add"
          body="Log a workout, a rough night or a sore spot in seconds. Your plan updates on the spot."
        >
          <div className={`${panel} flex flex-wrap gap-2`}>
            {["Workout", "Poor sleep", "Sore legs", "Stressed", "Travel day"].map(
              (c, i) => (
                <span
                  key={c}
                  className={`rounded-full px-3.5 py-2 text-[13px] ${
                    i === 1 ? "bg-evergreen text-white" : "bg-sand"
                  }`}
                >
                  {c}
                </span>
              ),
            )}
          </div>
        </Card>

        <Card
          className="md:col-span-2"
          title="Sessions with real coaches"
          body="Guided recovery sessions led by people who do this for a living, matched to where you are today."
        >
          <div className={panel}>
            <div className="grid aspect-video place-items-center rounded-2xl bg-gradient-to-br from-evergreen to-evergreen-2">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/95">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#0d2b27" aria-hidden="true">
                  <path d="M4 2.5v11l9-5.5z" />
                </svg>
              </span>
            </div>
            <p className="mt-3 text-[14px] font-medium">Down-regulate: 12 min</p>
            <p className="text-[12px] text-ink-soft">Breathing and gentle mobility</p>
          </div>
        </Card>

        <Card
          className="md:col-span-2"
          title="Recovery Wrapped"
          body="A shareable recap of your recovery wins: streaks, best nights and how far you have come."
        >
          <div className={`${panel} text-center`}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              Your month
            </p>
            <p className="display mt-2 text-[56px] text-coral">12</p>
            <p className="text-[14px]">day recovery streak</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
