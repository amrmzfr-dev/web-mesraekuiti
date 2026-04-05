"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import { TREATMENTS_HEADING, TREATMENTS_SUBHEADING, TREATMENTS } from "@/lib/constants";
import { staggerFadeUp } from "@/lib/animations";

interface TreatmentsProps {
  fromColor?: string;
  toColor?: string;
  bg?: string;
}

export default function Treatments({
  fromColor = "#f8f9fa",
  toColor = "#ffffff",
  bg = "bg-surface",
}: TreatmentsProps) {
  return (
    <>
      <SectionWrapper id="treatments" className={bg}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            Treatment Tiers
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            {TREATMENTS_HEADING}
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            {TREATMENTS_SUBHEADING}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TREATMENTS.map((tier, i) => (
            <motion.div
              key={tier.id}
              custom={i}
              variants={staggerFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className={`flex flex-col ${tier.highlighted ? "md:-translate-y-2" : ""}`}
            >
              <Card
                className={`
                  relative flex flex-col h-full p-7 rounded-2xl border transition-all duration-300
                  ${
                    tier.highlighted
                      ? "border-teal shadow-xl shadow-teal/10 bg-white"
                      : "border-gray-100 bg-white hover:border-teal/30 hover:shadow-md"
                  }
                `}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-teal text-white text-xs font-body font-semibold rounded-full whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-display font-bold text-charcoal text-xl">{tier.name}</h3>
                    <span className="font-body text-xs text-muted-text font-medium">
                      {tier.duration}
                    </span>
                  </div>
                  <p
                    className={`font-body text-sm font-semibold ${
                      tier.highlighted ? "text-teal" : "text-muted-text"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                </div>

                {/* Intensity bar */}
                <div className="flex gap-1.5 mb-5">
                  {Array.from({ length: 3 }).map((_, j) => {
                    const filled = j < (tier.id === "basic" ? 1 : tier.id === "standard" ? 2 : 3);
                    return (
                      <div
                        key={j}
                        className={`h-1.5 flex-1 rounded-full ${
                          filled ? (tier.highlighted ? "bg-teal" : "bg-teal/50") : "bg-gray-100"
                        }`}
                      />
                    );
                  })}
                </div>

                <p className="font-body text-muted-text text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 mt-auto">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className={`flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-teal" : "text-teal/60"
                        }`}
                      />
                      <span className="font-body text-sm text-charcoal/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      <WaveDivider from={fromColor} to={toColor} />
    </>
  );
}
