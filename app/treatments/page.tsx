"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import Treatments from "@/components/sections/Treatments";
import FAQ from "@/components/sections/FAQ";
import { COMPARISON_ROWS, FAQ_ITEMS } from "@/lib/constants";
import { fadeUp, staggerFadeUp } from "@/lib/animations";

// ── Full comparison table ─────────────────────────────────────────────────────
function ComparisonTable() {
  return (
    <>
      <SectionWrapper id="comparison" className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            Full Comparison
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            What Each Tier Delivers
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            A detailed breakdown of coverage, depth, and effectiveness across all three treatment levels.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true, margin: "-60px" }}
          className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-5 font-display font-semibold text-charcoal text-sm w-52">
                  Feature
                </th>
                {["Basic", "Standard", "Premium"].map((tier) => (
                  <th
                    key={tier}
                    className={`px-5 py-5 font-display font-bold text-sm text-center ${
                      tier === "Premium"
                        ? "bg-teal text-white"
                        : "text-charcoal"
                    }`}
                  >
                    <div>{tier}</div>
                    <div
                      className={`text-xs font-body font-normal mt-0.5 ${
                        tier === "Premium" ? "text-white/70" : "text-muted-text"
                      }`}
                    >
                      {tier === "Basic" ? "5 min" : tier === "Standard" ? "10 min" : "15 min"}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  custom={i}
                  variants={staggerFadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-20px" }}
                  className={`border-b border-gray-50 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-surface"
                  }`}
                >
                  <td className="px-6 py-4 font-body text-sm text-charcoal font-medium">
                    {row.feature}
                  </td>
                  {(["basic", "standard", "premium"] as const).map((col) => {
                    const val = row[col];
                    return (
                      <td
                        key={col}
                        className={`px-5 py-4 text-center ${
                          col === "premium" ? "bg-teal/[0.04]" : ""
                        }`}
                      >
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check
                              size={16}
                              className={`mx-auto ${
                                col === "premium" ? "text-teal" : "text-teal/70"
                              }`}
                            />
                          ) : (
                            <Minus size={16} className="text-gray-200 mx-auto" />
                          )
                        ) : (
                          <span
                            className={`font-body text-sm ${
                              col === "premium" ? "text-teal font-semibold" : "text-muted-text"
                            }`}
                          >
                            {val}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </SectionWrapper>
      <WaveDivider from="#ffffff" to="#f8f9fa" />
    </>
  );
}


export default function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Treatment Tiers"
          heading="Three Levels of Clean. One Technology."
          subheading="From a quick daily refresh to a full antimicrobial overhaul — every tier uses the same ozone technology, scaled to match your needs."
          theme="teal"
        />

        <Treatments fromColor="#ffffff" toColor="#ffffff" bg="bg-white" />
        <ComparisonTable />

        <FAQ
          items={FAQ_ITEMS.slice(0, 5)}
          fromColor="#ffffff"
          toColor="#0f6e56"
          bg="bg-white"
        />
        <CtaBanner
          heading="Ready to Choose Your Treatment?"
          body="Contact us via WhatsApp or fill out the inquiry form. We will help you pick the right tier."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "How It Works", href: "/technology" }}
          fromColor="#0f6e56"
          toColor="#1a1a2e"
        />
      </main>
      <Footer />
    </>
  );
}
