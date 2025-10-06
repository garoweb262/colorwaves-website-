"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { apiEndpoints } from "@/lib/api";

const budgetRanges = [
  { value: "Under $5,000", label: "Under $5,000" },
  { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
  { value: "$10,000 - $25,000", label: "$10,000 - $25,000" },
  { value: "$25,000 - $50,000", label: "$25,000 - $50,000" },
  { value: "$50,000 - $100,000", label: "$50,000 - $100,000" },
  { value: "Over $100,000", label: "Over $100,000" },
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
  { value: "Web Development", label: "Web Development" },
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "E-commerce Solutions", label: "E-commerce Solutions" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "SEO Services", label: "SEO Services" },
  { value: "Cloud Solutions", label: "Cloud Solutions" },
  { value: "Consulting", label: "Consulting" },
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
}

export function ProjectRequestForm() {
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
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiEndpoints.projectRequests.create(formData);
      
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
    <motion.div
      className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Project Request Form
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          Tell us about your project and we&apos;ll provide you with a detailed proposal
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
          placeholder="Describe your project in detail, including goals, features, and any specific requirements..."
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
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            Services Needed
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {serviceOptions.map((service) => (
              <label key={service.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service.value)}
                  onChange={() => handleServiceChange(service.value)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {service.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit Project Request"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
