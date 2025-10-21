"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { useState, useEffect } from "react";
import { blogAPI, Blog, newsletterAPI } from "@/lib/api";
import { toast } from "sonner";
import { BlogList } from "@/components/BlogList";

interface BlogPageState {
  blogs: Blog[];
  featuredBlogs: Blog[];
  categories: string[];
  selectedCategory: string;
  loading: boolean;
  error: string | null;
}

export default function BlogClient() {
  const [state, setState] = useState<BlogPageState>({
    blogs: [],
    featuredBlogs: [],
    categories: [],
    selectedCategory: 'all',
    loading: true,
    error: null,
  });

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await newsletterAPI.subscribe(email);
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      const err = error as Error;
      toast.error(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        const [blogsResponse, featuredResponse] = await Promise.all([
          blogAPI.getAll(),
          blogAPI.getFeatured()
        ]);

        const blogs = blogsResponse.data || [];
        const featuredBlogs = featuredResponse.data || [];
        
        // Extract unique categories from all blogs
        const allCategories = Array.from(
          new Set(blogs.flatMap(blog => blog.categories))
        );

        setState(prev => ({
          ...prev,
          blogs,
          featuredBlogs,
          categories: ['all', ...allCategories],
          loading: false,
        }));
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setState(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch blogs',
        }));
        toast.error('Failed to load blog posts');
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = state.selectedCategory === 'all' 
    ? state.blogs 
    : state.blogs.filter(blog => blog.categories.includes(state.selectedCategory));

  if (state.loading) {
    return (
      <div className="bg-[#210021] min-h-screen">
        <PageHeader
          title="Our Blog"
          subtitle="Expert Insights, Tips, and Trends in Painting and Color Design"
          backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop"
          gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
        />
        <div className="flex items-center justify-center py-20">
          <div className="text-white text-xl">Loading blog posts...</div>
        </div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="bg-[#210021] min-h-screen">
        <PageHeader
          title="Our Blog"
          subtitle="Expert Insights, Tips, and Trends in Painting and Color Design"
          backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop"
          gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
        />
        <div className="flex items-center justify-center py-20">
          <div className="text-red-400 text-xl">Error: {state.error}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#210021] min-h-screen">
      <PageHeader
        title="Our Blog"
        subtitle="Expert Insights, Tips, and Trends in Painting and Color Design"
        backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Categories Filter */}
      {/* <BlogCategoriesFilter
        categories={state.categories}
        selectedCategory={state.selectedCategory}
        onCategoryChange={(category) => setState(prev => ({ ...prev, selectedCategory: category }))}
      /> */}

      {/* Featured Posts */}
      {state.featuredBlogs.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogList 
              blogs={state.featuredBlogs} 
              title="Featured Articles"
              showFeatured={true}
            />
          </div>
        </section>
      )}

      {/* All Posts */}
      <BlogList 
        blogs={filteredBlogs} 
        title="All Articles"
      />

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-palette-accent-500 to-palette-accent-600 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Our Latest Tips
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for expert painting tips and design inspiration
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-palette-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
