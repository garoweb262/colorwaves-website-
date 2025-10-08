import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

// Mock data - in a real app, this would come from a CMS or database
const projects = [
  {
    slug: "grand-hotel-kano-renovation",
    title: "Grand Hotel Kano Renovation",
    description: "Complete interior and exterior transformation of a 200-room luxury hotel",
    location: "Kano, Nigeria",
    date: "2024",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
    scope: ["Interior Painting", "Exterior Coating", "Decorative Finishes", "Color Consultation"],
    result: "Transformed the hotel's aesthetics, resulting in a 40% increase in bookings",
    duration: "3 months",
    budget: "₦15,000,000",
    team: "12 professionals",
    challenges: [
      "Working around hotel operations without disrupting guests",
      "Coordinating with multiple contractors and suppliers",
      "Maintaining luxury standards while staying within budget"
    ],
    solutions: [
      "Implemented phased approach with minimal guest disruption",
      "Established clear communication protocols with all stakeholders",
      "Used premium materials and techniques to ensure lasting quality"
    ],
    testimonial: {
      quote: "ColorWaves transformed our hotel beyond our expectations. The attention to detail and professionalism was outstanding.",
      author: "Ahmed Ibrahim",
      position: "General Manager, Grand Hotel Kano"
    }
  },
  {
    slug: "techhub-office-complex",
    title: "TechHub Office Complex",
    description: "Modern corporate office space with innovative color schemes and finishes",
    location: "Abuja, Nigeria",
    date: "2024",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
    scope: ["Office Interiors", "Meeting Rooms", "Common Areas", "Brand Integration"],
    result: "Created an inspiring workspace that improved employee satisfaction by 35%",
    duration: "2 months",
    budget: "₦8,500,000",
    team: "8 professionals",
    challenges: [
      "Creating a modern tech aesthetic while maintaining professionalism",
      "Working within tight deadlines for office opening",
      "Coordinating with IT infrastructure installation"
    ],
    solutions: [
      "Developed custom color palette reflecting tech innovation",
      "Implemented efficient project management with daily progress updates",
      "Collaborated closely with IT team for seamless integration"
    ],
    testimonial: {
      quote: "The office transformation exceeded our expectations. Our team loves the new environment.",
      author: "Sarah Johnson",
      position: "CEO, TechHub Nigeria"
    }
  }
];

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}


export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title={project.title}
        subtitle={project.description}
        backgroundImage={project.image}
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-palette-gold-400 hover:text-palette-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Project Overview */}
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
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-palette-gold-400" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-palette-gold-400" />
                    <span>{project.date}</span>
                  </div>
                  <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Project Scope</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.scope.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Results</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </motion.div>

              {/* Project Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Project Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((image, idx) => (
                    <div key={idx} className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Duration</span>
                    <span className="text-white font-semibold">{project.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Budget</span>
                    <span className="text-white font-semibold">{project.budget}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Team Size</span>
                    <span className="text-white font-semibold">{project.team}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Category</span>
                    <span className="text-palette-gold-400 font-semibold">{project.category}</span>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Client Testimonial</h3>
                <blockquote className="text-gray-300 italic mb-4">
                  {project.testimonial.quote}
                </blockquote>
                <div>
                  <p className="text-white font-semibold">{project.testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{project.testimonial.position}</p>
                </div>
              </motion.div>
            </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-indigo-900 mb-8">
              Let us transform your space with the same level of excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/project-request"
                className="inline-flex items-center gap-2 bg-indigo-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-900 transition-colors"
              >
                Request a Project
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/20 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Contact Us
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
