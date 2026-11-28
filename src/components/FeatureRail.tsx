import Image from "next/image";

const CARDS = [
  { img: "/images/coach-breath.webp", t: "Check in", d: "Five quick questions each morning about sleep, soreness, energy, pain and the time you have." },
  { img: "/images/yoga-pink.webp", t: "Know your score", d: "A Recovery score out of 100 from a fixed formula. The same answers always give the same number." },
  { img: "/images/mobility.webp", t: "Do one thing", d: "One coach video chosen for your score, your body and your time, with the reason it was picked." },
  { img: "/images/watch.webp", t: "Bring your wearable", d: "Optional. Apple Watch, WHOOP, Oura and Garmin can share sleep, HRV and steps through Apple Health." },
  { img: "/images/coach-stretch.webp", t: "Train together", d: "Join a club for how you train, keep your streak going and cheer each other on." },
];

function Card({ c, copy = false }: { c: (typeof CARDS)[number]; copy?: boolean }) {
  return (
    <li aria-hidden={copy || undefined} className="w-[86vw] max-w-[560px] shrink-0 sm:w-[480px] lg:w-[540px]">
      <div className="h-full overflow-hidden rounded-[36px] bg-[#1c1d1c]">
        <div className="relative aspect-[5/4.4]">
          <Image src={c.img} alt="" fill sizes="(min-width:1024px) 540px, 86vw" className="object-cover" />
        </div>
        <div className="p-8 md:p-10">
          <h3 className="text-[1.75rem] leading-[1.1] tracking-[-0.5px] lg:text-[2.25rem]">{c.t}</h3>
          <p className="mt-4 text-[17px] leading-snug text-white/70 lg:text-[19px]">{c.d}</p>
        </div>
      </div>
    </li>
  );
}

/**
 * Cards drift sideways on their own in an endless loop. Hovering pauses them.
 * With reduced motion turned on, the row stays still and can be scrolled by hand.
 */
export function FeatureRail() {
  return (
    <div className="marquee group overflow-hidden motion-reduce:overflow-x-auto">
      <ul className="marquee-track flex w-max gap-5 group-hover:[animation-play-state:paused]">
        {CARDS.map((c) => (
          <Card key={c.t} c={c} />
        ))}
        {/* Second copy makes the loop seamless; hidden from screen readers. */}
        {CARDS.map((c) => (
          <Card key={`${c.t}-copy`} c={c} copy />
        ))}
      </ul>
    </div>
  );
}
