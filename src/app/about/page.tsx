import type { Metadata } from "next";
import React from "react";
import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
import Testimony from "@/components/Testimony";
import OurStory from "@/components/OurStory";
import CoreValues from "@/components/CoreValues";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ColorWaves - Nigeria's leading color solutions and innovative design company. Discover our mission, vision, and commitment to transforming spaces with exceptional craftsmanship and creativity.",
  keywords: [
    "about ColorWaves",
    "color solutions Nigeria",
    "painting company Kano",
    "innovative design",
    "space transformation",
    "creative color experts",
    "professional painting services"
  ],
  openGraph: {
    title: "About Us | ColorWaves",
    description: "Learn about ColorWaves - Nigeria's leading color solutions and innovative design company. Transforming spaces with exceptional craftsmanship and creativity.",
    url: "https://colorwaves.com/about",
    siteName: "ColorWaves",
    images: [
      {
        url: "/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "ColorWaves - About Our Company and Mission",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | ColorWaves",
    description: "Learn about ColorWaves - Nigeria's leading color solutions and innovative design company.",
    images: ["/images/hero-1.png"],
  },
  alternates: {
    canonical: "/about",
  },
};


function AboutIntro() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left: Text */}
      <div>
        <span className="inline-block bg-palette-accent-500/10 border border-palette-accent-500 text-palette-white font-semibold px-4 py-1 rounded-full text-sm mb-4">About ColorWaves</span>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-palette-gold-400 to-palette-gold-500 bg-clip-text text-transparent mb-6 leading-tight">Transforming Visions into Reality</h1>
        <p className="text-lg text-gray-300 mb-6">
          ColorWaves is Nigeria&apos;s premier color solutions and innovative design company. With a passion for excellence and a vision to transform spaces, we bring together expertise in color technology, creative design, and exceptional craftsmanship.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          We specialize in delivering world-class painting services, color consulting, interior design, and architectural coatings. From residential projects to commercial spaces, our commitment to precision, creativity, and customer satisfaction makes us the trusted partner for clients seeking to bring their vision to life, one ColorWave at a time.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-white/10">
          <Image
            src="/images/hero-1.png"
            alt="ColorWaves Team at Work"
            width={500}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#210021] min-h-screen">
      <PageHeader
        title="About Us"
        subtitle="Crafting Excellence in Color, Design, and Innovation."
        backgroundImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2000"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />
      <div className="bg-[#210021]">
        <AboutIntro />
        <OurStory />
        <WhyChoose />
      </div>
      <div className=" bg-[#210021]">
        <CoreValues />
        <Testimony />
        <Team />
        <FAQ />
      </div>
    </div>
  );
} 