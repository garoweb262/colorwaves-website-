"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { fetchJson, isEmptyArray } from "@/lib/api";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [data, setData] = useState<FaqItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, status } = await fetchJson<FaqItem[]>("/faqs");
      if (!mounted) return;
      if (status === 404 || isEmptyArray(data)) setData([]);
      else setData(data || []);
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const showSection = !loading && Array.isArray(data) && data.length > 0;

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
      {loading && (
        <div className="space-y-4">
          {[0,1,2,3].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden animate-pulse">
              <div className="w-full px-6 py-4">
                <div className="h-5 bg-white/10 rounded w-8/12 mb-2" />
                <div className="h-4 bg-white/10 rounded w-10/12" />
              </div>
            </div>
          ))}
        </div>
      )}
      {showSection && (
      <div className="space-y-4">
        {data!.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-white/10 hover:border-palette-accent-500/30 transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
            >
              <span className="font-semibold text-palette-gold-400 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-palette-accent-500 transition-transform flex-shrink-0 ${
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
      )}
    </section>
  );
}

