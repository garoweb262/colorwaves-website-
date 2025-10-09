"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowRight, MapPin, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import React, { useEffect, useState } from "react";
import { fetchJson, isEmptyArray } from "@/lib/api";

interface ProjectApiItem {
  slug: string;
  title: string;
  description: string;
  imageUrls?: string[];
  startDate?: string;
  endDate?: string;
}

interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  location?: string;
  date?: string;
  category?: string;
  image: string;
  scope?: string[];
  result?: string;
}

const stats = [
  { label: "Projects Completed", value: "500+", icon: Award },
  { label: "Cities Served", value: "25+", icon: MapPin },
  { label: "Years Experience", value: "10+", icon: Calendar },
  { label: "Happy Clients", value: "350+", icon: ExternalLink },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, status } = await fetchJson<ProjectApiItem[]>("/projects/public");
      if (!mounted) return;
      if (status === 404 || isEmptyArray(data)) setProjects([]);
      else {
        const mapped: ProjectItem[] = (data || []).map((p: ProjectApiItem) => ({
          slug: p.slug,
          title: p.title,
          description: p.description,
          image: p.imageUrls?.[0] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop",
          date: p.startDate ? new Date(p.startDate).getFullYear().toString() : undefined,
        }));
        setProjects(mapped);
      }
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const showGrid = !loading && Array.isArray(projects) && projects.length > 0;

  return (
    <div className="min-h-screen bg-[#4B369D]">
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

          {loading && (
            <div className="grid lg:grid-cols-2 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-56 bg-white/10" />
                  <div className="p-6">
                    <div className="h-5 bg-white/10 rounded w-7/12 mb-3" />
                    <div className="h-4 bg-white/10 rounded w-10/12" />
                  </div>
                </div>
              ))}
            </div>
          )}
          {showGrid && (
            <div className="grid lg:grid-cols-2 gap-8">
              {projects!.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  date={project.date}
                  category={project.category || "Project"}
                  image={project.image}
                  scope={project.scope}
                  result={project.result}
                  index={index}
                  showDetails={true}
                />
              ))}
            </div>
          )}
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
                className="inline-flex items-center gap-2 bg-palette-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-palette-accent-600 transition-colors"
              >
                Request a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-palette-accent-500/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-palette-accent-500/30 transition-colors"
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
