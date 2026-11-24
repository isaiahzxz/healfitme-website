import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowLink } from "./ArrowLink";
import { Phone } from "./Phone";
import { Reveal } from "./Reveal";

function Block({
  title,
  body,
  link,
  flip = false,
  tone = "white",
  children,
}: {
  title: ReactNode;
  body: string;
  link?: { href: string; label: string };
  flip?: boolean;
  tone?: "white" | "mist";
  children: ReactNode;
}) {
  return (
    <section className={`${tone === "mist" ? "bg-mist" : "bg-white"} px-6 py-20 md:py-28`}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal className={flip ? "md:order-2" : ""}>{children}</Reveal>
        <Reveal delay={100} className={flip ? "md:order-1" : ""}>
          <h2 className="display text-[clamp(2.2rem,4.8vw,3.75rem)]">{title}</h2>
          <p className="mt-6 max-w-md text-lg text-ink-soft">{body}</p>
          {link && (
            <div className="mt-8">
              <ArrowLink href={link.href}>{link.label}</ArrowLink>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Photo({
  src,
  position = "50% 50%",
  children,
}: {
  src: string;
  position?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative isolate aspect-[4/5] overflow-hidden rounded-[36px] bg-sky-2 shadow-[0_40px_90px_-45px_rgba(15,26,56,0.5)]">
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 768px) 560px, 100vw"
        className="object-cover transition duration-700 hover:scale-[1.03]"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(15,26,56,0.45),transparent)]"
      />
      <div className="absolute inset-x-5 bottom-5">{children}</div>
    </div>
  );
}

const glass = "rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-xl";

export function Blocks() {
  return (
    <>
      <section className="bg-white px-6 pb-4 pt-24 text-center md:pt-32">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="display text-[clamp(2.6rem,6.5vw,5rem)]">
            Recovery, <span className="text-blue-deep">together.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            HealFitMe reads your day, tells you what your body needs, and hands you
            one clear next step. Real coaches are there when you want a guide.
          </p>
        </Reveal>
      </section>

      <Block
        title={
          <>
            Know where you
            <br />
            stand, today.
          </>
        }
        body="A recovery score from your check-in and, if you like, your wearable. Rest, Watch or Good, with the reason in plain words."
        link={{ href: "/product", label: "See the recovery score" }}
      >
        <Photo src="/images/mobility.webp" position="50% 40%">
          <div className={glass}>
            <div className="flex items-end justify-between">
              <p className="text-[13px] text-ink-soft">Recovery</p>
              <p className="text-[15px] font-medium text-blue-deep">Good</p>
            </div>
            <p className="display mt-1 text-[44px] leading-none">
              83<span className="text-[16px] text-ink-soft">/100</span>
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[linear-gradient(90deg,#f1cabf,#f3e0aa,#6f9ae6)]">
              <div className="h-full w-[17%] float-y" />
            </div>
            <p className="mt-3 text-[13px] text-ink-soft">
              You&apos;re good to train. This is a day to put your energy where it counts.
            </p>
          </div>
        </Photo>
      </Block>

      <Block
        tone="mist"
        flip
        title={
          <>
            A minute in
            <br />
            the morning.
          </>
        }
        body="Five quick questions set your score and your mission. Nothing to log, nothing to type in. Just how you feel."
        link={{ href: "/product", label: "Try the check-in" }}
      >
        <div className="relative isolate overflow-hidden rounded-[36px] bg-[linear-gradient(160deg,#c3d6f6_0%,#d9d6f3_100%)] px-6 pb-0 pt-12">
          <div className="mx-auto h-[420px] max-w-[290px] overflow-hidden sm:h-[500px]">
            <Phone />
          </div>
        </div>
      </Block>

      <Block
        title={
          <>
            One mission.
            <br />
            Not twenty.
          </>
        }
        body="Each day brings one practical thing to do, with the reason it was chosen. Reveal it when you are ready, or say not today."
        link={{ href: "/product", label: "See how missions work" }}
      >
        <Photo src="/images/breathing.webp" position="50% 55%">
          <div className={glass}>
            <p className="text-[13px] text-ink-soft">Today&apos;s mission</p>
            <div className="mt-2 rounded-2xl bg-blue p-4 text-white">
              <p className="text-[12px] text-white/85">Chosen because: fresh for the sessions that matter.</p>
              <p className="mt-1 text-[18px] font-medium">Your mission is ready</p>
              <span className="mt-3 inline-block rounded-full bg-navy px-4 py-2 text-[13px] font-medium">
                Reveal mission
              </span>
            </div>
          </div>
        </Photo>
      </Block>

      <Block
        tone="mist"
        flip
        title={
          <>
            Guided by
            <br />
            real people.
          </>
        }
        body="Short guided sessions from real coaches: mobility, breathing and resets that fit into an actual day."
        link={{ href: "/coaches", label: "Meet the coaches" }}
      >
        <Photo src="/images/coach-breath.webp" position="50% 35%">
          <div className={`${glass} flex items-center gap-4`}>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-white">
              <svg width="16" height="16" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                <path d="M6 3.5v15l13-7.5z" />
              </svg>
            </span>
            <div>
              <p className="text-[16px] font-medium">A 12-minute guided reset</p>
              <p className="text-[13px] text-ink-soft">Led by a real coach &middot; example session</p>
            </div>
          </div>
        </Photo>
      </Block>

      {/* Facts band */}
      <section className="bg-navy px-6 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 text-center md:grid-cols-4">
          {[
            ["1 min", "morning check-in"],
            ["5", "quick questions"],
            ["1", "mission a day"],
            ["0", "wearables required"],
          ].map(([n, l], i) => (
            <Reveal key={l} delay={i * 80}>
              <p className="display text-[clamp(2.75rem,6vw,4.5rem)] text-sky">{n}</p>
              <p className="mt-2 text-[15px] text-white/70">{l}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
