"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Award, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

// Mock data - in a real app, this would come from a CMS or database
const services = [
  {
    slug: "residential-painting",
    title: "Residential Painting",
    description: "Transform your home with our expert residential painting services. We bring color and life to every room with professional craftsmanship and attention to detail.",
    shortDescription: "Professional interior and exterior painting for homes",
    image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c6a0c3fcc0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
    features: [
      "Interior Painting",
      "Exterior Painting", 
      "Wall Texturing",
      "Custom Finishes",
      "Color Consultation",
      "Surface Preparation"
    ],
    benefits: [
      "Professional quality results",
      "Long-lasting finishes",
      "Expert color matching",
      "Minimal disruption to your daily life",
      "Comprehensive warranty coverage",
      "Eco-friendly paint options"
    ],
    process: [
      {
        step: "Consultation",
        description: "We discuss your vision, assess your space, and provide expert color recommendations.",
        duration: "1-2 hours"
      },
      {
        step: "Preparation",
        description: "Thorough surface preparation including cleaning, repairing, and priming.",
        duration: "1-2 days"
      },
      {
        step: "Painting",
        description: "Professional application using premium paints and techniques.",
        duration: "2-5 days"
      },
      {
        step: "Inspection",
        description: "Quality check and final touch-ups to ensure perfect results.",
        duration: "1 day"
      }
    ],
    pricing: {
      starting: "₦50,000",
      range: "₦50,000 - ₦500,000",
      factors: ["Room size", "Surface condition", "Paint quality", "Complexity"]
    },
    timeline: "3-7 days",
    warranty: "2 years",
    team: "3-5 professionals"
  },
  {
    slug: "commercial-painting",
    title: "Commercial Painting",
    description: "Professional painting solutions for offices, retail spaces, and commercial buildings. We deliver exceptional results that enhance your business environment and brand image.",
    shortDescription: "Professional painting services for commercial spaces",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=600&fit=crop",
    ],
    features: [
      "Office Interiors",
      "Retail Spaces",
      "Industrial Facilities",
      "Property Management",
      "Brand Integration",
      "After-Hours Service"
    ],
    benefits: [
      "Minimal business disruption",
      "Professional appearance",
      "Brand consistency",
      "Durable commercial-grade paints",
      "Flexible scheduling",
      "Comprehensive project management"
    ],
    process: [
      {
        step: "Assessment",
        description: "Evaluate your space, discuss requirements, and plan the project timeline.",
        duration: "2-4 hours"
      },
      {
        step: "Planning",
        description: "Detailed project planning including scheduling and material selection.",
        duration: "1-2 days"
      },
      {
        step: "Execution",
        description: "Professional painting with minimal disruption to your operations.",
        duration: "3-10 days"
      },
      {
        step: "Completion",
        description: "Final inspection, cleanup, and project handover.",
        duration: "1 day"
      }
    ],
    pricing: {
      starting: "₦100,000",
      range: "₦100,000 - ₦2,000,000",
      factors: ["Space size", "Complexity", "Timeline", "Paint specifications"]
    },
    timeline: "5-14 days",
    warranty: "3 years",
    team: "5-12 professionals"
  },
  {
    slug: "color-consulting",
    title: "Color Consulting",
    description: "Expert color consultation to help you choose the perfect palette for your space. Our color specialists combine psychology, design principles, and practical considerations to create harmonious environments.",
    shortDescription: "Professional color selection and design consultation",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
    ],
    features: [
      "Color Psychology",
      "Trend Analysis",
      "Custom Palettes",
      "Sample Testing",
      "Lighting Assessment",
      "Space Planning"
    ],
    benefits: [
      "Expert color guidance",
      "Avoid costly mistakes",
      "Create cohesive designs",
      "Maximize space potential",
      "Increase property value",
      "Personalized solutions"
    ],
    process: [
      {
        step: "Discovery",
        description: "Understand your style, preferences, and space requirements.",
        duration: "1-2 hours"
      },
      {
        step: "Analysis",
        description: "Assess lighting, architecture, and existing elements.",
        duration: "1 hour"
      },
      {
        step: "Recommendation",
        description: "Present color schemes and design concepts.",
        duration: "1 hour"
      },
      {
        step: "Implementation",
        description: "Guide you through the painting process.",
        duration: "Ongoing"
      }
    ],
    pricing: {
      starting: "₦25,000",
      range: "₦25,000 - ₦100,000",
      factors: ["Space size", "Complexity", "Follow-up visits", "Additional services"]
    },
    timeline: "1-3 days",
    warranty: "1 year",
    team: "1-2 specialists"
  }
];

interface ServiceDetailsPageProps {
  params: {
    slug: string;
  };
}


export default function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title={service.title}
        subtitle={service.description}
        backgroundImage={service.image}
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Service Overview */}
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
                <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">What We Include</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <Award className="w-5 h-5 text-palette-gold-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-palette-gold-500 rounded-full flex items-center justify-center text-indigo-950 font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{step.step}</h4>
                        <p className="text-gray-300 mb-2">{step.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Project Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.gallery.map((image, idx) => (
                    <div key={idx} className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`${service.title} - Project ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Service Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Timeline</span>
                    <span className="text-white font-semibold">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Warranty</span>
                    <span className="text-white font-semibold">{service.warranty}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Team Size</span>
                    <span className="text-white font-semibold">{service.team}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Pricing</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-palette-gold-400 mb-2">
                      {service.pricing.starting}
                    </div>
                    <div className="text-gray-300 text-sm">Starting from</div>
                  </div>
                  <div className="text-center text-gray-300">
                    Range: {service.pricing.range}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Pricing Factors:</h4>
                    <ul className="space-y-2">
                      {service.pricing.factors.map((factor, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-palette-gold-400 rounded-full"></div>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-indigo-950 mb-4">Ready to Get Started?</h3>
                <p className="text-indigo-900 mb-6">
                  Contact us for a free consultation and detailed quote.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/project-request"
                    className="block w-full bg-indigo-950 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full bg-white/20 text-indigo-950 text-center py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Other <span className="text-palette-gold-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Explore our full range of professional painting and design services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.filter(s => s.slug !== service.slug).map((relatedService, index) => (
              <motion.div
                key={relatedService.slug}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {relatedService.shortDescription}
                  </p>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
