
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
  contactName: string;
  contactPhone: string;
  contactName2?: string; // Optional second contact name
  contactPhone2?: string; // Optional second contact phone
  cashPrize?: string;
}

export const eventsData: Event[] = [
  {
    id: 'coding-challenge',
    name: 'Zero-Day Code',
    description: 'Test your coding prowess against the clock. Solve complex problems and showcase your algorithmic skills.',
    type: 'Technical',
    icon: Code,
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    rules: ['Teams consist of 2 members and may use any programming language.', 'Each round must be completed within the specified time limit. Collaboration is required; external help or plagiarism leads to disqualification.'],
    descriptionDetails: 'The challenge features three rounds-Easy, Medium, and Hard-each increasing in difficulty and testing both accuracy and code efficiency. Teams must solve all problems in each round, with rankings determined by correctness, code efficiency, and submission speed.',
    eliminationProcess: 'Teams failing to solve all problems in a round within the time limit are eliminated. Only teams with correct and timely submissions advance to the next round.',
    contactName: 'Dwarak M', // Placeholder
    contactPhone: '+91-9487710415', // Placeholder
    contactName2: 'Karthikeyan K', // Placeholder 2nd contact
    contactPhone2: '+91-9043277837', // Placeholder 2nd contact
    cashPrize: 'Exciting cash rewards!',
  },
  {
    id: 'paper-presentation',
    name: 'Glitch Docs',
    description: 'Present your research and insights on cutting-edge cybersecurity and Other Related topics. Share your knowledge with peers and experts.',
    type: 'Technical',
    icon: FileText,
    startTime: '10:15 AM',
    endTime: '12:45 PM',
    rules: ['Open to UG and PG students from all domains; teams can have 1 to 4 members, or individuals may participate.', ' Presentations must be 4–10 slides (including references) and submitted in PowerPoint or PDF format.', 'Judging is based on originality, relevance, clarity, presentation skills, and Q&A performance.', 'The judges’ decisions are final, and all participants receive certificates, with awards for winners.'],
    descriptionDetails: 'Glitch Docs encourages innovative paper presentations, allowing students from any field to showcase ideas, either solo or in teams of up to four. Presentations should be concise, visually clear, and well-organized, adhering to the slide and time limits, and must be submitted in the specified formats. The event rewards impactful content, effective communication, and strong responses during Q&A, with special recognition for cybersecurity-related work.',
    eliminationProcess: 'Entries not meeting eligibility, format, or time requirements will be disqualified. Only teams adhering to all rules and delivering presentations within the allotted time advance to award consideration.',
    contactName: 'Dhileepkumar D', // Placeholder
    contactPhone: '+91-8190958791', // Placeholder
    contactName2: 'Deepath K', // Placeholder 2nd contact
    contactPhone2: '+91-8524991761', // Placeholder 2nd contact
    cashPrize: 'Exciting cash rewards!',
  },
  {
    id: 'cybercase-investigation',
    name: 'Busted',
    description: 'Step into the shoes of a digital forensics expert. Analyze evidence, trace intrusions, and solve a simulated cybercrime.',
    type: 'Technical',
    icon: SearchCheck,
    startTime: '10:15 AM',
    endTime: '11:30 AM',
    rules: ['Participants may compete individually or in teams of up to two members.','Each team will analyze a provided cybersecurity breach scenario, outlining their investigation, recovery plan, and recommendations.', 'All findings must be presented to a judging panel within the allotted time, adhering to the event’s format and guidelines.', 'Plagiarism or failure to follow the scenario requirements will lead to disqualification.'],
    descriptionDetails: 'Step into the role of a cybersecurity analyst and tackle realistic breach scenarios inspired by actual incidents, focusing on startups and new companies. Participants will investigate the origins and timeline of the breach, identify vulnerabilities and attack vectors, and detail their response and recovery strategy. The challenge emphasizes actionable recommendations for recovery and the design of a tailored cybersecurity framework, culminating in a clear, structured presentation to the judges.',
    eliminationProcess: 'Teams or individuals that fail to provide a complete investigation, do not present actionable recovery measures, or violate event rules will be eliminated. Only those who deliver thorough, relevant, and well-communicated solutions within the guidelines advance for final evaluation and awards.',
    contactName: 'Bayan Fahim S', // Placeholder
    contactPhone: '+91-9884647628', // Placeholder
    contactName2: 'Narendass S', // Placeholder 2nd contact
    contactPhone2: '+91-9585040148', // Placeholder 2nd contact
    cashPrize: 'Exciting cash rewards!',
  },
  {
    id: 'poster-presentation',
    name: 'Pixel Punk',
    description: 'Visually communicate your cybersecurity projects or ideas. Engage with attendees and explain your work concisely.',
    type: 'Technical',
    icon: Presentation,
    startTime: '11:00 AM',
    endTime: '12:30 PM',
    rules: ['Teams must have 1 or 2 members.', 'Each round has a specific focus: scenario-based AI image generation (Round 1), recreating a given poster using only the assigned AI tool (Round 2), and final poster polishing using Canva alone (Round 3).', 'The final round includes a review, where accuracy of the generated image is the main judging criterion.', 'Only the specified AI tools are allowed in each round; adherence to the process is mandatory.'],
    descriptionDetails: 'Pixelpunk is an AI-driven poster creation event, challenging participants to master prompt engineering and AI manipulation through three progressive rounds: scenario-based generation, poster recreation, and Canva-based refinement. Participants must generate outputs that closely match given statements or reference images, demonstrating both creativity and technical skill in prompt crafting and AI tool usage. The event emphasizes real-world AI problem-solving and the ability to achieve precise, high-quality visual results through iterative prompt refinement and editing.',
    eliminationProcess: 'Teams that fail to meet the scenario requirements, use unauthorized tools, or do not achieve sufficient accuracy in their final posters are eliminated. Only teams whose submissions align with the round objectives and pass the accuracy review will advance to the next stage or be considered for awards.',
    contactName: 'Dheerajkumar S', // Placeholder
    contactPhone: '+91-7871098687', // Placeholder
    contactName2: 'Kumaran K', // Placeholder 2nd contact
    contactPhone2: '+91-9080409483', // Placeholder 2nd contact
    cashPrize: 'Exciting cash rewards!',
  },
  {
    id: 'idea-pitch',
    name: 'Concept - Clash',
    description: 'Pitch your innovative cybersecurity solution or startup idea. Convince the judges of its potential and impact.',
    type: 'Technical',
    icon: Lightbulb,
    startTime: '10:30 AM',
    endTime: '11:45 AM',
    rules: ['Teams must consist of 1 to 3 members.', 'The problem statement is provided on the spot; all solutions and presentations must be original and created during the event.', 'Each round must be completed within strict time limits, and final pitches must be submitted on time.', 'Participants must respect judges and fellow teams throughout the competition.'],
    descriptionDetails: 'Idea Pitch is a fast-paced, on-the-spot competition where teams receive a real-world problem and move through ideation, analysis, design, and pitching rounds, all under tight deadlines. Participants are challenged to quickly generate innovative solutions, assess their practicality, create a simple visual using Canva, and deliver a concise final pitch to the judges. The event emphasizes creativity, clarity, teamwork, and the ability to think and communicate effectively under pressure',
    eliminationProcess: 'Teams are eliminated if they miss deadlines, submit incomplete or non-original work, or violate rules of conduct. Only teams that successfully complete all rounds within the time limits and present original, relevant solutions advance for final judging and awards',
    contactName: 'Vikram S', // Placeholder
    contactPhone: '+91-9962146336', // Placeholder
    contactName2: 'Shailaendran M S', // Placeholder 2nd contact
    contactPhone2: '+91-8825601897', // Placeholder 2nd contact
    cashPrize: 'Exciting cash rewards!',
  },
  {
    id: 'ctf-challenge',
    name: 'FlagRunner 0x7E9',
    description: 'Capture The Flag! Engage in a series of cybersecurity challenges spanning web, crypto, forensics, and more.',
    type: 'Technical',
    icon: Flag,
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    rules: [
      'Teams can have up to 2 members, each with only one account; teamwork is essential.',
      'No flag sharing between teams, no bypassing questions, and no DDoS or brute-force attacks are allowed.',
      'Participants must remain offline from social media during the event to ensure fair play'
    ],
    descriptionDetails: 'FlagRunner 0x7E9 is a cyberpunk-themed Capture The Flag (CTF) event where teams solve challenges in reverse engineering, web exploitation, and cryptography to find hidden "flags" within a controlled environment. Teams earn points for each flag captured, with challenges designed to test technical cybersecurity skills, creative problem-solving, and real-time collaboration. The event is structured in rounds, with each challenge requiring participants to demonstrate technical expertise and ethical conduct',
    eliminationProcess: 'Teams will be eliminated for sharing flags, using multiple accounts, attempting DDoS/brute-force attacks, bypassing questions, or violating any event rules. Only teams that adhere to all rules and successfully capture flags within the competition environment remain eligible for ranking and awards',
    contactName: 'Balaji A', // Placeholder
    contactPhone: '+91-9943947027', // Placeholder
    contactName2: 'Silambaraselvan R', // Placeholder 2nd contact
    contactPhone2: '+91-6379569787', // Placeholder 2nd contact
    cashPrize: 'Exciting cash rewards!',
  },
  {
    id: 'real-or-ruse',
    name: 'Real or Ruse',
    description: 'Test your ability to spot phishing scams, fake news, and social engineering tactics. Can you tell fact from fiction?',
    type: 'Non-Technical',
    icon: HelpCircle,
    startTime: '12:15 PM',
    endTime: '01:45 PM',
    rules: ['Team Size: Round 1:- 2 members; Round 2:-  1 member from selected teams.', 'Host reads statements aloud. Participants respond with “Real” or “Ruse” within the time limit: Round 1: 30 seconds per question (10 questions). Round 2: 15 seconds per question (5 questions).', 'Correct answers earn 1 point. Incorrect answers earn 0 points, and opponents may be awarded points.', 'Highest score wins; ties decided by a sudden death bonus round.'],
    descriptionDetails: 'Real or Ruse is a truth-detection game where teams decide if statements read aloud by the host are True (“Real”) or False (“Ruse”). It tests quick Thinking and Knowledge under time pressure.',
    eliminationProcess: 'Incorrect answers causing loss of points. Failure to respond within the time limit. Use of external help or communication. Unsportsmanlike behavior.',
    contactName: 'Aakash M', // Placeholder
    contactPhone: '+91-8637461649', // Placeholder
    contactName2: 'Badreesh T',
    contactPhone2: '+91-7305842645',

  },
  {
    id: 'mix-and-fix',
    name: 'Mix N\' Fix',
    description: 'A fun, hands-on challenge involving basic hardware troubleshooting or network cable crimping under pressure.',
    type: 'Non-Technical',
    icon: Wrench,
    startTime: '12:15 PM',
    endTime: '01:45 PM',
    rules: ['Round 1 :- Word Puzzle: Teams collaboratively unscramble a jumbled word within the allotted time. The first team to finish advances.', 'Round 2:– Quiz: The selected team answers a non-technical quiz.', 'Correct answers earn 1 point; incorrect or unanswered questions earn 0 points.', 'The fastest and most accurate solutions win.'],
    descriptionDetails: 'Mix n\' Fix is a fast-paced, team-based word and quiz challenge testing vocabulary, teamwork, and general knowledge. Open to UG and PG students, teams compete to unscramble words and answer quiz questions quickly and accurately.',
    eliminationProcess: 'Failure to finish puzzles, incorrect quiz answers, rule violations, Not adhering to team size requirements or misconduct.',
    contactName: 'Mugil M U', // Placeholder
    contactPhone: '+91-6381071273', // Placeholder
    contactName2: 'Silambarasan',
    contactPhone2: '+91-6381848206'
  },
  {
    id: 'survival-showdown',
    name: 'Survival Showdown',
    description: 'A series of quick, fun challenges testing logic, teamwork, and general awareness in simulated scenarios.',
    type: 'Non-Technical',
    icon: ShieldAlert,
    startTime: '12:00 PM',
    endTime: '01:30 PM',
    rules: ['Round 1: Participants view an image for 15 seconds and then estimate the number of items within 1 minute, relying solely on memory.', 'No note-taking, verbal communication, or external help allowed. False or misleading answers may incur a -1 point penalty.', 'Round 2: Participants identify all differences between two similar images within the given time.', 'Differences must be clearly marked; false marking or misleading responses can lead to disqualification.', 'Teams must have the correct number of members; time limits and differences count announced at start; judges’ decisions are final.'],
    descriptionDetails: 'Survival Showdown is a two-round event designed to test participants\' memory and observation skills. In the first round, participants memorize a complex image and estimate the number of items shown. The second round challenges participants to spot differences between two similar images.',
    eliminationProcess: 'False info, false marking, wrong team size, or unsportsmanlike conduct leads to penalties or disqualification.',
    contactName: 'Pradeesh T', // Placeholder
    contactPhone: '+91-6374145230', // Placeholder
    contactName2: 'Basker P',
    contactPhone2: '+91-6374465247',

  },
  {
    id: 'photography',
    name: 'Shutter - Sync',
    description: 'Capture the essence of VULNIX. Themed photography contest focusing on technology, security, and campus life.',
    type: 'Non-Technical',
    icon: Camera,
    startTime: '11:00 AM',
    endTime: '01:00 PM',
    rules: ['Solo players or teams of two.', 'Duration: 2 hours within the college campus.', 'All photos must be taken during event time only. No editing or filters allowed unless specified.', 'Respect privacy and environment; obtain permission before photographing strangers. Use only your own camera or phone.', 'Submit photos before the deadline to qualify for judging. Winners are selected based on creativity, clarity, and relevance..'],
    descriptionDetails: 'Shutters Sync is a creative photography challenge where solo players or teams of two complete unique photo tasks on campus using a DSLR or smartphone. The event emphasizes creativity, clarity, and relevance.',
    eliminationProcess: 'Using edited/outside photos, disturbing others, late submissions, or rule violations.  ',
    contactName: 'Gokul P', // Placeholder
    contactPhone: '+91-9025821050', // Placeholder
    contactName2: 'Venkatesan K',
    contactPhone2: '+91-6369562028',
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
