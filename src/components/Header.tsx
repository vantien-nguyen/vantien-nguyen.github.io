import React, { useState } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-end items-center">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" onClick={() => handleNavClick("about")} className={`transition ${activeSection === "about" ? "text-indigo-600 font-semibold" : "text-gray-800 hover:text-indigo-600"}`}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => handleNavClick("experience")} className={`transition ${activeSection === "experience" ? "text-indigo-600 font-semibold" : "text-gray-800 hover:text-indigo-600"}`}>
                Experience
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => handleNavClick("education")} className={`transition ${activeSection === "education" ? "text-indigo-600 font-semibold" : "text-gray-800 hover:text-indigo-600"}`}>
                Education
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => handleNavClick("projects")} className={`transition ${activeSection === "projects" ? "text-indigo-600 font-semibold" : "text-gray-800 hover:text-indigo-600"}`}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleNavClick("contact")} className={`transition ${activeSection === "contact" ? "text-indigo-600 font-semibold" : "text-gray-800 hover:text-indigo-600"}`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
