"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Shield, Sparkles } from "lucide-react";

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority, and we listen to your vision.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Consistent quality and timely delivery you can depend on.",
  },
  {
    icon: Sparkles,
    title: "Passion",
    description: "We love what we do and it shows in our exceptional craftsmanship.",
  },
];

export default function CoreValues() {
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
          Our Core <span className="text-palette-gold-400">Values</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          The principles that guide everything we do at ColorWaves
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreValues.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-palette-gold-500 to-palette-gold-600 rounded-xl mb-6">
                <Icon className="w-8 h-8 text-indigo-950" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

