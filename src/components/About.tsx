import React from "react";

import Profile from '../assets/imgs/profile.jpg';
import AddressIcon from '../assets/icons/adress.png';
import GithubIcon from '../assets/icons/github.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import JobIcon from '../assets/icons/job-profile.svg';
import CVFile from '../assets/files/Van-Tien-NGUYEN_CV.pdf';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl">
        <img
          src={Profile}
          alt="Tien"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold">Van Tien NGUYEN</h2>
        <div className="flex items-center justify-center md:justify-start text-gray-700 mt-1 mb-4">
          <img src={JobIcon} alt="" className="w-5 h-5 mr-1" />
          <p className="text-md">Software Engineer</p>
        </div>
        <p className="text-gray-700 leading-relaxed max-w-xl">
          Hi! I&apos;m a passionate software engineer with experience in React,
          TypeScript, and modern web technologies. I love building clean,
          user-friendly, and performant applications. I&apos;m always eager to
          learn new skills and tackle challenging problems.
        </p>
        <div className="mt-4 flex items-center justify-center md:justify-start text-gray-600 text-base">
          <img src={AddressIcon} alt="Address" className="w-6 h-6 mr-1" />
          <p>Villejuif, Ille-de-France</p>
        </div>
        <div className="mt-4 mb-4 flex items-center justify-center md:justify-start space-x-4">
          <a 
            href="#contact" 
            className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            Contact Me
          </a>
          <button 
            onClick={() => window.open(CVFile, '_blank', 'noopener,noreferrer')}
            className="inline-flex items-center px-3 py-2 border border-blue-600 text-blue-600 hover:bg-blue-100 rounded transition-colors"
          >
            View Resume
          </button>
          </div>
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <a href="https://github.com/vantien-nguyen" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <img src={GithubIcon} alt="GitHub" className="w-6 h-6 text-blue-600 hover:opacity-80 transition" />
            </a>
            <a href="https://www.linkedin.com/in/vantien-nguyen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6 text-blue-600 hover:opacity-80 transition" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
