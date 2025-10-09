"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  index?: number;
  showFeatures?: boolean;
}

export default function ServiceCard({
  slug,
  title,
  description,
  image,
  features,
  index = 0,
  showFeatures = false,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>

        {showFeatures && features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-palette-accent-400 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center gap-2 text-palette-accent-400 hover:text-palette-accent-300 transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

