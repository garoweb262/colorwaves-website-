"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/service-card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchJson, isEmptyArray } from "@/lib/api";

interface ServiceApiItem {
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
}

interface ServiceItem {
  slug: string;
  image: string;
  title: string;
  description: string;
  features?: string[];
}

const processSteps = [
  { step: "01", title: "Consultation", description: "Understanding your vision and requirements" },
  { step: "02", title: "Planning", description: "Creating detailed project roadmap and estimates" },
  { step: "03", title: "Preparation", description: "Surface prep and protection of your space" },
  { step: "04", title: "Execution", description: "Professional application with attention to detail" },
  { step: "05", title: "Inspection", description: "Quality check and final walk-through" },
  { step: "06", title: "Completion", description: "Cleanup and handover of your transformed space" },
];

export default function ServicesClient() {
  const [services, setServices] = useState<ServiceItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, status } = await fetchJson<ServiceApiItem[]>("/services/public");
      if (!mounted) return;
      if (status === 404 || isEmptyArray(data)) setServices([]);
      else {
        const mapped: ServiceItem[] = (data || []).map((s) => ({
          slug: s.slug,
          title: s.name,
          description: s.description,
          image: s.imageUrl || "/images/hero-1.png",
          features: [],
        }));
        setServices(mapped);
      }
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const showGrid = !loading && Array.isArray(services) && services.length > 0;

  return (
    <div className="bg-[#4B369D] min-h-screen">
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

          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-40 bg-white/10" />
                  <div className="p-6">
                    <div className="h-5 bg-white/10 rounded w-7/12 mb-3" />
                    <div className="h-4 bg-white/10 rounded w-10/12" />
                  </div>
                </div>
              ))}
            </div>
          )}
          {showGrid && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services!.map((service, index) => (
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
          )}
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
                className="inline-flex items-center gap-2 bg-palette-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-palette-accent-600 transition-colors"
              >
                Request a Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-palette-accent-500/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
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
