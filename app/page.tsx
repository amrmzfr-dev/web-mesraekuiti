import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/Hero";
import WhatIsOzone from "@/components/sections/WhatIsOzone";
import HowItWorks from "@/components/sections/HowItWorks";
import Treatments from "@/components/sections/Treatments";
import WhyOzone from "@/components/sections/WhyOzone";
import FAQ from "@/components/sections/FAQ";
import TheProblem from "@/components/sections/home/TheProblem";
import MachineIllustration from "@/components/sections/home/MachineIllustration";
import { FAQ_ITEMS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <WhatIsOzone />
        <MachineIllustration />
        <HowItWorks fromColor="#ffffff" toColor="#f8f9fa" bg="bg-white" />
        <Treatments fromColor="#f8f9fa" toColor="#ffffff" bg="bg-surface" />
        <WhyOzone fromColor="#ffffff" toColor="#ffffff" bg="bg-white" />
        <FAQ
          items={FAQ_ITEMS.slice(0, 6)}
          fromColor="#ffffff"
          toColor="#1a1a2e"
          bg="bg-white"
        />
      </main>
      <Footer />
    </>
  );
}
