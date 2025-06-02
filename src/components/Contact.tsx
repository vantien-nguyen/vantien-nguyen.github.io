import React from "react";
import LinkedinIcon from '../assets/icons/linkedin.svg';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-6 text-gray-900">Contact</h2>
      <p className="text-gray-700 mb-6 text-lg">
        Feel free to reach out for collaborations, freelance opportunities, or just to connect!
      </p>
      <div className="space-y-4">
        <p className="text-gray-800">
          📧 Email:{" "}
          <a
            href="mailto:tiennguyenhust@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            tiennguyenhust@gmail.com
          </a>
        </p>
        <p className="text-gray-800">
          <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6 mr-1" />:{" "}
          <a
            href="https://www.linkedin.com/in/vantien-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            linkedin.com/in/vantien-nguyen
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
