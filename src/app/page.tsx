import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { SessionsBand } from "@/components/SessionsBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <SessionsBand />
      <Faq />
      <FinalCta />
    </main>
  );
}
