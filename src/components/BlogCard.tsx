import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/api";

interface BlogCardProps {
  blog: Blog;
  index?: number;
  variant?: 'default' | 'featured';
}

export function BlogCard({ blog, index = 0, variant = 'default' }: BlogCardProps) {
  const isFeatured = variant === 'featured';

  if (isFeatured) {
    return (
      <motion.div
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative h-64 lg:h-full">
            <Image
              src={blog.imageUrl || '/images/hero-0.png'}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
              {blog.categories.length > 0 && (
                <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {blog.categories[0]}
                </span>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {blog.title}
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {blog.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-300">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <Link
                href={`/blog/${blog.slug}`}
                className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.article
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.imageUrl || '/images/hero-0.png'}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
          {blog.categories.length > 0 && (
            <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-2 py-1 rounded-full text-xs font-semibold">
              {blog.categories[0]}
            </span>
          )}
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <User className="w-3 h-3" />
            <span>{blog.author}</span>
          </div>
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-1 text-palette-gold-400 hover:text-palette-gold-300 transition-colors text-sm"
          >
            Read More
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
