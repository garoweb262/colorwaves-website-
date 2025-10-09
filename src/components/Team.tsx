"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchJson } from "@/lib/api";

interface TeamApiItem {
  firstName?: string;
  lastName?: string;
  position?: string;
  image?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function Team() {
  const [data, setData] = useState<TeamMember[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, status } = await fetchJson<TeamApiItem[]>("/teams");
      if (!mounted) return;
      
      if (status === 404 || !data || (Array.isArray(data) && data.length === 0)) {
        setData([]);
      } else if (Array.isArray(data)) {
        const mapped: TeamMember[] = data.map((m) => ({
          name: [m.firstName, m.lastName].filter(Boolean).join(" ") || "Team Member",
          role: m.position || "",
          image: m.image || "/images/hero-1.png",
        }));
        setData(mapped);
      } else {
        setData([]);
      }
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const showSection = !loading && Array.isArray(data) && data.length > 0;

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

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse">
              <div className="h-64 bg-white/10" />
              <div className="p-6">
                <div className="h-6 bg-white/10 rounded w-1/2 mb-3" />
                <div className="h-4 bg-white/10 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      )}

      {showSection && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data!.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10"
            >
              <div className="relative h-64 bg-gradient-to-br from-palette-primary-500/20 to-palette-secondary-500/20">
                <Image src={member.image} alt={member.name || "Team member"} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-palette-gold-400 mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

