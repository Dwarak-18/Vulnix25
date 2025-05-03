
'use client'; // Add this directive

import React, { useState } from 'react';
import { getSortedEvents, type Event } from '@/constants/events';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-popover backdrop-blur-md border-accent border">
        <DialogHeader>
          <DialogTitle>{event.name}</DialogTitle>
          {/* Optional: Keep a simple description if needed */}
          {/* <DialogDescription>Details for the selected event.</DialogDescription> */}
        </DialogHeader>
        {/* Moved complex content outside DialogDescription to avoid invalid nesting */}
        <div className="space-y-3 text-sm py-4">
          <Badge className="mb-2" variant={event.type === 'Technical' ? 'secondary' : 'default'}>
            {event.type}
          </Badge>
          <div className="flex items-center text-xs font-mono text-muted-foreground">
            <Clock className="mr-1.5 h-3 w-3" />
            {event.startTime} - {event.endTime}
          </div>
          <p className="text-muted-foreground">{event.description}</p>

          <h4 className="font-semibold mt-4 mb-1 text-foreground">Rules:</h4>
          <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
            {event.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>

          <h4 className="font-semibold mt-4 mb-1 text-foreground">Detailed Description:</h4>
          <p className="text-xs text-muted-foreground">{event.descriptionDetails}</p>

          <h4 className="font-semibold mt-4 mb-1 text-foreground">Elimination Process:</h4>
          <p className="text-xs text-muted-foreground">{event.eliminationProcess}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};


const TimelineEvent = ({ event, onEventClick }: { event: Event; onEventClick: () => void }) => {
  const Icon = event.icon;
  const badgeVariant = event.type === 'Technical' ? 'secondary' : 'default';

  return (
    <div className="relative pl-12 pb-8 cursor-pointer group" onClick={onEventClick}>
      {/* Vertical Line Segment (part of the main line) */}
      {/* Dot */}
      <div className="absolute left-0 top-1 transform -translate-x-1/2 w-8 h-8 rounded-full bg-border flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${event.type === 'Technical' ? 'bg-secondary' : 'bg-primary'}`}>
            <Icon className={`w-4 h-4 ${event.type === 'Technical' ? 'text-secondary-foreground' : 'text-primary-foreground'}`} />
        </div>
      </div>

      {/* Card */}
      <Card className="bg-card/80 backdrop-blur-sm shadow-md transition-shadow group-hover:shadow-lg group-hover:shadow-accent/20 border border-border/30 group-hover:border-accent/50 ml-4">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-1">
            <CardTitle className="text-lg font-semibold">{event.name}</CardTitle>
            <Badge variant={badgeVariant} className="text-xs ml-2 shrink-0">{event.type}</Badge>
          </div>
          <div className="flex items-center text-xs text-accent font-mono">
            <Clock className="h-3 w-3 mr-1.5" />
            <span>{event.startTime} - {event.endTime}</span>
          </div>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground pt-1">
            <p className="line-clamp-2">{event.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};


const TimelineSection = () => {
  const sortedEvents = getSortedEvents();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleModalClose = () => setSelectedEvent(null);

  return (
    <section id="timeline" className="py-16 md:py-24 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-3xl"> {/* Constrain width for better vertical layout */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary drop-shadow-md">Event Timeline</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2 z-0"></div>

          {/* Event Containers */}
          <div className="relative z-10">
            {sortedEvents.map((event) => (
              <TimelineEvent key={event.id} event={event} onEventClick={() => handleEventClick(event)} />
            ))}
          </div>
        </div>
      </div>
       {selectedEvent && (
          <EventModal event={selectedEvent} isOpen={true} onClose={handleModalClose} />
        )}
    </section>
  );
};
export default TimelineSection;
