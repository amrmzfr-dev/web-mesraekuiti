"use client";

import { motion } from "framer-motion";
import { Atom, ShieldCheck, Leaf } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import {
  WHAT_IS_OZONE_HEADING,
  WHAT_IS_OZONE_SUBHEADING,
  WHAT_IS_OZONE_COLUMNS,
} from "@/lib/constants";
import { staggerFadeUp } from "@/lib/animations";

const ICONS = { Atom, ShieldCheck, Leaf } as const;
type IconName = keyof typeof ICONS;

export default function WhatIsOzone() {
  return (
    <>
      <SectionWrapper id="what-is-ozone" className="bg-surface">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            The Science
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            {WHAT_IS_OZONE_HEADING}
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            {WHAT_IS_OZONE_SUBHEADING}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHAT_IS_OZONE_COLUMNS.map((col, i) => {
            const Icon = ICONS[col.icon as IconName];
            return (
              <motion.div
                key={col.title}
                custom={i}
                variants={staggerFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center mb-5">
                  <Icon size={22} className="text-teal" />
                </div>
                <h3 className="font-display font-semibold text-charcoal text-lg mb-3">
                  {col.title}
                </h3>
                <p className="font-body text-muted-text text-sm leading-relaxed">{col.body}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
      <WaveDivider from="#f8f9fa" to="#ffffff" />
    </>
  );
}
