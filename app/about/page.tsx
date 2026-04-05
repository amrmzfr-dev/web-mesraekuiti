import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import WaveDivider from "@/components/shared/WaveDivider";
import SectionWrapper from "@/components/shared/SectionWrapper";
import CtaBanner from "@/components/shared/CtaBanner";
import { SITE_NAME, COMPANY_NAME } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY_NAME}, the company behind ${SITE_NAME} — Malaysia's professional ozone car sanitization service.`,
};

const VALUES = [
  {
    title: "Health First",
    description:
      "We believe every Malaysian deserves a clean, safe environment inside their vehicle. Our treatments are designed with occupant health as the primary concern.",
  },
  {
    title: "Science-Backed",
    description:
      "Every process we use is grounded in established ozone chemistry. No gimmicks — just effective, well-understood technology applied with precision.",
  },
  {
    title: "Eco-Responsibility",
    description:
      "Ozone reverts naturally to oxygen after treatment. No chemical waste, no residue, no harm to the environment. Clean for your car, clean for the planet.",
  },
  {
    title: "Partnership Mindset",
    description:
      "We work closely with workshop operators and fleet managers to integrate ozone sanitization seamlessly into their existing service workflows.",
  },
];

const MILESTONES = [
  { year: "2019", label: "Company Founded", desc: "Mesra Ekuiti Sdn Bhd established in Shah Alam, Selangor with a focus on environmental health solutions." },
  { year: "2021", label: "OzoneCare Launched", desc: "Introduced our first commercial ozone sanitization unit for automotive interiors." },
  { year: "2022", label: "First Workshop Network", desc: "Partnered with 20+ independent workshops across Klang Valley to offer OzoneCare as an add-on service." },
  { year: "2024", label: "National Expansion", desc: "Extended operations to Peninsular and East Malaysia, serving both individual and fleet clients." },
];

const TEAM = [
  {
    name: "Nama Sapa Nak Letak?",
    role: "Founder & Chief Executive",
    bio: "Driven by a passion for clean technology and environmental health, our founder started Mesra Ekuiti with the goal of making professional-grade air sanitization accessible to every Malaysian car owner.",
  },
  {
    name: "Nama Sapa Nak Letak?",
    role: "Head of Operations",
    bio: "Oversees day-to-day service delivery and workshop partnerships, ensuring every OzoneCare treatment meets the company's quality and safety standards.",
  },
  {
    name: "Nama Sapa Nak Letak?",
    role: "Technical Lead",
    bio: "Manages the technical development of our ozone systems and leads ongoing research into treatment efficacy and safety protocols.",
  },
  {
    name: "Nama Sapa Nak Letak?",
    role: "Business Development",
    bio: "Builds relationships with fleet operators, automotive groups, and franchise partners across Malaysia to grow OzoneCare's service network.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Story"
          heading="Built on a Belief That Clean Air Matters"
          subheading={`${COMPANY_NAME} was founded to bring honest, science-driven hygiene solutions to Malaysian car owners — starting with the air inside your vehicle.`}
          theme="dark"
        />

        {/* Company overview + building photo */}
        <WaveDivider from="#1a1a2e" to="#ffffff" />
        <SectionWrapper className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Building photo placeholder — replace div with <Image> when ready */}
            <div className="w-full aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 flex flex-col items-center justify-center gap-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18"/>
                <path d="M9 21V9"/>
                <rect x="12" y="12" width="3" height="3"/>
                <rect x="12" y="16" width="3" height="2"/>
                <rect x="5" y="12" width="2" height="2"/>
                <rect x="5" y="16" width="2" height="2"/>
              </svg>
              <p className="text-sm font-body text-center px-6">
                Company building photo<br />
                <span className="text-xs text-gray-300">Replace with actual image</span>
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest">
                Who We Are
              </p>
              <h2 className="font-display font-bold text-charcoal text-2xl sm:text-3xl leading-snug">
                {COMPANY_NAME}
              </h2>
              <div className="space-y-4 text-muted-text font-body text-sm leading-relaxed">
                <p>
                  Mesra Ekuiti Sdn Bhd is a Malaysian-owned company based in Shah Alam, Selangor, dedicated to
                  improving indoor air quality through ozone-based sanitization technology. We operate under the
                  belief that clean air should not be a luxury — it should be the standard.
                </p>
                <p>
                  Founded in 2019, we began by researching effective, chemical-free alternatives to conventional
                  car interior cleaning methods. After extensive testing, we developed{" "}
                  <strong className="text-charcoal">OzoneCare</strong> — a structured ozone treatment system
                  purpose-built for Malaysian vehicle types and climate conditions.
                </p>
                <p>
                  Today, we serve individual car owners, corporate fleets, and independent automotive workshops
                  across Malaysia. Our goal remains simple: to make the air inside every car as clean as the air
                  outside.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { value: "5+",    label: "Years in Operation" },
                  { value: "20+",   label: "Workshop Partners"  },
                  { value: "1000+", label: "Vehicles Treated"   },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-display font-bold text-teal text-2xl">{value}</p>
                    <p className="font-body text-xs text-muted-text mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Values */}
        <WaveDivider from="#ffffff" to="#f8f9fa" />
        <SectionWrapper className="bg-surface">
          <div className="text-center mb-12">
            <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="font-display font-bold text-charcoal text-2xl sm:text-3xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map(({ title, description }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-7 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-teal-light flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                </div>
                <h3 className="font-display font-semibold text-charcoal text-base">{title}</h3>
                <p className="font-body text-sm text-muted-text leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Team */}
        <WaveDivider from="#f8f9fa" to="#ffffff" />
        <SectionWrapper className="bg-white">
          <div className="text-center mb-12">
            <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-3">
              The People Behind OzoneCare
            </p>
            <h2 className="font-display font-bold text-charcoal text-2xl sm:text-3xl">
              Meet Our Team
            </h2>
            <p className="font-body text-sm text-muted-text mt-3 max-w-xl mx-auto">
              A small, focused team committed to bringing clean-air technology to every car in Malaysia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(({ name, role, bio }, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                {/* Avatar placeholder — replace with <Image> */}
                <div className="w-24 h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-charcoal text-sm">{name}</p>
                  <p className="font-body text-xs text-teal font-medium mt-0.5">{role}</p>
                </div>
                <p className="font-body text-xs text-muted-text leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Timeline */}
        <WaveDivider from="#ffffff" to="#1a1a2e" />
        <SectionWrapper className="bg-charcoal">
          <div className="text-center mb-12">
            <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-3">
              Our Journey
            </p>
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl">
              From Idea to National Presence
            </h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {MILESTONES.map(({ year, label, desc }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center z-10">
                    <span className="font-display font-bold text-teal text-xs">{year}</span>
                  </div>
                  <div className="pt-3">
                    <p className="font-display font-semibold text-white text-sm mb-1">{label}</p>
                    <p className="font-body text-sm text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <CtaBanner
          eyebrow="Work With Us"
          heading="Interested in Partnering with OzoneCare?"
          body="Whether you run a workshop, manage a fleet, or simply want to learn more about what we do — we'd love to hear from you."
          primaryCta={{ label: "Get in Touch", href: "/contact" }}
          secondaryCta={{ label: "For Operators", href: "/operators" }}
          fromColor="#1a1a2e"
          toColor="#ffffff"
        />
      </main>
      <Footer />
    </>
  );
}
