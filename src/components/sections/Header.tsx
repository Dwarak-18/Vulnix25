
'use client'; // Add this directive for useState and event handlers

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#events", label: "Events" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#location", label: "Location" },
  { href: "/#about", label: "About" },
  { href: "/register", label: "Register" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary glow-link">
          VULNIX
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="glow-link text-sm hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
             <SheetTrigger asChild>
               <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                 <Menu className="h-6 w-6" />
                 <span className="sr-only">Toggle Menu</span>
               </Button>
             </SheetTrigger>
             <SheetContent side="right" className="w-[250px] bg-sidebar border-l-border/50 p-6">
                {/* Mobile Menu Logo */}
                <div className="mb-8">
                   <Link href="/" className="text-2xl font-bold text-primary glow-link" onClick={() => setIsMobileMenuOpen(false)}>
                     VULNIX
                   </Link>
                </div>
                {/* Mobile Menu Links */}
                <nav>
                  <ul className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                         <SheetClose asChild>
                           <Link
                             href={item.href}
                             className={cn(
                                "block py-2 text-lg text-sidebar-foreground hover:text-primary transition-colors glow-link",
                                // Add active link styling if needed based on current route
                             )}
                             onClick={() => setIsMobileMenuOpen(false)} // Close sheet on link click
                           >
                             {item.label}
                           </Link>
                         </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
             </SheetContent>
           </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
