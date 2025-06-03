import { Education } from "../types";
import EPITA_LOGO from "../assets/imgs/epita-logo.png";
import HUST_LOGO from "../assets/imgs/hust-logo.png";

export const experiences = [
  {
    role: "Full-stackSoftware Engineer",
    company: "Freelancer",
    startDate: "2024-12-01",
    endDate: "Present",
    description: "Developing web applications with Python, Django-Resframework, React, TypeScript. Extracted, processed data and made report",
    technologies: [
      { name: "Python", icon: 'FaPython' },
      { name: "Django", icon: 'SiDjango' },
      { name: "React", icon: 'FaReact' },
      { name: "TypeScript", icon: 'SiTypescript' },
    ]
  },
  {
    role: "Full-stack Software Engineer",
    company: "Sqwad",
    startDate: "2022-04-01",
    endDate: "2023-05-31",
    description: "Architected and implemented a full-stack e-commerce application. Partnered with the support team to gather feedback and enhance the application, ensured alignment with market needs and user expectations",
    technologies: [
      { name: "React", icon: 'FaReact' },
      { name: "TypeScript", icon: 'SiTypescript' },
      { name: "Node.js", icon: 'FaNodeJs' },
      { name: "Redux", icon: 'SiRedux' },
    ]
  },
  {
    role: "Software Engineer",
    company: "Samsung Vietnam Mobile R&D Center",
    startDate: "2017-08-01",
    endDate: "2020-01-31",
    description: "Collaborated with the Korean team to develop web application systems and software products using tools such as Github, React, Python, Django, and Docker",
    technologies: [
      { name: "Python", icon: 'FaPython' },
      { name: "Django", icon: 'SiDjango' },
      { name: "React", icon: 'FaReact' },
      { name: "GitHub", icon: 'FaGithub' },
      { name: "Docker", icon: 'FaDocker' },
    ]
  }
] as const;

export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    sourceCode: {
      frontend: "https://github.com/username/ecommerce-frontend",
      backend: "https://github.com/username/ecommerce-backend"
    },
    technologies: [
      { name: "React", icon: 'FaReact' },
      { name: "TypeScript", icon: 'SiTypescript' },
      { name: "Node.js", icon: 'FaNodeJs' },
      { name: "PostgreSQL", icon: 'SiPostgresql' },
      { name: "Docker", icon: 'FaDocker' }
    ]
  },
  {
    title: "Data Analysis Dashboard",
    description: "An interactive dashboard for data visualization and analysis with real-time updates.",
    sourceCode: "https://github.com/username/data-dashboard",
    technologies: [
      { name: "Python", icon: 'FaPython' },
      { name: "FastAPI", icon: 'SiFastapi' },
      { name: "Streamlit", icon: 'SiStreamlit' },
      { name: "spaCy", icon: 'SiSpacy' },
      { name: "LDA", icon: 'SiPytorch' },
      { name: "Docker", icon: 'FaDocker' }
    ]
  }
] as const;

export const education: Education[] = [
  {
    degree: "Master of Science in Artificial Intelligence System",
    institution: "EPITA, Paris, France",
    institutionUrl: "https://www.epita.fr/",
    logoUrl: EPITA_LOGO,
    startDate: "2020-09",
    endDate: "2022-03",
    description: "Specialized in AI, Machine Learning, Deep Learning, Reinforcement Learning, Computer Vision, Natural Language Processing, and Data Science in production.",
    achievements: [
      "The first place in Python Learning Week",
      "The first place Action Learning Week competitions"
    ]
  },
  {
    degree: "Degree of Software Engineering",
    institution: "Hanoi University of Science and Technology, Vietnam",
    institutionUrl: "https://www.hust.edu.vn/",
    logoUrl: HUST_LOGO,
    startDate: "2012-09",
    endDate: "2017-07",
    description: "Specialized in Software Engineering with a strong foundation in algorithms, data structures, and software development methodologies. Completed various projects in web development and database systems.",
  }
]

