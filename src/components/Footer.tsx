import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-center p-4 text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Van Tien Nguyen. All rights reserved.
    </footer>
  );
};

export default Footer;
