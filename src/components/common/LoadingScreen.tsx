
'use client';

import React, { useState, useEffect, type FC } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onLoaded: () => void;
  initialDelay?: number; // Optional delay before starting the progress
  duration?: number; // Approximate duration for the loading simulation in ms
}

const LoadingScreen: FC<LoadingScreenProps> = ({ onLoaded, initialDelay = 200, duration = 1500 }) => {
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

    const intervalTime = Math.max(10, duration / 100); // Calculate interval time for smooth progress over duration

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
        // Increment progress; make it non-linear for a nicer feel
        const increment = Math.random() * 5 + 1; // Random increment between 1 and 6
        return Math.min(prevProgress + increment, 100);
      });
    }, intervalTime); // Update progress more frequently for smoother animation

    return () => {
      clearInterval(timer);
    };
  }, [duration, onLoaded, isStarting]); // Add isStarting dependency

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-out',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="w-full max-w-md p-8 text-center">
         {/* Optional: Add a pulsing logo or icon */}
         <div className="mb-8 text-4xl font-bold text-primary animate-pulse">
            VULNIX
         </div>
        <Progress value={progress} className="w-full h-2 bg-muted border border-border/50" />
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

