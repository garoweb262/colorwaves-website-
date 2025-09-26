"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/hero-slider";
import { 
  Heart, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Code,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoClick = () => {
    setIsLoading(true);
    toast.success("Demo action completed!", {
      description: "This toast is powered by Sonner",
    });
    setTimeout(() => setIsLoading(false), 2000);
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Built with Next.js 15 and optimized for performance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure",
      description: "Enterprise-grade security with Helmet and JWT"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scalable",
      description: "NestJS backend with TypeScript and validation"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Stack",
      description: "React Query, Framer Motion, and Tailwind CSS"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Main Content */}
      <motion.main 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Modern Corporate
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Website
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Built with Next.js, NestJS, and modern technologies. 
            Featuring React Query, Framer Motion, Tailwind CSS, and more.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={handleDemoClick}
              disabled={isLoading}
              className="group"
            >
              {isLoading ? "Loading..." : "Try Demo"}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Powered by Modern Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js 15", "NestJS", "TypeScript", "Tailwind CSS", 
              "React Query", "Framer Motion", "Sonner", "Lucide React"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-4 h-4 inline mr-2 text-green-500" />
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.main>

    </div>
  );
}
