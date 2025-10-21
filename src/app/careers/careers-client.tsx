"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

// Job openings - commented out as requested
// const jobOpenings = [
//   {
//     title: "Senior Color Consultant",
//     location: "Kano, Nigeria",
//     type: "Full-time",
//     department: "Design",
//     description: "Lead our color consulting team and help clients transform their spaces with expert color selection and design guidance.",
//   },
//   {
//     title: "Professional Painter",
//     location: "Kano, Nigeria",
//     type: "Full-time",
//     department: "Operations",
//     description: "Join our painting team to deliver high-quality painting services for residential and commercial projects.",
//   },
//   {
//     title: "Project Manager",
//     location: "Kano, Nigeria",
//     type: "Full-time",
//     department: "Operations",
//     description: "Oversee painting projects from consultation to completion, ensuring quality, timeline, and customer satisfaction.",
//   },
//   {
//     title: "Sales Representative",
//     location: "Kano, Nigeria",
//     type: "Full-time",
//     department: "Sales",
//     description: "Build relationships with clients, generate leads, and drive business growth through professional sales services.",
//   },
//   {
//     title: "Interior Designer",
//     location: "Kano, Nigeria",
//     type: "Full-time",
//     department: "Design",
//     description: "Create stunning interior designs that incorporate our color solutions and painting services for client projects.",
//   },
//   {
//     title: "Apprentice Painter",
//     location: "Kano, Nigeria",
//     type: "Apprenticeship",
//     department: "Operations",
//     description: "Learn professional painting techniques and color application from experienced craftsmen in our training program.",
//   },
// ];

const careerPaths = [
  {
    title: "Design & Creative",
    description: "Shape the visual future of spaces through innovative color solutions and creative design",
    roles: ["Color Consultant", "Interior Designer", "Creative Director", "Visual Artist"],
    skills: ["Color Theory", "Design Software", "Creative Vision", "Client Communication"],
  },
  {
    title: "Operations & Craftsmanship",
    description: "Master the art of painting and deliver exceptional results on every project",
    roles: ["Professional Painter", "Project Manager", "Quality Inspector", "Team Lead"],
    skills: ["Painting Techniques", "Project Management", "Quality Control", "Team Leadership"],
  },
  {
    title: "Business & Sales",
    description: "Drive growth and build lasting relationships with clients and partners",
    roles: ["Sales Representative", "Business Development", "Account Manager", "Marketing Specialist"],
    skills: ["Sales Strategy", "Client Relations", "Market Analysis", "Communication"],
  },
  {
    title: "Support & Administration",
    description: "Keep our operations running smoothly and support our growing team",
    roles: ["HR Coordinator", "Administrative Assistant", "Customer Service", "Operations Support"],
    skills: ["Organization", "Communication", "Problem Solving", "Team Support"],
  },
];

const internshipPrograms = [
  {
    title: "Design Internship",
    duration: "3-6 months",
    description: "Work alongside our design team to learn color theory, client consultation, and project visualization",
    requirements: ["Design background", "Creative portfolio", "Basic software skills"],
    benefits: ["Mentorship", "Real project experience", "Portfolio development", "Potential full-time offer"],
  },
  {
    title: "Operations Internship",
    duration: "3-6 months", 
    description: "Gain hands-on experience in painting techniques, project management, and quality control",
    requirements: ["Physical fitness", "Attention to detail", "Willingness to learn"],
    benefits: ["Skill development", "Industry certification", "Networking opportunities", "Stipend provided"],
  },
  {
    title: "Business Internship",
    duration: "3-6 months",
    description: "Learn sales strategies, client management, and business development in the painting industry",
    requirements: ["Communication skills", "Business interest", "Customer service experience"],
    benefits: ["Sales training", "Client interaction", "Business insights", "Career guidance"],
  },
];

const volunteerOpportunities = [
  {
    title: "Community Painting Projects",
    description: "Join us in beautifying schools, hospitals, and community centers across Nigeria",
    commitment: "Weekend projects",
    benefits: ["Skill development", "Community impact", "Networking", "Certification"],
  },
  {
    title: "Color Therapy Programs",
    description: "Help bring color and joy to children's hospitals and elderly care facilities",
    commitment: "Monthly visits",
    benefits: ["Emotional fulfillment", "Creative expression", "Social impact", "Team building"],
  },
  {
    title: "Training & Mentorship",
    description: "Share your skills by training aspiring painters and designers in underserved communities",
    commitment: "Flexible schedule",
    benefits: ["Teaching experience", "Skill sharing", "Community building", "Personal growth"],
  },
];

const benefits = [
  "Competitive Salary",
  "Health Insurance",
  "Professional Development",
  "Performance Bonuses",
  "Paid Time Off",
  "Team Building Events",
];

export default function CareersClient() {
  return (
    <div className="min-h-screen bg-[#210021]">
      <PageHeader
        title="Join Our Team"
        subtitle="Build Your Career in Color Innovation"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Work at <span className="text-palette-gold-400">ColorWaves</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a dynamic team that&apos;s transforming spaces across Nigeria with passion, creativity, and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-palette-gold-400">
                  {benefit}
                </h3>
          </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Career <span className="text-palette-gold-400">Paths</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the diverse career opportunities available at ColorWaves and find your perfect path
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <motion.div
                key={path.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {path.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {path.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Internship <span className="text-palette-gold-400">Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Launch your career with hands-on experience and professional mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <span className="bg-palette-gold-500/20 border border-palette-gold-400/30 text-palette-gold-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.duration}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-palette-accent-500 mb-3">Requirements:</h4>
                  <ul className="space-y-1">
                    {program.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-palette-accent-500 rounded-full"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-palette-accent-500 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-palette-accent-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Volunteer <span className="text-palette-gold-400">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Make a difference in your community while developing new skills and building connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {opportunity.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-palette-accent-500 mb-2">Time Commitment:</h4>
                  <p className="text-gray-300 text-sm">{opportunity.commitment}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-palette-accent-500 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-palette-accent-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-indigo-900 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re looking for a full-time position, internship, or volunteer opportunity, 
              we&apos;d love to hear from you. Send us your information and let&apos;s start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-palette-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-palette-accent-600 transition-colors"
              >
                Send Your Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/project-request"
                className="inline-flex items-center gap-2 bg-palette-accent-500/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-palette-accent-500/30 transition-colors"
              >
                Request Information
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
