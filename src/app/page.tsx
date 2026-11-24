import { CardRail } from "@/components/CardRail";
import { Faq } from "@/components/Faq";
import { Guide } from "@/components/Guide";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Plan } from "@/components/Plan";
import { Sessions } from "@/components/Sessions";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <CardRail />
      <Guide />
      <Plan />
      <Sessions />
      <Faq />
    </main>
  );
}
