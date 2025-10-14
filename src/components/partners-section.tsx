"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { partnersAPI, Partner } from "@/lib/api";
import { toast } from "sonner";

export function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setIsLoading(true);
        const result = await partnersAPI.getAll();
        if (result.success) {
          // Filter only active partners
          const activePartners = result.data.filter(partner => partner.status === 'active');
          setPartners(activePartners);
        }
      } catch (error) {
        console.error("Failed to fetch partners:", error);
        toast.error("Failed to load partners");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-palette-gold-400">Partners</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Trusted by leading organizations and businesses
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-palette-gold-400"></div>
          </div>
        </div>
      </section>
    );
  }

  if (partners.length === 0) {
    return null; // Don't render if no partners
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Our <span className="text-palette-gold-400">Partners</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Trusted by leading organizations and businesses
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-8"
            animate={{
              x: [0, -100 * partners.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Single set of partners */}
            {partners.map((partner, index) => (
              <div
                key={partner._id}
                className="flex-shrink-0 flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-300 min-w-[200px]"
              >
                {partner.imageUrl ? (
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-palette-gold-500/20 border border-palette-gold-400/30 rounded-full flex items-center justify-center mb-2">
                      <span className="text-palette-gold-400 font-semibold text-sm">
                        {partner.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-xs text-gray-200 font-medium">
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

