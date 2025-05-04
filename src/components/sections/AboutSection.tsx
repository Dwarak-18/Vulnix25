'use client'; // Required for hooks like useState, useEffect, useRef

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn utility

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden parallax-section backdrop-blur-sm"
      style={{
        backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_3t/11665.jpg')`,
      }}
      data-ai-hint="cyberpunk technology abstract"
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 z-0"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <Card
          ref={cardRef}
          className={cn(
            "max-w-4xl mx-auto bg-card/70 backdrop-blur-md border-primary/30 shadow-xl overflow-hidden",
            "transition-all duration-1000 ease-out", // Animation transition
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" // Initial and final animation states
          )}
        >
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">About VULNIX</CardTitle>
          </CardHeader>
          <CardContent className="text-justify text-lg md:text-xl text-card-foreground leading-relaxed">
             <p className="mb-4">
             Vulnix'25 is a pioneering cybersecurity symposium organized by Dhanalakshmi Srinivasan College of Engineering and Technology. This premier event is dedicated to exploring the evolving landscape of digital security, where vulnerabilities meet innovative defense strategies.
             </p>
             <p className="mb-4">
             At Vulnix'25, attendees will experience a robust agenda featuring keynote addresses by industry leaders, interactive workshops, panel discussions, and live competitions—all aimed at deepening cyber expertise and sparking collaborative solutions. Whether you're a student, professional, or researcher, this symposium is your opportunity to gain invaluable insights into the latest trends, vulnerabilities, and countermeasures in cybersecurity.
             </p>
             <p>
             Join us as we unite passionate minds to confront the challenges of today’s digital arena, empower the next generation of cybersecurity experts, and pave the way for a safer, smarter tomorrow.
             </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
