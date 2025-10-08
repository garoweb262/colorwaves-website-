"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

// Mock blog posts data
const blogPosts = [
  {
    slug: "choosing-perfect-paint-colors-for-your-home",
    title: "Choosing the Perfect Paint Colors for Your Home",
    excerpt: "Discover expert tips and techniques for selecting paint colors that transform your living space into a beautiful, harmonious environment.",
    author: "Fatima Ibrahim",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Color Tips",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    featured: true
  },
  {
    slug: "modern-painting-techniques-for-professionals",
    title: "Modern Painting Techniques for Professional Results",
    excerpt: "Learn advanced painting techniques that professional painters use to achieve flawless finishes and long-lasting results.",
    author: "Ahmed Musa",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Techniques",
    image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?w=600&h=400&fit=crop",
    featured: false
  },
  {
    slug: "interior-design-trends-2024",
    title: "Interior Design Trends for 2024",
    excerpt: "Explore the latest interior design trends that will dominate home decor and color schemes in 2024.",
    author: "Grace Okoro",
    publishDate: "2024-01-05",
    readTime: "5 min read",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
    featured: false
  },
  {
    slug: "eco-friendly-painting-solutions",
    title: "Eco-Friendly Painting Solutions for Your Home",
    excerpt: "Learn about sustainable painting options that are safe for your family and environmentally responsible.",
    author: "Chukwudi Okafor",
    publishDate: "2024-01-01",
    readTime: "7 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    featured: false
  }
];

const categories = ["All", "Color Tips", "Techniques", "Trends", "Sustainability"];

export default function BlogPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title="Our Blog"
        subtitle="Expert Insights, Tips, and Trends in Painting and Color Design"
        backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Categories Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured <span className="text-palette-gold-400">Article</span>
            </h2>
          </div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.div
              key={post.slug}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {post.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-300">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All <span className="text-palette-gold-400">Articles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                    <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-palette-gold-400 hover:text-palette-gold-300 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-indigo-950 mb-6">
              Stay Updated with Our Latest Tips
            </h2>
            <p className="text-xl text-indigo-900 mb-8">
              Subscribe to our newsletter for expert painting tips and design inspiration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-indigo-950 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-950"
              />
              <button className="bg-indigo-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}