import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import WaveDivider from "@/components/shared/WaveDivider";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { SITE_NAME, COMPANY_NAME } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY_NAME}, the company behind ${SITE_NAME} — Malaysia's professional ozone car sanitization service.`,
};

const VALUES = [
  {
    title: "Quality Excellence",
    description:
      "We are committed to delivering the highest standard in every product and service.",
  },
  {
    title: "Customer First",
    description:
      "Our customers are at the heart of everything we do. We prioritize satisfaction, trust, and long-term relationships.",
  },
  {
    title: "Innovation & Technology",
    description:
      "We embrace modern technology and advanced solutions (such as ozone treatment, and smart detailing methods) to deliver superior results.",
  },
  {
    title: "Sustainability Commitment",
    description:
      "We aim to reduce environmental impact through responsible practices.",
  },
];

const MILESTONES = [
  {
    year: "1998",
    label: "Company Founded",
    desc: "Established in Shah Alam, Mesra Ekuiti Sdn. Bhd. began its journey in the automotive parts trading industry.",
  },
  {
    year: "2016",
    label: "SIRIM Certified",
    desc: "Achieved key milestones by securing SIRIM and other relevant certifications.",
  },
  {
    year: "2016",
    label: "Pilot Implementation",
    desc: "Successfully carried out a pilot implementation with one of Malaysia's largest local automotive dealer networks.",
  },
  {
    year: "2017",
    label: "First Major Expansion",
    desc: "Marked first major expansion with presence in over 20 service outlets.",
  },
  {
    year: "2023",
    label: "Nationwide Footprint",
    desc: "Expanded footprint nationwide through selected major automotive brands, surpassing 50 service outlets across Malaysia.",
  },
  {
    year: "2024",
    label: "130+ Outlets",
    desc: "Further accelerated growth, reaching more than 130 outlets nationwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Story"
          heading="Built on a Belief That Clean Air Matters"
          subheading={`${COMPANY_NAME} was founded to bring honest, science-driven hygiene solutions to Malaysian car owners — starting with the air inside your vehicle.`}
          theme="dark"
        />

        {/* Company profile */}
        <WaveDivider from="#1a1a2e" to="#ffffff" />
        <SectionWrapper className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Staggered photo layout */}
            <div className="relative h-[480px]">
              {/* Signboard — top-left, larger */}
              <div className="absolute top-0 left-0 w-[80%] h-[72%] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/company.image.1.jpg"
                  alt="Mesra Ekuiti Sdn. Bhd. company signboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
              {/* Warehouse — bottom-right, overlaps */}
              <div className="absolute bottom-0 right-0 w-[62%] h-[62%] rounded-2xl overflow-hidden shadow-2xl ring-[3px] ring-white">
                <Image
                  src="/company.image.2.jpg"
                  alt="Mesra Ekuiti Sdn. Bhd. warehouse facility"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest">
                Company Profile
              </p>
              <h2 className="font-display font-bold text-charcoal text-2xl sm:text-3xl leading-snug">
                {COMPANY_NAME}
              </h2>
              <div className="space-y-4 text-muted-text font-body text-sm leading-relaxed">
                <p>
                  Mesra Ekuiti Sdn. Bhd. was established in 1998 and is located in Shah Alam, Malaysia. The company was officially incorporated on 20 October 1998 with the registration number 0470525D / 199801014396.
                </p>
                <p>
                  The core business activities of Mesra Ekuiti Sdn. Bhd is in automotive field, focusing on autoparts trading. Over the years, the company has built a strong presence in the automotive industry and is recognized as a first-tier vendor for Perodua, reflecting its credibility, reliability, and commitment to quality standards.
                </p>
                <p>
                  In 2016, Mesra Ekuiti expanded its business into ozone treatment solutions, marking a strategic move into automotive sanitization services. Since then, the company has achieved notable success by supplying ozone treatment solutions to Perodua branches and authorized Perodua dealers nationwide.
                </p>
                <p>
                  This milestone underscores Mesra Ekuiti's strong industry trust, proven product effectiveness, and continuous commitment to delivering high-quality automotive care solutions.
                </p>
              </div>

              {/* Contact & Address */}
              <div className="pt-2 space-y-2 text-sm font-body text-muted-text">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-charcoal min-w-[70px]">Contact</span>
                  <span>03 5524 7844</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-charcoal min-w-[70px]">Address</span>
                  <span>Lot 2, Jalan Gergaji 15/14, Seksyen 15, 40200 Shah Alam, Selangor Darul Ehsan</span>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Core Values */}
        <WaveDivider from="#ffffff" to="#f8f9fa" />
        <SectionWrapper className="bg-surface">
          <div className="text-center mb-12">
            <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="font-display font-bold text-charcoal text-2xl sm:text-3xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map(({ title, description }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-7 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-teal-light flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                </div>
                <h3 className="font-display font-semibold text-charcoal text-base">{title}</h3>
                <p className="font-body text-sm text-muted-text leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Timeline */}
        <WaveDivider from="#f8f9fa" to="#1a1a2e" />
        <SectionWrapper className="bg-charcoal">
          <div className="text-center mb-12">
            <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-3">
              Our Journey
            </p>
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl">
              Milestones &amp; Growth
            </h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {MILESTONES.map(({ year, label, desc }, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center z-10">
                    <span className="font-display font-bold text-teal text-xs">{year}</span>
                  </div>
                  <div className="pt-3">
                    <p className="font-display font-semibold text-white text-sm mb-1">{label}</p>
                    <p className="font-body text-sm text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <WaveDivider from="#1a1a2e" to="#ffffff" />
      </main>
      <Footer />
    </>
  );
}
