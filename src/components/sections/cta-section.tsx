"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Handshake } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-palette-gold-400 mb-4">
            Ready to Get <span className="text-palette-orange-400">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Whether you have a project in mind or want to explore partnership opportunities, we&apos;re here to help transform your vision into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Request CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-palette-primary-950 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-palette-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-palette-gold-400 mb-4">
              Start Your Project
            </h3>
            <p className="text-palette-white mb-6">
              Have a painting or color solution project in mind? Submit your project details and get a free consultation and detailed proposal.
            </p>
            <Link
              href="/project-request"
              className="inline-flex items-center gap-2 bg-palette-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-palette-accent-600 transition-colors"
            >
              Request a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Partnership Request CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-palette-orange-500 to-palette-orange-600 rounded-full mb-6">
              <Handshake className="w-8 h-8 text-palette-primary-950" />
            </div>
            <h3 className="text-2xl font-bold text-palette-gold-400 mb-4">
              Partner With Us
            </h3>
            <p className="text-gray-300 mb-6">
              Interested in collaboration or partnership opportunities? Let&apos;s discuss how we can work together to achieve mutual success.
            </p>
            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palette-accent-500 to-palette-accent-600 text-white px-8 py-4 rounded-full font-semibold hover:from-palette-accent-600 hover:to-palette-accent-700 transition-colors"
            >
              Explore Partnership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
