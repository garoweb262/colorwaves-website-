"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Transforming",
    subtitle: "Your Visions",
    description: "Into Reality.",
    topText: "One ColorWave® at a time",
    backgroundImage: "/images/hero-0.png",
    button1: "Discover More",
    button2: "Get A Quote",
  },
  {
    id: 2,
    title: "Redefining",
    subtitle: "Color,",
    description: "Transforming Spaces.",
    topText: "ColorWaves Excellence",
    backgroundImage: "/images/hero-1.png",
    button1: "Our Mission",
    button2: "Contact Us",
  },
  {
    id: 3,
    title: "Bringing",
    subtitle: "Spaces",
    description: "To Life.",
    topText: "Creativity Meets Precision",
    backgroundImage: "/images/hero-2.png",
    button1: "View Portfolio",
    button2: "Start Project",
  },
  {
    id: 4,
    title: "Innovation",
    subtitle: "Through",
    description: "Color.",
    topText: "Bold & Vibrant Results",
    backgroundImage: "/images/hero-3.png",
    button1: "Our Services",
    button2: "Get Quote",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Brushy Header Effect */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white opacity-20" 
           style={{
             clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
             background: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)"
           }}>
      </div>

      {/* Full Width Background Image */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
              }}
            >
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-20 right-20 w-6 h-6 bg-palette-gold-500 rounded-full animate-bounce"></div>
              <div className="absolute bottom-40 left-16 w-4 h-4 bg-palette-accent-500 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/2 right-32 w-3 h-3 bg-palette-primary-500 rounded-full animate-bounce delay-1000"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-8 lg:px-16 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Top Text with Icon */}
                  <div className="flex justify-center items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-palette-gold-500 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-palette-gold-400 font-medium text-lg">
                      {slides[currentSlide].topText}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-2">
                    <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                      {slides[currentSlide].title} {slides[currentSlide].subtitle}
                    </h1>
                    <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                      {slides[currentSlide].description}
                    </h2>
                  </div>

                  {/* Single Action Button */}
                  <div className="pt-8 flex justify-center">
                    <Button 
                      size="lg" 
                      className="bg-palette-secondary-500 hover:bg-palette-gold-500 text-white px-8 py-4 text-lg font-semibold rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-palette-gold-500/25"
                    >
                      <span>{slides[currentSlide].button1}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
          </div>
        </div>
      </div>

      

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-palette-gold-500 scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div> */}

     
    </section>
  );
}
