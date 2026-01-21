import React from "react";
import { useTranslation } from "react-i18next";
import { getIcon, getLocalizedContent } from "../utils";
import { Project } from "../types";
import { projects } from "../data/portfolioData";

const Projects: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.split("-")[0];

  return (
    <section id="projects" className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-gray-900">
        {currentLanguage === "fr" ? "Projets" : "Projects"}
      </h2>

      <div className="grid gap-6 md:gap-8">
        {projects.map((project: Project, index: number) => {
          const displayTitle = getLocalizedContent(currentLanguage, project.title);
          const displayDescription = getLocalizedContent(currentLanguage, project.description);

          return (
            <div
              key={`project-${index}`}
              className="p-4 md:p-6 rounded-lg shadow border border-gray-300 bg-white"
            >
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">
                {displayTitle}
              </h3>

              <ul className="list-disc list-inside text-gray-700 mt-2 mb-4 space-y-1 text-sm md:text-base">
                {displayDescription.map((item, idx) => (
                  <li key={idx} className="ml-4">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                {project.technologies.map((tech, i) => (
                  <div key={i} title={tech.name} className="flex items-center gap-1">
                    {getIcon(tech)}
                  </div>
                ))}
              </div>

              {/* Combined Links Section */}
              <div className="flex flex-wrap gap-3">
                {/* Source Code */}
                {project.sourceCode && renderLinks(project.sourceCode, currentLanguage, true)}
                {/* Live Demo */}
                {project.liveDemo && renderLinks(project.liveDemo, currentLanguage, false)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Utility function to render links
const renderLinks = (
  links: string | { frontend?: string; backend?: string },
  language: string,
  isCode: boolean
) => {
  const label = isCode
    ? language === "fr"
      ? "Voir le code"
      : "View Code"
    : language === "fr"
    ? "Voir la démo"
    : "Live Demo";

  const Icon = isCode ? GitHubIcon : HerokuIcon;
  const colorClass = isCode ? "text-gray-900" : "text-purple-600"; // GitHub gray/black, Heroku purple

  if (typeof links === "string") {
    return (
      <a
        href={links}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 ${colorClass} hover:underline text-sm md:text-base`}
      >
        <Icon />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <>
      {links.backend && (
        <a
          href={links.backend}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${colorClass} hover:underline text-sm md:text-base`}
        >
          <Icon />
          <span>{isCode ? "Backend" : "Backend Demo"}</span>
        </a>
      )}
      {links.frontend && (
        <a
          href={links.frontend}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${colorClass} hover:underline text-sm md:text-base`}
        >
          <Icon />
          <span>{isCode ? "Frontend" : "Frontend Demo"}</span>
        </a>
      )}
    </>
  );
};

// GitHub Icon for View Code
const GitHubIcon: React.FC = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 016 0c2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.903-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Heroku Icon for Live Demo
const HerokuIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-4 h-4"
    fill="currentColor"
  >
    <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm61.8 189.6c0 8-6.5 14.5-14.5 14.5h-97.4c-8 0-14.5-6.5-14.5-14.5V66.4c0-8 6.5-14.5 14.5-14.5h97.4c8 0 14.5 6.5 14.5 14.5v123.2zM128 64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" />
  </svg>
);

export default Projects;
