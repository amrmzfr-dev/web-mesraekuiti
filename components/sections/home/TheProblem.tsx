"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { staggerContainer, staggerFadeUp, fadeUp } from "@/lib/animations";
import { THE_PROBLEM } from "@/lib/constants";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import WaveDivider from "@/components/shared/WaveDivider";

export default function TheProblem() {
  return (
    <>
      <section className="bg-charcoal py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/[0.03] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-aqua/[0.03] blur-3xl pointer-events-none" />

        {/* Decorative text */}
        <div className="absolute right-4 top-8 font-display font-extrabold text-[180px] text-white/[0.02] leading-none select-none pointer-events-none">
          ??
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-16 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/15 border border-teal/20 text-teal text-xs font-body font-medium tracking-wide">
                <AlertTriangle size={12} />
                {THE_PROBLEM.eyebrow}
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-4"
            >
              {THE_PROBLEM.heading}
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-gray-400 text-base leading-relaxed">
              {THE_PROBLEM.subheading}
            </motion.p>
          </motion.div>

          {/* Stat counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {THE_PROBLEM.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={staggerFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-white/[0.04] rounded-2xl border border-white/8 p-7"
              >
                <p className="font-display font-extrabold text-teal text-5xl sm:text-6xl leading-none mb-3">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </p>
                <p className="font-display font-bold text-white text-lg mb-1">{stat.label}</p>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Fact grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {THE_PROBLEM.facts.map((fact, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={staggerFadeUp}
                className="flex items-start gap-3 bg-white/[0.03] rounded-xl border border-white/[0.06] p-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-1.5" />
                <p className="font-body text-gray-400 text-sm leading-relaxed">{fact}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#1a1a2e" to="#f8f9fa" />
    </>
  );
}
