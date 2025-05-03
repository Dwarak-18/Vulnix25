import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card/70 border-primary/30 shadow-xl overflow-hidden">
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
            At Vulnix'25, attendees will experience a robust agenda featuring keynote addresses by industry leaders, interactive workshops, panel discussions, and live competitions—all aimed at deepening cyber expertise and sparking collaborative solutions. Whether you're a student, professional, or researcher, this symposium is your opportunity to gain invaluable insights into the latest trends, vulnerabilities, and countermeasures in cybersecurity.            </p>
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
