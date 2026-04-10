"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";
import { staggerContainerSlow, fadeUp, scaleIn } from "@/lib/animations";
import WaveDivider from "@/components/shared/WaveDivider";

// ── Molecule visual ───────────────────────────────────────────────────────────
// function OzoneMolecule() {
//   return (
//     <div className="relative w-full h-full flex items-center justify-center select-none">
//       {/* Glow */}
//       <div className="absolute w-72 h-72 rounded-full bg-teal/6 blur-3xl" />
//
//       {/* Orbital rings */}
//       <motion.div
//         className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-teal/12"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-aqua/15"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute w-[180px] h-[180px] rounded-full border border-teal/20"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//       />
//
//       {/* Orbit container A (outer) */}
//       <motion.div
//         className="absolute w-[280px] h-[280px]"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//       >
//         <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//             className="w-9 h-9 rounded-full bg-aqua/10 border-2 border-aqua/40 flex items-center justify-center shadow-sm"
//           >
//             <span className="font-display font-bold text-aqua text-sm">O</span>
//           </motion.div>
//         </div>
//       </motion.div>
//
//       {/* Orbit container B (outer, 120° offset) */}
//       <motion.div
//         className="absolute w-[280px] h-[280px]"
//         animate={{ rotate: [120, 480] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//       >
//         <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//           <motion.div
//             animate={{ rotate: [-120, -480] }}
//             transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//             className="w-9 h-9 rounded-full bg-teal/10 border-2 border-teal/40 flex items-center justify-center shadow-sm"
//           >
//             <span className="font-display font-bold text-teal text-sm">O</span>
//           </motion.div>
//         </div>
//       </motion.div>
//
//       {/* Orbit container C (inner) */}
//       <motion.div
//         className="absolute w-[180px] h-[180px]"
//         animate={{ rotate: [240, -120] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//       >
//         <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
//           <motion.div
//             animate={{ rotate: [-240, 120] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             className="w-8 h-8 rounded-full bg-aqua/10 border-2 border-aqua/30 flex items-center justify-center"
//           >
//             <span className="font-display font-bold text-aqua/80 text-xs">O</span>
//           </motion.div>
//         </div>
//       </motion.div>
//
//       {/* Central atom */}
//       <motion.div
//         className="relative z-10 w-20 h-20 rounded-full bg-teal/10 border-2 border-teal/35 flex flex-col items-center justify-center shadow-lg"
//         animate={{ scale: [1, 1.06, 1] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <span className="font-display font-extrabold text-teal text-2xl leading-none">O₃</span>
//         <span className="font-body text-teal/60 text-[9px] tracking-widest mt-0.5">OZONE</span>
//       </motion.div>
//
//       {/* Floating stat badges */}
//       {HERO.badges.map((badge, i) => {
//         const positions = [
//           "top-[8%] right-[6%]",
//           "bottom-[12%] right-[4%]",
//           "bottom-[18%] left-[2%]",
//           "top-[14%] left-[6%]",
//         ];
//         return (
//           <motion.div
//             key={badge.label}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: [0, i % 2 === 0 ? -8 : 8, 0],
//             }}
//             transition={{
//               opacity: { delay: 0.8 + i * 0.2, duration: 0.5 },
//               scale: { delay: 0.8 + i * 0.2, duration: 0.5 },
//               y: {
//                 delay: 1.2 + i * 0.2,
//                 duration: 3 + i * 0.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//             }}
//             className={`absolute ${positions[i]} backdrop-blur-sm bg-white/80 border border-teal/15 rounded-xl px-3 py-2 shadow-md shadow-teal/5`}
//           >
//             <p className="font-display font-extrabold text-teal text-base leading-none">
//               {badge.value}
//             </p>
//             <p className="font-body text-muted-text text-[10px] mt-0.5 whitespace-nowrap">
//               {badge.label}
//             </p>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
        {/* Background radials */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_45%,rgba(15,110,86,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(34,211,238,0.04),transparent)]" />

        {/* Large decorative O₃ background text */}
        <div className="absolute right-[2%] top-[15%] font-display font-extrabold text-[220px] lg:text-[300px] text-teal/[0.03] leading-none select-none pointer-events-none">
          O₃
        </div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] py-16">
            {/* Copy */}
            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              animate="show"
              className="space-y-6 max-w-2xl"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-light border border-teal/20 text-teal text-xs font-body font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  {HERO.eyebrow}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-extrabold text-charcoal text-4xl sm:text-5xl lg:text-[60px] leading-[1.08] tracking-tight"
              >
                Your Car Interior Is{" "}
                <span className="text-teal">Not As Clean</span>{" "}
                As You Think.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-body text-muted-text text-lg leading-relaxed"
              >
                {HERO.subheadline}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={HERO.ctaPrimary.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal text-white font-body font-semibold rounded-xl hover:bg-teal-dark transition-colors text-sm"
                >
                  {HERO.ctaPrimary.label}
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href={HERO.ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-teal/30 text-teal font-body font-semibold rounded-xl hover:bg-teal-light transition-colors text-sm"
                >
                  {HERO.ctaSecondary.label}
                </Link>
              </motion.div>

              {/* Trust bar */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 pt-3">
                {[
                  "Chemical-Free Process",
                  "Zero Residue",
                  "5–15 Minute Treatment",
                  "Safe for All Materials",
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    <span className="font-body text-xs text-muted-text">{item}</span>
                    {i < 3 && (
                      <span className="hidden sm:inline text-gray-200 ml-3">|</span>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              className="w-full flex-shrink-0"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/common_factor.png"
                  alt="Common factors causing bad air quality inside your car"
                  width={1330}
                  height={886}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <ChevronDown size={22} className="text-teal/40" />
        </motion.div>
      </section>

      <WaveDivider from="#ffffff" to="#1a1a2e" />
    </>
  );
}
