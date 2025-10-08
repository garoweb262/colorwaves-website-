import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ahmed Musa",
    role: "CEO & Founder",
    image: "/images/hero-2.png",
  },
  {
    name: "Fatima Ibrahim",
    role: "Chief Creative Officer",
    image: "/images/hero-3.png",
  },
  {
    name: "Chukwudi Okafor",
    role: "Head of Operations",
    image: "/images/hero-5.png",
  },
];

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-indigo-950">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-palette-gold-400 to-palette-gold-500 bg-clip-text text-transparent mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-300">
          The creative minds behind ColorWaves&apos; success
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10"
          >
            <div className="relative h-64 bg-gradient-to-br from-palette-primary-500/20 to-palette-secondary-500/20">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-palette-gold-400 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

