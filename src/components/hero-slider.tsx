"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Where Innovation",
    description: "Meets Color.",
    topText: "ColorWaves Nig. Ltd",
    backgroundImage: "/images/hero-0.png",
    button1: { text: "Discover More", link: "/about" },
    button2: { text: "Our Products", link: "/products" },
  },
  {
    id: 2,
    title: "Every Wall",
    description: "Tells a Story.",
    topText: "Creating Experiences",
    backgroundImage: "/images/hero-1.png",
    button1: { text: "View Portfolio", link: "/projects" },
    button2: { text: "Get Quote", link: "/contact" },
  },
  {
    id: 3,
    title: "Beauty, Durability,",
    description: "& Distinction.",
    topText: "Transform Your Space",
    backgroundImage: "/images/hero-2.png",
    button1: { text: "Our Services", link: "/services" },
    button2: { text: "Start Project", link: "/project-request" },
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Diagonal Split Layout */}
      <div className="relative h-screen flex flex-col md:flex-row">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 relative bg-white/10 backdrop-blur-md md:border-r border-white/20 flex items-center justify-center min-h-[60vh] md:min-h-0 py-12 md:py-0">
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5"></div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-lg px-6 md:px-8 lg:px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Top Text with Icon */}
                <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-palette-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-palette-gold-400 font-medium text-sm md:text-base lg:text-lg">
                    {slides[currentSlide].topText}
                  </span>
                </div>

                {/* Main Heading */}
                <div className="mb-6 md:mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                    {slides[currentSlide].title}<br />
                    {slides[currentSlide].description}
                  </h1>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
                  <Link href={slides[currentSlide].button1.link}>
                    <Button 
                      size="lg" 
                      className="bg-palette-accent-500 hover:bg-palette-accent-600 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-palette-accent-500/25 w-full sm:w-auto justify-center"
                    >
                      <span>{slides[currentSlide].button1.text}</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </Link>
                  <Link href={slides[currentSlide].button2.link}>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-white/30 bg-transparent hover:bg-transparent text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center backdrop-blur-sm"
                    >
                      <span>{slides[currentSlide].button2.text}</span>
                    </Button>
                  </Link>
                  
                </div>

                
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Diagonal Transition - Hidden on mobile */}
          <div className="hidden md:block absolute right-0 top-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100vh] border-t-[#4B369D]"></div>
      </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-0">
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
