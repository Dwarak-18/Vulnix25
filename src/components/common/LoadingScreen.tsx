
'use client';

import React, { useState, useEffect, type FC } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onLoaded: () => void;
  initialDelay?: number; // Optional delay before starting the progress
  duration?: number; // Approximate duration for the loading simulation in ms
}

const LoadingScreen: FC<LoadingScreenProps> = ({ onLoaded, initialDelay = 200, duration = 5000 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isStarting, setIsStarting] = useState(true); // State to manage initial delay

  useEffect(() => {
    // Apply initial delay
    const startTimeout = setTimeout(() => {
      setIsStarting(false);
    }, initialDelay);

    return () => clearTimeout(startTimeout);
  }, [initialDelay]);


  useEffect(() => {
    if (isStarting) return; // Don't start interval if we are in initial delay phase

    const intervalTime = Math.max(10, duration / 100); // Calculate interval time for smooth progress

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          // Wait a bit after reaching 100% before fading out
          setTimeout(() => {
             setIsVisible(false);
             // Notify parent component after fade-out transition (adjust timeout based on transition duration)
             setTimeout(onLoaded, 500); // Match fade-out duration
           }, 300);
          return 100;
        }

        let increment;
        // Phase 1: Fast (0-25%) - Target ~0.5s
        if (prevProgress < 25) {
          // Need to cover 25% in ~10 intervals (0.5s / 50ms)
          increment = 2.5 + Math.random() * 1; // Base 2.5% + random 0-1%
        }
        // Phase 2: Standard (25-75%) - Target ~3.5s
        else if (prevProgress < 75) {
          // Need to cover 50% in ~70 intervals (3.5s / 50ms)
          increment = 0.7 + Math.random() * 0.5; // Base ~0.71% + random 0-0.5%
        }
        // Phase 3: Quick (75-100%) - Target ~1s
        else {
           // Need to cover 25% in ~20 intervals (1s / 50ms)
           increment = 1.25 + Math.random() * 0.75; // Base 1.25% + random 0-0.75%
        }

        return Math.min(prevProgress + increment, 100);
      });
    }, intervalTime); // Update progress frequently

    return () => {
      clearInterval(timer);
    };
  }, [duration, onLoaded, isStarting]); // Add isStarting dependency

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[hsl(var(--background-start-hsl))] transition-opacity duration-500 ease-out', // Base solid background
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' // Overall fade-out
      )}
    >
      {/* Gradient Overlay */}
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-gradient-to-br from-[hsl(var(--background-start-hsl))] to-[hsl(var(--background-end-hsl))]", // The target gradient
        )}
        style={{
             opacity: isVisible ? progress / 100 : 0, // Dynamic opacity based on progress
             transition: 'opacity 0.1s linear' // Smooth opacity transition as progress updates
             }}
      />

      {/* Content Container - ensure it's above the overlay */}
      <div className="relative z-10 w-full max-w-md p-8 text-center">
         {/* Logo */}
         <div className="mb-8 text-4xl font-bold text-primary glow-link">
            VULNIX
         </div>
         {/* Progress Bar */}
        <Progress value={progress} className="w-full h-2 bg-muted border border-border/50" />
        {/* Text */}
        <p className="mt-4 text-lg font-mono text-accent">
          Loading... {Math.round(progress)}%
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Initializing cybersecurity protocols...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

