"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const dropdownItems = [
  { name: "Partnership", href: "/partnership" },
  { name: "FAQs", href: "/faqs" },
  { name: "Blog", href: "/blog" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className="navbar-glass sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Section 1: Logo */}
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center space-x-2">
               
                <Image
                  src="/images/logo/ColorWaves_Logo Horizontal White.png"
                  alt="ColorWaves"
                  width={150}
                  height={40}
                  className="h-12 w-auto"
                />
              </Link>
            </motion.div>
          </div>

          {/* Section 2: Navigation Menu */}
          <div className="hidden md:block flex-shrink-0">
            <div className="navbar-menu-container">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="navbar-item px-3 py-2 text-sm font-medium relative z-10"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Dropdown */}
                <div className="relative">
                  <button
                    className="navbar-item flex items-center space-x-1 px-3 py-2 text-sm font-medium relative z-10"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <span>More</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        className="absolute right-0 mt-2 w-48 bg-indigo-900 rounded-md shadow-lg py-1 z-50 border border-indigo-800"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-indigo-800 transition-all duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <button onClick={() => window.location.href = "/project-request"} className="navbar-cta-button cursor-pointer">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-palette-gold-400 hover:bg-palette-gold-500/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-palette-gold-500 transition-all duration-200 hover:scale-110"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-indigo-950/95 backdrop-blur-sm border-t border-indigo-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <div className="navbar-menu-container mb-4">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="navbar-item block px-4 py-3 text-base font-medium relative z-10"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Dropdown Items */}
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="navbar-item block px-4 py-3 text-base font-medium relative z-10"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <button onClick={() => window.location.href = "/project-request"} className="navbar-cta-button w-full cursor-pointer">
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
