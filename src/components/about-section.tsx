"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-20 px-4 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-palette-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-palette-primary-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 relative">
            About <span className="text-palette-gold-400">ColorWaves</span>
            {/* Gold underline - half width */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-palette-gold-500 to-transparent rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded on January 5, 2025, ColorWaves Nigeria Limited is a fast-growing paint manufacturing and interior solutions company headquartered in Kano, Nigeria. We specialize in producing high-quality, durable, and affordable paints that bring color, life, and identity to spaces across Nigeria and Africa.
          </p>
        </motion.div>

        {/* Main Content - Image Right, Text Left */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Redefining Paint Manufacturing in Africa
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Since our inception, ColorWaves has focused on innovation, product excellence, and customer satisfaction. From our early days of research, testing, and quality control, to our current nationwide expansion, we&apos;re redefining what it means to paint and build in Africa.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We combine traditional craftsmanship with modern techniques and premium materials to deliver premium-quality paints and coating solutions that combine beauty, protection, and sustainability — while empowering communities, supporting local industries, and promoting Made-in-Nigeria excellence.
            </p>
            
            {/* Curved Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-palette-accent-500 hover:bg-palette-accent-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-palette-accent-500/25"
            >
              <Link href="/about">
              <span className="relative z-10">Learn More</span>
             
              </Link>
            </motion.button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/hero-1.png"
                alt="ColorWaves Team at Work"
                className="w-full h-96 object-cover"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/10 transition-all duration-300 h-full">
            
              
              <h3 className="text-2xl sm:text-3xl font-bold text-palette-gold-400 mb-3 sm:mb-4">
                Mission
              </h3>
             <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                To deliver premium-quality paints and coating solutions that combine beauty, protection, and sustainability — while empowering communities, supporting local industries, and promoting Made-in-Nigeria excellence.
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-palette-gold-500/5 rounded-full blur-2xl group-hover:bg-palette-gold-500/10 transition-all duration-300"></div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/10 transition-all duration-300 h-full">
              
              
              <h3 className="text-2xl sm:text-3xl font-bold text-palette-gold-400 mb-3 sm:mb-4">
                Vision
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                To become Africa&apos;s most trusted brand in paints and building materials — known for innovation, excellence, and lasting color that inspires creativity in every space.
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-palette-primary-500/5 rounded-full blur-2xl group-hover:bg-palette-primary-500/10 transition-all duration-300"></div>
            </div>
          </motion.div>
        </div>
       
      </div>
    </section>
  );
}
