"use client";

import { HeroSlider } from "@/components/hero-slider";
import { AboutSection } from "@/components/about-section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Handshake } from "lucide-react";
import ProjectCard from "@/components/project-card";
import ServiceCard from "@/components/service-card";
import ProductCard from "@/components/product-card";

// Featured Projects
const featuredProjects = [
  {
    slug: "grand-hotel-kano-renovation",
    title: "Grand Hotel Kano Renovation",
    description: "Complete interior and exterior transformation of a 200-room luxury hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    slug: "techhub-office-complex",
    title: "TechHub Office Complex",
    description: "Modern corporate office space with innovative color schemes and finishes",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    slug: "luxury-villa-estate",
    title: "Luxury Villa Estate",
    description: "High-end residential project featuring 20 luxury villas with custom finishes",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
];

// Featured Services
const featuredServices = [
  {
    slug: "residential-painting",
    image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?w=400&h=300&fit=crop",
    title: "Residential Painting",
    description: "Transform your home with our expert residential painting services. We bring color and life to every room.",
  },
  {
    slug: "commercial-painting",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    title: "Commercial Painting",
    description: "Professional painting solutions for offices, retail spaces, and commercial buildings.",
  },
  {
    slug: "color-consulting",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=400&h=300&fit=crop",
    title: "Color Consulting",
    description: "Expert color consultation to help you choose the perfect palette for your space.",
  },
];

// Featured Products
const featuredProducts = [
  {
    slug: "premium-emulsion-paint",
    image: "/images/products/emulsion.jpg",
    name: "Premium Emulsion Paint",
    description: "High-quality, low-VOC emulsion paint for beautiful, long-lasting interior finishes",
    category: "Interior",
    price: "₦15,500",
  },
  {
    slug: "matte-emulsion",
    image: "/images/products/matteemulsion.jpg",
    name: "Matte Emulsion",
    description: "Elegant matte finish emulsion for sophisticated interior aesthetics",
    category: "Interior",
    price: "₦17,000",
  },
  {
    slug: "luxewave-satin",
    image: "/images/products/luxewavesatin.jpg",
    name: "LuxeWave Satin",
    description: "Luxurious satin finish paint with a subtle sheen for elegant spaces",
    category: "Premium",
    price: "₦22,500",
  },
];

export default function Home() {
  return (
    <div className="bg-indigo-950">
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      {/* Featured Projects Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-palette-gold-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore some of our most successful transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:from-palette-gold-600 hover:to-palette-gold-700 transition-colors"
            >
              See All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-palette-gold-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional painting and color solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:from-palette-gold-600 hover:to-palette-gold-700 transition-colors"
            >
              See All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Premium <span className="text-palette-gold-400">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-quality paints and coatings for every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                name={product.name}
                description={product.description}
                image={product.image}
                category={product.category}
                price={product.price}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:from-palette-gold-600 hover:to-palette-gold-700 transition-colors"
            >
              See All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get <span className="text-palette-gold-400">Started?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Whether you have a project in mind or want to explore partnership opportunities, we&apos;re here to help transform your vision into reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Request CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-palette-gold-500 to-palette-gold-600 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-950 rounded-full mb-6">
                <Briefcase className="w-8 h-8 text-palette-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-4">
                Start Your Project
              </h3>
              <p className="text-indigo-900 mb-6">
                Have a painting or color solution project in mind? Submit your project details and get a free consultation and detailed proposal.
              </p>
              <Link
                href="/project-request"
                className="inline-flex items-center gap-2 bg-indigo-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-900 transition-colors"
              >
                Request a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Partnership Request CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-palette-gold-500 to-palette-gold-600 rounded-full mb-6">
                <Handshake className="w-8 h-8 text-indigo-950" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Partner With Us
              </h3>
              <p className="text-gray-300 mb-6">
                Interested in collaboration or partnership opportunities? Let&apos;s discuss how we can work together to achieve mutual success.
              </p>
              <Link
                href="/partnership"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:from-palette-gold-600 hover:to-palette-gold-700 transition-colors"
              >
                Explore Partnership
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
