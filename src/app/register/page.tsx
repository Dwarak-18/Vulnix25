
// src/app/register/page.tsx
import RegistrationForm from '@/components/sections/RegistrationForm';

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-background to-background/50">
      <RegistrationForm />
    </div>
  );
}