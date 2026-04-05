"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Wrench } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import { WHO_IS_IT_FOR_HEADING, WHO_PUBLIC, WHO_OPERATORS } from "@/lib/constants";
import { staggerFadeUp } from "@/lib/animations";

interface WhoIsItForProps {
  fromColor?: string;
  toColor?: string;
  bg?: string;
}

export default function WhoIsItFor({
  fromColor = "#f8f9fa",
  toColor = "#0f6e56",
  bg = "bg-surface",
}: WhoIsItForProps) {
  return (
    <>
      <SectionWrapper id="who-is-it-for" className={bg}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            Who Benefits
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl">
            {WHO_IS_IT_FOR_HEADING}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Public */}
          <motion.div
            custom={0}
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5">
              <Users size={22} className="text-teal" />
            </div>
            <span className="text-xs font-body font-semibold text-teal uppercase tracking-widest mb-2">
              {WHO_PUBLIC.eyebrow}
            </span>
            <h3 className="font-display font-bold text-charcoal text-xl mb-4 leading-snug">
              {WHO_PUBLIC.heading}
            </h3>
            <p className="font-body text-muted-text text-sm leading-relaxed flex-1 mb-6">
              {WHO_PUBLIC.body}
            </p>
            <Link
              href={WHO_PUBLIC.cta.href}
              className="inline-flex items-center gap-2 text-teal font-body font-semibold text-sm hover:gap-3 transition-all group w-fit"
            >
              {WHO_PUBLIC.cta.label}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Operators */}
          <motion.div
            custom={1}
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-charcoal rounded-2xl p-8 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-5">
                <Wrench size={22} className="text-teal" />
              </div>
              <span className="text-xs font-body font-semibold text-teal uppercase tracking-widest mb-2">
                {WHO_OPERATORS.eyebrow}
              </span>
              <h3 className="font-display font-bold text-white text-xl mb-4 leading-snug">
                {WHO_OPERATORS.heading}
              </h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                {WHO_OPERATORS.body}
              </p>
              <Link
                href={WHO_OPERATORS.cta.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-white font-body font-semibold text-sm rounded-xl hover:bg-teal-dark transition-colors w-fit"
              >
                {WHO_OPERATORS.cta.label}
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
      <WaveDivider from={fromColor} to={toColor} />
    </>
  );
}
