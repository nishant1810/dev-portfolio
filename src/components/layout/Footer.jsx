import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md text-white border-t border-white/10 px-2 py-3">
      <div className="text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Nishant Gaur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
