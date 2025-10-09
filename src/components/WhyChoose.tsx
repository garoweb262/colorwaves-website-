import React from "react";
import { Palette, Award, Users, Sparkles } from "lucide-react";

const features = [
  {
    title: "Premium Quality",
    description: "Premium quality paints and materials for long-lasting results",
    icon: Award,
  },
  {
    title: "Expert Consultation",
    description: "Expert color consultation service to bring your vision to life",
    icon: Palette,
  },
  {
    title: "Licensed Professionals",
    description: "Licensed and insured professionals you can trust",
    icon: Users,
  },
  {
    title: "Comprehensive Warranty",
    description: "Comprehensive warranty coverage on all our projects",
    icon: Sparkles,
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Eco-friendly painting solutions that are safe for your family",
    icon: Sparkles,
  },
  {
    title: "Free Estimates",
    description: "Free detailed project estimates with no hidden costs",
    icon: Award,
  },
];

export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-indigo-950">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Choose <span className="text-palette-gold-400">ColorWaves</span>
        </h2>
        <p className="text-lg text-gray-300">
          Excellence in every aspect of color innovation and design
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-palette-accent-500 to-palette-accent-600 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

