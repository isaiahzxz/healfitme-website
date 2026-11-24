import { Blocks } from "@/components/Blocks";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Plan } from "@/components/Plan";

export default function Home() {
  return (
    <main>
      <Hero />
      <Blocks />
      <Plan />
      <Faq />
      <FinalCta />
    </main>
  );
}
