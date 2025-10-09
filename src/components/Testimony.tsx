"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fetchJson, isEmptyArray } from "@/lib/api";

interface TestimonyApiItem {
  clientName: string;
  clientPosition?: string;
  clientCompany?: string;
  content: string;
  rating?: number;
  clientImage?: string;
}

interface TestimonyItem {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  image?: string;
}

export default function Testimony() {
  const [data, setData] = useState<TestimonyItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, status } = await fetchJson<TestimonyApiItem[]>("/testimonies");
      if (!mounted) return;
      if (status === 404 || isEmptyArray(data)) setData([]);
      else {
        const items = (data ?? []) as TestimonyApiItem[];
        const mapped: TestimonyItem[] = items.map((t) => ({
          name: t.clientName,
          role: [t.clientPosition, t.clientCompany].filter(Boolean).join(" · "),
          content: t.content,
          rating: t.rating,
          image: t.clientImage,
        }));
        setData(mapped);
      }
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const showSection = !loading && Array.isArray(data) && data.length > 0;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          What Our <span className="text-palette-gold-400">Clients Say</span>
        </h2>
        <p className="text-lg text-gray-300">
          Don&apos;t just take our word for it - hear from our satisfied clients
        </p>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-pulse">
              <div className="w-12 h-12 bg-white/10 rounded-full mb-6" />
              <div className="h-4 bg-white/10 rounded w-10/12 mb-2" />
              <div className="h-4 bg-white/10 rounded w-9/12 mb-2" />
              <div className="h-4 bg-white/10 rounded w-8/12" />
            </div>
          ))}
        </div>
      )}

      {showSection && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data!.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-palette-accent-500 to-palette-accent-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Stars */}
            {testimonial.rating && (
            <div className="flex gap-1 mb-4 mt-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-palette-gold-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            )}

            {/* Content */}
            <p className="text-gray-300 mb-6 leading-relaxed italic">
              {testimonial.content}
            </p>

            {/* Author */}
            <div>
              <h4 className="text-white font-bold text-lg">
                {testimonial.name}
              </h4>
              {testimonial.role && (
                <p className="text-palette-accent-400 text-sm">{testimonial.role}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      )}
    </section>
  );
}
