"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const faqs = [
  {
    question: "What areas do you serve in Nigeria?",
    answer: "We primarily serve Kano and surrounding states, but we also handle large commercial projects across Nigeria. Contact us to discuss your project location and we'll let you know how we can help.",
  },
  {
    question: "How long does a typical painting project take?",
    answer: "Project timelines vary based on size and scope. A standard room might take 1-2 days, while a full house interior could take 1-2 weeks. Commercial projects are assessed individually. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We offer free, no-obligation consultations and estimates for all projects. We'll assess your space, discuss your vision, recommend colors, and provide a detailed quote including materials and labor.",
  },
  {
    question: "What types of paint do you use?",
    answer: "We use only premium, high-quality paints from trusted brands. We offer options including low-VOC, eco-friendly paints, weather-resistant exterior coatings, and specialty finishes. All products are selected based on your specific needs and budget.",
  },
  {
    question: "Can you help me choose colors?",
    answer: "Absolutely! Our professional color consultants can help you select the perfect palette for your space. We consider factors like lighting, room size, purpose, and your personal style to create harmonious color schemes.",
  },
  {
    question: "Do you move furniture?",
    answer: "Yes, we can move furniture as part of our service. We'll protect all items with covering materials. For large or delicate pieces, we recommend clearing the space beforehand or hiring professional movers.",
  },
  {
    question: "What's included in your painting service?",
    answer: "Our comprehensive service includes surface preparation, priming, painting (2-3 coats as needed), cleanup, and final inspection. We protect floors and furniture, repair minor wall imperfections, and ensure a flawless finish.",
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes! We stand behind our work with a comprehensive warranty. Most interior projects include a 2-year warranty on workmanship, while exterior projects are covered for 3-5 years depending on products used. Premium products may have extended manufacturer warranties.",
  },
  {
    question: "How do I prepare my home for painting?",
    answer: "We'll provide a detailed preparation checklist, but generally: clear small items, secure valuables, remove wall hangings, and ensure access to all areas. We handle the rest including moving furniture, covering floors, and surface prep.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfers, and mobile payments. For larger projects, we typically request a 30% deposit to secure your dates and purchase materials, with the balance due upon completion.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#4B369D]">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find Answers to Common Questions About Our Services"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop"
        gradientColor="from-palette-primary-500/80 to-palette-secondary-500/60"
      />

      {/* FAQs Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-palette-gold-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 border-t border-white/10 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-palette-gold-500 to-palette-gold-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-indigo-900 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is here to help. 
              Get in touch and we&apos;ll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-indigo-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-900 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+2348033317338"
                className="inline-block border-2 border-indigo-950 text-indigo-950 px-8 py-4 rounded-full font-semibold hover:bg-indigo-950 hover:text-white transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
