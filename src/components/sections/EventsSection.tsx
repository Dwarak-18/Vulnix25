import React from 'react';
import { eventsData } from '@/constants/events';
import EventCard from './EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BrainCircuit, Gamepad2 } from 'lucide-react';

const EventsSection = () => {
  const technicalEvents = eventsData.filter(event => event.type === 'Technical');
  const nonTechnicalEvents = eventsData.filter(event => event.type === 'Non-Technical');

  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-background/80 to-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary drop-shadow-md">Explore the Events</h2>

        <Tabs defaultValue="technical" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-card/50 border border-border backdrop-blur-sm mb-8">
            <TabsTrigger value="technical" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <BrainCircuit className="mr-2 h-5 w-5"/> Technical
            </TabsTrigger>
            <TabsTrigger value="non-technical" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Gamepad2 className="mr-2 h-5 w-5"/> Non-Technical
            </TabsTrigger>
          </TabsList>
          <TabsContent value="technical">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {technicalEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
             </div>
          </TabsContent>
          <TabsContent value="non-technical">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {nonTechnicalEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EventsSection;
