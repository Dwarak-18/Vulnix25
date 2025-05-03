import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  // Google Maps Embed URL for "Dhanalakshmi Srinivasan College of Engineering and Technology, East Coast Road, Mamallapuram, Chennai 603104"
  // Note: It's better to search for the place name + address for accuracy.
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.422597365!2d80.17801877488675!3d12.620258387663766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53ab5250243c71%3A0xbb338ff75412f3f5!2sDhanalakshmi%20Srinivasan%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1746295628509!5m2!1sen!2sin"; // Replace with the actual embed URL if needed

  return (
    <section id="location" className="py-16 md:py-24 bg-gradient-to-b from-background/90 to-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto bg-card/70 border-secondary/30 shadow-xl overflow-hidden">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-secondary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-secondary">Event Location</CardTitle>
          </CardHeader>
          <CardContent className="px-2 pb-2 md:px-6 md:pb-6">
             <p className="text-center text-muted-foreground mb-6 text-lg">
               Dhanalakshmi Srinivasan College of Engineering and Technology, East Coast Road, Mamallapuram, Chennai - 603104.
             </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/50 shadow-inner">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location Map"
                className="filter grayscale-[30%] contrast-125" // Optional: Add cyberpunk style filter
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MapSection;
