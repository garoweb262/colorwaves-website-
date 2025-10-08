"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowRight, MapPin, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    slug: "grand-hotel-kano-renovation",
    title: "Grand Hotel Kano Renovation",
    description: "Complete interior and exterior transformation of a 200-room luxury hotel",
    location: "Kano, Nigeria",
    date: "2024",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    scope: ["Interior Painting", "Exterior Coating", "Decorative Finishes", "Color Consultation"],
    result: "Transformed the hotel's aesthetics, resulting in a 40% increase in bookings",
  },
  {
    slug: "techhub-office-complex",
    title: "TechHub Office Complex",
    description: "Modern corporate office space with innovative color schemes and finishes",
    location: "Abuja, Nigeria",
    date: "2024",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    scope: ["Office Interiors", "Meeting Rooms", "Common Areas", "Brand Integration"],
    result: "Created an inspiring workspace that improved employee satisfaction by 35%",
  },
  {
    slug: "luxury-villa-estate",
    title: "Luxury Villa Estate",
    description: "High-end residential project featuring 20 luxury villas with custom finishes",
    location: "Lagos, Nigeria",
    date: "2023",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    scope: ["Interior Design", "Exterior Painting", "Specialty Finishes", "Landscape Integration"],
    result: "Delivered premium finishes that exceeded client expectations and timeline",
  },
  {
    slug: "shopping-mall-facade-refresh",
    title: "Shopping Mall Facade Refresh",
    description: "Complete exterior renovation of a major shopping center",
    location: "Port Harcourt, Nigeria",
    date: "2023",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=400&fit=crop",
    scope: ["Exterior Coating", "Weather Protection", "Brand Colors", "Safety Compliance"],
    result: "Enhanced curb appeal and weather protection with 10-year warranty coating",
  },
  {
    slug: "heritage-building-restoration",
    title: "Heritage Building Restoration",
    description: "Careful restoration of a historic building maintaining original character",
    location: "Kano, Nigeria",
    date: "2023",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    scope: ["Historic Preservation", "Color Matching", "Surface Restoration", "Documentation"],
    result: "Successfully preserved cultural heritage while meeting modern standards",
  },
  {
    slug: "modern-restaurant-chain",
    title: "Modern Restaurant Chain",
    description: "Standardized branding and finishes across 15 restaurant locations",
    location: "Multiple Locations",
    date: "2023",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    scope: ["Brand Consistency", "Fast Turnaround", "Minimal Disruption", "Quality Control"],
    result: "Completed all locations on schedule with consistent brand application",
  },
];

const stats = [
  { label: "Projects Completed", value: "500+", icon: Award },
  { label: "Cities Served", value: "25+", icon: MapPin },
  { label: "Years Experience", value: "10+", icon: Calendar },
  { label: "Happy Clients", value: "350+", icon: ExternalLink },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-indigo-950">
      <PageHeader
        title="Our Projects"
        subtitle="Showcasing Excellence in Every Transformation"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-palette-gold-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-palette-gold-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful transformations across Nigeria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                location={project.location}
                date={project.date}
                category={project.category}
                image={project.image}
                scope={project.scope}
                result={project.result}
                index={index}
                showDetails={true}
              />
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-indigo-900 mb-8">
              Get a free consultation and detailed proposal for your painting and color solution needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/project-request"
                className="inline-flex items-center gap-2 bg-indigo-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-900 transition-colors"
              >
                Request a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/20 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Contact Us Directly
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
