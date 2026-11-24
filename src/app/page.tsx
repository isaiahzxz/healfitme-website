import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Plan } from "@/components/Plan";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Story />
      <Plan />
      <Faq />
      <FinalCta />
    </main>
  );
}
