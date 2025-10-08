"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/product-card";

const products = [
  {
    slug: "premium-emulsion-paint",
    image: "/images/products/emulsion.jpg",
    name: "Premium Emulsion Paint",
    description: "High-quality, low-VOC emulsion paint for beautiful, long-lasting interior finishes",
    category: "Interior",
    features: ["Low Odor", "Easy Application", "Washable Surface", "Mold Resistant"],
    colors: ["Over 2000 Colors", "Custom Matching Available"],
    coverage: "35-40 m²/gallon",
  },
  {
    slug: "matte-emulsion",
    image: "/images/products/matteemulsion.jpg",
    name: "Matte Emulsion",
    description: "Elegant matte finish emulsion for sophisticated interior aesthetics",
    category: "Interior",
    features: ["Non-Reflective Finish", "Hide Imperfections", "Smooth Coverage", "Premium Quality"],
    colors: ["Modern Neutrals", "Designer Shades"],
    coverage: "30-35 m²/gallon",
  },
  {
    slug: "luxewave-satin",
    image: "/images/products/luxewavesatin.jpg",
    name: "LuxeWave Satin",
    description: "Luxurious satin finish paint with a subtle sheen for elegant spaces",
    category: "Premium",
    features: ["Silky Finish", "Durable", "Stain Resistant", "Easy to Clean"],
    colors: ["Luxury Collection", "Custom Tinting"],
    coverage: "32-38 m²/gallon",
  },
  {
    slug: "texwave-coat",
    image: "/images/products/texwavecoat.jpg",
    name: "TexWave Coat",
    description: "Textured coating for unique decorative finishes and architectural appeal",
    category: "Specialty",
    features: ["3D Texture Effects", "Weatherproof", "Crack Coverage", "Long-Lasting"],
    colors: ["Textured Finishes", "Custom Patterns"],
    coverage: "20-25 m²/gallon",
  },
  {
    slug: "artisan-trowel-finish",
    image: "/images/products/artisantrowel.jpg",
    name: "Artisan Trowel Finish",
    description: "Premium decorative trowel finish for artistic and designer applications",
    category: "Specialty",
    features: ["Hand-Applied Texture", "Unique Patterns", "Premium Quality", "Artistic Appeal"],
    colors: ["Artisan Collection", "Custom Designs"],
    coverage: "18-22 m²/gallon",
  },
  {
    slug: "levelmax-screed",
    image: "/images/products/levelmaxscreed.jpg",
    name: "LevelMax Screed",
    description: "Professional-grade self-leveling screed for perfect floor preparation",
    category: "Industrial",
    features: ["Self-Leveling", "High Strength", "Fast Setting", "Crack Resistant"],
    colors: ["Standard Gray", "Custom Tints"],
    coverage: "15-20 m²/bag",
  },
];

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
  return (
    <div className="bg-indigo-950 min-h-screen">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
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
              className="inline-block bg-indigo-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-900 transition-colors"
            >
              Get Expert Advice
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
