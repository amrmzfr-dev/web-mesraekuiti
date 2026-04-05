"use client";

import { motion } from "framer-motion";
import {
  FlaskConical, Wind, Microscope, Sprout, Car, AirVent,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import { WHY_OZONE_HEADING, WHY_OZONE_SUBHEADING, WHY_OZONE_BENEFITS } from "@/lib/constants";
import { staggerFadeUp } from "@/lib/animations";

const ICONS = { FlaskConical, Wind, Microscope, Sprout, Car, AirVent } as const;
type IconName = keyof typeof ICONS;

interface WhyOzoneProps {
  fromColor?: string;
  toColor?: string;
  bg?: string;
}

export default function WhyOzone({
  fromColor = "#ffffff",
  toColor = "#f8f9fa",
  bg = "bg-white",
}: WhyOzoneProps) {
  return (
    <>
      <SectionWrapper id="why-ozone" className={bg}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            The Advantage
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            {WHY_OZONE_HEADING}
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            {WHY_OZONE_SUBHEADING}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_OZONE_BENEFITS.map((benefit, i) => {
            const Icon = ICONS[benefit.icon as IconName];
            return (
              <motion.div
                key={benefit.title}
                custom={i}
                variants={staggerFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(15,110,86,0.10)" }}
                transition={{ duration: 0.2 }}
                className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-surface hover:bg-white cursor-default transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-light group-hover:bg-teal transition-colors flex items-center justify-center">
                  <Icon size={19} className="text-teal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal text-sm mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-muted-text text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
      <WaveDivider from={fromColor} to={toColor} />
    </>
  );
}
