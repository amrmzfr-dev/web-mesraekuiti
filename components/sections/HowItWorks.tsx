"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import {
  HOW_IT_WORKS_HEADING,
  HOW_IT_WORKS_SUBHEADING,
  HOW_IT_WORKS_STEPS,
} from "@/lib/constants";
import { staggerFadeUp } from "@/lib/animations";

interface HowItWorksProps {
  fromColor?: string;
  toColor?: string;
  bg?: string;
}

export default function HowItWorks({
  fromColor = "#ffffff",
  toColor = "#f8f9fa",
  bg = "bg-white",
}: HowItWorksProps) {
  return (
    <>
      <SectionWrapper id="how-it-works" className={bg}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            The Process
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            {HOW_IT_WORKS_HEADING}
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            {HOW_IT_WORKS_SUBHEADING}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-4 gap-4">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={staggerFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="relative flex flex-col items-center text-center px-3"
              >
                <div className="relative z-10 w-14 h-14 rounded-full border-2 border-teal bg-white flex flex-col items-center justify-center mb-5 shadow-sm">
                  <span className="font-display font-bold text-teal text-xs">{step.number}</span>
                </div>
                <h3 className="font-display font-semibold text-charcoal text-base mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-muted-text text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-0">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={staggerFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full border-2 border-teal bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="font-display font-bold text-teal text-xs">{step.number}</span>
                </div>
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-teal/15 my-2 min-h-[40px]" />
                )}
              </div>
              <div className="pb-10 pt-1">
                <h3 className="font-display font-semibold text-charcoal text-base mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-muted-text text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      <WaveDivider from={fromColor} to={toColor} />
    </>
  );
}
