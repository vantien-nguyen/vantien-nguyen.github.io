import React from "react";
import { calculateDuration, formatDate, getIcon } from "../utils";
import { Technology } from "../types";
import { experiences } from "../data/portfolioData";

export interface ExperienceItem {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: Technology[];
}

const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((item) => {
          const { role, company, startDate, endDate, description, technologies } = item;
          return (
            <div key={`${company}-${role}`} className="p-6 rounded-lg shadow border border-gray-300 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{role}</h3>
                  <p className="italic text-indigo-600">{company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{calculateDuration(startDate, endDate)}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{description}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {technologies.map((tech, i) => (
                  <div key={i} title={tech.name}>
                    {getIcon(tech)}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
