import type { Metadata } from "next";
import React from "react";
import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
import Testimony from "@/components/Testimony";
import OurStory from "@/components/OurStory";
import CoreValues from "@/components/CoreValues";
import OurCommitment from "@/components/OurCommitment";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ColorWaves Nigeria Limited - Founded January 5, 2025, we are a fast-growing paint manufacturing and interior solutions company headquartered in Kano, Nigeria. Discover our mission, vision, and commitment to producing high-quality, durable, and affordable paints.",
  keywords: [
    "about ColorWaves",
    "paint manufacturing Nigeria",
    "ColorWaves Nigeria Limited",
    "paint company Kano",
    "interior solutions",
    "paint manufacturing Africa",
    "Made-in-Nigeria paints",
    "quality paints Nigeria"
  ],
  openGraph: {
    title: "About Us | ColorWaves Nigeria Limited",
    description: "Learn about ColorWaves Nigeria Limited - Founded January 5, 2025, we are a fast-growing paint manufacturing and interior solutions company headquartered in Kano, Nigeria.",
    url: "https://colorwaves.com/about",
    siteName: "ColorWaves",
    images: [
      {
        url: "/images/about.jpg",
        width: 1200,
        height: 630,
        alt: "ColorWaves Nigeria Limited - Paint Manufacturing Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | ColorWaves Nigeria Limited",
    description: "Learn about ColorWaves Nigeria Limited - Founded January 5, 2025, we are a fast-growing paint manufacturing and interior solutions company.",
    images: ["/images/about.jpg"],
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
          Founded on January 5, 2025, ColorWaves Nigeria Limited is a fast-growing paint manufacturing and interior solutions company headquartered in Kano, Nigeria. We specialize in producing high-quality, durable, and affordable paints that bring color, life, and identity to homes, offices, and commercial spaces across Nigeria and Africa.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Since our inception, ColorWaves has focused on innovation, product excellence, and customer satisfaction. From our early days of research, testing, and quality control, to our current nationwide expansion, we&apos;re redefining what it means to paint and build in Africa.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-white/10">
          <Image
            src="/images/teams/ceo.jpeg"
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

function VisionMission() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Vision */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-palette-gold-400 mb-4">Our Vision</h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            To become Africa&apos;s most trusted brand in paints and building materials — known for innovation, excellence, and lasting color that inspires creativity in every space.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-palette-gold-400 mb-4">Our Mission</h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            To deliver premium-quality paints and coating solutions that combine beauty, protection, and sustainability — while empowering communities, supporting local industries, and promoting Made-in-Nigeria excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

function OurJourney() {
  const milestones = [
    {
      title: "5,000+ Units Sold",
      description: "Sold 5,000+ units of paint through referrals and organic demand within six months — before launching official marketing campaigns."
    },
    {
      title: "200-300 Clients",
      description: "Built a customer base of 200–300 clients across Northern Nigeria."
    },
    {
      title: "Structured Management",
      description: "Established a structured management system across Production, Marketing, and Administration."
    },
    {
      title: "National Launch",
      description: "Preparing for our official national launch on January 5, 2026."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Journey <span className="text-palette-gold-400">So Far</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          From humble beginnings to preparing for national expansion, here are the key milestones that have shaped ColorWaves&apos; growth story.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-palette-gold-400 mb-3">
              {milestone.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
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
        backgroundImage="/images/about.jpg"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />
      <div className="bg-[#210021]">
        <AboutIntro />
        <VisionMission />
        <OurJourney />
        <OurStory />
        <WhyChoose />
      </div>
      <div className=" bg-[#210021]">
        <CoreValues />
        <OurCommitment />
        <Testimony />
        <Team />
        <FAQ />
      </div>
    </div>
  );
} 