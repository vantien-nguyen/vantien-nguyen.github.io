import React from "react";
import { useTranslation } from "react-i18next";

import Profile from "../assets/imgs/profile.png";
import AddressIcon from "../assets/icons/adress.png";
import GithubIcon from "../assets/icons/github.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import JobIcon from "../assets/icons/job-profile.svg";
import CVFile from "../assets/files/Van-Tien-NGUYEN_CV.pdf";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
    >
      <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl">
        <img src={Profile} alt="Tien" className="w-full h-full object-cover" />
      </div>

      {/* Text content */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold">Van Tien NGUYEN</h2>
        <div className="flex items-center justify-center md:justify-start text-gray-700 mt-1 mb-4">
          <img src={JobIcon} alt="" className="w-5 h-5 mr-1" />
          <p className="text-md">{t("about.job")}</p>
        </div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
          {t("about.description")}
        </p>
        <div className="mt-2 md:mt-4 flex items-center justify-center md:justify-start text-gray-600 text-sm md:text-base">
          <img src={AddressIcon} alt="Address" className="w-6 h-6 mr-1" />
          <p>{t("about.location")}</p>
        </div>
        <div className="mt-4 mb-4 flex items-center justify-center md:justify-start space-x-2 md:space-x-4">
          <a
            href="#contact"
            className="inline-flex items-center px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm md:text-base"
          >
            {t("contact.title")}
          </a>
          <button
            onClick={() => window.open(CVFile, "_blank", "noopener,noreferrer")}
            className="inline-flex items-center px-2 py-1 border border-blue-600 text-blue-600 hover:bg-blue-100 rounded transition-colors text-sm md:text-base"
          >
            {t("about.downloadCv")}
          </button>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <a
            href="https://github.com/vantien-nguyen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-6 h-6 text-blue-600 hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vantien-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6 text-blue-600 hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
