import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  gradientColor?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage, 
  gradientColor = "from-primary/80 to-secondary/60" 
}: PageHeaderProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={backgroundImage}
            alt="Page background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} z-10`}></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-light animate-fade-in-up animate-delay-200">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-15 overflow-hidden">
        {[
          { left: '15%', top: '20%', delay: '0s', duration: '4s' },
          { left: '85%', top: '70%', delay: '0.5s', duration: '4.5s' },
          { left: '25%', top: '80%', delay: '1s', duration: '3.5s' },
          { left: '75%', top: '30%', delay: '1.5s', duration: '4.2s' },
          { left: '45%', top: '50%', delay: '2s', duration: '3.8s' },
          { left: '60%', top: '10%', delay: '2.5s', duration: '4.3s' },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          ></div>
        ))}
      </div>
    </section>
  );
} 