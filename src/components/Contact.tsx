import React from "react";
import GmailIcon from '../assets/icons/gmail.svg';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-6 text-gray-900">Contact</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2">
          <img src={GmailIcon} alt="Gmail" className="w-5 h-5" />
          <a
            href="mailto:tiennguyenhust@gmail.com"
            className="text-indigo-600 hover:underline text-gray-800 hover:text-indigo-700 transition-colors"
          >
            tiennguyenhust@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
