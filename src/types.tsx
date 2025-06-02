import { DiRedis } from "react-icons/di";
import { FaDocker, FaGithub, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiTypescript, SiDjango, SiTailwindcss, SiPostgresql, SiCelery, SiFastapi, SiStreamlit, SiSpacy, SiPytorch, SiRedux } from "react-icons/si";

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
} as const;

export type Technology = {
  name: string;
  icon: keyof typeof iconMap;
};

export interface Project {
  title: string;
  description: string;
  sourceCode?: {
    frontend?: string;
    backend?: string;
  } | string;
  frontend?: string;
  backend?: string;
  technologies: Technology[];
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
};