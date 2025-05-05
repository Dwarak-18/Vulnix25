
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Music, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false); // Track user interaction

  // Placeholder URL - User needs to replace this with their actual music file URL
  const musicSrc = '/assets/cyberpunk-background-music.mp3'; // Example path

  // Create audio element only on the client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(musicSrc);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Start with a lower volume
    }
  }, [musicSrc]);

  const togglePlayPause = useCallback(() => {
    if (!audioRef.current) return;

    if (!isInteracted) {
      setIsInteracted(true); // Mark interaction
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Attempt to play, handle potential errors (e.g., browser restrictions)
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Audio playback failed:", error);
        // Maybe show a message to the user or simply update state if needed
        setIsPlaying(false);
      });
    }
  }, [isPlaying, isInteracted]);

  // Attempt to play only after user interaction if not already playing
  useEffect(() => {
    if (isInteracted && !isPlaying && audioRef.current) {
       audioRef.current.play().then(() => {
         setIsPlaying(true);
       }).catch(error => {
         console.error("Audio playback failed after interaction:", error);
         setIsPlaying(false);
       });
    }
    // Dependency array includes isInteracted to trigger play attempt after interaction
  }, [isInteracted, isPlaying]);

   // Add a listener for the first user interaction to enable autoplay attempt
   useEffect(() => {
     const handleFirstInteraction = () => {
       if (!isInteracted) {
         setIsInteracted(true);
       }
       window.removeEventListener('click', handleFirstInteraction);
       window.removeEventListener('keydown', handleFirstInteraction);
     };

     window.addEventListener('click', handleFirstInteraction);
     window.addEventListener('keydown', handleFirstInteraction);

     return () => {
       window.removeEventListener('click', handleFirstInteraction);
       window.removeEventListener('keydown', handleFirstInteraction);
     };
   }, [isInteracted]);


  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlayPause}
        className={cn(
          "rounded-full bg-card/80 backdrop-blur-sm hover:bg-accent/20 hover:text-accent transition-colors",
          isPlaying ? "text-accent" : "text-muted-foreground"
        )}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? <Music className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </Button>
       {/* Inform user if interaction is needed */}
       {!isInteracted && !isPlaying && (
         <p className="text-xs text-muted-foreground mt-1 text-center hidden">Click to enable sound</p>
       )}
    </div>
  );
};

export default BackgroundMusic;
