import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Github } from 'lucide-react'; // Added Github as an example
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourhandle' }, // Replace with actual URLs
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/vulnix25?igsh=MThkd3pqcWxqNTk1eg%3D%3D' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/dhanalakshmi-srinivasan-college-of-engineering-and-technology-autonomous/posts/?feedView=all' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/16VfB7Aznu/' },
    //  { name: 'GitHub', icon: Github, url: 'https://github.com/yourorg' }, // Example
  ];

  return (
    <footer className="py-8 bg-gradient-to-t from-background/90 to-background text-muted-foreground border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild // Use asChild to make the Button act like a link wrapper
              className="text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit our ${link.name}`}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} VULNIX`25 Symposium. All rights reserved.
        </p>
         <p className="text-xs mt-2">
           Designed By <span className="text-primary">&lt;/&gt;</span> Dwarak.
         </p>
      </div>
    </footer>
  );
};

export default Footer;
