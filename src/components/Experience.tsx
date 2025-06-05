import React from "react";
import { useTranslation } from "react-i18next";
import {
  calculateDuration,
  formatDate,
  getIcon,
  getLocalizedContent,
} from "../utils";
import { experiences } from "../data/portfolioData";

const Experience: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.split("-")[0]; // Gets 'en' or 'fr' from 'en-US' or 'fr-FR'

  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">
        {currentLanguage === "fr" ? "Expérience" : "Experience"}
      </h2>
      <div className="space-y-8">
        {experiences.map((item, index) => {
          const {
            role,
            company,
            startDate,
            endDate,
            description,
            technologies,
          } = item;
          const displayRole = getLocalizedContent(currentLanguage, role);
          const displayDescription = getLocalizedContent(
            currentLanguage,
            description,
          );

          return (
            <div
              key={`${company}-${index}`}
              className="p-6 rounded-lg shadow border border-gray-300 bg-white"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900">
                    {displayRole}
                  </h3>
                  <p className="italic text-indigo-600 text-sm md:text-base">{company}</p>
                  <div className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray-500">
                    <span>
                      {formatDate(startDate, currentLanguage)} -{" "}
                      {formatDate(endDate, currentLanguage)}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">
                      {calculateDuration(startDate, endDate, currentLanguage)}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm md:text-base">
                {displayDescription.map((item, index) => (
                  <li key={index} className="ml-4">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
                {technologies.map((tech, i) => (
                  <div key={i} title={tech.name}>
                    {getIcon(tech as any)}
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
