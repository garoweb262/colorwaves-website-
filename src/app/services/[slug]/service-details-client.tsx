"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { fetchJson } from "@/lib/api";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SocialShare } from "@/components/SocialShare";

type ServiceBySlugApi = {
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
};

interface ServiceDetailsClientProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServiceDetailsClient({ params }: ServiceDetailsClientProps) {
  const [data, setData] = useState<ServiceBySlugApi | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        const { data: serviceData, status } = await fetchJson<ServiceBySlugApi>(`/services/public/slug/${resolvedParams.slug}`);
        
        if (status === 404 || !serviceData) {
          setError(true);
          return;
        }
        
        setData(serviceData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="bg-[#210021] min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    notFound();
  }

  return (
    <div className="bg-[#210021] min-h-screen">
      <PageHeader
        title={data.name}
        subtitle={data.description}
        backgroundImage={data.imageUrl || "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=600&fit=crop"}
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Back Button and Share */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <SocialShare
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/services/${data.slug}`}
              title={data.name}
              description={data.description}
              imageUrl={data.imageUrl}
              hashtags={['services']}
            />
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {data.description}
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-indigo-950 mb-4">Ready to Get Started?</h3>
                <p className="text-indigo-900 mb-6">
                  Contact us for more information about this service.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/project-request"
                    className="block w-full bg-[#210021] text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full bg-white/20 text-indigo-950 text-center py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
