"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Eye } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const galleryItems = [
  {
    id: 1,
    title: "Modern Office Transformation",
    category: "Commercial",
    description: "Complete office renovation with contemporary color schemes",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Residential Interior",
    category: "Residential",
    description: "High-end home interior with premium finishes",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Retail Space Makeover",
    category: "Commercial",
    description: "Vibrant retail store transformation",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Exterior Building Refresh",
    category: "Exterior",
    description: "Weather-resistant exterior coating application",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Hotel Lobby Renovation",
    category: "Hospitality",
    description: "Elegant hotel lobby with custom finishes",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Residential Kitchen Upgrade",
    category: "Residential",
    description: "Modern kitchen transformation with bold colors",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Corporate Headquarters",
    category: "Commercial",
    description: "Professional corporate office painting",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Restaurant Interior Design",
    category: "Hospitality",
    description: "Creative restaurant space with unique color palette",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Luxury Villa Exterior",
    category: "Exterior",
    description: "Stunning villa exterior with protective coating",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
  },
];

const categories = ["All", "Commercial", "Residential", "Exterior", "Hospitality"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-indigo-950">
      <PageHeader
        title="Project Gallery"
        subtitle="Explore Our Portfolio of Stunning Transformations"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Controls Section */}
      <section className="py-8 bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                Showing <span className="text-palette-gold-400 font-semibold">{filteredItems.length}</span> projects
              </p>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-gray-300">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Category:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category === selectedCategory
                        ? "bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 text-indigo-950"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-palette-gold-500 text-indigo-950 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-indigo-950 p-3 rounded-full hover:bg-palette-gold-400 transition-colors">
                      <Eye className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-white text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "350+" },
              { label: "Colors Applied", value: "2000+" },
              { label: "Square Meters Painted", value: "50K+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-palette-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
