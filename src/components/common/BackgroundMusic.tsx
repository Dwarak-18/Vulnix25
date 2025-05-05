
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react'; // Import Volume2 for unmuted state
import { cn } from '@/lib/utils';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted
  const [isInteracted, setIsInteracted] = useState(false); // Track user interaction
  const [canPlay, setCanPlay] = useState(false); // Track if audio can play

  // Placeholder URL - User needs to replace this with their actual music file URL
  // YouTube links (like https://youtu.be/cIto6qzW0Mc?si=Fy1va-1TLIiVZJ5R) cannot be used directly here.
  // You need a direct link to an audio file (e.g., .mp3, .ogg).
  const musicSrc = '/assets/cyberpunk-background-music.m4a'; // Kept existing placeholder

  // Create audio element only on the client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(musicSrc);
      audioRef.current.loop = true;
      audioRef.current.muted = isMuted; // Set initial muted state
    }
    // Cleanup function to pause and nullify audio element on unmount
    return () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicSrc]); // Only re-run if musicSrc changes

  // Function to attempt playing audio
  const attemptPlay = useCallback(() => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setCanPlay(true);
        // Apply muted state immediately after play starts
        if(audioRef.current) audioRef.current.muted = isMuted;
      }).catch(error => {
        console.error("Audio playback failed:", error);
        setCanPlay(false);
      });
    } else if (audioRef.current && !audioRef.current.paused) {
        // Already playing, ensure muted state is correct
        setCanPlay(true);
        audioRef.current.muted = isMuted;
    }
  }, [isMuted]); // Depend on isMuted

  // Handle first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isInteracted) {
        setIsInteracted(true);
        attemptPlay(); // Attempt to play on first interaction
      }
      // Remove listeners after first interaction
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };

    window.addEventListener('click', handleFirstInteraction, { capture: true });
    window.addEventListener('keydown', handleFirstInteraction, { capture: true });
    window.addEventListener('touchstart', handleFirstInteraction, { capture: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };
  }, [isInteracted, attemptPlay]);

  // Toggle Mute/Unmute
  const toggleMute = () => {
    if (!audioRef.current) return;

    // If not playing yet (due to no interaction), try starting it now
    if (!canPlay && isInteracted) {
        attemptPlay();
    }

    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  };


  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute} // Changed to toggleMute
        className={cn(
          "rounded-full bg-card/80 backdrop-blur-sm hover:bg-accent/20 hover:text-accent transition-colors",
          !isMuted ? "text-accent" : "text-muted-foreground" // Style based on muted state
        )}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"} // Updated aria-label
        disabled={!isInteracted} // Disable button until user interacts
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>
       {/* Inform user if interaction is needed - simplified, less intrusive */}
       {!isInteracted && (
         <p className="text-[10px] text-muted-foreground/50 mt-1 text-center hidden md:block w-16">Click page to enable sound</p>
       )}
    </div>
  );
};

export default BackgroundMusic;
