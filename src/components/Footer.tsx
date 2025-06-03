import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-center p-4 text-gray-500 text-sm">
      {t("footer.copyright", { year: currentYear })}
    </footer>
  );
};

export default Footer;
