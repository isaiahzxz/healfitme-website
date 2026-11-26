import { CheckIn } from "@/components/CheckIn";
import { Clubs } from "@/components/Clubs";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Roadmap } from "@/components/Roadmap";
import { Score } from "@/components/Score";
import { Screens } from "@/components/Screens";
import { Showcase } from "@/components/Showcase";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <CheckIn />
      <Roadmap />
      <Score />
      <Screens />
      <Clubs />
      <Trust />
      <Faq />
    </main>
  );
}
