import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./ui/LanguageSelector";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of your sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: "about", label: t("header.about") },
    { id: "experience", label: t("header.experience") },
    { id: "education", label: t("header.education") },
    { id: "projects", label: t("header.projects") },
    { id: "contact", label: t("header.contact") },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* eslint-disable-next-line */}
          <a
            href="#"
            className="font-semibold text-indigo-500 transition-colors"
          >
            vantien-nguyen
          </a>

          <div className="flex items-center space-x-6">
            {/* Desktop Language Switcher */}
            <LanguageSelector variant="desktop" />

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={(e) => handleNavClick(item.id, e)}
                      className={`transition focus:ring-0 focus:outline-none ${activeSection === item.id ? "text-indigo-600 font-semibold" : "text-gray-800 hover:text-indigo-600"}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile menu and language selector */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <LanguageSelector variant="mobile" />

            {/* Menu button */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-0 p-2"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Navigation Sidebar */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full px-4 mt-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition focus:ring-0 focus:outline-none ${activeSection === item.id ? "bg-indigo-50 text-indigo-600 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
