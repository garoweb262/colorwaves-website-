"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  location?: string;
  date?: string;
  category: string;
  image: string;
  scope?: string[];
  result?: string;
  index?: number;
  showDetails?: boolean;
}

export default function ProjectCard({
  slug,
  title,
  description,
  location,
  date,
  category,
  image,
  scope,
  result,
  index = 0,
  showDetails = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-palette-gold-500 text-indigo-950 px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>
        {(location || date) && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-4 text-white text-sm mb-2">
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              )}
              {date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        {showDetails && scope && scope.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-palette-gold-400 mb-2">
              Project Scope:
            </h4>
            <div className="flex flex-wrap gap-2">
              {scope.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {showDetails && result && (
          <div className="pt-4 border-t border-white/10 mb-4">
            <p className="text-sm text-gray-400 mb-2">Result:</p>
            <p className="text-white font-medium">{result}</p>
          </div>
        )}

        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
        >
          {showDetails ? "View Project Details" : "View Details"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

