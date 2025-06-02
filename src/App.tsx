import React from "react";
import { Header, About, Experience, Projects, Contact, Footer, Education } from "./components";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-10 space-y-20">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
