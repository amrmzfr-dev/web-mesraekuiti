import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import WaveDivider from "@/components/shared/WaveDivider";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { SITE_NAME, COMPANY_NAME } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_NAME} — visit our office or call us directly.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          heading="Visit Us"
          subheading={`Find ${COMPANY_NAME} at our office in Shah Alam. We are happy to answer your questions in person or over the phone.`}
          theme="teal"
        />

        <WaveDivider from="#0f6e56" to="#ffffff" />
        <SectionWrapper className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-80 sm:h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=2+Jalan+Gergaji+15%2F14%2C+Seksyen+15%2C+40200+Shah+Alam%2C+Selangor&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mesra Ekuiti Sdn. Bhd. location"
              />
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-4">
                  Our Office
                </p>
                <h2 className="font-display font-bold text-charcoal text-2xl sm:text-3xl leading-snug mb-6">
                  {COMPANY_NAME}
                </h2>
              </div>

              <div className="space-y-5">
                <div className="flex flex-col gap-1">
                  <span className="font-body text-xs font-semibold text-teal uppercase tracking-widest">
                    Address
                  </span>
                  <span className="font-body text-sm text-charcoal leading-relaxed">
                    Lot 2, Jalan Gergaji 15/14, Seksyen 15,<br />
                    40200 Shah Alam, Selangor Darul Ehsan
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-body text-xs font-semibold text-teal uppercase tracking-widest">
                    Phone
                  </span>
                  <a
                    href="tel:+60355247844"
                    className="font-body text-sm text-charcoal hover:text-teal transition-colors"
                  >
                    03 5524 7844
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-body text-xs font-semibold text-teal uppercase tracking-widest">
                    Business Hours
                  </span>
                  <div className="font-body text-sm text-charcoal space-y-0.5">
                    <p>Monday – Friday: 8:30 am – 5:30 pm</p>
                    <p className="text-muted-text">Saturday, Sunday &amp; Public Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <WaveDivider from="#ffffff" to="#1a1a2e" />
      </main>
      <Footer />
    </>
  );
}
