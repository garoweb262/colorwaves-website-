import type { Metadata } from "next";
import BlogDetailsClient from "./blog-details-client";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { blogAPI } from "@/lib/api";

interface BlogDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const response = await blogAPI.getBySlug(slug);
    const blogPost = response.data;
    
    if (blogPost) {
      return generateSEOMetadata({
        title: blogPost.title,
        description: blogPost.excerpt,
        keywords: [
          "paint manufacturing Nigeria",
          "interior solutions",
          "professional painting",
          "color consulting",
          ...blogPost.tags,
          ...blogPost.categories,
        ],
        canonical: `/blog/${slug}`,
        openGraph: {
          title: `${blogPost.title} | ColorWaves`,
          description: blogPost.excerpt,
          images: blogPost.imageUrl ? [{
            url: blogPost.imageUrl,
            width: 1200,
            height: 630,
            alt: `${blogPost.title} - ColorWaves Blog`,
          }] : undefined,
        },
      });
    }
  } catch (error) {
    console.error('Error generating metadata for blog post:', error);
  }
  
  // Fallback metadata
  return generateSEOMetadata({
    title: "Blog Post",
    description: "Read our latest insights on painting trends, color tips, and interior design inspiration.",
    keywords: ["paint manufacturing Nigeria", "interior solutions", "professional painting"],
    canonical: `/blog/${slug}`,
  });
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  return <BlogDetailsClient params={params} />;
}
