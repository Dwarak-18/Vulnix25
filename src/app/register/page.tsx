
// src/app/register/page.tsx
import RegistrationForm from '@/components/sections/RegistrationForm';

export default function RegisterPage() {
  return (
    <div
      className="relative flex flex-col min-h-screen items-center justify-center parallax-section py-16 md:py-24" // Added relative, parallax-section, and padding
      style={{ backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_3t/10305.jpg')` }} // Added background image
      data-ai-hint="cyberpunk abstract grid" // Added data-ai-hint
    >
       {/* Overlay for contrast */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90 z-0"></div>

      {/* Registration Form needs to be above the overlay */}
      <div className="relative z-10 w-full px-4">
        <RegistrationForm />
      </div>
    </div>
  );
}
