import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CtaBanner from "@/components/shared/CtaBanner";
import Hero from "@/components/sections/Hero";
import WhatIsOzone from "@/components/sections/WhatIsOzone";
import HowItWorks from "@/components/sections/HowItWorks";
import Treatments from "@/components/sections/Treatments";
import WhyOzone from "@/components/sections/WhyOzone";
import WhoIsItFor from "@/components/sections/WhoIsItFor";
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
        <HowItWorks fromColor="#f8f9fa" toColor="#f8f9fa" bg="bg-surface" />
        <Treatments fromColor="#f8f9fa" toColor="#ffffff" bg="bg-surface" />
        <WhyOzone fromColor="#ffffff" toColor="#f8f9fa" bg="bg-white" />
        <WhoIsItFor fromColor="#f8f9fa" toColor="#0f6e56" bg="bg-surface" />
        <CtaBanner
          eyebrow="The Cleanest Drive Starts Here"
          heading="Ready to Breathe Better Inside Your Car?"
          body="Choose a treatment tier, reach out via WhatsApp, or ask about bringing ozone sanitization to your workshop."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "Learn the Science", href: "/technology" }}
          fromColor="#0f6e56"
          toColor="#ffffff"
        />
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
