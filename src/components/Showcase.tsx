import { FeatureRail } from "./FeatureRail";
import { PhoneVideo } from "./PhoneVideo";
import { Reveal } from "./Reveal";

export function Showcase() {
  return (
    <section id="app" className="overflow-clip bg-black px-4 py-24 text-white md:px-6 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="display mx-auto max-w-[560px] text-center text-[clamp(2.1rem,4.4vw,3.4rem)]">
            Recover well, train better
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <div className="relative overflow-hidden rounded-[32px] bg-sky-2 px-6 pt-14 md:rounded-[44px] md:pt-20">
            <div className="mx-auto max-w-[320px] overflow-hidden rounded-t-[3rem]">
              <PhoneVideo
                name="app-walkthrough"
                poster="/video/poster-app.webp"
                label="A short video of the HealFitMe app: the morning check-in, the Recovery score, today's mission and your stats"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-16">
          <FeatureRail />
        </div>
      </div>
    </section>
  );
}
