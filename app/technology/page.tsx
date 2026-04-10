"use client";

import { motion } from "framer-motion";
import { Check, Minus, Zap, Wind, Leaf } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import {
  TECHNOLOGY_HERO,
  MECHANISM_STEPS,
  SAFETY_FACTS,
  COMPARISON_METHODS,
} from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/constants";
import { staggerFadeUp, staggerContainer, fadeUp } from "@/lib/animations";

const STEP_ICONS = { Zap, Wind, Leaf } as const;

// ── Mechanism diagram ─────────────────────────────────────────────────────────
function MechanismStep({
  step,
  title,
  description,
  icon,
  index,
}: {
  step: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={staggerFadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="relative"
    >
      <div className="relative z-10 flex flex-col items-start lg:items-center text-left lg:text-center gap-4">
        <div className="flex items-center gap-3 lg:flex-col lg:gap-2">
          <div className="w-14 h-14 rounded-full bg-teal/10 border-2 border-teal/30 flex flex-col items-center justify-center flex-shrink-0">
            <span className="font-display font-extrabold text-teal text-xs leading-none">
              {step}
            </span>
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold text-charcoal text-base mb-2">{title}</h3>
          <p className="font-body text-muted-text text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Comparison table ──────────────────────────────────────────────────────────
function ComparisonSection() {
  return (
    <>
      <SectionWrapper id="comparison" className="bg-surface">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            The Comparison
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            How Ozone Compares to Alternatives
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            A direct comparison across the methods commonly used for car interior hygiene.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 font-display font-semibold text-charcoal text-sm w-40">
                  Feature
                </th>
                {COMPARISON_METHODS.map((m) => (
                  <th
                    key={m.name}
                    className={`px-5 py-4 font-display font-bold text-sm text-center ${
                      m.highlight
                        ? "bg-teal text-white rounded-t-lg"
                        : "text-charcoal"
                    }`}
                  >
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Bacteria Kill Rate", key: "bacteria" },
                { label: "Mold & Fungi", key: "mold" },
                { label: "Reach", key: "reach" },
                { label: "Residue", key: "residue" },
                { label: "Eco-Friendly", key: "eco" },
              ].map((row, ri) => (
                <tr
                  key={row.key}
                  className={`border-b border-gray-50 last:border-0 ${
                    ri % 2 === 0 ? "bg-white" : "bg-surface"
                  }`}
                >
                  <td className="px-6 py-4 font-body text-sm text-charcoal font-medium">
                    {row.label}
                  </td>
                  {COMPARISON_METHODS.map((m) => {
                    const val = m[row.key as keyof typeof m];
                    return (
                      <td
                        key={m.name}
                        className={`px-5 py-4 text-center ${
                          m.highlight ? "bg-teal/[0.04]" : ""
                        }`}
                      >
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check size={16} className="text-teal mx-auto" />
                          ) : (
                            <Minus size={16} className="text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span
                            className={`font-body text-sm ${
                              m.highlight ? "text-teal font-semibold" : "text-muted-text"
                            }`}
                          >
                            {String(val)}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </SectionWrapper>
      <WaveDivider from="#f8f9fa" to="#ffffff" />
    </>
  );
}

// ── Safety section ────────────────────────────────────────────────────────────
function SafetySection() {
  return (
    <>
      <SectionWrapper id="safety" className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            Safety & Trust
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            Proven, Recognized, and Safe
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            Ozone technology is not new — it has decades of use in highly regulated industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SAFETY_FACTS.map((fact, i) => (
            <motion.div
              key={fact.title}
              custom={i}
              variants={staggerFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface rounded-2xl border border-gray-100 p-7"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-teal" />
                <h3 className="font-display font-bold text-charcoal text-base">{fact.title}</h3>
              </div>
              <p className="font-body text-muted-text text-sm leading-relaxed">{fact.body}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      <WaveDivider from="#ffffff" to="#f8f9fa" />
    </>
  );
}

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={TECHNOLOGY_HERO.eyebrow}
          heading={TECHNOLOGY_HERO.heading}
          subheading={TECHNOLOGY_HERO.subheading}
          theme="dark"
        />

        {/* Mechanism */}
        <SectionWrapper id="mechanism" className="bg-white">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
              The Mechanism
            </span>
            <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
              From Air to Ozone to Clean Oxygen
            </h2>
            <p className="font-body text-muted-text text-base leading-relaxed">
              Four molecular steps that eliminate what no cleaning product can touch.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
            {MECHANISM_STEPS.map((step, i) => (
              <MechanismStep key={step.step} {...step} index={i} />
            ))}
          </motion.div>

          {/* O₃ → O₂ visual */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="mt-16 flex items-center justify-center gap-4 flex-wrap"
          >
            {["O₃", "→", "Pathogen Cell Wall Rupture", "→", "O₂ + Clean Air"].map(
              (item, i) => (
                <div
                  key={i}
                  className={`font-display font-bold text-lg px-5 py-3 rounded-xl ${
                    item === "→"
                      ? "text-gray-300 px-0"
                      : i === 0
                      ? "bg-teal/10 text-teal border border-teal/20"
                      : i === 4
                      ? "bg-aqua/10 text-charcoal border border-aqua/20"
                      : "bg-surface text-charcoal border border-gray-100 text-sm font-body font-medium"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </motion.div>
        </SectionWrapper>
        <WaveDivider from="#ffffff" to="#f8f9fa" />

        <ComparisonSection />
        <SafetySection />
        <HowItWorks fromColor="#f8f9fa" toColor="#ffffff" bg="bg-surface" />
        <FAQ
          items={FAQ_ITEMS.slice(0, 4)}
          fromColor="#ffffff"
          toColor="#0f6e56"
          bg="bg-white"
        />
        <CtaBanner
          heading="Experience the Science for Yourself"
          body="Choose a treatment tier and let the technology speak for itself."
          primaryCta={{ label: "See Treatment Tiers", href: "/treatments" }}
          secondaryCta={{ label: "Get in Touch", href: "/contact" }}
          fromColor="#0f6e56"
          toColor="#1a1a2e"
        />
      </main>
      <Footer />
    </>
  );
}
