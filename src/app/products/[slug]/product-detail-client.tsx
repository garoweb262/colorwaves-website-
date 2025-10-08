"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Star, Award } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  category: string;
  price: {
    amount: string;
    unit: string;
    range?: string;
  };
  features: string[];
  specifications: {
    type: string;
    finish: string;
    coverage: string;
    dryingTime: string;
    voc: string;
    shelfLife: string;
  };
  colors: {
    available: string;
    customMatching: boolean;
    popular?: string[];
  };
  applications: string[];
  benefits: string[];
  technicalData: {
    thickness: string;
    dilution: string;
    numberOfCoats: string;
    storage: string;
  };
  warranty: string;
  rating: number;
  reviews: number;
}

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title={product.name}
        subtitle={product.shortDescription}
        backgroundImage={product.image}
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-palette-gold-400 fill-palette-gold-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">Product Description</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Award className="w-5 h-5 text-palette-gold-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Product Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Product Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.gallery.map((image, idx) => (
                    <div key={idx} className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-palette-primary-500/20 to-palette-secondary-500/20">
                      <img
                        src={image}
                        alt={`${product.name} - Image ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          console.error(`Failed to load image: ${image}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-white font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Additional Technical Data</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.technicalData).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-300 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Recommended Applications</h3>
                <div className="flex flex-wrap gap-3">
                  {product.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 border border-white/20 text-gray-200 px-4 py-2 rounded-full text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8 sticky top-8"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.price.amount}</h3>
                  <p className="text-gray-300 text-sm">{product.price.unit}</p>
                  {product.price.range && (
                    <p className="text-gray-400 text-xs mt-1">Range: {product.price.range}</p>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-300">Coverage</span>
                    <span className="text-white font-semibold">{product.specifications.coverage}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-300">Finish</span>
                    <span className="text-white font-semibold">{product.specifications.finish}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-300">Warranty</span>
                    <span className="text-white font-semibold">{product.warranty}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Available Colors</h4>
                  <p className="text-gray-300 text-sm mb-2">{product.colors.available}</p>
                  {product.colors.customMatching && (
                    <p className="text-palette-gold-400 text-sm">✓ Custom matching available</p>
                  )}
                  {product.colors.popular && product.colors.popular.length > 0 && (
                    <div className="mt-3">
                      <p className="text-gray-400 text-xs mb-2">Popular Colors:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.popular.map((color, idx) => (
                          <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 text-indigo-950 text-center py-3 rounded-lg font-semibold hover:from-palette-gold-600 hover:to-palette-gold-700 transition-colors"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/project-request"
                    className="block w-full bg-white/10 border border-white/20 text-white text-center py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    Start Project
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Related <span className="text-palette-gold-400">Products</span>
            </h2>
            <p className="text-xl text-gray-300">
              Explore more from our premium paint collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.slug}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-palette-primary-500/20 to-palette-secondary-500/20">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-palette-gold-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-indigo-950 font-semibold">
                    {relatedProduct.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                    {relatedProduct.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-palette-gold-400 font-semibold">
                      {relatedProduct.price.amount}
                    </span>
                    <Link
                      href={`/products/${relatedProduct.slug}`}
                      className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors text-sm"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl text-indigo-900 mb-8">
              Our color experts are here to help you select the perfect paint for your project
            </p>
            <Link
              href="/contact"
              className="inline-block bg-indigo-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-900 transition-colors"
            >
              Get Expert Advice
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

