"use client";

import { HeroSlider } from "@/components/hero-slider";
import { PartnersSection } from "@/components/partners-section";
import { AboutSection } from "@/components/about-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { FeaturedServices } from "@/components/sections/featured-services";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { CTASection } from "@/components/sections/cta-section";


export default function Home() {
  return (
    <div className="bg-[#4B369D]">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Partners Section */}
      <PartnersSection />

      {/* About Section */}
      <AboutSection />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Featured Services Section */}
      <FeaturedServices />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
