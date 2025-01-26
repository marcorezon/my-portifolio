export interface ProjectsProps {
  title: string;
  subtitle: string;
  technologies: string[];
}

export interface ExperienceDetais {
  period: string;
  role: string;
  type: string;
}

export interface Experience {
  company: string;
  logo: string;
  details: ExperienceDetais;
}
