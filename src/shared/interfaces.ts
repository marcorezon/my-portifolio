export interface ProjectProps {
  title: string;
  subtitle: string;
  keys: string[];
  technologies: string[];
  image: string;
  link: string;
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
