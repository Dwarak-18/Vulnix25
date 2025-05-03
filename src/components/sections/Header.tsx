
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          VULNIX
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#events" className="hover:text-primary transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#register" className="hover:text-primary transition-colors">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;