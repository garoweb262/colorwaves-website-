"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { apiEndpoints } from "@/lib/api";

const partnershipTypes = [
  { value: "Technology Partnership", label: "Technology Partnership" },
  { value: "Business Development", label: "Business Development" },
  { value: "Marketing Partnership", label: "Marketing Partnership" },
  { value: "Strategic Alliance", label: "Strategic Alliance" },
  { value: "Reseller Partnership", label: "Reseller Partnership" },
  { value: "Consulting Partnership", label: "Consulting Partnership" },
];

interface PartnershipRequestFormData {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  partnershipType: string;
  message: string;
}

export function PartnershipRequestForm() {
  const [formData, setFormData] = useState<PartnershipRequestFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    partnershipType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiEndpoints.partnershipRequests.create(formData);
      
      toast.success("Partnership request submitted successfully!", {
        description: "We'll review your request and get back to you within 48 hours.",
      });
      
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        partnershipType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting partnership request:", error);
      toast.error("Failed to submit partnership request", {
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
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          <Input
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            required
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

        <Select
          label="Partnership Type"
          name="partnershipType"
          value={formData.partnershipType}
          onChange={handleChange}
          placeholder="Select partnership type"
          options={partnershipTypes}
          required
        />

        <Textarea
          label="Message"
          name="message"
          value={formData.message}
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
