import React from "react";
import { useTranslation } from "react-i18next";
import GmailIcon from "../assets/icons/gmail.svg";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-gray-900">
        {t("contact.title")}
      </h2>
      <div className="space-y-2 md:space-y-4">
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
