import { ClubShare } from "@/components/ClubShare";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Roadmap } from "@/components/Roadmap";
import { Includes } from "@/components/Includes";
import { Showcase } from "@/components/Showcase";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <ClubShare />
      <Roadmap />
      <Includes />
      <Trust />
      <Faq />
    </main>
  );
}
