import { CoachCheckIn, Profile } from "@/components/CoachAndProfile";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Beyond, HowItWorks } from "@/components/HowItWorks";
import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";
import { Waitlist } from "@/components/Waitlist";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <HowItWorks />
        <Features />
        <CoachCheckIn />
        <Profile />
        <Beyond />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
