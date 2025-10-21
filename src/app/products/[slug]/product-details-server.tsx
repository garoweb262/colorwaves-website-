import type { Metadata } from "next";
import ProductDetailsClient from "./product-details-client";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { fetchJson } from "@/lib/api";

type ProductBySlugApi = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  imageUrls: string[];
  category: string;
  isActive: boolean;
  benefits: string[];
  features: string[];
  createdAt: string;
  updatedAt: string;
};

interface ProductDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const { data: productData } = await fetchJson<ProductBySlugApi>(`/products/public/slug/${slug}`);
    
    if (productData) {
      return generateSEOMetadata({
        title: productData.name,
        description: productData.description,
        keywords: [
          "paint manufacturing Nigeria",
          "interior solutions",
          "professional painting",
          "color consulting",
          productData.name.toLowerCase(),
          productData.category.toLowerCase(),
          "paint products",
          "premium paints",
        ],
        canonical: `/products/${slug}`,
        openGraph: {
          title: `${productData.name} | ColorWaves`,
          description: productData.description,
          images: productData.imageUrls?.[0] ? [{
            url: productData.imageUrls[0],
            width: 1200,
            height: 630,
            alt: `${productData.name} - ColorWaves Product`,
          }] : undefined,
        },
      });
    }
  } catch (error) {
    console.error('Error generating metadata for product:', error);
  }
  
  // Fallback metadata
  return generateSEOMetadata({
    title: "Product Details",
    description: "Explore our premium paint products and coating solutions designed for homes, offices, and industrial spaces.",
    keywords: ["paint manufacturing Nigeria", "interior solutions", "professional painting"],
    canonical: `/products/${slug}`,
  });
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  return <ProductDetailsClient params={params} />;
}
