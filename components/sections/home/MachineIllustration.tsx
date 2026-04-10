"use client";

import Image from "next/image";
import WaveDivider from "@/components/shared/WaveDivider";

const STEPS = [
  { step: "01", label: "Ozone Generated",     desc: "Machine converts O₂ → O₃ at high concentration" },
  { step: "02", label: "Flows Into Cabin",    desc: "The gas disperses into fabrics, seats, carpets, vents and all surfaces" },
  { step: "03", label: "Bacteria Eliminated", desc: "Eliminate bad odor factors and ensure that the air quality in the vehicle is sanitized and clean" },
  { step: "04", label: "Back to Oxygen",      desc: "Ozone naturally disperses back into the atmosphere and decomposes into oxygen (O₂) over time." },
];

export default function MachineIllustration() {
  return (
    <section className="bg-[#0d1117]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-24 md:py-36">

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">

          {/* Left — illustration */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_0_100px_-20px_rgba(15,110,86,0.5)] ring-1 ring-white/5">
            <Image
              src="/ozone-illustration.png"
              alt="Ozone treatment illustration showing machine and car cabin sanitization"
              width={1200}
              height={1200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Right — heading + steps */}
          <div className="flex flex-col gap-10">

            {/* Title block */}
            <div>
              <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-4">
                See It In Action
              </p>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-5">
                From Machine to Clean Cabin
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                Ozone is generated, flows through the tube into your car, circulates through every corner, and eliminates bacteria on contact — reverting safely to O₂.
              </p>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-7">
              {STEPS.map(({ step, label, desc }) => (
                <div key={step} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full border border-teal/40 bg-teal/10 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-teal text-xs">{step}</span>
                  </div>
                  <div className="pt-1">
                    <p className="font-display font-semibold text-white text-base mb-1.5">{label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      <WaveDivider from="#0d1117" to="#ffffff" />
    </section>
  );
}
