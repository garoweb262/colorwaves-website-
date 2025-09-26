"use client";

import { motion } from "framer-motion";
import { Package, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Enterprise Suite",
    description: "Complete business solution with advanced features",
    price: "$299/month",
    features: ["Advanced Analytics", "24/7 Support", "Custom Integrations"],
    popular: true,
  },
  {
    name: "Professional Plan",
    description: "Perfect for growing businesses",
    price: "$99/month",
    features: ["Standard Analytics", "Email Support", "API Access"],
    popular: false,
  },
  {
    name: "Starter Package",
    description: "Essential tools for small businesses",
    price: "$29/month",
    features: ["Basic Analytics", "Community Support", "Core Features"],
    popular: false,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Products
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of products designed to help your 
              business grow and succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className={`relative bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 ${
                  product.popular ? "ring-2 ring-blue-500" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <Package className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {product.description}
                  </p>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    {product.price}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={product.popular ? "default" : "outline"}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team can create a tailored solution that perfectly fits your 
              business needs and requirements.
            </p>
            <Button size="lg" variant="secondary">
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
