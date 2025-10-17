"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurCommitment() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Our <span className="text-palette-gold-400">Commitment</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              At ColorWaves, we believe color is more than beauty — it&apos;s identity, emotion, and innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are committed to setting new standards in Nigeria&apos;s paint industry, creating value for our customers, and contributing to Africa&apos;s industrial growth through excellence and sustainability.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
