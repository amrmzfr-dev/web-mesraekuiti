"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainerSlow } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

interface CtaBannerProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  fromColor?: string;
  toColor?: string;
}

export default function CtaBanner({
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  fromColor = "#ffffff",
  toColor = "#ffffff",
}: CtaBannerProps) {
  return (
    <>
      <WaveDivider from={fromColor} to="#0f6e56" />
      <section className="bg-teal py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-white" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-white" />
        </div>

        <div className="relative max-w-[1200px] mx-auto text-center">
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {eyebrow && (
              <motion.p
                variants={fadeUp}
                className="font-body text-white/60 text-xs uppercase tracking-widest font-semibold mb-3"
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-4 max-w-3xl mx-auto leading-[1.1]"
            >
              {heading}
            </motion.h2>
            {body && (
              <motion.p
                variants={fadeUp}
                className="font-body text-white/75 text-base leading-relaxed max-w-xl mx-auto mb-8"
              >
                {body}
              </motion.p>
            )}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-teal font-body font-bold rounded-xl hover:bg-teal-light transition-colors text-sm"
              >
                {primaryCta.label}
                <ArrowRight size={15} />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-body font-semibold rounded-xl hover:border-white/60 transition-colors text-sm"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <WaveDivider from="#0f6e56" to={toColor} />
    </>
  );
}
