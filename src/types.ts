export type ResumeStyle = 'modern' | 'classic' | 'minimal' | 'professional';

export interface StyleConfig {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  major: string;
  school: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  projects: ProjectItem[];
}
