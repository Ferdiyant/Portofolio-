export interface WorkExperience {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  badge?: string;
  description: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export interface OrganizationalExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'data-science' | 'operations' | 'governance' | 'systems';
  categoryLabel: string;
  period: string;
  summary: string;
  problem: string;
  methodology: string[];
  impact: string[];
  techStack: string[];
  image: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  focus: string;
  verifiedBadge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  level: 'Nasional' | 'Internasional';
  year: string;
  rank: string;
}

export interface SkillCategory {
  title: string;
  items: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface PortfolioProfile {
  fullName: string;
  degree: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  linkedinUrl: string;
  summary: string;
  university: string;
  major: string;
  graduationYear: string;
  gpa: string;
  thesisTitle: string;
  thesisDescription: string;
  avatarUrl: string;
}
