"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import WaveDivider from "@/components/shared/WaveDivider";
import { FAQ_HEADING, FAQ_SUBHEADING } from "@/lib/constants";
import type { FAQItem } from "@/lib/types";
import { fadeUp } from "@/lib/animations";

interface FAQProps {
  items: FAQItem[];
  fromColor?: string;
  toColor?: string;
  bg?: string;
}

export default function FAQ({
  items,
  fromColor = "#ffffff",
  toColor = "#1a1a2e",
  bg = "bg-white",
}: FAQProps) {
  return (
    <>
      <SectionWrapper id="faq" className={bg}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-body font-medium tracking-wide mb-3">
            FAQ
          </span>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl mb-4">
            {FAQ_HEADING}
          </h2>
          <p className="font-body text-muted-text text-base leading-relaxed">
            {FAQ_SUBHEADING}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <Accordion multiple={false} className="space-y-2">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="border border-gray-100 rounded-xl px-5 bg-surface data-open:border-teal/20 data-open:bg-white transition-colors"
              >
                <AccordionTrigger className="font-display font-semibold text-charcoal text-sm py-5 hover:no-underline text-left data-open:text-teal w-full">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-text text-sm leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </SectionWrapper>
      <WaveDivider from={fromColor} to={toColor} />
    </>
  );
}
