"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/product-card";
import React, { useEffect, useState } from "react";
import { fetchJson, isEmptyArray } from "@/lib/api";

interface ProductApiItem {
  slug?: string; // backend list may not include slug; if missing, derive later
  name: string;
  description: string;
  imageUrls?: string[];
  category?: string;
}

interface ProductItem {
  slug: string;
  image: string;
  name: string;
  description: string;
  category: string;
  features?: string[];
  colors?: string[];
  coverage?: string;
}

const benefits = [
  {
    title: "Premium Quality",
    description: "Only the finest ingredients for superior results",
  },
  {
    title: "Color Expertise",
    description: "Advanced color matching technology",
  },
  {
    title: "Eco-Conscious",
    description: "Sustainable and environmentally friendly options",
  },
  {
    title: "Warranty",
    description: "Comprehensive warranty on all products",
  },
];

export default function ProductsClient() {
  const [products, setProducts] = useState<ProductItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, status } = await fetchJson<ProductApiItem[]>("/products/public");
      if (!mounted) return;
      if (status === 404 || isEmptyArray(data)) setProducts([]);
      else {
        const mapped: ProductItem[] = (data || []).map((p, idx) => ({
          slug: p.slug || `product-${idx}`,
          name: p.name,
          description: p.description,
          image: p.imageUrls?.[0] || "/images/products/emulsion.jpg",
          category: p.category || "",
        }));
        setProducts(mapped);
      }
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const showGrid = !loading && Array.isArray(products) && products.length > 0;

  return (
    <div className="bg-[#4B369D] min-h-screen">
      <PageHeader
        title="Our Products"
        subtitle="Premium Paints and Coatings for Every Project"
        backgroundImage="/images/hero-2.png"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Product <span className="text-palette-gold-400">Range</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality paints and coatings for residential, commercial, and industrial applications
            </p>
          </div>

          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-white/10" />
                  <div className="p-6">
                    <div className="h-5 bg-white/10 rounded w-7/12 mb-3" />
                    <div className="h-4 bg-white/10 rounded w-10/12" />
                  </div>
                </div>
              ))}
            </div>
          )}
          {showGrid && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products!.map((product, index) => (
                <ProductCard
                  key={product.slug}
                  slug={product.slug}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                  features={product.features}
                  colors={product.colors}
                  coverage={product.coverage}
                  index={index}
                  showDetails={true}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-palette-gold-400">Products</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-palette-gold-500 to-palette-gold-600 rounded-full mb-6">
                  <div className="w-3 h-3 bg-indigo-950 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-indigo-950 mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl text-indigo-900 mb-8">
              Our color experts are here to help you select the perfect paint for your project
            </p>
            <a
              href="/contact"
              className="inline-block bg-palette-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-palette-accent-600 transition-colors"
            >
              Get Expert Advice
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
