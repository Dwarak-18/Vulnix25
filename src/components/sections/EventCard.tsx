import React from 'react';
import type { Event } from '@/constants/events';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Verified } from 'lucide-react';
import { Clock } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const Icon = event.icon;
  const cardBorderColor = event.type === 'Technical' ? 'border-secondary/50' : 'border-primary/50';
  const badgeVariant = event.type === 'Technical' ? 'secondary' : 'default'; // Pink for non-tech, Blue for tech

  return (
    <Card className={`bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-shadow duration-300 ${cardBorderColor} border-l-4 overflow-hidden h-full flex flex-col`}>
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <div className={`p-2 rounded-md bg-${event.type === 'Technical' ? 'secondary' : 'primary'}/20`}>
          <Icon className={`h-8 w-8 text-${event.type === 'Technical' ? 'secondary' : 'primary'}`} />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold leading-tight">{event.name}</CardTitle>
           <Badge variant={badgeVariant} className="mt-1 text-xs">{event.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between pt-0">
         <CardDescription className="text-sm text-muted-foreground mb-4 flex-grow">
           {event.description}
           <p className='mt-2'>
            <span className='font-bold flex items-center gap-2 text-accent'><Verified className='h-4 w-4'/> Certificate is provided.</span>
            {/* <span className='font-semibold text-muted-foreground ml-1'> is provided.</span> */}
           </p>
         </CardDescription>
         <div className="flex items-center text-xs text-accent font-mono mt-auto pt-2 border-t border-border/50">
           <Clock className="h-3 w-3 mr-1.5" />
           <span>{event.startTime} - {event.endTime}</span>
         </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
