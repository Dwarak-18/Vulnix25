'use client'; // Add this directive

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import CountdownTimer from '@/components/sections/CountdownTimer'; // Import the CountdownTimer

const HeroSection = () => {
  const handleScroll = () => {
    // Ensure this runs only on the client where `document` is available
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const router = useRouter();
  const handleRegisterClick = () => router.push('/register');

  // Target date: May 17, 2025
  const targetDate = new Date('2025-05-17T00:00:00').toISOString();

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center text-center text-foreground overflow-hidden parallax-section"
      style={{
        backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_3t/15155.jpg')`,
      }}
      data-ai-hint="cyberpunk city night neon"
    >
      {/* Overlay for contrast if using a background image */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 z-0"></div>

      <div className="relative z-10 p-4 flex flex-col items-center">
        {/* Apply glow-link class for hover effect */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight glow-link cursor-pointer">
          <span className="text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">VULN</span>
          <span className="text-secondary drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">IX</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl text-muted-foreground font-light">
          Explore the frontiers of cybersecurity. Engage, learn, and compete in VULNIX, the premier tech symposium.
        </p>

        {/* Add the Countdown Timer */}
        <div className="mb-8">
          <CountdownTimer targetDate={targetDate} />
        </div>

        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-glow shadow-lg"
            onClick={handleScroll} // Use the client-side safe handler
          >
            Discover Events
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-glow shadow-lg"
            onClick={handleRegisterClick}
          >
            Register Now
          </Button>
        </div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute bottom-10 left-10 h-1 w-1 bg-accent rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-20 right-20 h-2 w-2 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 h-1 w-1 bg-secondary rounded-full animate-ping delay-500 opacity-40"></div>
    </section>
  );
};

export default HeroSection;
