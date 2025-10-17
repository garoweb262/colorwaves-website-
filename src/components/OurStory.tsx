"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-[#210021]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Our <span className="text-palette-gold-400">Story</span>
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
              Founded on January 5, 2025, ColorWaves Nigeria Limited began with a clear vision: to become Africa&apos;s most trusted brand in paints and building materials. As a fast-growing paint manufacturing and interior solutions company headquartered in Kano, Nigeria, we set out to redefine the paint industry across Africa.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From our early days of intensive research, rigorous testing, and uncompromising quality control, to our current nationwide expansion, we have remained committed to innovation, product excellence, and customer satisfaction. We specialize in producing high-quality, durable, and affordable paints that bring color, life, and identity to homes, offices, and commercial spaces across Nigeria and Africa.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our journey has been marked by a dedication to sustainability, local empowerment, and promoting Made-in-Nigeria excellence. We believe that every space deserves to be transformed with premium-quality paints and coating solutions that combine beauty, protection, and environmental responsibility.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

