"use client";

import { motion } from "framer-motion";
import {
  Package, Timer, LayoutGrid, TrendingUp, Wrench, ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import FAQ from "@/components/sections/FAQ";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import Contact from "@/components/sections/Contact";
import {
  OPERATOR_HERO,
  OPERATOR_BENEFITS,
  OPERATOR_PROCESS,
  OPERATOR_FAQ,
} from "@/lib/constants";
import { staggerFadeUp, staggerContainer, fadeUp } from "@/lib/animations";

const BENEFIT_ICONS = {
  Package, Timer, LayoutGrid, TrendingUp, Wrench, ShieldCheck,
} as const;
type BenefitIconName = keyof typeof BENEFIT_ICONS;

// ── Stats strip ───────────────────────────────────────────────────────────────
function StatsStrip() {
  return (
    <>
      <section className="bg-teal py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: 0, suffix: "", label: "Consumables needed", note: "Runs on ambient air only" },
              { value: 5, suffix: " min", label: "Minimum treatment", note: "Fits into any workflow" },
              { value: 3, suffix: "", label: "Tiers to offer", note: "Multiple price points" },
              { value: 100, suffix: "%", label: "Chemical-free", note: "No disposal protocols" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={staggerFadeUp}
                className="text-center"
              >
                <p className="font-display font-extrabold text-white text-4xl sm:text-5xl leading-none mb-1">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-body text-white/90 text-sm font-semibold mb-0.5">{stat.label}</p>
                <p className="font-body text-white/55 text-xs">{stat.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <WaveDivider from="#0f6e56" to="#ffffff" />
    </>
  );
}

// ── Benefits grid ─────────────────────────────────────────────────────────────
function BenefitsSection() {
  return (
    <>
      <SectionWrapper id="benefits" className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            Why Partner With Us
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            Built for Workshop Economics
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            Every aspect of the ozone service model is designed to minimise overhead and maximise return.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OPERATOR_BENEFITS.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[benefit.icon as BenefitIconName];
            return (
              <motion.div
                key={benefit.title}
                custom={i}
                variants={staggerFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-surface rounded-2xl border border-gray-100 p-7 hover:bg-white hover:shadow-md transition-all"
              >
                {benefit.counter !== undefined ? (
                  <div className="mb-4">
                    <p className="font-display font-extrabold text-teal text-4xl leading-none">
                      <AnimatedCounter to={benefit.counter} suffix={benefit.suffix ?? ""} />
                    </p>
                    <p className="font-body text-muted-text text-xs mt-1">{benefit.label}</p>
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center mb-5">
                    <Icon size={20} className="text-teal" />
                  </div>
                )}
                <h3 className="font-display font-bold text-charcoal text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-text text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
      <WaveDivider from="#ffffff" to="#1a1a2e" />
    </>
  );
}

// ── Process steps ─────────────────────────────────────────────────────────────
function ProcessSection() {
  return (
    <>
      <section className="bg-charcoal py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-teal/15 border border-teal/20 text-teal text-xs font-body font-medium tracking-wide">
                Getting Started
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl max-w-xl"
            >
              From First Contact to First Treatment
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {OPERATOR_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                variants={staggerFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="relative"
              >
                <div className="flex items-start gap-4 md:flex-col md:gap-0">
                  <div className="w-14 h-14 rounded-full border-2 border-teal bg-teal/10 flex items-center justify-center flex-shrink-0 md:mb-5">
                    <span className="font-display font-extrabold text-teal text-sm">
                      {step.step}
                    </span>
                  </div>
                  <div className="md:mt-0">
                    <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="font-body text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="#1a1a2e" to="#ffffff" />
    </>
  );
}

export default function OperatorsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={OPERATOR_HERO.eyebrow}
          heading={OPERATOR_HERO.heading}
          subheading={OPERATOR_HERO.subheading}
          theme="dark"
        />
        <StatsStrip />
        <BenefitsSection />
        <ProcessSection />

        {/* FAQ */}
        <FAQ
          items={OPERATOR_FAQ}
          fromColor="#ffffff"
          toColor="#f8f9fa"
          bg="bg-white"
        />

        {/* Contact form inline */}
        <SectionWrapper id="operator-contact" className="bg-surface">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
              Apply Now
            </span>
            <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
              Ready to Partner?
            </h2>
            <p className="font-body text-muted-text text-base leading-relaxed">
              Fill in the form and our team will reach out within 1–2 business days.
            </p>
          </div>
          <Contact />
        </SectionWrapper>

        <CtaBanner
          heading="Questions Before You Commit?"
          body="We are happy to walk you through the machine, the service model, and what to expect. No pressure."
          primaryCta={{ label: "WhatsApp Us", href: `https://wa.me/601XXXXXXXXX` }}
          secondaryCta={{ label: "View Treatments", href: "/treatments" }}
          fromColor="#f8f9fa"
          toColor="#1a1a2e"
        />
      </main>
      <Footer />
    </>
  );
}
