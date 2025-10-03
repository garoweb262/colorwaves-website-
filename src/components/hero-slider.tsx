"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Transforming Your Visions",
  
    description: "Into Reality.",
    topText: "One ColorWave® at a time",
    backgroundImage: "/images/hero-0.png",
    button1: "Discover More",
    button2: "Get A Quote",
  },
  {
    id: 2,
    title: "Redefining Color,",
    description: "Transforming Spaces.",
    topText: "ColorWaves Excellence",
    backgroundImage: "/images/hero-1.png",
    button1: "Our Mission",
    button2: "Contact Us",
  },
  {
    id: 3,
    title: "Bringing Spaces",

    description: "To Life.",
    topText: "Creativity Meets Precision",
    backgroundImage: "/images/hero-2.png",
    button1: "View Portfolio",
    button2: "Start Project",
  },
  {
    id: 4,
    title: "Innovation Through",
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
      {/* Diagonal Split Layout */}
      <div className="relative h-screen flex">
        {/* Left Side - Text Content */}
        <div className="w-1/2 relative bg-white/10 backdrop-blur-md border-r border-white/20 flex items-center justify-center">
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5"></div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-lg px-4 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Top Text with Icon */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-palette-gold-500 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-palette-gold-300 font-medium text-lg">
                    {slides[currentSlide].topText}
                  </span>
                </div>

                {/* Main Heading */}
                <div className="mb-8">
                  <h1 className="text-5xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                    {slides[currentSlide].title}<br />
                    {slides[currentSlide].description}
                  </h1>
                </div>

                {/* Action Button */}
                <div className="mb-8">
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

          {/* Diagonal Transition */}
          <div className="absolute right-0 top-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100vh] border-t-palette-primary-500"></div>
      </div>

        {/* Right Side - Image */}
        <div className="w-1/2 relative">
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
                {/* Dark Overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
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
