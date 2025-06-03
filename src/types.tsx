import { DiRedis } from "react-icons/di";
import {
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
  FaAws,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiCelery,
  SiFastapi,
  SiStreamlit,
  SiSpacy,
  SiPytorch,
  SiRedux,
  SiDocker,
  SiPandas,
} from "react-icons/si";

export const iconMap = {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaDocker,
  SiTypescript,
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  DiRedis,
  SiCelery,
  SiFastapi,
  SiStreamlit,
  SiSpacy,
  SiPytorch,
  SiRedux,
  SiDocker,
  SiPandas,
  FaAws,
  FaGit,
} as const;

export type Technology = {
  name: string;
  icon: keyof typeof iconMap;
};

export interface Project {
  title: {
    en: string | string[];
    fr: string | string[];
  };
  description: {
    en: string | string[];
    fr: string | string[];
  };
  sourceCode?:
    | {
        frontend?: string;
        backend?: string;
      }
    | string;
  technologies: Technology[];
}

export interface Education {
  degree: {
    en: string;
    fr: string;
  };
  institution: {
    en: string;
    fr: string;
  };
  institutionUrl: string;
  logoUrl: string;
  startDate: string;
  endDate: string;
}

export interface ExperienceItem {
  role: {
    en: string;
    fr: string;
  };
  company: string;
  startDate: string;
  endDate: string;
  description: {
    en: string | string[];
    fr: string | string[];
  };
  technologies: Array<{
    name: string;
    icon: string;
  }>;
}
