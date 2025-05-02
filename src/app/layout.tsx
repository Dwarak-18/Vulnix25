import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Assuming Geist font setup
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VULNIX Event Hub',
  description: 'VULNIX - College Symposium on Cybersecurity Awareness',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Force dark theme based on cyberpunk palette */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>        
          {children}
          <Toaster />
          {/* Add Toaster here */}
      </body> 
    </html>
  );
}
