"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Grid, List, Download, Eye, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const galleryItems = [
  {
    id: 1,
    title: "Modern Office Space",
    category: "Interior",
    description: "Contemporary office design with natural lighting and modern furniture.",
    image: "/api/placeholder/400/300",
    tags: ["office", "modern", "design"],
    likes: 42,
    downloads: 15,
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    category: "Events",
    description: "Annual technology conference showcasing the latest innovations.",
    image: "/api/placeholder/400/300",
    tags: ["conference", "technology", "innovation"],
    likes: 38,
    downloads: 22,
  },
  {
    id: 3,
    title: "Team Collaboration",
    category: "Workplace",
    description: "Our team working together on innovative projects.",
    image: "/api/placeholder/400/300",
    tags: ["team", "collaboration", "workplace"],
    likes: 56,
    downloads: 18,
  },
  {
    id: 4,
    title: "Product Launch",
    category: "Products",
    description: "Launching our latest product to the market.",
    image: "/api/placeholder/400/300",
    tags: ["product", "launch", "marketing"],
    likes: 29,
    downloads: 31,
  },
  {
    id: 5,
    title: "Client Meeting",
    category: "Business",
    description: "Strategic client meeting in our modern conference room.",
    image: "/api/placeholder/400/300",
    tags: ["client", "meeting", "business"],
    likes: 33,
    downloads: 12,
  },
  {
    id: 6,
    title: "Workshop Session",
    category: "Education",
    description: "Interactive workshop on digital transformation.",
    image: "/api/placeholder/400/300",
    tags: ["workshop", "education", "training"],
    likes: 47,
    downloads: 25,
  },
  {
    id: 7,
    title: "Award Ceremony",
    category: "Awards",
    description: "Receiving recognition for outstanding achievements.",
    image: "/api/placeholder/400/300",
    tags: ["award", "recognition", "achievement"],
    likes: 61,
    downloads: 19,
  },
  {
    id: 8,
    title: "Innovation Lab",
    category: "Research",
    description: "Our state-of-the-art research and development facility.",
    image: "/api/placeholder/400/300",
    tags: ["innovation", "research", "development"],
    likes: 44,
    downloads: 27,
  },
  {
    id: 9,
    title: "Community Outreach",
    category: "Social",
    description: "Giving back to the community through various initiatives.",
    image: "/api/placeholder/400/300",
    tags: ["community", "outreach", "social"],
    likes: 52,
    downloads: 14,
  },
];

const categories = ["All", "Interior", "Events", "Workplace", "Products", "Business", "Education", "Awards", "Research", "Social"];

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-palette-accent-50 to-palette-secondary-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-palette-accent-500 to-palette-primary-500 bg-clip-text text-transparent">
                {" "}Gallery
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore our visual journey through projects, events, and moments that define our company culture and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search gallery..."
                className="pl-10 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="text-slate-400 w-4 h-4" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Category:</span>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-1 border border-slate-200 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-1 border border-slate-200 dark:border-slate-600 rounded-md p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-palette-accent-500 hover:bg-palette-accent-600" : ""}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-palette-accent-500 hover:bg-palette-accent-600" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-palette-accent-100 to-palette-primary-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                      <span className="text-palette-accent-500 dark:text-palette-accent-400 font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-palette-accent-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{item.downloads}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="p-1">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex">
                    <div className="w-32 h-24 bg-gradient-to-br from-palette-accent-100 to-palette-primary-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-palette-accent-500 dark:text-palette-accent-400 font-semibold text-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-palette-accent-500 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{item.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              <span>{item.downloads}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-palette-primary-500 to-palette-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Total Images", value: "500+" },
              { label: "Categories", value: "10" },
              { label: "Downloads", value: "2.5K+" },
              { label: "Likes", value: "1.8K+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">
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
