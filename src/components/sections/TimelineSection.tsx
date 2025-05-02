import React from 'react';
import { getSortedEvents, type Event } from '@/constants/events';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const TimelineEvent = ({ event, isLeft }: { event: Event; isLeft: boolean }) => {
  const Icon = event.icon;
  const badgeVariant = event.type === 'Technical' ? 'secondary' : 'default';
  const alignmentClass = isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8';
  const iconAlignmentClass = isLeft ? 'md:right-[-18px]' : 'md:left-[-18px]';
  const iconBgColor = event.type === 'Technical' ? 'bg-secondary' : 'bg-primary';
  const iconTextColor = event.type === 'Technical' ? 'text-secondary-foreground' : 'text-primary-foreground';

  return (
    <div className={`relative md:w-1/2 mb-8 md:mb-0 ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'} ${alignmentClass}`}>
       {/* Timeline Dot */}
        <div className={`absolute top-1 w-8 h-8 rounded-full ${iconBgColor} hidden md:flex items-center justify-center z-10 ${iconAlignmentClass}`}>
            <Icon className={`w-4 h-4 ${iconTextColor}`} />
        </div>
      <Card className="bg-card/80 backdrop-blur-sm shadow-md relative ">
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
        <CardContent className="text-sm text-muted-foreground">
          {event.description}
        </CardContent>
      </Card>
    </div>
  );
};


const TimelineSection = () => {
  const sortedEvents = getSortedEvents();

  return (
    <section id="timeline" className="py-16 md:py-24 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary drop-shadow-md">Event Timeline</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border/50 transform md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {sortedEvents.map((event, index) => (
               <div key={event.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full pl-10 md:pl-0">
                 {/* Mobile timeline point */}
                 <div className="absolute left-0 top-1 flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-border z-10">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${event.type === 'Technical' ? 'bg-secondary' : 'bg-primary'}`}>
                       <event.icon className={`w-4 h-4 ${event.type === 'Technical' ? 'text-secondary-foreground' : 'text-primary-foreground'}`} />
                    </div>
                 </div>
                 <TimelineEvent event={event} isLeft={index % 2 === 0} />
                 {/* Spacer for the right side on desktop */}
                 {index % 2 === 0 && <div className="hidden md:block w-1/2"></div>}
                 {/* Spacer for the left side on desktop */}
                 {index % 2 !== 0 && <div className="hidden md:block w-1/2"></div>}
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
