"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  CONTACT_PUBLIC,
  CONTACT_OPERATORS,
  CONTACT_WHATSAPP,
  CONTACT_FORMSPREE,
  MALAYSIA_STATES,
} from "@/lib/constants";
import { staggerFadeUp } from "@/lib/animations";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(CONTACT_FORMSPREE, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Path A — Public */}
        <motion.div
          custom={0}
          variants={staggerFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-surface rounded-2xl border border-gray-100 p-8 flex flex-col"
        >
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5">
            <MessageCircle size={22} className="text-green-600" />
          </div>
          <h3 className="font-display font-bold text-charcoal text-xl mb-2">
            {CONTACT_PUBLIC.heading}
          </h3>
          <p className="font-body text-muted-text text-sm leading-relaxed mb-8 flex-1">
            {CONTACT_PUBLIC.body}
          </p>
          <a
            href={`https://wa.me/${CONTACT_WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white font-body font-semibold text-sm rounded-xl hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={16} />
            {CONTACT_PUBLIC.cta}
          </a>
        </motion.div>

        {/* Path B — Operators */}
        <motion.div
          custom={1}
          variants={staggerFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-surface rounded-2xl border border-gray-100 p-8"
        >
          <h3 className="font-display font-bold text-charcoal text-xl mb-2">
            {CONTACT_OPERATORS.heading}
          </h3>
          <p className="font-body text-muted-text text-sm leading-relaxed mb-6">
            {CONTACT_OPERATORS.body}
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
              <CheckCircle size={40} className="text-teal" />
              <p className="font-display font-semibold text-charcoal">Message sent!</p>
              <p className="font-body text-muted-text text-sm">{CONTACT_OPERATORS.note}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 font-body text-sm text-charcoal placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                    Company <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Workshop / company name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 font-body text-sm text-charcoal placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                    State <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="state"
                    required
                    defaultValue=""
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-white"
                  >
                    <option value="" disabled>Select state</option>
                    {MALAYSIA_STATES.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="01X-XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 font-body text-sm text-charcoal placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-xs font-medium text-charcoal mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your workshop..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 font-body text-sm text-charcoal placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none bg-white"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="font-body text-xs text-muted-text">{CONTACT_OPERATORS.note}</p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-white font-body font-semibold text-sm rounded-xl hover:bg-teal-dark transition-colors disabled:opacity-60 cursor-pointer flex-shrink-0"
                >
                  <Send size={14} />
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
