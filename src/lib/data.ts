/**
 * Single source of truth for portfolio content.
 * Edit this file to update the site. No UI surgery required.
 */

export type Skill = { name: string; level?: 'core' | 'familiar' | 'learning' };
export type SkillGroup = { category: string; skills: Skill[] };

export type ExperienceEntry = {
  role: string;
  company: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
  tags?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  featured: boolean;
  hook: string;
  description: string;
  longDescription?: string;
  tech: string[];
  highlights: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: boolean;
  };
  status: 'shipped' | 'in-progress' | 'archived';
  cover?: string;
};

export type CertificateGroup = {
  slug: string;
  name: string;
  description?: string;
};
export type Language = { name: string; level: string; flag: string };

export const profile = {
  name: 'Harshavardhan K G',
  shortName: 'Harshavardhan',
  initials: 'HKG',
  role: 'Full Stack Developer',
  tagline: 'Building blockchain & AI driven web experiences',
  location: 'Anywhere in India',
  email: 'harshavardhan041104@gmail.com',
  phone: '+91 88078 11044',
  resumeUrl: '/resume.pdf',
  bio: [
    "I'm a B.Tech Information Technology student at Sri Krishna College of Engineering and Technology, passionate about emerging technologies and AI innovation.",
    "I've built and shipped production systems including a blockchain integrated civic platform for the Jharkhand Government at Smart India Hackathon 2025, a functional online voting system used for live club elections, and a disaster preparedness and response system.",
    "I've completed my internship at Bechtel (Information & Digital – I&D), where I worked on CaseStudy, a production engineering application built on React/TypeScript and a .NET 8 Clean Architecture backend.",
  ],
  rotatingTaglines: [
    'Full Stack Developer.',
    'Blockchain Builder.',
    'AI Tinkerer.',
    'Hackathon Builder.',
    'Cloud Enthusiast.',
  ],
  stats: [
    { label: 'Hackathon', value: 'SIH 2025' },
    { label: 'Projects Shipped', value: '3+' },
    { label: 'Certifications', value: '24' },
    { label: 'Languages Spoken', value: '4' },
  ],
};

export const socials = {
  github: 'https://github.com/HarshavardhanKG',
  linkedin: 'https://www.linkedin.com/in/harshavardhan-k-g-5747592a0/',
  twitter: '',
  email: `mailto:${profile.email}`,
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', level: 'core' },
      { name: 'C++', level: 'core' },
      { name: 'JavaScript', level: 'core' },
      { name: 'TypeScript', level: 'familiar' },
      { name: 'Python', level: 'learning' },
    ],
  },
  {
    category: 'Web',
    skills: [
      { name: 'HTML5', level: 'core' },
      { name: 'CSS3', level: 'core' },
      { name: 'React.js', level: 'core' },
      { name: 'Node.js', level: 'familiar' },
      { name: 'Next.js', level: 'learning' },
      { name: 'Tailwind CSS', level: 'learning' },
      { name: 'Dotnet', level: 'learning' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 'core' },
      { name: 'SQL Server Management Studio', level: 'learning' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 'core' },
      { name: 'Vercel', level: 'learning' },
      { name: 'Azure', level: 'learning' },
    ],
  },
  {
    category: 'AI & Tools',
    skills: [
      { name: 'Cross platform Apps', level: 'core' },
      { name: 'AI Automation', level: 'familiar' },
      { name: 'Blockchain', level: 'familiar' },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: 'Information & Digital Intern',
    company: 'Bechtel',
    start: 'May 18, 2026',
    end: 'Jun 10, 2026',
    location: 'Gurugram, India - On-Site',
    bullets: [
      'Fixed state management bugs and optimized navigation flows to cut redundant API calls',
      'Built a dynamic, responsive card grid layout using React hooks and ResizeObserver',
      'Introduced Jest testing for previously untested frontend logic',
      'Closed out my internship with a full security and code-quality assessment of the application, covering everything from configuration hygiene to authentication handling',
    ],
    tags: ['Paid Internship', 'Information & Digital'],
  },
];

export const education = [
  {
    institution: 'Sri Krishna College of Engineering and Technology',
    degree: 'B.Tech Information Technology',
    period: '2023 – Present',
    score: 'CGPA: 7.74',
  },
  {
    institution: 'Prakriya International School',
    degree: 'Higher Secondary Education',
    period: '2021 – 2023',
    score: 'Percentage: 81.3%',
  },
];

export const projects: Project[] = [
  {
    slug: 'sih-civic-platform',
    title: 'Civic Issue Reporting Platform',
    subtitle: 'Smart India Hackathon 2025 · Jharkhand Government',
    year: '2025',
    featured: true,
    hook: 'Blockchain + AI civic reporting deployed for a state government use case.',
    description:
      'Designed and built a platform enabling citizens to report and track local civic issues digitally. AI image classification auto categorizes reported issues, while blockchain backed storage keeps the report ledger tamper proof and transparent.',
    longDescription:
      'Built end to end for the Jharkhand Government during Smart India Hackathon 2025. Citizens submit reports with photos, the AI model auto tags the issue type (potholes, garbage, drainage, streetlights), and every entry is anchored on a blockchain layer so the ledger cannot be quietly edited or deleted by any single party. Coordination dashboards route issues to the right municipal department.',
    tech: ['React.js', 'Node.js', 'Blockchain', 'AI / Image Classification', 'MySQL'],
    highlights: [
      'Built for Smart India Hackathon 2025, India\'s flagship national innovation challenge.',
      'AI based auto categorization reduces manual triage time for municipal staff.',
      'Blockchain anchored storage gives citizens a tamper evident audit trail.',
      'Developed against a real problem statement from the Jharkhand Government.',
    ],
    links: { github: '', live: '', caseStudy: true },
    status: 'in-progress',
  },
  {
    slug: 'online-voting-platform',
    title: 'Online Voting Platform',
    subtitle: 'Personal Project · Deployed for live club elections',
    year: '2024',
    featured: true,
    hook: 'Secure online voting system used in real club election processes.',
    description:
      'A secure online voting platform with React frontend, database backed vote storage, and live result processing. Successfully deployed and used for actual club elections.',
    longDescription:
      'Designed for transparent, low friction club voting. React based voter interface, secure session handling, MySQL backed vote storage with unique voter constraints, and an admin dashboard for live tallying. Used in real election cycles, not just a demo.',
    tech: ['React.js', 'Node.js', 'MySQL', 'JavaScript'],
    highlights: [
      'Shipped to production for actual club elections (not a hackathon throwaway).',
      'Live result processing with admin dashboard.',
      'Database backed vote storage with integrity constraints.',
    ],
    links: { github: '', live: '', caseStudy: true },
    status: 'in-progress',
  },
  {
    slug: 'disaster-management-system',
    title: 'Disaster Management & Preparedness System',
    subtitle: 'Pre Final Year Project · 2025 to 2026',
    year: '2025',
    featured: true,
    hook: 'End to end system for disaster preparedness and live response coordination.',
    description:
      'A comprehensive system for disaster preparedness and live response management. Includes alert systems, resource tracking, and inter agency coordination features.',
    longDescription:
      'Designed to coordinate the chaos that follows a disaster. Push alerts to affected regions, track shelters, food, and medical resources across agencies, and surface a single coordination view so responders are not duplicating effort. Pre final year academic project, built to be production grade.',
    tech: ['React.js', 'Node.js', 'MySQL', 'Real time messaging'],
    highlights: [
      'Live alert system for affected regions.',
      'Resource tracking across shelters and supply chains.',
      'Inter agency coordination dashboard.',
    ],
    links: { github: '', live: 'https://ready-nation.vercel.app/', caseStudy: false },
    status: 'shipped',
  },
];

// NOTE: Files for each group live in /public/certificates/<slug>/
// Drop files there and the /certificates page picks them up at build time.
export const certificateGroups: CertificateGroup[] = [
  { slug: 'cisco',           name: 'Cisco',              description: 'Networking & cybersecurity' },
  { slug: 'hackerrank',      name: 'HackerRank',         description: 'Programming challenges' },
  { slug: 'infosys',         name: 'Infosys Springboard', description: 'Technology & programming' },
  { slug: 'spoken-tutorial', name: 'Spoken Tutorial',    description: 'Open source skills (IIT Bombay)' },
];

export const languages: Language[] = [
  { name: 'English', level: 'Fluent', flag: '🇬🇧' },
  { name: 'Tamil', level: 'Fluent', flag: '🇮🇳' },
  { name: 'Hindi', level: 'Conversational', flag: '🇮🇳' },
  { name: 'Japanese', level: 'Learning (Duolingo)', flag: '🇯🇵' },
];

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
