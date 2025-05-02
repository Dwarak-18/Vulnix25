import type { LucideIcon } from 'lucide-react';
import { Code, FileText, Presentation, SearchCheck, Lightbulb, HelpCircle, Goal, ShieldAlert, Wrench, Camera } from 'lucide-react';

export interface Event {
  id: string;
  name: string;
  description: string;
  type: 'Technical' | 'Non-Technical';
  icon: LucideIcon;
  startTime: string; // Format HH:MM AM/PM e.g., "09:00 AM"
  endTime: string;   // Format HH:MM AM/PM e.g., "10:30 AM"
}

export const eventsData: Event[] = [
  // Technical Events
  {
    id: 'coding-challenge',
    name: 'Coding Challenge',
    description: 'Test your coding prowess against the clock. Solve complex problems and showcase your algorithmic skills.',
    type: 'Technical',
    icon: Code,
    startTime: '09:30 AM',
    endTime: '11:00 AM',
  },
  {
    id: 'paper-presentation',
    name: 'Paper Presentation',
    description: 'Present your research and insights on cutting-edge cybersecurity topics. Share your knowledge with peers and experts.',
    type: 'Technical',
    icon: FileText,
    startTime: '10:00 AM',
    endTime: '11:30 AM',
  },
    {
    id: 'cybercase-investigation',
    name: 'CyberCase Investigation',
    description: 'Step into the shoes of a digital forensics expert. Analyze evidence, trace intrusions, and solve a simulated cybercrime.',
    type: 'Technical',
    icon: SearchCheck,
    startTime: '11:30 AM',
    endTime: '01:00 PM',
  },
  {
    id: 'poster-presentation',
    name: 'Poster Presentation',
    description: 'Visually communicate your cybersecurity projects or ideas. Engage with attendees and explain your work concisely.',
    type: 'Technical',
    icon: Presentation,
    startTime: '12:00 PM',
    endTime: '01:30 PM',
  },
  {
    id: 'idea-pitch',
    name: 'Idea Pitch',
    description: 'Pitch your innovative cybersecurity solution or startup idea. Convince the judges of its potential and impact.',
    type: 'Technical',
    icon: Lightbulb,
    startTime: '01:30 PM',
    endTime: '03:00 PM',
  },

  // Non-Technical Events
  {
    id: 'real-or-ruse',
    name: 'Real or Ruse',
    description: 'Test your ability to spot phishing scams, fake news, and social engineering tactics. Can you tell fact from fiction?',
    type: 'Non-Technical',
    icon: HelpCircle,
    startTime: '09:00 AM',
    endTime: '10:00 AM',
  },
    {
    id: 'mix-and-fix',
    name: 'Mix and Fix',
    description: 'A fun, hands-on challenge involving basic hardware troubleshooting or network cable crimping under pressure.',
    type: 'Non-Technical',
    icon: Wrench,
    startTime: '10:30 AM',
    endTime: '11:30 AM',
  },
   {
    id: 'survival-showdown',
    name: 'Survival Showdown',
    description: 'A series of quick, fun challenges testing logic, teamwork, and general awareness in simulated scenarios.',
    type: 'Non-Technical',
    icon: ShieldAlert,
    startTime: '11:00 AM',
    endTime: '12:30 PM',
   },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Capture the essence of VULNIX. Themed photography contest focusing on technology, security, and campus life.',
    type: 'Non-Technical',
    icon: Camera,
    startTime: '12:00 PM',
    endTime: '02:00 PM',
  },
   {
    id: 'football', // Assuming this is maybe digital/e-sports or a casual game? Adjusted description.
    name: 'E-Football Challenge',
    description: 'Show off your virtual football skills in a friendly e-sports tournament. Compete for bragging rights!',
    type: 'Non-Technical',
    icon: Goal, // Using Goal, closest representation
    startTime: '01:00 PM',
    endTime: '03:00 PM',
  },
];

// Helper function to get events sorted by start time
export const getSortedEvents = () => {
  return [...eventsData].sort((a, b) => {
    const timeA = new Date(`1970/01/01 ${a.startTime}`);
    const timeB = new Date(`1970/01/01 ${b.startTime}`);
    return timeA.getTime() - timeB.getTime();
  });
};
