import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import {
  Header,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
  Academic,
} from "./components";
import "./i18n";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className={`px-3 py-1 rounded ${i18n.language === "fr" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        FR
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <LanguageSwitcher />
        <Header />
        <main className="container mx-auto px-4 py-10 space-y-20">
          <About />
          <Experience />
          <Academic />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
