import React, { Suspense } from "react";
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

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Header />
        <main className="container mx-auto px-4 py-6 md:py-10 space-y-20">
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
