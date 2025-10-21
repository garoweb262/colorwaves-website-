import type { Metadata } from "next";
import BlogClient from "./blog-client";
import { generateMetadata, seoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata(seoConfigs.blog);

export default function BlogPage() {
  return <BlogClient />;
}