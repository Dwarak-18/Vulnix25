
import type { LucideIcon } from 'lucide-react';
import { Code, FileText, Presentation, SearchCheck, Lightbulb, HelpCircle, Goal, ShieldAlert, Wrench, Camera, Flag } from 'lucide-react'; // Added Flag

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
    name: 'Zero-Day Code',
    description: 'Test your coding prowess against the clock. Solve complex problems and showcase your algorithmic skills.',
    type: 'Technical',
    icon: Code,
    startTime: '09:30 AM',
    endTime: '11:00 AM',
    rules: ['Teams consist of 2 members and may use any programming language.', 'Each round must be completed within the specified time limit. Collaboration is required; external help or plagiarism leads to disqualification.'],
    descriptionDetails: 'The challenge features three rounds-Easy, Medium, and Hard-each increasing in difficulty and testing both accuracy and code efficiency. Teams must solve all problems in each round, with rankings determined by correctness, code efficiency, and submission speed.',
    eliminationProcess: 'Teams failing to solve all problems in a round within the time limit are eliminated. Only teams with correct and timely submissions advance to the next round.',
  },
  {
    id: 'paper-presentation',
    name: 'Glitch Docs',
    description: 'Present your research and insights on cutting-edge cybersecurity and Other Related topics. Share your knowledge with peers and experts.',
    type: 'Technical',
    icon: FileText,
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    rules: ['Open to UG and PG students from all domains; teams can have 1 to 4 members, or individuals may participate.', ' Presentations must be 4–10 slides (including references) and submitted in PowerPoint or PDF format.', 'Judging is based on originality, relevance, clarity, presentation skills, and Q&A performance; cybersecurity topics receive extra credit.', 'The judges’ decisions are final, and all participants receive certificates, with awards for winners.'],
    descriptionDetails: 'Glitch Docs encourages innovative paper presentations, allowing students from any field to showcase ideas, either solo or in teams of up to four. Presentations should be concise, visually clear, and well-organized, adhering to the slide and time limits, and must be submitted in the specified formats. The event rewards impactful content, effective communication, and strong responses during Q&A, with special recognition for cybersecurity-related work.',
    eliminationProcess: 'Entries not meeting eligibility, format, or time requirements will be disqualified. Only teams adhering to all rules and delivering presentations within the allotted time advance to award consideration.',
  },
  {
    id: 'cybercase-investigation',
    name: 'Busted',
    description: 'Step into the shoes of a digital forensics expert. Analyze evidence, trace intrusions, and solve a simulated cybercrime.',
    type: 'Technical',
    icon: SearchCheck,
    startTime: '11:30 AM',
    endTime: '01:00 PM',
    rules: ['Participants may compete individually or in teams of up to two members.','Each team will analyze a provided cybersecurity breach scenario, outlining their investigation, recovery plan, and recommendations.', 'All findings must be presented to a judging panel within the allotted time, adhering to the event’s format and guidelines.', 'Plagiarism or failure to follow the scenario requirements will lead to disqualification.'],
    descriptionDetails: 'Step into the role of a cybersecurity analyst and tackle realistic breach scenarios inspired by actual incidents, focusing on startups and new companies. Participants will investigate the origins and timeline of the breach, identify vulnerabilities and attack vectors, and detail their response and recovery strategy. The challenge emphasizes actionable recommendations for recovery and the design of a tailored cybersecurity framework, culminating in a clear, structured presentation to the judges.',
    eliminationProcess: 'Teams or individuals that fail to provide a complete investigation, do not present actionable recovery measures, or violate event rules will be eliminated. Only those who deliver thorough, relevant, and well-communicated solutions within the guidelines advance for final evaluation and awards.',
  },
  {
    id: 'poster-presentation',
    name: 'Pixel Punk',
    description: 'Visually communicate your cybersecurity projects or ideas. Engage with attendees and explain your work concisely.',
    type: 'Technical',
    icon: Presentation,
    startTime: '12:00 PM',
    endTime: '01:30 PM',
    rules: ['Teams must have 1 or 2 members.', 'Each round has a specific focus: scenario-based AI image generation (Round 1), recreating a given poster using only the assigned AI tool (Round 2), and final poster polishing using Canva alone (Round 3).', 'The final round includes a review, where accuracy of the generated image is the main judging criterion.', 'Only the specified AI tools are allowed in each round; adherence to the process is mandatory.'],
    descriptionDetails: 'Pixelpunk is an AI-driven poster creation event, challenging participants to master prompt engineering and AI manipulation through three progressive rounds: scenario-based generation, poster recreation, and Canva-based refinement. Participants must generate outputs that closely match given statements or reference images, demonstrating both creativity and technical skill in prompt crafting and AI tool usage. The event emphasizes real-world AI problem-solving and the ability to achieve precise, high-quality visual results through iterative prompt refinement and editing.',
    eliminationProcess: 'Teams that fail to generate outputs meeting the scenario requirements, use unauthorized tools, or do not achieve sufficient accuracy in their final posters are eliminated. Only teams whose submissions align with the round objectives and pass the accuracy review advance to the next stage or are considered for awards.',
  },
  {
    id: 'idea-pitch',
    name: 'Concept - Clash',
    description: 'Pitch your innovative cybersecurity solution or startup idea. Convince the judges of its potential and impact.',
    type: 'Technical',
    icon: Lightbulb,
    startTime: '01:30 PM',
    endTime: '03:00 PM',
    rules: ['Teams must consist of 1 to 3 members.', 'The problem statement is provided on the spot; all solutions and presentations must be original and created during the event.', 'Each round must be completed within strict time limits, and final pitches must be submitted on time.', 'Participants must respect judges and fellow teams throughout the competition.'],
    descriptionDetails: 'Idea Pitch is a fast-paced, on-the-spot competition where teams receive a real-world problem and move through ideation, analysis, design, and pitching rounds, all under tight deadlines. Participants are challenged to quickly generate innovative solutions, assess their practicality, create a simple visual using Canva, and deliver a concise final pitch to the judges. The event emphasizes creativity, clarity, teamwork, and the ability to think and communicate effectively under pressure',
    eliminationProcess: 'Teams are eliminated if they miss deadlines, submit incomplete or non-original work, or violate rules of conduct. Only teams that successfully complete all rounds within the time limits and present original, relevant solutions advance for final judging and awards',
  },
  {
    id: 'ctf-challenge', // New CTF event ID
    name: 'FlagRunner 0x7E9',
    description: 'Capture The Flag! Engage in a series of cybersecurity challenges spanning web, crypto, forensics, and more.',
    type: 'Technical',
    icon: Flag, // Using Flag icon for CTF
    startTime: '02:00 PM', // Example time, adjust as needed
    endTime: '04:00 PM', // Example time, adjust as needed
    rules: [
      'Teams can have up to 2 members, each with only one account; teamwork is essential.',
      'No flag sharing between teams, no bypassing questions, and no DDoS or brute-force attacks are allowed.',
      'Participants must remain offline from social media during the event to ensure fair play'
    ],
    descriptionDetails: 'FlagRunner 0x7E9 is a cyberpunk-themed Capture The Flag (CTF) event where teams solve challenges in reverse engineering, web exploitation, and cryptography to find hidden "flags" within a controlled environment. Teams earn points for each flag captured, with challenges designed to test technical cybersecurity skills, creative problem-solving, and real-time collaboration. The event is structured in rounds, with each challenge requiring participants to demonstrate technical expertise and ethical conduct',
    eliminationProcess: 'Teams will be eliminated for sharing flags, using multiple accounts, attempting DDoS/brute-force attacks, bypassing questions, or violating any event rules. Only teams that adhere to all rules and successfully capture flags within the competition environment remain eligible for ranking and awards',
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

