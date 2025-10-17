"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";
import { newsletterAPI } from "@/lib/api";
import { toast } from "sonner";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
  ],
  services: [
    { name: "Partnership", href: "/partnership" },
    { name: "FAQs", href: "/faqs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/colorwaves", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/colorwaves", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/colorwaves", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com/colorwaves", icon: Instagram },
];

const contactInfo = {
  address: "54 Ahmadu Bello Way, Kano",
  phone: "+234 803 331 7338",
  email: "info@colorwaves.ng",
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await newsletterAPI.subscribe(email);
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      const err = error as Error;
      toast.error(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-[#210021] text-white overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="footer-shape"></div>
        <div className="footer-shape"></div>
        <div className="footer-shape"></div>
        <div className="footer-shape"></div>
        <div className="footer-shape"></div>
      </div>

     

      {/* Main Footer Content */}
      <div className="footer-info relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 text-center sm:text-left sm:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                 <Image
                  src="/images/logo/ColorWaves_Logo Horizontal White.png"
                  alt="ColorWaves"
                  width={150}
                  height={40}
                  className="h-10 sm:h-12 w-auto mx-auto sm:mx-0 mb-4"
                />
                <div className="space-y-1.5 sm:space-y-2 text-white text-xs sm:text-sm leading-relaxed">
                  <p>Transforming your Visions into Reality, one ColorWave® at a time</p>
                  
                </div>
                
                {/* Newsletter Subscription */}
                <div className="mt-4 sm:mt-6">
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 text-center sm:text-left">
                    Subscribe to Our Newsletter
                  </h4>
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto sm:mx-0">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palette-accent-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-gradient-to-r from-palette-accent-500 to-palette-accent-600 hover:from-palette-accent-600 hover:to-palette-accent-700 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "..." : "Subscribe"}
                    </button>
                  </form>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex mt-4 sm:mt-6 gap-2 justify-center sm:justify-start">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-icon"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="footer-column-header text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-left">
                  Quick Links
                </h3>
                <ul className="space-y-3 sm:space-y-4 flex flex-col items-center sm:items-start">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="footer-link text-white text-xs sm:text-sm hover:text-palette-accent-400 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Our Services */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="footer-column-header text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-left">
                  Our Services
                </h3>
                <ul className="space-y-3 sm:space-y-4 flex flex-col items-center sm:items-start">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="footer-link text-white text-xs sm:text-sm hover:text-palette-accent-400 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Get In Touch */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="footer-column-header text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-left">
                  Get In Touch
                </h3>
                <div className="space-y-3 sm:space-y-4 flex flex-col items-center sm:items-start">
                  <div className="footer-contact-item flex items-start gap-2 sm:gap-3 justify-center sm:justify-start">
                    <MapPin className="footer-contact-icon w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-xs sm:text-sm text-center sm:text-left">{contactInfo.address}</span>
                  </div>
                  <div className="footer-contact-item flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                    <Phone className="footer-contact-icon w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-white text-xs sm:text-sm text-center sm:text-left">{contactInfo.phone}</span>
                  </div>
                  <div className="footer-contact-item flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                    <Mail className="footer-contact-icon  w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-white text-xs sm:text-sm text-center sm:text-left">{contactInfo.email}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-palette-accent-500 to-palette-accent-600 hover:from-palette-accent-600 hover:to-palette-accent-700 text-white p-2.5 sm:p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="sr-only">Scroll to top</span>
      </motion.button>
    </footer>
  );
}
