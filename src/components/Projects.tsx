import React from "react";
import { getIcon } from "../utils";
import { projects } from "../data/portfolioData";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto p-4">
      <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900">Projects</h2>
      <div className="grid gap-8">
        {projects.map((project) => (
          <div key={project.title} className="p-6 rounded-lg shadow border border-gray-300 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-3 mb-4">
              {project.technologies.map((tech, i) => (
                <div key={i} title={tech.name} className="flex items-center gap-1">
                  {getIcon(tech)}
                </div>
              ))}
            </div>

            {project.sourceCode && (
              <div className="flex gap-4">
                {typeof project.sourceCode === 'string' ? (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <span>View Code</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <>
                    {project.sourceCode.frontend && (
                      <a
                        href={project.sourceCode.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <span>Frontend</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.sourceCode.backend && (
                      <a
                        href={project.sourceCode.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <span>Backend</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
