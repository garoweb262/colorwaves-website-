"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    { name: "Gallery", href: "/gallery" },
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
  address: "455 west orchard street kings mountain, nc 280967",
  phone: "+088 (246) 642-27-10",
  email: "example@email.com",
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-indigo-950 text-white overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-palette-primary-500 to-palette-accent-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-palette-primary-400 to-palette-accent-400 bg-clip-text text-transparent">
                    ColorWaves
                  </span>
                </Link>
                <div className="space-y-2 text-white text-sm leading-relaxed">
                  <p>Our Secure Online Donation Platform</p>
                  <p>Allows You To Make Contributions Quickly</p>
                  <p>And Safely. Choose From Various.</p>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex mt-6">
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
                        <Icon className="w-5 h-5" />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="footer-column-header text-lg font-semibold text-white">
                  Quick Links
                </h3>
                <ul>
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="footer-link text-white text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Our Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="footer-column-header text-lg font-semibold text-white">
                  Our Services
                </h3>
                <ul>
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="footer-link text-white text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Get In Touch */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="footer-column-header text-lg font-semibold text-white">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="footer-contact-item">
                    <MapPin className="footer-contact-icon w-5 h-5" />
                    <span className="text-white text-sm">{contactInfo.address}</span>
                  </div>
                  <div className="footer-contact-item">
                    <Phone className="footer-contact-icon w-5 h-5" />
                    <span className="text-white text-sm">{contactInfo.phone}</span>
                  </div>
                  <div className="footer-contact-item">
                    <Mail className="footer-contact-icon w-5 h-5" />
                    <span className="text-white text-sm">{contactInfo.email}</span>
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
        className="fixed bottom-6 right-6 bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 hover:from-palette-gold-600 hover:to-palette-gold-700 text-indigo-950 p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-5 h-5" />
        <span className="sr-only">Scroll to top</span>
      </motion.button>
    </footer>
  );
}
