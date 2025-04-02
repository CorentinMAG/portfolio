import { ReactNode } from "react";

export interface Skill {
  name: string;
  level: number;
}

export interface SkillsData {
  [key: string]: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  achievements: string[];
  icon: string;
}

export interface Education {
  title: string;
  degree: string;
  period: string;
  courses: string[];
}

export interface IconMap {
  [key: string]: React.ComponentType<any>;
}

export interface SkillHighlightProps {
  text: string;
  skills: string[];
}

export interface SkillCategoryProps {
  category: string;
  items: Skill[];
}

export interface ExperienceItemProps {
  experience: Experience;
  iconMap: IconMap;
  highlightSkills: (text: string) => ReactNode[];
}

export interface EducationItemProps {
  education: Education;
  courses: string[];
}
