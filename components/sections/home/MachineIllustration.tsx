"use client";

import Image from "next/image";
import WaveDivider from "@/components/shared/WaveDivider";

export default function MachineIllustration() {
  return (
    <section className="bg-[#0d1117]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-3">
            See It In Action
          </p>
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-4">
            From Machine to Clean Cabin
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Ozone is generated, flows through the tube into your car, circulates through every corner, and eliminates bacteria on contact — reverting safely to O₂.
          </p>
        </div>

        {/* Illustration */}
        <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden ring-1 ring-white/5 shadow-[0_0_60px_-10px_rgba(15,110,86,0.3)]">
          <Image
            src="/treatment.illustration.jpg"
            alt="Ozone treatment illustration showing machine and car cabin sanitization"
            width={960}
            height={720}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Step annotations */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 max-w-3xl mx-auto">
          {[
            { step: "01", label: "Ozone Generated",     desc: "Machine converts O₂ → O₃ at high concentration" },
            { step: "02", label: "Flows Into Cabin",    desc: "The gas disperses into fabrics, seats, carpets, vents and all surfaces" },
            { step: "03", label: "Bacteria Eliminated", desc: "Eliminate bad odor factors and ensure that the air quality in the vehicle is sanitized and clean" },
            { step: "04", label: "Back to Oxygen",      desc: "Ozone naturally disperses back into the atmosphere and decomposes into oxygen (O₂) over time." },
          ].map(({ step, label, desc }) => (
            <div key={step} className="flex flex-col items-center text-center gap-2">
              <span className="font-display font-bold text-teal text-xs uppercase tracking-widest">{step}</span>
              <p className="font-display font-semibold text-white text-sm">{label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider from="#0d1117" to="#f8f9fa" />
    </section>
  );
}
