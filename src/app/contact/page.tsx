"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { contactAPI } from "@/lib/api";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@colorwaves.ng",
    description: "Send us an email anytime",
    link: "mailto:info@colorwaves.ng",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+234 803 331 7338",
    description: "Mon-Sat from 8am to 6pm",
    link: "tel:+2348033317338",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "54 Ahmadu Bello Way, Kano",
    description: "Come visit our office",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Sat: 8:00 AM - 6:00 PM",
    description: "Sunday: Closed",
    link: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await contactAPI.submitMessage({
        fullName: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });
      
      setIsSuccess(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      const err = error as Error;
      toast.error(err.message || "Failed to send message. Please try again.");
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
    <div className="bg-indigo-950 min-h-screen">
      <PageHeader
        title="Get In Touch"
        subtitle="Let's Transform Your Space Together"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 text-center p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-palette-gold-500 to-palette-gold-600 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-indigo-950" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-palette-gold-400 font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              );

              return info.link ? (
                <a key={info.title} href={info.link} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={info.title}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Send Us a <span className="text-palette-gold-400">Message</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {isSuccess && (
                  <div className="mb-6 bg-green-500/20 border border-green-500/50 rounded-xl p-4 flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <p className="text-green-300">Message sent successfully! We&apos;ll respond within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-palette-gold-400 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-palette-gold-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-palette-gold-400 transition-colors"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-palette-gold-400 transition-colors"
                      >
                        <option value="" className="bg-indigo-950">Select a subject</option>
                        <option value="general" className="bg-indigo-950">General Inquiry</option>
                        <option value="quote" className="bg-indigo-950">Request a Quote</option>
                        <option value="residential" className="bg-indigo-950">Residential Project</option>
                        <option value="commercial" className="bg-indigo-950">Commercial Project</option>
                        <option value="consultation" className="bg-indigo-950">Color Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-palette-gold-400 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:from-palette-gold-600 hover:to-palette-gold-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8582819843937!2d8.509717!3d12.002983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae812f8e000001%3A0x1!2sAhmadu%20Bello%20Way%2C%20Kano%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                ></iframe>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-palette-gold-500 to-palette-gold-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-indigo-950 mb-4">
                  Why Choose ColorWaves?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-950 flex-shrink-0 mt-1" />
                    <span className="text-indigo-900">Free color consultation and project estimates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-950 flex-shrink-0 mt-1" />
                    <span className="text-indigo-900">Professional team with years of experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-950 flex-shrink-0 mt-1" />
                    <span className="text-indigo-900">Premium quality paints and materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-950 flex-shrink-0 mt-1" />
                    <span className="text-indigo-900">Satisfaction guaranteed on every project</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
