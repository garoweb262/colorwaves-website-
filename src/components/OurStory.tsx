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
              Founded recently in Nigeria, ColorWaves began with a simple mission: to bring vibrant, 
              professional painting services to homes and businesses across the region. In just about 
              a year, our small team of passionate painters has built a growing reputation for quality 
              and reliability.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We combine traditional craftsmanship with modern techniques and premium materials to 
              deliver results that exceed expectations. Every project is a collaboration between our 
              expert team and our clients&apos; vision, bringing fresh energy to Nigeria&apos;s painting industry.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

