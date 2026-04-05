import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import Contact from "@/components/sections/Contact";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import { CONTACT_HERO, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_NAME} — whether you're a car owner or a workshop operator.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={CONTACT_HERO.eyebrow}
          heading={CONTACT_HERO.heading}
          subheading={CONTACT_HERO.subheading}
          theme="teal"
        />

        <Contact />

        {/* Info strip */}
        <WaveDivider from="#ffffff" to="#f8f9fa" />
        <SectionWrapper className="bg-surface">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: "Response Time",
                value: "1–2 Business Days",
                note: "For operator inquiries via form",
              },
              {
                label: "WhatsApp Hours",
                value: "9am – 9pm",
                note: "Monday to Saturday (Malaysia time)",
              },
              {
                label: "Coverage",
                value: "All Malaysia",
                note: "Serving Peninsular and East Malaysia",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center"
              >
                <p className="font-body text-xs text-muted-text uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                <p className="font-display font-bold text-charcoal text-lg mb-1">{item.value}</p>
                <p className="font-body text-xs text-muted-text">{item.note}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
        <WaveDivider from="#f8f9fa" to="#1a1a2e" />
      </main>
      <Footer />
    </>
  );
}
