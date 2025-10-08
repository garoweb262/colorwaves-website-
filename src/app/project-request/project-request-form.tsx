"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { FileUpload } from "@/components/ui/file-upload";
import PageHeader from "@/components/PageHeader";
import { apiEndpoints } from "@/lib/api";

const budgetRanges = [
  { value: "under-5000", label: "Under ₦500,000" },
  { value: "5000-10000", label: "₦500,000 - ₦1,000,000" },
  { value: "10000-25000", label: "₦1,000,000 - ₦2,500,000" },
  { value: "25000-50000", label: "₦2,500,000 - ₦5,000,000" },
  { value: "50000-100000", label: "₦5,000,000 - ₦10,000,000" },
  { value: "over-100000", label: "Over ₦10,000,000" },
];

const timelineOptions = [
  { value: "1-2 weeks", label: "1-2 weeks" },
  { value: "1 month", label: "1 month" },
  { value: "2-3 months", label: "2-3 months" },
  { value: "3-6 months", label: "3-6 months" },
  { value: "6+ months", label: "6+ months" },
  { value: "Flexible", label: "Flexible" },
];

const serviceOptions = [
  { value: "Residential Painting", label: "Residential Painting" },
  { value: "Commercial Painting", label: "Commercial Painting" },
  { value: "Color Consulting", label: "Color Consulting" },
  { value: "Specialty Finishes", label: "Specialty Finishes" },
  { value: "Interior Design", label: "Interior Design" },
  { value: "Renovation Projects", label: "Renovation Projects" },
  { value: "Exterior Coating", label: "Exterior Coating" },
  { value: "Decorative Finishes", label: "Decorative Finishes" },
];

interface ProjectRequestFormData {
  clientName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  projectTitle: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  services: string[];
  website: string;
  images: File[];
}

export default function ProjectRequestForm() {
  const [formData, setFormData] = useState<ProjectRequestFormData>({
    clientName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    projectTitle: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    services: [],
    website: "",
    images: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert files to URLs (in a real app, you'd upload to a server first)
      const imageUrls = await Promise.all(
        formData.images.map(async (file) => {
          // For demo purposes, create object URLs
          // In production, upload to your server and get back URLs
          return URL.createObjectURL(file);
        })
      );

      const payload = {
        ...formData,
        images: imageUrls,
      };

      console.log("Submitting payload:", payload);
      
      // await apiEndpoints.projectRequests.create(payload);
      
      toast.success("Project request submitted successfully!", {
        description: "We'll review your requirements and get back to you within 24 hours.",
      });
      
      setFormData({
        clientName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        projectTitle: "",
        projectDescription: "",
        budget: "",
        timeline: "",
        services: [],
        website: "",
        images: [],
      });
    } catch (error) {
      console.error("Error submitting project request:", error);
      toast.error("Failed to submit project request", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title="Request a Project"
        subtitle="Tell us about your vision and we'll bring it to life"
        backgroundImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Project <span className="text-palette-gold-400">Request Form</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Tell us about your project and we&apos;ll provide you with a detailed proposal and free consultation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
                <Input
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name (optional)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
                <Input
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <Input
                label="Website (Optional)"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://your-website.com"
              />

              <Input
                label="Project Title"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                placeholder="Brief title describing your project"
                required
              />

              <Textarea
                label="Project Description"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Describe your project in detail, including goals, requirements, and any specific needs..."
                rows={6}
                required
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Budget Range"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Select budget range"
                  options={budgetRanges}
                  required
                />
                <Select
                  label="Timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="Select timeline"
                  options={timelineOptions}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Services Needed
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {serviceOptions.map((service) => (
                    <label key={service.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.value)}
                        onChange={() => handleServiceChange(service.value)}
                        className="rounded border-gray-300 text-palette-gold-500 focus:ring-palette-gold-500"
                      />
                      <span className="text-sm text-gray-300">
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <FileUpload
                label="Project Images (Optional)"
                accept="image/*"
                multiple={true}
                maxFiles={10}
                maxSize={10}
                value={formData.images}
                onChange={(files) => setFormData(prev => ({ ...prev, images: files }))}
              />

              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 hover:from-palette-gold-600 hover:to-palette-gold-700 text-indigo-950 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Project Request"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
