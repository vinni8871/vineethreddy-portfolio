export const profile = {
  name: 'Vineeth Kumar Reddy Pasala',
  shortName: 'Vineeth Reddy',
  firstName: 'Vineeth',
  role: 'Software Engineer',
  tagline: 'Aspiring Software Engineer · Full Stack & AI Automation',
  summary:
    'Aspiring Software Engineer skilled in Java, Python, C++, SQL and Full Stack Development. Experienced in building responsive web applications and AI-powered solutions through projects and internship experience. Strong in problem-solving, OOP and software development, with a passion for building practical, scalable applications.',
  location: 'Andhra Pradesh, India',
  availability: 'Open to full-time roles & internships',
  email: 'vineethreddy017@gmail.com',
  phone: '+91 72078 54386',
  phoneHref: '+917207854386',
  photo: `${import.meta.env.BASE_URL}portrait.jpg`,
  avatar: `${import.meta.env.BASE_URL}avatar.jpg`,
  resume: `${import.meta.env.BASE_URL}Vineeth-Kumar-Reddy-Resume.pdf`,
  links: {
    github: 'https://github.com/vinni8871',
    // TODO: replace with your exact LinkedIn profile URL (e.g. https://www.linkedin.com/in/your-handle)
    linkedin: 'https://linkedin.com/in/vineeth-kumar-reddy-pasala',
    leetcode: 'https://leetcode.com/u/pasalavineethreddy',
    hackerrank: 'https://www.hackerrank.com/profile/vineethreddy017',
    bytexl: 'https://app.bytexl.ai/@pasalavineethkumarreddy',
    blooddrop: 'https://blooddrop360.vercel.app/',
    wolvguard: 'https://wolvguard.vercel.app',
  },
}

export const stats = [
  { value: 8.51, decimals: 2, suffix: '/10', label: 'B.Tech CGPA' },
  { value: 10, decimals: 1, suffix: '/10', label: 'SSC CGPA' },
  { value: 22, decimals: 0, suffix: '', label: 'Google Cloud Badges' },
  { value: 2, decimals: 0, suffix: '+', label: 'Live Projects' },
]

export const skills = [
  { name: 'Java', level: 88, group: 'Languages' },
  { name: 'Python', level: 85, group: 'Languages' },
  { name: 'C++', level: 78, group: 'Languages' },
  { name: 'JavaScript', level: 82, group: 'Languages' },
  { name: 'SQL', level: 85, group: 'Languages' },
  { name: 'React.js', level: 80, group: 'Frontend' },
  { name: 'HTML5', level: 92, group: 'Frontend' },
  { name: 'CSS3', level: 88, group: 'Frontend' },
  { name: 'MySQL', level: 82, group: 'Database' },
  { name: 'MongoDB', level: 72, group: 'Database' },
  { name: 'Git', level: 82, group: 'Tools' },
  { name: 'GitHub', level: 84, group: 'Tools' },
  { name: 'OOP', level: 86, group: 'Concepts' },
  { name: 'SDLC', level: 80, group: 'Concepts' },
]

export const marqueeSkills = [
  'Java', 'Python', 'C++', 'React.js', 'JavaScript', 'SQL', 'MySQL', 'MongoDB',
  'Git', 'GitHub', 'HTML5', 'CSS3', 'OOP', 'SDLC', 'AI Agents', 'GenAI',
]

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  blurb: string
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'DataValley India Pvt. Ltd.',
    role: 'AI Automation & Agent Engineering Intern',
    period: 'May 2026 – Jun 2026',
    location: 'IT / Computers — Artificial Intelligence',
    blurb:
      '2-month industry-oriented internship focused on AI automation, AI agents and intelligent workflow development.',
    points: [
      'Developed and tested 3+ AI-driven automation use cases using Python-based solutions.',
      'Worked on intelligent workflows, gaining hands-on exposure to Machine Learning, Agent Engineering and SDLC.',
      'Collaborated with mentors on 5+ technical assignments, strengthening debugging and analytical thinking.',
      'Contributed across the full delivery cycle — requirement analysis, implementation, testing, debugging and deployment.',
    ],
    stack: ['Python', 'AI Agents', 'Machine Learning', 'Workflow Automation', 'SDLC'],
  },
]

export type Project = {
  id: string
  name: string
  subtitle: string
  period: string
  description: string
  highlights: string[]
  stack: string[]
  link: string
  repo: string
  accent: string
  metric: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    id: 'wolvguard',
    name: 'WOLVGUARD',
    subtitle: 'Digital Risk Protection Platform',
    period: '24-Hour Hackathon · Team of 5',
    description:
      'A proactive brand protection platform that identifies, assesses and detects unauthorized brand impersonation across social and digital channels in real time.',
    highlights: [
      'Brand registration with official identity details, website, description, reference logo and verified social assets.',
      'Integrated YouTube Data API v3 to discover and monitor potentially impersonating channels.',
      'Transparent 4-signal risk scoring engine with dynamic Critical / High / Medium / Low severity classification.',
      'Gemini-powered AI Threat Assistant explaining risk assessments and suggesting protection measures.',
      'Privacy-focused client-side logo hashing via HTML5 Canvas plus visual similarity analysis.',
    ],
    stack: ['React.js', 'TypeScript', 'JavaScript', 'Python', 'YouTube Data API v3', 'Google Gemini', 'Supabase', 'Computer Vision', 'Git', 'Vercel'],
    link: profile.links.wolvguard,
    repo: 'https://github.com/vinni8871/wolvguard',
    accent: 'from-brand-400 to-accent-500',
    metric: [
      { value: '4', label: 'Risk signals' },
      { value: '5', label: 'Member team' },
      { value: '24h', label: 'Build time' },
    ],
  },
  {
    id: 'blooddrop',
    name: 'BLOODDROP',
    subtitle: 'Blood Donation Management System',
    period: 'Oct 2025 · Full Stack',
    description:
      'A responsive web platform connecting donors and recipients during emergency blood requirements, backed by a relational SQL database.',
    highlights: [
      '5+ core modules: donor registration, donor search, blood request management and user information management.',
      'Relational SQL database efficiently managing 500+ donor records.',
      'Blood group + location based search reduced donor identification time by 40%.',
      'Responsive design across desktop, tablet and mobile following SDLC best practices.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Database Management', 'Vercel'],
    link: profile.links.blooddrop,
    repo: profile.links.github,
    accent: 'from-rose-400 to-brand-400',
    metric: [
      { value: '500+', label: 'Donor records' },
      { value: '40%', label: 'Faster search' },
      { value: '5+', label: 'Core modules' },
    ],
  },
]

export const education = [
  {
    school: 'Narasaraopeta Engineering College',
    degree: 'B.Tech. — Computer Science and Engineering',
    period: '2024 – 2027',
    score: 'CGPA 8.51 / 10',
    detail: 'Core coursework in Data Structures, OOP, DBMS, Operating Systems and Software Engineering.',
  },
  {
    school: 'Sri Venkateswara College of Engineering & Technology',
    degree: 'Diploma — Computer Science and Engineering',
    period: '2024',
    score: '86.18%',
    detail: 'Built foundations in programming, computer networks and database systems.',
  },
  {
    school: 'Nalanda High School, Pulivendula',
    degree: 'SSC',
    period: '2021',
    score: 'CGPA 10.0 / 10',
    detail: 'Graduated with a perfect 10.0 CGPA.',
  },
]

export const certifications = [
  {
    title: 'Generative AI',
    issuer: 'Google Cloud',
    meta: '45-hour course · 22 skill badges',
    note: 'Foundations of Generative AI and large language models through hands-on Google Cloud labs.',
    featured: true,
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    meta: 'Certification',
    note: 'Sensors, connected devices, communication protocols and real-world IoT applications.',
  },
  {
    title: 'Java Programming',
    issuer: 'Unstop',
    meta: 'Certification',
    note: 'Core Java, OOP, control structures, exception handling and problem solving.',
  },
  {
    title: 'MongoDB Course',
    issuer: 'Unstop',
    meta: 'Completion',
    note: 'NoSQL fundamentals, document data modeling, CRUD operations and querying.',
  },
  {
    title: 'Applied Data Analysis Using Python',
    issuer: 'Intel® Unnati Program',
    meta: 'Edgate Technologies',
    note: 'Data cleaning, manipulation and visualization with Python.',
  },
  {
    title: 'HacXLerate 2026',
    issuer: 'ByteXL',
    meta: 'National-Level Hackathon',
    note: 'Participated in a national-level hackathon building a working product in 24 hours.',
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/** Real public repositories — proof of continuous learning. */
export const repos = [
  {
    name: 'Java_DSA_Journey',
    description: 'Structured Data Structures & Algorithms practice in Java — arrays, trees, graphs and interview problems.',
    language: 'Java',
    href: 'https://github.com/vinni8871/Java_DSA_Journey',
  },
  {
    name: 'web_scrapping',
    description: 'Python + Jupyter scraping pipeline collecting structured e-commerce product data for analysis.',
    language: 'Jupyter Notebook',
    href: 'https://github.com/vinni8871/web_scrapping',
  },
  {
    name: 'Prompt-Engineering',
    description: 'Experiments in prompt design and LLM workflows — the groundwork behind my AI automation internship.',
    language: 'Python',
    href: 'https://github.com/vinni8871/Prompt--Engineering',
  },
]
