"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to performance optimization.",
    author: "John Doe",
    date: "2024-01-15",
    category: "Technology",
    readTime: "5 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 2,
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "Learn how to design and implement scalable applications using modern architectural patterns and best practices.",
    author: "Jane Smith",
    date: "2024-01-12",
    category: "Development",
    readTime: "8 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "The Art of User Experience Design",
    excerpt: "Discover the principles of creating exceptional user experiences that drive engagement and satisfaction.",
    author: "Mike Johnson",
    date: "2024-01-10",
    category: "Design",
    readTime: "6 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Essential cybersecurity strategies to protect your business from evolving threats and vulnerabilities.",
    author: "Sarah Wilson",
    date: "2024-01-08",
    category: "Security",
    readTime: "7 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 5,
    title: "Cloud Computing: Migration Strategies and Benefits",
    excerpt: "A comprehensive guide to cloud migration, including strategies, benefits, and common pitfalls to avoid.",
    author: "David Brown",
    date: "2024-01-05",
    category: "Cloud",
    readTime: "9 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 6,
    title: "Mobile-First Design: Creating Responsive Experiences",
    excerpt: "Learn how to create mobile-first designs that provide optimal experiences across all devices.",
    author: "Lisa Chen",
    date: "2024-01-03",
    category: "Design",
    readTime: "6 min read",
    image: "/api/placeholder/400/250",
  },
];

const categories = ["All", "Technology", "Development", "Design", "Security", "Cloud"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-palette-primary-50 to-palette-secondary-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-palette-primary-500 to-palette-accent-500 bg-clip-text text-transparent">
                {" "}Blog
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in technology, 
              development, and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-slate-400 w-4 h-4" />
              <span className="text-sm text-slate-600 dark:text-slate-300">Filter by:</span>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className={category === "All" ? "bg-palette-primary-500 hover:bg-palette-primary-600" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-palette-primary-100 to-palette-accent-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                    <span className="text-palette-primary-500 dark:text-palette-primary-400 font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-palette-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-palette-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-palette-primary-500 group-hover:text-white group-hover:border-palette-primary-500 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-palette-primary-500 to-palette-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights, 
              tutorials, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70"
              />
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-palette-primary-500 hover:bg-slate-100"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
