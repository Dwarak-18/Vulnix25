'use client';

import React, { useState, useEffect } from 'react';
import {differenceInSeconds, formatDuration, intervalToDuration} from 'date-fns';

interface CountdownTimerProps {
  targetDate: string; // ISO string format
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<Duration | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indicate component has mounted

    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = differenceInSeconds(target, now);

      if (diff <= 0) {
        setTimeLeft(null); // Timer finished
        return null;
      }

      return intervalToDuration({ start: now, end: target });
    };

    // Initial calculation on mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(timer); // Stop timer when target date is reached
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [targetDate]);

  if (!isClient) {
    // Render placeholder or loading state on the server/initial client render
    return <div className="text-center text-lg text-muted-foreground">Loading countdown...</div>;
  }

  if (!timeLeft) {
    return <div className="text-center text-2xl text-accent font-bold">The event has started!</div>;
  }

  // Format the duration object for display
   const formattedDuration = formatDuration(timeLeft, {
     format: ['days', 'hours', 'minutes', 'seconds'],
     zero: false, // Don't show zero values like "0 days" if duration is less than a day
   });

   // Custom display logic for a more visually appealing countdown
   const formatTimeUnit = (value: number | undefined, label: string) => (
    <div className="flex flex-col items-center mx-2 p-2 bg-card/50 backdrop-blur-sm rounded-lg shadow-md border border-border/30 min-w-[60px]">
      <span className="text-3xl md:text-4xl font-bold text-primary">{value ?? 0}</span>
      <span className="text-xs uppercase text-muted-foreground">{label}</span>
    </div>
  );


  return (
    <div className="flex justify-center items-center text-center font-mono my-4">
       {formatTimeUnit(timeLeft.days, 'Days')}
       <span className="text-3xl md:text-4xl text-primary mx-1">:</span>
       {formatTimeUnit(timeLeft.hours, 'Hours')}
       <span className="text-3xl md:text-4xl text-primary mx-1">:</span>
       {formatTimeUnit(timeLeft.minutes, 'Mins')}
       <span className="text-3xl md:text-4xl text-primary mx-1">:</span>
       {formatTimeUnit(timeLeft.seconds, 'Secs')}
    </div>
  );
};

export default CountdownTimer;
