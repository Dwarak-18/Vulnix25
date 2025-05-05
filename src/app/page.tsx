
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EventsSection from '@/components/sections/EventsSection';
import TimelineSection from '@/components/sections/TimelineSection';
// import RegistrationForm from '@/components/sections/RegistrationForm'; // Removed import
import MapSection from '@/components/sections/MapSection'; // Import MapSection
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TimelineSection />
      <MapSection /> {/* Add MapSection here */}
      {/* <RegistrationForm /> */} {/* Removed component usage */}
      <Footer />
    </div>
  );
}
