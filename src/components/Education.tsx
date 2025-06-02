import React from "react";
import { formatDate } from "../utils";
import { education } from "../data/portfolioData";

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Education</h2>
      <div className="space-y-5">
        {education.map((edu, index) => (
          <div key={index} className="p-5 rounded-md shadow-sm border border-gray-200 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-indigo-600">{edu.institution}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                  <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                </div>
              </div>
            </div>
            
            {edu.description && (
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                {edu.description}
              </p>
            )}
            
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mt-3">
                <h4 className="font-medium text-gray-800 text-sm mb-1.5">Achievements:</h4>
                <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-700">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="leading-tight">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
