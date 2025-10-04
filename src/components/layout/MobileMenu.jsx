import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; 

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/skills", "Skills & Experience"],
    ["/education", "Education"],
    ["/project", "Projects"],
    ["/contactMe", "Contact Me"],
  ];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-400 transition duration-300"
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Nav Links */}
          <nav className="flex flex-col items-center space-y-6">
            {links.map(([to, label], i) => (
              <motion.div
                key={to}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-2xl font-semibold transition-all duration-300 ${
                      isActive ? "text-blue-400" : "text-white hover:text-blue-400"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
