"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/service-card";
import React, { useEffect, useState } from "react";
import { fetchJson, isEmptyArray } from "@/lib/api";

interface ServiceApiItem {
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
}

export function FeaturedServices() {
  const [services, setServices] = useState<ServiceApiItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, status } = await fetchJson<ServiceApiItem[]>("/services/public");
      if (!mounted) return;
      if (status === 404 || isEmptyArray(data)) setServices([]);
      else setServices((data || []).slice(0, 3));
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-palette-gold-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional painting and color solutions tailored to your needs
          </p>
        </motion.div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 3 }).map((_, i) => (
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
        {!loading && services && services.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.name}
                description={service.description}
                image={service.imageUrl || "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop"}
                index={index}
              />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-palette-accent-500 to-palette-accent-600 text-white px-8 py-4 rounded-full font-semibold hover:from-palette-accent-600 hover:to-palette-accent-700 transition-colors"
          >
            See All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
