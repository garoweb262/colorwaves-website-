"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Target, value: "1000+", label: "Projects Completed" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Globe, value: "25+", label: "Countries Served" },
];

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/api/placeholder/300/300",
    bio: "Visionary leader with 15+ years in tech industry",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "/api/placeholder/300/300",
    bio: "Technical expert specializing in scalable solutions",
  },
  {
    name: "Mike Chen",
    role: "Head of Design",
    image: "/api/placeholder/300/300",
    bio: "Creative director with award-winning design portfolio",
  },
  {
    name: "Emily Davis",
    role: "VP of Operations",
    image: "/api/placeholder/300/300",
    bio: "Operations specialist ensuring smooth project delivery",
  },
];

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              About Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Company
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We are a team of passionate professionals dedicated to delivering 
              innovative solutions that drive business growth and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                To empower businesses with cutting-edge technology solutions that 
                drive innovation, efficiency, and growth. We believe in creating 
                meaningful impact through technology.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Our commitment to excellence and customer satisfaction has made us 
                a trusted partner for companies worldwide.
              </p>
              <Button size="lg">Learn More About Our Values</Button>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg mb-6">
                To be the leading technology partner that transforms businesses 
                and shapes the future of digital innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Innovation-driven solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Customer-centric approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Sustainable growth</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#210021]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience 
              and passion for delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-200 dark:bg-slate-700 rounded-full w-32 h-32 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with our 
              innovative solutions and expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
