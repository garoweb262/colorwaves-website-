"use client";

import { motion } from "framer-motion";
import { Handshake, Users, Target, Award, TrendingUp, Globe } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { PartnershipRequestForm } from "@/components/partnership-request-form";

const benefits = [
  {
    icon: Handshake,
    title: "Strategic Partnership",
    description: "Join our network of trusted partners and unlock new business opportunities in the paint industry.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Work closely with our experienced team to deliver exceptional painting solutions to clients.",
  },
  {
    icon: Target,
    title: "Shared Success",
    description: "Benefit from our proven methodologies, training programs, and industry expertise.",
  },
  {
    icon: Award,
    title: "Recognition Program",
    description: "Get recognized for your contributions and achievements with our partner rewards system.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Access our marketing resources, brand strength, and customer base to grow your business.",
  },
  {
    icon: Globe,
    title: "Expansion Support",
    description: "Leverage our established presence to expand your reach across Nigeria and beyond.",
  },
];

const partnerTypes = [
  {
    title: "Contractor Partners",
    description: "Join us as a painting contractor and access premium paint products, training, and project opportunities.",
    features: ["Volume Discounts", "Technical Training", "Project Leads", "Brand Support"],
  },
  {
    title: "Supplier Partners",
    description: "Supply quality materials and equipment to support our growing operations across Nigeria.",
    features: ["Long-term Contracts", "Consistent Orders", "Fair Pricing", "Growth Opportunities"],
  },
  {
    title: "Design Partners",
    description: "Collaborate with us as an interior designer or architect to offer comprehensive solutions.",
    features: ["Referral Program", "Joint Projects", "Resource Sharing", "Professional Network"],
  },
];

export default function PartnershipClient() {
  return (
    <div className="min-h-screen bg-[#210021]">
      <PageHeader
        title="Partnership Program"
        subtitle="Grow Your Business with ColorWaves"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Building <span className="text-palette-gold-400">Strong Partnerships</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              At ColorWaves, we believe in the power of collaboration. Our partnership program is designed 
              to create mutually beneficial relationships that drive growth, innovation, and success for all parties involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership <span className="text-palette-gold-400">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of partnering with Nigeria&apos;s leading color solutions company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-palette-accent-500 rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership <span className="text-palette-gold-400">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-palette-accent-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Request Form Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="text-palette-gold-400">Partner</span> with Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and our partnership team will get back to you within 48 hours
            </p>
          </div>
          <PartnershipRequestForm />
        </div>
      </section>
    </div>
  );
}
