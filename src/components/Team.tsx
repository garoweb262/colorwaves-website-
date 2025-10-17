"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function Team() {
  const [data, setData] = useState<TeamMember[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState<TeamMember | null>(null);

  // Team images from the teams folder (excluding ceo.jpeg)
  const teamImages = [
    "/images/teams/team-a.jpeg",
    "/images/teams/team-b.jpeg",
    "/images/teams/team-c.jpeg",
    "/images/teams/team-d.jpeg",
    "/images/teams/team-e.jpeg",
    "/images/teams/team-f.jpeg",
  ];

  // Default team members with new images (6 members, excluding CEO)
  const defaultTeamMembers: TeamMember[] = [
    { name: "Production Team Lead", role: "Quality Control & Production", image: teamImages[0] },
    { name: "Design Specialist", role: "Interior & Exterior Design", image: teamImages[1] },
    { name: "Architectural Consultant", role: "Structural & 3D Design", image: teamImages[2] },
    { name: "Engineering Manager", role: "Civil & Mechanical Engineering", image: teamImages[3] },
    { name: "Marketing Director", role: "Business Development", image: teamImages[4] },
    { name: "Operations Manager", role: "Administrative & HR", image: teamImages[5] },
  ];

  useEffect(() => {
    // Always use default team members with the new images
    setData(defaultTeamMembers);
    setLoading(false);
  }, []);

  // Handle keyboard events for closing modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && expandedImage) {
        handleCloseExpanded();
      }
    };

    if (expandedImage) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [expandedImage]);

  const showSection = !loading && Array.isArray(data) && data.length > 0;

  const handleImageClick = (member: TeamMember) => {
    setExpandedImage(member);
  };

  const handleCloseExpanded = () => {
    setExpandedImage(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseExpanded();
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-palette-gold-400 to-palette-gold-500 bg-clip-text text-transparent mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          The creative minds behind ColorWaves&apos; success
        </p>
        
        {/* Team Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-300 mb-6">
            ColorWaves is powered by a multidisciplinary team passionate about quality, creativity, and growth:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-palette-gold-400 mb-2">Production Team</h3>
              <p className="text-gray-300 text-sm">Quality Control & Production Members</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-palette-gold-400 mb-2">Designers</h3>
              <p className="text-gray-300 text-sm">Interior, Exterior & Structural Design Experts</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-palette-gold-400 mb-2">Architects</h3>
              <p className="text-gray-300 text-sm">Structural, 3D & Animation Specialists</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-palette-gold-400 mb-2">Engineers</h3>
              <p className="text-gray-300 text-sm">Planning, Cost, Structural, Civil, Electrical & Mechanical Engineers</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-palette-gold-400 mb-2">Marketing & Sales Team</h3>
              <p className="text-gray-300 text-sm">Business development and customer relations</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-palette-gold-400 mb-2">Administrative & HR Team</h3>
              <p className="text-gray-300 text-sm">Operations and human resources management</p>
            </div>
          </div>
        </div>
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

      {/* Team Images Section */}
      {showSection && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-palette-gold-400 mb-8">
            Our Team Members
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {data!.map((member, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl cursor-pointer group"
                onClick={() => handleImageClick(member)}
              >
                <Image 
                  src={member.image} 
                  alt={member.name || "Team member"} 
                  fill 
                  className="object-cover group-hover:brightness-110 transition-all duration-300" 
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    Click to expand
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={handleCloseExpanded}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200 backdrop-blur-sm"
              aria-label="Close expanded image"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Image Container */}
            <div className="relative w-full h-full">
              <Image
                src={expandedImage.image}
                alt={expandedImage.name}
                width={800}
                height={800}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

