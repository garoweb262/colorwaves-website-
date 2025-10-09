"use client";

import React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { blogAPI, Blog, newsletterAPI } from "@/lib/api";
import { toast } from "sonner";

interface BlogDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const [post, setPost] = React.useState<Blog | null>(null);
  const [relatedPosts, setRelatedPosts] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [slug, setSlug] = React.useState<string>('');
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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

  React.useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    getSlug();
  }, [params]);

  React.useEffect(() => {
    if (!slug) return;

    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const response = await blogAPI.getBySlug(slug);
        const blogPost = response.data;
        
        if (blogPost) {
          setPost(blogPost);
          
          // Get related posts (other posts in the same categories)
          const allPostsResponse = await blogAPI.getAll();
          const allPosts = allPostsResponse.data || [];
          
          const related = allPosts
            .filter(p => p._id !== blogPost._id && p.categories.some(cat => blogPost.categories.includes(cat)))
            .slice(0, 3);
          
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-indigo-950 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading blog post...</div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title={post.title}
        subtitle={post.excerpt}
        backgroundImage={post.imageUrl || '/images/hero-0.png'}
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-palette-gold-400" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-palette-gold-400" />
                    <span>{post.author}</span>
                  </div>
                  {post.categories.length > 0 && (
                    <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.categories[0]}
                    </span>
                  )}
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Button */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <button className="inline-flex items-center gap-2 bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-4 py-2 rounded-lg hover:bg-palette-gold-500/30 transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share Article
                  </button>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">About the Author</h3>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-palette-gold-500 to-palette-gold-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-indigo-950 font-bold text-xl">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{post.author}</h4>
                  <p className="text-gray-400 text-sm">
                    Expert in color theory and professional painting techniques with over 10 years of experience.
                  </p>
                </div>
              </motion.div>

              {relatedPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <h4 className="text-white font-semibold mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
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
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Project CTA Section */}
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our experts help you bring these ideas to life
            </p>
            <Link
              href="/project-request"
              className="inline-flex items-center gap-2 bg-white text-palette-accent-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
