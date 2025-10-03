"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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
            Transforming spaces with innovative color solutions and exceptional craftsmanship. 
            We bring your vision to life through precision, creativity, and unwavering commitment to excellence.
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
              Crafting Excellence in Every Color
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At ColorWaves, we believe that color has the power to transform not just spaces, 
              but experiences. Our team of expert colorists and designers work tirelessly to 
              bring your vision to life with precision and passion.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              From residential projects to commercial spaces, we deliver exceptional results 
              that exceed expectations. Our commitment to quality, innovation, and customer 
              satisfaction has made us a trusted partner for clients worldwide.
            </p>
            
            {/* Curved Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-palette-gold-500 hover:bg-palette-gold-600 text-indigo-950 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-palette-gold-500/25"
            >
              <span className="relative z-10">Learn More About Us</span>
              {/* Curved decorative line with spacing */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-palette-gold-400 rounded-full opacity-60"></div>
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

       
      </div>
    </section>
  );
}
