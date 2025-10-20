export interface Experience {
  id: string;
  year: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link?: string;
  github?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
  color: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  headline: string;
  bio: string;
  image?: string;
  email: string;
  phone: string;
}

export interface Education {
  id: string;
  type: 'graduation' | 'postgraduate' | 'certification';
  course: string;
  institution: string;
  year: string;
  status: 'completed' | 'in-progress';
  description?: string;
}