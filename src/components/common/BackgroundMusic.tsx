
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
  // YouTube links (like https://youtu.be/cIto6qzW0Mc?si=Fy1va-1TLIiVZJ5R) cannot be used directly here.
  // You need a direct link to an audio file (e.g., .mp3, .ogg).
  const musicSrc = '/assets/cyberpunk-background-music.mp3'; // Kept existing placeholder

  // Create audio element only on the client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(musicSrc);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Start with a lower volume
    }
    // Cleanup function to pause and nullify audio element on unmount
    return () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
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
    if (isInteracted && !isPlaying && audioRef.current?.paused) { // Check if paused before playing
       audioRef.current.play().then(() => {
         setIsPlaying(true);
       }).catch(error => {
         console.error("Audio playback failed after interaction:", error);
         setIsPlaying(false);
       });
    }
    // Dependency array includes isInteracted and isPlaying
  }, [isInteracted, isPlaying]);

   // Add a listener for the first user interaction to enable autoplay attempt
   useEffect(() => {
     const handleFirstInteraction = () => {
       if (!isInteracted) {
         setIsInteracted(true);
         // Optional: Attempt to play immediately on first interaction if not playing
         // This might be redundant with the effect above, but ensures immediate attempt
         if(audioRef.current && audioRef.current.paused){
             audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
         }
       }
       // Remove listeners after first interaction
       window.removeEventListener('click', handleFirstInteraction, { capture: true });
       window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
       window.removeEventListener('touchstart', handleFirstInteraction, { capture: true }); // Added touchstart
     };

     // Use capture phase to catch interaction earlier
     window.addEventListener('click', handleFirstInteraction, { capture: true });
     window.addEventListener('keydown', handleFirstInteraction, { capture: true });
     window.addEventListener('touchstart', handleFirstInteraction, { capture: true }); // Added touchstart

     return () => {
       window.removeEventListener('click', handleFirstInteraction, { capture: true });
       window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
       window.removeEventListener('touchstart', handleFirstInteraction, { capture: true }); // Added touchstart
     };
   }, [isInteracted]); // Re-run if isInteracted changes (though it only changes once)


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
       {/* Inform user if interaction is needed - simplified, less intrusive */}
       {/* {!isInteracted && !isPlaying && (
         <p className="text-xs text-muted-foreground mt-1 text-center hidden">Click to enable sound</p>
       )} */}
    </div>
  );
};

export default BackgroundMusic;
