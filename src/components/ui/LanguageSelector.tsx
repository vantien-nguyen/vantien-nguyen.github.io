import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

interface Language {
  code: string;
  countryCode: string;
  label: string;
}

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = "desktop",
  className = "",
}) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", countryCode: "GB", label: "English" },
    { code: "fr", countryCode: "FR", label: "Français" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    i18n.changeLanguage(lng).then(() => {
      setIsOpen(false);
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${variant === "mobile" ? "md:hidden" : "hidden md:block"} ${className}`}
    >
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-center ${
          variant === "desktop" ? "w-10" : "w-10 h-10"
        } hover:bg-gray-100 transition-colors focus:outline-none focus:ring-0`}
        aria-label={t("changeLanguage")}
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-center w-7 h-7">
          <ReactCountryFlag
            countryCode={currentLanguage.countryCode}
            svg
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            className="overflow-hidden shadow-sm"
            aria-label={currentLanguage.label}
          />
        </div>
        {variant === "desktop" && (
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg py-1 z-50 rounded-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={(e) => changeLanguage(lang.code, e)}
              className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                currentLanguage.code === lang.code
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <ReactCountryFlag
                  countryCode={lang.countryCode}
                  svg
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  aria-label={lang.label}
                />
              </div>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
