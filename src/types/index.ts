export interface Skill {
  name: string;
  level?: string;
  category: 'languages' | 'backend' | 'frontend' | 'cloud_db' | 'testing_practices';
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  contractInfo?: string;
  highlights: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  keyChallenge: string;
  outcome: string;
  stack: string[];
  category: 'all' | 'fullstack' | 'backend' | 'ai_cloud';
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  architectureHighlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  badge?: string;
  verifyUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  heroRole: string;
  bio: string;
  yearsOfExp: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  availability: {
    status: string;
    code: string;
    text: string;
  };
  metrics: {
    number: string;
    label: string;
    description: string;
  }[];
  skills: Skill[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
}
