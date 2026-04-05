"use client";

import { motion } from "framer-motion";
import { staggerContainerSlow, fadeUp } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  theme?: "dark" | "teal";
  children?: React.ReactNode;
}

const THEMES = {
  dark: {
    bg: "#1a1a2e",
    wave: "#ffffff",
    eyebrow: "text-teal",
    eyebrowBg: "bg-teal/15 border-teal/20",
    heading: "text-white",
    sub: "text-gray-400",
  },
  teal: {
    bg: "#0f6e56",
    wave: "#ffffff",
    eyebrow: "text-white",
    eyebrowBg: "bg-white/15 border-white/20",
    heading: "text-white",
    sub: "text-white/70",
  },
};

export default function PageHero({
  eyebrow,
  heading,
  subheading,
  theme = "dark",
  children,
}: PageHeroProps) {
  const t = THEMES[theme];

  return (
    <>
      <section
        className="pt-32 pb-6 px-4 sm:px-6 lg:px-8"
        style={{ background: t.bg }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-body font-medium tracking-wide ${t.eyebrowBg} ${t.eyebrow}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight mb-5 ${t.heading}`}
            >
              {heading}
            </motion.h1>

            {subheading && (
              <motion.p
                variants={fadeUp}
                className={`font-body text-lg leading-relaxed ${t.sub}`}
              >
                {subheading}
              </motion.p>
            )}

            {children && (
              <motion.div variants={fadeUp} className="mt-7">
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      <WaveDivider from={t.bg} to={t.wave} />
    </>
  );
}
