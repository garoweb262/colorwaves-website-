"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  slug: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: string;
  features?: string[];
  colors?: string[];
  coverage?: string;
  index?: number;
  showDetails?: boolean;
}

export default function ProductCard({
  slug,
  name,
  description,
  image,
  category,
  price,
  features,
  colors,
  coverage,
  index = 0,
  showDetails = false,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-palette-primary-500/20 to-palette-secondary-500/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-palette-gold-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-indigo-950 font-semibold">
            {category}
          </span>
        </div>
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-palette-primary-500/30 to-palette-secondary-500/30 -z-10"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {name}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>

        {showDetails && features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-palette-gold-400 mb-3">
              Key Features:
            </h4>
            <ul className="space-y-2">
              {features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-palette-gold-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showDetails && (colors || coverage) && (
          <div className="pt-4 border-t border-white/10">
            {colors && colors.length > 0 && (
              <div className="mb-3">
                <p className="text-sm text-gray-400">Available Colors:</p>
                <p className="text-white font-medium text-sm">
                  {colors.join(", ")}
                </p>
              </div>
            )}
            {coverage && (
              <div>
                <p className="text-sm text-gray-400">Coverage:</p>
                <p className="text-white font-medium text-sm">{coverage}</p>
              </div>
            )}
          </div>
        )}

        <div className={`flex items-center ${price ? "justify-between" : "justify-end"} ${showDetails ? "mt-6 pt-6 border-t border-white/10" : "mt-4"}`}>
          {price && (
            <span className="text-palette-gold-400 font-semibold text-lg">
              {price}
            </span>
          )}
          <Link
            href={`/products/${slug}`}
            className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
          >
            {showDetails ? "View Full Details" : "View Details"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

