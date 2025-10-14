import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { fetchJson } from "@/lib/api";

// Mock data - in a real app, this would come from a CMS or database
// const projects = []; // Commented out unused projects array

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type ProjectBySlugApi = {
  title: string;
  slug: string;
  description: string;
  imageUrls?: string[];
  technologies?: string[];
  startDate?: string;
  endDate?: string;
  client?: string;
  videoUrl?: string;
};


export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const { data, status } = await fetchJson<ProjectBySlugApi>(`/projects/public/slug/${slug}`);
  if (status === 404 || !data) {
    notFound();
  }
  const project = {
    title: data.title,
    description: data.description,
    image: data.imageUrls?.[0] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
    gallery: data.imageUrls || [],
    location: data.client,
    date: data.startDate ? new Date(data.startDate).getFullYear().toString() : undefined,
    endDate: data.endDate ? new Date(data.endDate).getFullYear().toString() : undefined,
    category: data.technologies?.[0],
    scope: data.technologies || [],
    slug: data.slug,
    videoUrl: data.videoUrl,
  };

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
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
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

                {project.endDate && (
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">Project Completion</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Completed in {project.endDate}
                    </p>
                  </div>
                )}
              </div>

              {/* Project Video */}
              {project.videoUrl && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Project Video</h3>
                  <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden">
                    <iframe
                      src={project.videoUrl.replace('watch?v=', 'embed/')}
                      title={`${project.title} - Project Video`}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Project Gallery */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
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
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Client</span>
                    <span className="text-white font-semibold">{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Start Date</span>
                    <span className="text-white font-semibold">{project.date}</span>
                  </div>
                  {project.endDate && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">End Date</span>
                      <span className="text-white font-semibold">{project.endDate}</span>
                    </div>
                  )}
                  {project.category && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Category</span>
                      <span className="text-palette-gold-400 font-semibold">{project.category}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 rounded-3xl p-12">
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
          </div>
        </div>
      </section>
    </div>
  );
}
