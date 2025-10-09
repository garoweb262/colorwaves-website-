import { Blog } from "@/lib/api";
import { BlogCard } from "./BlogCard";

interface BlogListProps {
  blogs: Blog[];
  title?: string;
  showFeatured?: boolean;
  featuredBlogs?: Blog[];
}

export function BlogList({ 
  blogs, 
  title = "All Articles", 
  showFeatured = false, 
  featuredBlogs = [] 
}: BlogListProps) {
  return (
    <section className="py-16 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {title.split(' ').map((word, index) => 
              index === 1 ? (
                <span key={index} className="text-palette-gold-400"> {word}</span>
              ) : (
                <span key={index}>{index > 0 ? ' ' : ''}{word}</span>
              )
            )}
          </h2>
        </div>

        {showFeatured && featuredBlogs.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Featured <span className="text-palette-gold-400">Article</span>
              </h3>
            </div>
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} variant="featured" />
            ))}
          </div>
        )}

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-300 text-xl">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog._id} blog={blog} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
