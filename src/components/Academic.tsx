import React from "react";
import { useTranslation } from "react-i18next";
import { Education } from "../types";
import { education } from "../data/portfolioData";
import { formatDate, getLocalizedContent } from "../utils";

const Academic: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.split("-")[0];

  return (
    <section id="education" className="max-w-4xl mx-auto p-4">
      <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900">
        {currentLanguage === "fr"
          ? "Parcours académique"
          : "Academic Background"}
      </h2>
      <div className="space-y-8">
        {education.map((edu: Education, index: number) => {
          // Safely handle potentially undefined values
          const degree = edu.degree || { en: "", fr: "" };
          const institution = edu.institution || { en: "", fr: "" };

          // Get localized content
          const displayDegree = getLocalizedContent(currentLanguage, degree);
          const displayInstitution = getLocalizedContent(
            currentLanguage,
            institution,
          );

          return (
            <div
              key={index}
              className="p-6 rounded-lg shadow border border-gray-300 bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {/* Logo on the left */}
                  <div className="flex-shrink-0 pt-4">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-10 h-10"
                    >
                      {edu.logoUrl && (
                        <img
                          src={edu.logoUrl}
                          alt={`${displayInstitution} logo`}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </a>
                  </div>

                  {/* Degree and institution info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {displayDegree}
                    </h3>
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-block mt-1"
                    >
                      {displayInstitution}
                    </a>
                    <p className="text-gray-600 text-sm mt-0.5">
                      {formatDate(edu.startDate, currentLanguage)} -{" "}
                      {formatDate(edu.endDate, currentLanguage)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Academic;
