"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { fetchJson } from "@/lib/api";
import ProductDetailClient from "./product-detail-client";

type ProductBySlugApi = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  imageUrls: string[];
  category: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};


interface ProductDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const [data, setData] = useState<ProductBySlugApi | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        const { data: productData, status } = await fetchJson<ProductBySlugApi>(`/products/public/slug/${resolvedParams.slug}`);
        
        if (status === 404 || !productData) {
          setError(true);
          return;
        }
        
        setData(productData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="bg-[#210021] min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    notFound();
  }

  // Transform API data to match ProductDetailClient expectations
  const product = {
    slug: data.slug,
    name: data.name,
    shortDescription: data.description.substring(0, 100) + "...",
    description: data.description,
    image: data.imageUrls[0] || "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=600&fit=crop",
    gallery: data.imageUrls,
    category: data.category,
    price: { amount: "Contact for pricing", unit: "", range: "" },
    features: [],
    specifications: {
      type: "Premium Paint",
      finish: "Multiple Options",
      coverage: "Contact for details",
      dryingTime: "Contact for details",
      voc: "Low VOC",
      shelfLife: "Contact for details"
    },
    colors: {
      available: "Contact for details",
      customMatching: true,
      popular: []
    },
    applications: [],
    benefits: [],
    technicalData: {
      thickness: "Contact for details",
      dilution: "Contact for details",
      numberOfCoats: "Contact for details",
      storage: "Store in cool, dry place"
    },
    warranty: "Contact for details",
    rating: 0,
    reviews: 0
  };

  return <ProductDetailClient product={product} relatedProducts={[]} />;
}
