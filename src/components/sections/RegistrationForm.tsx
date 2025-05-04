'use client';

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { eventsData } from '@/constants/events';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

// Define the form schema using Zod
const registrationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phoneNumber: z.string().min(10, {message: 'Phone number must be at least 10 numbers'}),
  college: z.string().min(3, { message: 'College name is required.' }),
  year: z.string().min(1, { message: 'Please select your year.' }),
  event: z.string().min(1, { message: 'Please select an event.' }),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

// IMPORTANT: Replace with your actual Google Form URL and field names
const GOOGLE_FORM_URL = 'https://forms.gle/kpPKCXGsCG7aSuQf9'; // Replace YOUR_FORM_ID
const FORM_FIELDS_MAPPING = {
  name: 'entry.NAME OF THE STUDENT', // Replace YOUR_NAME_FIELD_ID
  email: 'entry.E-MAIL ID', // Replace YOUR_EMAIL_FIELD_ID
  phoneNumber:'entry.PHONE NUMBER',
  college: 'entry.COLLEGE NAME', // Replace YOUR_COLLEGE_FIELD_ID
  year: 'entry.YEAR OF STUDY',
  technicalEvent: 'entry.TECHNICAL EVENT',
  nonTechnicalEvent: 'entry.NON TECHNICAL EVENT',
  };

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, control, formState: { errors }, reset, setValue } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

 const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    setIsSubmitting(true);

    // Construct the form data payload for Google Forms
    const formData = new FormData();
    formData.append(FORM_FIELDS_MAPPING.name, data.name);
    formData.append(FORM_FIELDS_MAPPING.email, data.email);
    formData.append(FORM_FIELDS_MAPPING.phoneNumber, data.phoneNumber);
    formData.append(FORM_FIELDS_MAPPING.college, data.college);
    formData.append(FORM_FIELDS_MAPPING.year, data.year);
    if (data.event === 'General Admission') {
      // Do not add any value for technical or non-technical events
    } else {
      const selectedEvent = eventsData.find((event) => event.name === data.event);
      if (selectedEvent) {
        const eventField = selectedEvent.type === 'Technical' ? 'technicalEvent' : 'nonTechnicalEvent';
        formData.append(FORM_FIELDS_MAPPING[eventField as keyof typeof FORM_FIELDS_MAPPING], data.event);
      }
    }


    try {
      // Note: Google Forms submission via fetch might be blocked by CORS depending on settings.
      // This is a common pattern, but may require alternative methods (like a backend proxy or Apps Script) if it fails.
      // We use 'no-cors' mode which means we won't get a response status, but the data should still submit if the URL/fields are correct.
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Forms direct submission
        body: formData,
      });

      toast({
        title: "Registration Successful!",
        description: "Your details have been submitted. See you at VULNIX!",
        variant: "default", // Use default (or could customize)
      });
      reset(); // Clear the form
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Could not submit registration. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="register" className="py-16 md:py-24 backdrop-blur-sm"> {/* Removed background gradient */}
      <div className="container mx-auto px-4 flex justify-center">
         {/* Removed bg-card/80 to rely on backdrop-blur and border */}
        <Card className="w-full max-w-2xl backdrop-blur-md shadow-xl border border-accent/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-accent">Register Now</CardTitle>
            <CardDescription className="text-muted-foreground">
              Secure your spot at VULNIX! Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                <Input
                  id="name"
                  {...register('name')}
                  className="bg-input/70 border-border focus:border-accent focus:ring-accent"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="bg-input/70 border-border focus:border-accent focus:ring-accent"
                   aria-invalid={errors.email ? "true" : "false"}
                />
                 {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-foreground/80">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  {...register('phoneNumber')}
                  className="bg-input/70 border-border focus:border-accent focus:ring-accent"
                  aria-invalid={errors.phoneNumber ? "true" : "false"}
                />
                {errors.phoneNumber && <p className="text-destructive text-xs mt-1">{errors.phoneNumber.message}</p>}
              </div>

              {/* College Field */}
               <div className="space-y-2">
                 <Label htmlFor="college" className="text-foreground/80">College Name</Label>
                 <Input
                   id="college"
                   {...register('college')}
                  className="bg-input/70 border-border focus:border-accent focus:ring-accent"
                   aria-invalid={errors.college ? "true" : "false"}
                 />
                 {errors.college && <p className="text-destructive text-xs mt-1">{errors.college.message}</p>}
               </div>

               {/* Year Field */}
               <div className="space-y-2">
                 <Label htmlFor="year" className="text-foreground/80">Year of Study</Label>
                 <Select onValueChange={(value) => setValue('year', value)} name="year">
                    <SelectTrigger id="year" className="bg-input/70 border-border focus:ring-accent" aria-invalid={errors.year ? "true" : "false"}>
                     <SelectValue placeholder="Select your year" />
                   </SelectTrigger>
                   <SelectContent className="bg-popover border-border">
                     <SelectItem value="1st Year">1st Year</SelectItem>
                     <SelectItem value="2nd Year">2nd Year</SelectItem>
                     <SelectItem value="3rd Year">3rd Year</SelectItem>
                     <SelectItem value="4th Year">4th Year</SelectItem>
                     <SelectItem value="Other">Other</SelectItem>
                   </SelectContent>
                 </Select>
                  {errors.year && <p className="text-destructive text-xs mt-1">{errors.year.message}</p>}
               </div>

               {/* Event Selection Field */}
              <div className="space-y-2">
                <Label htmlFor="event" className="text-foreground/80">Select Event</Label>
                 <Select onValueChange={(value) => setValue('event', value)} name="event">
                   <SelectTrigger id="event" className="bg-input/70 border-border focus:ring-accent" aria-invalid={errors.event ? "true" : "false"}>
                     <SelectValue placeholder="Choose an event to register for" />
                   </SelectTrigger>
                   <SelectContent className="bg-popover border-border max-h-60">
                     <SelectItem value="General Admission">General Admission (Attend All)</SelectItem>
                     {eventsData.map((event) => (
                       <SelectItem key={event.id} value={event.name}>
                         {event.name} ({event.type})
                       </SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
                 {errors.event && <p className="text-destructive text-xs mt-1">{errors.event.message}</p>}
               </div>


              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg animate-pulse-glow" disabled={isSubmitting}>
                {isSubmitting ? (
                   <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                   </>
                 ) : (
                   'Register for VULNIX'
                 )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;
