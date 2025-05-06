
'use client';

import React, { useState, Fragment } from 'react';
import { getSortedEvents, type Event } from '@/constants/events';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Phone, User } from 'lucide-react'; // Added Phone and User icons
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button'; // Import Button

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
          <DialogDescription className="pt-2 text-sm">
             {event.description}
           </DialogDescription>
        </DialogHeader>
        {/* Moved complex content outside DialogDescription */}
        <div className="space-y-3 text-sm py-4">
           <Badge className="mb-2" variant={event.type === 'Technical' ? 'secondary' : 'default'}>
             {event.type}
           </Badge>
          <div className="flex items-center text-xs font-mono text-muted-foreground">
            <Clock className="mr-1.5 h-3 w-3" />
            {event.startTime} - {event.endTime}
          </div>

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

          {/* Contact Information */}
          <h4 className="font-semibold mt-4 mb-1 text-foreground">Contact:</h4>
           <div className="space-y-2"> {/* Wrapper for contact sections */}
             {/* First Contact */}
             <div className="flex flex-col items-start space-y-1">
               <div className="flex items-center text-xs text-muted-foreground">
                 <User className="mr-1.5 h-3 w-3" />
                 <span>{event.contactName}</span>
               </div>
               <Button
                 variant="outline"
                 size="sm"
                 className="text-xs h-auto py-1 px-2 border-accent/50 hover:bg-accent/10 hover:text-accent"
                 asChild
               >
                 <a href={`tel:${event.contactPhone}`} aria-label={`Call ${event.contactName} at ${event.contactPhone}`}>
                   <Phone className="mr-1.5 h-3 w-3" />
                   Call {event.contactPhone}
                 </a>
               </Button>
             </div>

             {/* Second Contact (Conditional) */}
             {event.contactName2 && event.contactPhone2 && (
                <div className="flex flex-col items-start space-y-1 pt-2"> {/* Add padding top */}
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="mr-1.5 h-3 w-3" />
                    <span>{event.contactName2}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-auto py-1 px-2 border-accent/50 hover:bg-accent/10 hover:text-accent"
                    asChild
                  >
                    <a href={`tel:${event.contactPhone2}`} aria-label={`Call ${event.contactName2} at ${event.contactPhone2}`}>
                      <Phone className="mr-1.5 h-3 w-3" />
                      Call {event.contactPhone2}
                    </a>
                  </Button>
                </div>
             )}
           </div>
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
    <section
      id="timeline"
      className="relative py-16 md:py-24 bg-background/90 backdrop-blur-sm parallax-section overflow-hidden"
      style={{backgroundImage: "url('https://wallpaperaccess.com/download/cyberpunk-pixel-5797258')"}}
      data-ai-hint="cyberpunk pixel art technology"
    >
       {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90 z-0"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 max-w-3xl relative z-10"> {/* Added relative z-10 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary drop-shadow-md">Event Timeline</h2>
        <div className="relative">
          {/* Vertical Line - Made more visible using secondary color */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-secondary/50 transform -translate-x-1/2 z-0"></div>

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
