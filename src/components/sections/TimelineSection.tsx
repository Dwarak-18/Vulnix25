'use client'; // Add this directive

import React, { useState, Fragment } from 'react';
import { getSortedEvents, type Event } from '@/constants/events'; // Changed the import path
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react'; // Changed to named import
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
          <DialogDescription>
            <Badge className="mb-2" variant={event.type === 'Technical' ? 'secondary' : 'default'}>{event.type}</Badge>
            <div className="flex items-center text-xs mb-2 font-mono"><Clock className="h-3 w-3 mr-1.5" />{event.startTime} - {event.endTime}</div>
            <p>{event.description}</p>
            <h4 className="font-semibold mt-4 mb-1">Rules:</h4>
            <ul className="list-disc list-inside text-xs">
                {event.rules.map((rule, index) => <li key={index}>{rule}</li>)}
            </ul>
             <h4 className="font-semibold mt-4 mb-1">Detailed Description:</h4>
             <p className="text-xs">{event.descriptionDetails}</p>
             <h4 className="font-semibold mt-4 mb-1">Elimination Process:</h4>
             <p className="text-xs">{event.eliminationProcess}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};


const TimelineEvent = ({ event, onEventClick }: { event: Event; onEventClick: () => void }) => {
  const Icon = event.icon;
  const badgeVariant = event.type === 'Technical' ? 'secondary' : 'default';
  const iconBgColor = event.type === 'Technical' ? 'bg-secondary' : 'bg-primary';
  const iconTextColor = event.type === 'Technical' ? 'text-secondary-foreground' : 'text-primary-foreground';

  return (
    <div className="relative flex flex-col items-center text-center cursor-pointer group" onClick={onEventClick}>
      {/* Timeline Dot */}
      <div className={`w-8 h-8 rounded-full ${iconBgColor} flex items-center justify-center z-10 transition-transform group-hover:scale-110`}>
        <Icon className={`w-4 h-4 ${iconTextColor}`} />
      </div>
      <Card className="bg-card/80 backdrop-blur-sm shadow-md relative mt-2 w-full max-w-xs transition-shadow group-hover:shadow-lg group-hover:shadow-accent/20 border border-border/30 group-hover:border-accent/50">
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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary drop-shadow-md">Event Timeline</h2>
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block w-full h-1 bg-border/50 absolute top-4 left-0 transform -translate-y-1/2 z-0"></div>
           {/* Vertical Line for Mobile */}
           <div className="block md:hidden w-1 h-full bg-border/50 absolute left-4 top-0 bottom-0 transform -translate-x-1/2 z-0"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between relative z-10 gap-y-8 md:gap-x-4">
            {sortedEvents.map((event, index) => (
              <div key={event.id} className="relative w-full md:w-auto flex justify-center md:flex-1 px-2 md:px-0 pl-12 md:pl-0">
                 {/* Mobile Dot */}
                 <div className="block md:hidden absolute left-0 top-1 transform -translate-x-1/2 w-8 h-8 rounded-full bg-border flex items-center justify-center z-20">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${event.type === 'Technical' ? 'bg-secondary' : 'bg-primary'}`}>
                        <event.icon className={`w-4 h-4 ${event.type === 'Technical' ? 'text-secondary-foreground' : 'text-primary-foreground'}`} />
                    </div>
                 </div>
                <TimelineEvent event={event} onEventClick={() => handleEventClick(event)} />
              </div>
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
