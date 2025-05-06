
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react'; // Import Volume2 for unmuted state
import { cn } from '@/lib/utils';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted
  const [canPlay, setCanPlay] = useState(false); // Track if audio can play (post-interaction attempt)
  const [isInitialized, setIsInitialized] = useState(false); // Track if audio element is ready

  // Placeholder URL - User needs to replace this with their actual music file URL
  // YouTube links cannot be used directly here.
  // You need a direct link to an audio file (e.g., .mp3, .ogg).
  const musicSrc = '/assets/cyberpunk-background-music.m4a'; // Kept existing placeholder

  // Create audio element only on the client
  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio(musicSrc);
      audioRef.current.loop = true;
      audioRef.current.muted = true; // Start muted
      audioRef.current.load(); // Preload the audio

      // Set initialized state when audio is ready enough to play (optional but good)
      const handleCanPlay = () => setIsInitialized(true);
      audioRef.current.addEventListener('canplaythrough', handleCanPlay);
      audioRef.current.addEventListener('loadstart', () => setIsInitialized(false)); // Reset if loading starts again

      // Cleanup function
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplaythrough', handleCanPlay);
           // eslint-disable-next-line react-hooks/exhaustive-deps
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicSrc]); // Re-run only if musicSrc changes

  // Toggle Mute/Unmute and handle first play
  const toggleMute = () => {
    if (!audioRef.current || !isInitialized) {
        console.warn("Audio not initialized yet.");
        return; // Don't do anything if audio isn't ready
    }

    const nextMuted = !isMuted;

    // If audio is paused (implies first interaction or previously stopped)
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        // Successfully started playing
        setCanPlay(true);
        setIsMuted(nextMuted); // Update component state
        if (audioRef.current) audioRef.current.muted = nextMuted; // Apply mute state to audio element
      }).catch(error => {
        console.error("Audio playback failed:", error);
        // Optionally reset UI to muted state if play fails
        setCanPlay(false);
        setIsMuted(true); // Revert UI state to muted
      });
    } else {
      // If already playing, just toggle the mute state
      setIsMuted(nextMuted);
      audioRef.current.muted = nextMuted;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className={cn(
          "rounded-full bg-card/80 backdrop-blur-sm hover:bg-accent/20 hover:text-accent transition-colors",
          !isMuted && canPlay ? "text-accent" : "text-muted-foreground" // Style based on actual playing and muted state
        )}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        // Button is always enabled, click handles initialization/play
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>
       {/* Removed helper text */}
    </div>
  );
};

export default BackgroundMusic;
