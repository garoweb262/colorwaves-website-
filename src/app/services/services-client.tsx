"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/service-card";
import Link from "next/link";

const services = [
  {
    slug: "residential-painting",
    image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?w=400&h=300&fit=crop",
    title: "Residential Painting",
    description: "Transform your home with our expert residential painting services. We bring color and life to every room.",
    features: ["Interior Painting", "Exterior Painting", "Wall Texturing", "Custom Finishes"],
  },
  {
    slug: "commercial-painting",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    title: "Commercial Painting",
    description: "Professional painting solutions for offices, retail spaces, and commercial buildings.",
    features: ["Office Painting", "Retail Spaces", "Industrial Facilities", "Property Management"],
  },
  {
    slug: "color-consulting",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=400&h=300&fit=crop",
    title: "Color Consulting",
    description: "Expert color consultation to help you choose the perfect palette for your space.",
    features: ["Color Psychology", "Trend Analysis", "Custom Palettes", "Sample Testing"],
  },
  {
    slug: "specialty-finishes",
    image: "https://images.unsplash.com/photo-1572969176403-0d6e50b9ee5a?w=400&h=300&fit=crop",
    title: "Specialty Finishes",
    description: "Unique decorative finishes that add character and sophistication to any space.",
    features: ["Venetian Plaster", "Metallic Finishes", "Faux Finishes", "Murals & Art"],
  },
  {
    slug: "interior-design",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=300&fit=crop",
    title: "Interior Design",
    description: "Complete interior design services that blend color, texture, and style seamlessly.",
    features: ["Space Planning", "Color Schemes", "Material Selection", "Project Management"],
  },
  {
    slug: "renovation-projects",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    title: "Renovation Projects",
    description: "Full-service renovation solutions that breathe new life into your property.",
    features: ["Complete Renovations", "Restoration Work", "Modern Updates", "Historic Preservation"],
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Understanding your vision and requirements" },
  { step: "02", title: "Planning", description: "Creating detailed project roadmap and estimates" },
  { step: "03", title: "Preparation", description: "Surface prep and protection of your space" },
  { step: "04", title: "Execution", description: "Professional application with attention to detail" },
  { step: "05", title: "Inspection", description: "Quality check and final walk-through" },
  { step: "06", title: "Completion", description: "Cleanup and handover of your transformed space" },
];

export default function ServicesClient() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Color Solutions for Every Space"
        backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What We <span className="text-palette-gold-400">Offer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional painting and color solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                index={index}
                showFeatures={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-palette-gold-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              A proven methodology that ensures exceptional results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-palette-gold-400 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-indigo-950 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-indigo-900 mb-8">
              Let&apos;s discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/project-request"
                className="inline-flex items-center gap-2 bg-indigo-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-900 transition-colors"
              >
                Request a Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/20 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
