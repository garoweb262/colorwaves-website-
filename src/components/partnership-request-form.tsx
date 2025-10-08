"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { partnershipRequestsAPI } from "@/lib/api";

const partnershipTypes = [
  { value: "Contractor Partnership", label: "Contractor Partnership" },
  { value: "Supplier Partnership", label: "Supplier Partnership" },
  { value: "Design Partnership", label: "Design Partnership" },
  { value: "Technology Partnership", label: "Technology Partnership" },
  { value: "Marketing Partnership", label: "Marketing Partnership" },
  { value: "Strategic Alliance", label: "Strategic Alliance" },
];

const companySizes = [
  { value: "1-10 employees", label: "1-10 employees" },
  { value: "11-50 employees", label: "11-50 employees" },
  { value: "51-100 employees", label: "51-100 employees" },
  { value: "101-500 employees", label: "101-500 employees" },
  { value: "500+ employees", label: "500+ employees" },
];

const industries = [
  { value: "Construction", label: "Construction" },
  { value: "Interior Design", label: "Interior Design" },
  { value: "Architecture", label: "Architecture" },
  { value: "Technology", label: "Technology" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Retail", label: "Retail" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Real Estate", label: "Real Estate" },
  { value: "Other", label: "Other" },
];

interface PartnershipRequestFormData {
  fullName: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  partnershipType: string;
  description: string;
  website: string;
  companySize: string;
  industry: string;
}

export function PartnershipRequestForm() {
  const [formData, setFormData] = useState<PartnershipRequestFormData>({
    fullName: "",
    companyName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    partnershipType: "",
    description: "",
    website: "",
    companySize: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await partnershipRequestsAPI.create(formData);
      
      toast.success("Partnership request submitted successfully!", {
        description: "We'll review your request and get back to you within 48 hours.",
      });
      
      setFormData({
        fullName: "",
        companyName: "",
        contactPerson: "",
        email: "",
        phoneNumber: "",
        partnershipType: "",
        description: "",
        website: "",
        companySize: "",
        industry: "",
      });
    } catch (error) {
      const err = error as Error;
      toast.error(err.message || "Failed to submit partnership request. Please try again.");
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

  return (
    <motion.div
      className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Partnership Request Form
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          Fill out the form below to submit your partnership request
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          <Input
            label="Company Name"
            name="companyName"
            value={formData.companyName || ""}
            onChange={handleChange}
            placeholder="Enter your company name"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Contact Person"
            name="contactPerson"
            value={formData.contactPerson || ""}
            onChange={handleChange}
            placeholder="Enter contact person name"
            required
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber || ""}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          <Input
            label="Website (Optional)"
            name="website"
            type="url"
            value={formData.website || ""}
            onChange={handleChange}
            placeholder="https://your-website.com"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Select
            label="Partnership Type"
            name="partnershipType"
            value={formData.partnershipType || ""}
            onChange={handleChange}
            placeholder="Select partnership type"
            options={partnershipTypes}
            required
          />
          <Select
            label="Company Size"
            name="companySize"
            value={formData.companySize || ""}
            onChange={handleChange}
            placeholder="Select company size"
            options={companySizes}
            required
          />
        </div>

        <Select
          label="Industry"
          name="industry"
          value={formData.industry || ""}
          onChange={handleChange}
          placeholder="Select your industry"
          options={industries}
          required
        />

        <Textarea
          label="Partnership Description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Tell us about your partnership proposal and how we can work together..."
          rows={6}
          required
        />

        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
