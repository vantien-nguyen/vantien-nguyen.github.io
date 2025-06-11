import { Education, ExperienceItem, Project } from "../types";
import EPITA_LOGO from "../assets/imgs/epita-logo.png";
import HUST_LOGO from "../assets/imgs/hust-logo.png";

export const experiences: ExperienceItem[] = [
  {
    role: {
      en: "Full-stack Software Engineer",
      fr: "Ingénieur Logiciel Full-Stack",
    },
    company: "Freelancer",
    startDate: "2024-11-01",
    endDate: "Present",
    description: {
      en: [
        "Designed, programmed, deployed, and maintained a CRM web application.",
        "Extracted and processed advertising data from Google, TikTok, Meta, and YouTube to generate automated Excel reports for performance analysis.",
      ],
      fr: [
        "Conçu, développé, déployé et maintenu une application web CRM.",
        "Extrait et traité des données publicitaires provenant de Google, TikTok, Meta et YouTube afin de générer des rapports Excel automatisés pour l'analyse des performances.",
      ],
    },
    technologies: [
      { name: "Python", icon: "FaPython" },
      { name: "Django REST", icon: "SiDjango" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "React", icon: "FaReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Redis", icon: "DiRedis" },
      { name: "Celery", icon: "SiCelery" },
      { name: "Pandas", icon: "SiPandas" },
      { name: "AWS", icon: "FaAws" },
    ],
  },
  {
    role: {
      en: "Full-stack Software Engineer",
      fr: "Ingénieur Logiciel Full-Stack",
    },
    company: "Sqwad",
    startDate: "2022-04-01",
    endDate: "2023-05-31",
    description: {
      en: [
        "Architected and implemented a full-stack e-commerce application.",
        "Integrated pipeline and deployed applications in AWS. Applied Agile Scrum methodologies, managed stand-up meetings and reviewed pull requests.",
        "Partnered with the support team to gather feedback and enhance the application, ensured alignment with market needs and user expectations.",
      ],
      fr: [
        "Conçu et développé une application e-commerce full-stack.",
        "Intégré des pipelines CI/CD et déployé les applications sur AWS. Appliqué les méthodologies Agile Scrum, animé les réunions quotidiennes et effectué les revues de pull requests.",
        "Collaboré avec l'équipe support pour recueillir les retours utilisateurs et améliorer l'application, en veillant à son adéquation avec les besoins du marché et les attentes des utilisateurs.",
      ],
    },
    technologies: [
      { name: "Python", icon: "FaPython" },
      { name: "Django REST", icon: "SiDjango" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "React", icon: "FaReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Redis", icon: "DiRedis" },
      { name: "Celery", icon: "SiCelery" },
      { name: "AWS", icon: "FaAws" },
    ],
  },
  {
    role: {
      en: "Software Engineer",
      fr: "Ingénieur Logiciel",
    },
    company: "Samsung Vietnam Mobile R&D Center",
    startDate: "2017-08-01",
    endDate: "2020-01-31",
    description: {
      en: [
        "Collaborated with the Korean team to develop web application systems and software products.",
        "Managed Unix servers, Github, and support users.",
      ],
      fr: [
        "Collaboré avec l'équipe coréenne pour développer des systèmes d'applications web et des produits logiciels",
        "Gestion des serveurs Unix, Github et des utilisateurs support.",
      ],
    },
    technologies: [
      { name: "Python", icon: "FaPython" },
      { name: "Django REST", icon: "SiDjango" },
      { name: "React", icon: "FaReact" },
      { name: "GitHub", icon: "FaGithub" },
      { name: "Docker", icon: "FaDocker" },
    ],
  },
] as const;

export const projects: Project[] = [
  {
    title: {
      en: "Crosslink",
      fr: "Crosslink",
    },
    description: {
      en: [
        "An application that facilitates collaboration between digital brands to expand their audience reach.",
        "Implemented cross-selling, upselling, and email widgets to enhance user engagement.",
      ],
      fr: [
        "Une application qui facilite la collaboration entre les marques numériques pour étendre leur portée d'audience.",
        "Mis en œuvre des fonctionnalités de vente croisée, de vente incitative et de widgets d'email pour améliorer l'engagement des utilisateurs.",
      ],
    },
    sourceCode: {
      frontend: "https://github.com/vantien-nguyen/crosslink-front",
      backend: "https://github.com/vantien-nguyen/crosslink-back",
    },
    technologies: [
      { name: "Python", icon: "FaPython" },
      { name: "Django REST", icon: "SiDjango" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "React", icon: "FaReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Redis", icon: "DiRedis" },
      { name: "Celery", icon: "SiCelery" },
      { name: "AWS", icon: "FaAws" },
      { name: "Git", icon: "FaGit" },
    ],
  },
  {
    title: {
      en: "Application of AI on IT Service Management",
      fr: "Application de l'IA à la gestion des services informatiques",
    },
    description: {
      en: [
        "Extracted and preprocessed ticket data to analyze quality using the Flesch-Kincaid readability score.",
        "Built an LDA model to categorize tickets by topic.",
        "Improved ticket categorization accuracy by 30% through advanced NLP techniques.",
      ],
      fr: [
        "Extrait et traité les données des tickets pour analyser la qualité en utilisant le score de lisibilité Flesch-Kincaid.",
        "Développé un modèle LDA pour catégoriser les tickets par sujet.",
        "Amélioré la précision de catégorisation des tickets de 30% grâce à des techniques avancées de NLP.",
      ],
    },
    sourceCode: "https://github.com/vantien-nguyen/ActionLearning/tree/master",
    technologies: [
      { name: "Python", icon: "FaPython" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Streamlit", icon: "SiStreamlit" },
      { name: "spaCy", icon: "SiSpacy" },
      { name: "LDA", icon: "SiPytorch" },
      { name: "Docker", icon: "FaDocker" },
      { name: "Git", icon: "FaGit" },
    ],
  },
];

export const education: Education[] = [
  {
    degree: {
      en: "MSc in Artificial Intelligence Systems",
      fr: "MSc en Systèmes d'Intelligence Artificielle",
    },
    institution: {
      en: "EPITA, Paris, France",
      fr: "EPITA, Paris, France",
    },
    institutionUrl: "https://www.epita.fr/",
    logoUrl: EPITA_LOGO,
    startDate: "2020-09",
    endDate: "2022-03",
  },
  {
    degree: {
      en: "Degree of Software Engineering",
      fr: "Diplôme d’ingénieur en génie logiciel",
    },
    institution: {
      en: "Hanoi University of Science and Technology, Vietnam",
      fr: "École polytechnique de Hanoï, Vietnam",
    },
    institutionUrl: "https://www.hust.edu.vn/",
    logoUrl: HUST_LOGO,
    startDate: "2012-09",
    endDate: "2017-07",
  },
];
