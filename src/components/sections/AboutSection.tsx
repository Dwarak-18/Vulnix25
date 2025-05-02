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
          <CardContent className="text-center text-lg md:text-xl text-card-foreground leading-relaxed">
            <p className="mb-4">
              VULNIX is a dynamic college symposium dedicated to cybersecurity awareness and practical guidance.
              In an increasingly digital world, understanding cyber threats and defenses is crucial.
            </p>
            <p className="mb-4">
              Our event brings together students, enthusiasts, and experts to explore the latest trends, challenges, and innovations in cybersecurity.
            </p>
            <p>
              Join us for a day of engaging technical competitions, insightful presentations, fun non-technical activities, and valuable networking opportunities designed to empower the next generation of cyber defenders.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
