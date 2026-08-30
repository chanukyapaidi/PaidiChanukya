export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  disclaimer?: string;
  visualType: 'bloodprint' | 'travel';
  implementationDetails?: string[];
  backendTech?: string[];
  frontendTech?: string[];
  externalApis?: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  degree: string;
  university: string;
  graduationYear: string;
  careerGoal: string;
}
