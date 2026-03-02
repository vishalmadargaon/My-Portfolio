
export interface Project {
  title: string;
  pitch: string;
  tech: string[];
  feature: string;
  image: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  type: 'internship' | 'full-time';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'mobile' | 'web' | 'ai' | 'tools';
}
