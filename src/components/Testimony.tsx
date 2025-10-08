"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Mohammed",
    role: "Homeowner, Kano",
    content: "ColorWaves transformed our home beyond our expectations. Their attention to detail and color expertise brought our vision to life. The team was professional, punctual, and the results are simply stunning!",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "CEO, Tech Hub Nigeria",
    content: "We hired ColorWaves for our office renovation and couldn't be happier. They understood our brand identity and created a workspace that inspires creativity. Highly recommended for commercial projects!",
    rating: 5,
  },
  {
    name: "Sarah Ibrahim",
    role: "Interior Designer, Lagos",
    content: "As a designer, I'm particular about quality. ColorWaves exceeded all my expectations. Their innovative approach to color consulting and flawless execution make them my go-to partner for all painting projects.",
    rating: 5,
  },
];

export default function Testimony() {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
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
              <div className="w-12 h-12 bg-gradient-to-br from-palette-gold-500 to-palette-gold-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-indigo-950" />
              </div>
            </div>

            {/* Stars */}
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

            {/* Content */}
            <p className="text-gray-300 mb-6 leading-relaxed italic">
              {testimonial.content}
            </p>

            {/* Author */}
            <div>
              <h4 className="text-white font-bold text-lg">
                {testimonial.name}
              </h4>
              <p className="text-palette-gold-400 text-sm">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
