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
  rules: string[];
  descriptionDetails: string;
  eliminationProcess: string;
}

export const eventsData: Event[] = [
  {
    id: 'coding-challenge',
    name: 'Coding Challenge',
    description: 'Test your coding prowess against the clock. Solve complex problems and showcase your algorithmic skills.',
    type: 'Technical',
    icon: Code,
    startTime: '09:30 AM',
    endTime: '11:00 AM',
    rules: ['Participants will be given a set of algorithmic problems to solve within the time limit.', 'Use of any programming language is permitted.'],
    descriptionDetails: 'This event is designed to test participants\' problem-solving skills and algorithmic thinking under pressure.',
    eliminationProcess: 'Participants will be ranked based on the number of problems solved correctly and the time taken to solve them.',
  },
  {
    id: 'paper-presentation',
    name: 'Paper Presentation',
    description: 'Present your research and insights on cutting-edge cybersecurity topics. Share your knowledge with peers and experts.',
    type: 'Technical',
    icon: FileText,
    startTime: '10:00 AM',
    endTime: '11:30 AM',    
        rules: ['Presentations should be based on original research or in-depth analysis of a cybersecurity topic.', 'Presentations will be judged based on content, delivery, and Q&A.'],
    descriptionDetails: 'Participants are to present their research, ideas, or analysis on a cybersecurity-related topic in front of a panel of judges.',
    eliminationProcess: 'Judges will score presentations based on content, clarity, delivery, and engagement.',
  },
    {
    id: 'cybercase-investigation',
    name: 'CyberCase Investigation',
    description: 'Step into the shoes of a digital forensics expert. Analyze evidence, trace intrusions, and solve a simulated cybercrime.',
    type: 'Technical',
    icon: SearchCheck,
    startTime: '11:30 AM',
    endTime: '01:00 PM',    
    rules: ['Teams must analyze provided digital evidence to solve a simulated cybercrime.', 'Use of forensic tools and techniques is allowed.'],
    descriptionDetails: 'Teams will be presented with a fictional cybercrime scenario and must analyze the provided digital evidence to identify the culprit and explain their methods.',
    eliminationProcess: 'Teams will be evaluated based on the accuracy and thoroughness of their investigation, as well as the clarity of their conclusions.',
  },
  {
    id: 'poster-presentation',
    name: 'Poster Presentation',
    description: 'Visually communicate your cybersecurity projects or ideas. Engage with attendees and explain your work concisely.',
    type: 'Technical',
    icon: Presentation,
    startTime: '12:00 PM',
    endTime: '01:30 PM',    
        rules: ['Posters must visually communicate a cybersecurity project or idea.', 'Presenters should be prepared to engage with attendees and answer questions.'],
    descriptionDetails: 'Participants are to present a cybersecurity project or idea in the form of a poster.',
    eliminationProcess: 'Judges will evaluate posters based on visual communication, clarity of information, and the presenter\'s ability to engage with attendees.',
  },
  {
    id: 'idea-pitch',
    name: 'Idea Pitch',
    description: 'Pitch your innovative cybersecurity solution or startup idea. Convince the judges of its potential and impact.',
    type: 'Technical',
    icon: Lightbulb,
    startTime: '01:30 PM',
    endTime: '03:00 PM',    
        rules: ['Participants will pitch their cybersecurity solution or startup idea to a panel of judges.', 'Pitch should include the problem, solution, and market potential.'],
    descriptionDetails: 'Participants will pitch their cybersecurity solution or startup idea in front of a panel of judges.',
    eliminationProcess: 'Judges will score based on innovation, feasibility, impact, and the quality of the presentation.',
  },

  {
    id: 'real-or-ruse',
    name: 'Real or Ruse',
    description: 'Test your ability to spot phishing scams, fake news, and social engineering tactics. Can you tell fact from fiction?',
    type: 'Non-Technical',
    icon: HelpCircle,
    startTime: '09:00 AM',
    endTime: '10:00 AM',    
    rules: ['Participants will be shown a series of online or social media scenarios and must determine whether they are legitimate or deceptive.'],
    descriptionDetails: 'Participants\' ability to recognize phishing scams, fake news, and social engineering tactics will be tested.',
    eliminationProcess: 'Participants will be ranked based on the number of correct classifications of the scenarios.',
  },
    {
    id: 'mix-and-fix',
    name: 'Mix and Fix',
    description: 'A fun, hands-on challenge involving basic hardware troubleshooting or network cable crimping under pressure.',
    type: 'Non-Technical',
    icon: Wrench,
    startTime: '10:30 AM',
    endTime: '11:30 AM',    
    rules: ['Participants will face basic hardware troubleshooting or network cable crimping challenges.', 'The fastest and most accurate solutions win.'],
    descriptionDetails: 'Participants will engage in hands-on challenges involving basic hardware troubleshooting or network cable crimping.',
    eliminationProcess: 'Challenges will be timed, and participants will be ranked based on the speed and accuracy of their solutions.',
  },
   {
    id: 'survival-showdown',
    name: 'Survival Showdown',
    description: 'A series of quick, fun challenges testing logic, teamwork, and general awareness in simulated scenarios.',
    type: 'Non-Technical',
    icon: ShieldAlert,
    startTime: '11:00 AM',
    endTime: '12:30 PM',    
        rules: ['Participants will face a series of quick challenges that test logic, teamwork, and situational awareness.'],
    descriptionDetails: 'Participants will face a series of challenges that test logic, teamwork, and situational awareness.',
    eliminationProcess: 'Participants will be scored based on the number of challenges completed and their performance in each challenge.',
   },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Capture the essence of VULNIX. Themed photography contest focusing on technology, security, and campus life.',
    type: 'Non-Technical',
    icon: Camera,
    startTime: '12:00 PM',
    endTime: '02:00 PM',
    rules: ['Photos must be original and thematically related to technology, security, and campus life.', 'Submissions will be judged on creativity and composition.'],
    descriptionDetails: 'Capture the essence of VULNIX through the lens. This contest invites participants to submit photos that showcase themes related to technology, security, and campus life.',
    eliminationProcess: 'Submissions will be judged by a panel of experts based on their creativity, composition, and thematic relevance.',
  },
   {
    id: 'football', // Assuming this is maybe digital/e-sports or a casual game? Adjusted description.
    name: 'E-Football Challenge',
    description: 'Show off your virtual football skills in a friendly e-sports tournament. Compete for bragging rights!',
    type: 'Non-Technical',
    icon: Goal, // Using Goal, closest representation
    startTime: '01:00 PM',    
    endTime: '03:00 PM',
    rules: ['Standard e-football rules apply.', 'Matches will be conducted in a tournament format.'],
    descriptionDetails: 'Participants will compete in a virtual football tournament.',
    eliminationProcess: 'Elimination will follow a standard tournament format, with the winners progressing to the next round.',
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
