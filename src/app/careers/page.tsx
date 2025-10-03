import { Metadata } from "next";
import { generateMetadata, seoConfigs } from "@/lib/seo";
import CareersPageClient from "./careers-client";

export const metadata: Metadata = generateMetadata(seoConfigs.careers);

export default function CareersPage() {
  return <CareersPageClient />;
}

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Join our frontend team to build amazing user experiences.",
  },
  {
    title: "UX/UI Designer",
    location: "New York, NY",
    type: "Full-time",
    department: "Design",
    description: "Create beautiful and intuitive designs for our products.",
  },
  {
    title: "Product Manager",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Product",
    description: "Lead product strategy and work with cross-functional teams.",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Build and maintain our cloud infrastructure.",
  },
];

export default function CareersPage() {
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
              Join Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of technology. 
              We're looking for passionate individuals to join our growing company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Explore our current job openings and find the perfect role for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {job.title}
                  </h3>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {job.department}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {job.description}
                </p>
                
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" variant="secondary">
              Send Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
