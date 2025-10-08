import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

// Mock data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "choosing-perfect-paint-colors-for-your-home",
    title: "Choosing the Perfect Paint Colors for Your Home",
    excerpt: "Discover expert tips and techniques for selecting paint colors that transform your living space into a beautiful, harmonious environment.",
    content: `
      <p>Choosing the right paint colors for your home can be overwhelming, but with the right approach, you can create spaces that reflect your personality and enhance your daily life. Here's a comprehensive guide to help you make the best color decisions.</p>
      
      <h2>Understanding Color Psychology</h2>
      <p>Colors have a profound impact on our emotions and behavior. Understanding color psychology is the first step in making informed decisions:</p>
      
      <ul>
        <li><strong>Blue:</strong> Promotes calmness and relaxation, perfect for bedrooms and bathrooms</li>
        <li><strong>Green:</strong> Creates a sense of balance and harmony, ideal for living rooms and kitchens</li>
        <li><strong>Yellow:</strong> Energizes and uplifts, great for dining areas and home offices</li>
        <li><strong>Red:</strong> Stimulates appetite and conversation, perfect for dining rooms</li>
        <li><strong>Neutral:</strong> Provides flexibility and timeless appeal</li>
      </ul>
      
      <h2>Consider Your Space</h2>
      <p>Before selecting colors, evaluate your space:</p>
      
      <h3>Natural Light</h3>
      <p>Rooms with abundant natural light can handle darker, richer colors. North-facing rooms benefit from warm tones, while south-facing rooms work well with cooler colors.</p>
      
      <h3>Room Size</h3>
      <p>Light colors make small rooms feel larger, while dark colors create intimacy in large spaces. Consider using accent walls to add depth without overwhelming the space.</p>
      
      <h3>Architecture</h3>
      <p>Your home's architectural style should influence your color choices. Traditional homes often suit classic palettes, while modern homes can handle bold, contemporary colors.</p>
      
      <h2>Creating Color Harmony</h2>
      <p>Successful color schemes follow established principles:</p>
      
      <h3>Monochromatic Scheme</h3>
      <p>Use different shades and tints of a single color for a sophisticated, cohesive look.</p>
      
      <h3>Analogous Scheme</h3>
      <p>Choose colors that are adjacent on the color wheel for a harmonious, natural feel.</p>
      
      <h3>Complementary Scheme</h3>
      <p>Pair colors from opposite sides of the color wheel for dynamic, energetic spaces.</p>
      
      <h2>Testing Your Colors</h2>
      <p>Always test paint colors before committing:</p>
      
      <ul>
        <li>Paint large swatches on different walls</li>
        <li>Observe colors at different times of day</li>
        <li>Consider how colors interact with your furniture and decor</li>
        <li>Test in both natural and artificial light</li>
      </ul>
      
      <h2>Professional Tips</h2>
      <p>Here are some expert recommendations:</p>
      
      <ul>
        <li>Start with your largest piece of furniture or artwork</li>
        <li>Use the 60-30-10 rule: 60% dominant color, 30% secondary color, 10% accent color</li>
        <li>Consider the flow between rooms</li>
        <li>Don't forget about ceilings and trim</li>
      </ul>
      
      <p>Remember, paint colors can always be changed, but taking time to choose thoughtfully will save you time, money, and frustration in the long run.</p>
    `,
    author: "Fatima Ibrahim",
    authorRole: "Senior Color Consultant",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Color Tips",
    tags: ["color selection", "interior design", "home improvement", "paint colors"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop",
    featured: true
  },
  {
    slug: "modern-painting-techniques-for-professionals",
    title: "Modern Painting Techniques for Professional Results",
    excerpt: "Learn advanced painting techniques that professional painters use to achieve flawless finishes and long-lasting results.",
    content: `
      <p>Professional painting requires more than just applying paint to walls. It involves understanding surface preparation, choosing the right tools, and mastering various application techniques. Here's your guide to achieving professional-quality results.</p>
      
      <h2>Surface Preparation</h2>
      <p>Proper surface preparation is crucial for a successful paint job:</p>
      
      <h3>Cleaning</h3>
      <p>Remove dirt, grease, and loose paint using appropriate cleaners. For exterior surfaces, consider pressure washing for thorough cleaning.</p>
      
      <h3>Repairing</h3>
      <p>Fill holes, cracks, and imperfections with quality filler. Sand smooth and prime repaired areas.</p>
      
      <h3>Priming</h3>
      <p>Use primer on bare surfaces, stains, and areas with color changes. Primer ensures better adhesion and color consistency.</p>
      
      <h2>Essential Tools</h2>
      <p>Professional painters rely on quality tools:</p>
      
      <ul>
        <li><strong>Brushes:</strong> Natural bristle for oil-based paints, synthetic for water-based</li>
        <li><strong>Rollers:</strong> Choose nap length based on surface texture</li>
        <li><strong>Sprayers:</strong> For large areas and smooth finishes</li>
        <li><strong>Drop cloths:</strong> Protect floors and furniture</li>
        <li><strong>Painter's tape:</strong> For clean edges and trim work</li>
      </ul>
      
      <h2>Application Techniques</h2>
      
      <h3>Cutting In</h3>
      <p>Use a quality brush to paint edges and corners before rolling. This technique ensures clean lines and professional appearance.</p>
      
      <h3>Rolling Technique</h3>
      <p>Apply paint in a "W" pattern, then fill in the gaps. Work in small sections to maintain wet edges and avoid lap marks.</p>
      
      <h3>Spraying</h3>
      <p>Hold the sprayer 12-18 inches from the surface. Use overlapping passes for even coverage.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Skipping surface preparation</li>
        <li>Using poor quality tools</li>
        <li>Applying paint too thick</li>
        <li>Working in poor lighting</li>
        <li>Not maintaining wet edges</li>
      </ul>
      
      <h2>Finishing Touches</h2>
      <p>Professional results require attention to detail:</p>
      
      <ul>
        <li>Remove painter's tape while paint is still wet</li>
        <li>Touch up any missed spots</li>
        <li>Clean tools properly for reuse</li>
        <li>Allow proper drying time between coats</li>
      </ul>
      
      <p>Mastering these techniques takes practice, but the results are worth the effort. Professional-quality painting enhances your home's value and appearance for years to come.</p>
    `,
    author: "Ahmed Musa",
    authorRole: "Master Painter",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Techniques",
    tags: ["painting techniques", "professional tips", "tools", "surface preparation"],
    image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?w=1200&h=600&fit=crop",
    featured: false
  }
];

interface BlogDetailsPageProps {
  params: {
    slug: string;
  };
}


export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title={post.title}
        subtitle={post.excerpt}
        backgroundImage={post.image}
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
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-palette-gold-400" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-palette-gold-400" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
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
                  <p className="text-gray-300 text-sm mb-4">{post.authorRole}</p>
                  <p className="text-gray-400 text-sm">
                    Expert in color theory and professional painting techniques with over 10 years of experience.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                <div className="space-y-4">
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
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
                        <span>{new Date(relatedPost.publishDate).toLocaleDateString()}</span>
                        <Clock className="w-3 h-3 ml-2" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-indigo-900 mb-8">
              Let our experts help you bring these ideas to life
            </p>
            <Link
              href="/project-request"
              className="inline-flex items-center gap-2 bg-indigo-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-900 transition-colors"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
