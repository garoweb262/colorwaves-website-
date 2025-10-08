"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does ColorWaves offer?",
    answer:
      "We provide comprehensive color solutions including professional painting, color consulting, interior design, architectural coatings, and space transformation services for both residential and commercial projects.",
  },
  {
    question: "Where is ColorWaves located?",
    answer:
      "We are headquartered at 54 Ahmadu Bello Way, Kano, Nigeria. We serve clients across Nigeria and beyond.",
  },
  {
    question: "What makes ColorWaves different from other painting companies?",
    answer:
      "ColorWaves combines artistic creativity with technical expertise. We don't just paint - we transform spaces using innovative color technology, expert craftsmanship, and personalized design solutions tailored to each client's vision.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. Small residential projects may take 3-5 days, while larger commercial projects can take several weeks. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you offer color consultation services?",
    answer:
      "Yes! Our expert colorists provide professional color consultation to help you choose the perfect palette for your space, considering lighting, mood, and design aesthetics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 bg-indigo-950">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-palette-gold-400 to-palette-gold-500 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-300">
          Get answers to common questions about ColorWaves
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-white/10 hover:border-palette-gold-500/30 transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
            >
              <span className="font-semibold text-palette-gold-400 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-palette-gold-500 transition-transform flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

