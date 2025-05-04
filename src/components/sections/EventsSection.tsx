import React from 'react';
import { eventsData } from '@/constants/events';
import EventCard from './EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BrainCircuit, Gamepad2 } from 'lucide-react';

const EventsSection = () => {
  const technicalEvents = eventsData.filter(event => event.type === 'Technical');
  const nonTechnicalEvents = eventsData.filter(event => event.type === 'Non-Technical');

  return (
    <section
      id="events"
      className="relative py-16 md:py-24 overflow-hidden parallax-section" // Added relative, overflow-hidden, parallax-section
      style={{
        backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_3t/14859.jpg')`, // Added background image
      }}
      data-ai-hint="cyberpunk circuit board abstract" // Added data-ai-hint
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90 z-0"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10"> {/* Added relative z-10 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary drop-shadow-md">Explore the Events</h2>

        <Tabs defaultValue="technical" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-card/60 border border-border/50 backdrop-blur-sm mb-8"> {/* Adjusted background opacity */}
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
