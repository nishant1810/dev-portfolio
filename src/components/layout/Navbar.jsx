import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/skills", "Skills"],
    ["/education", "Education"],
    ["/project", "Projects"],
    ["/contactMe", "Contact Me"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="flex items-center justify-between h-16 w-full">
        {/* Left - Logo flush to the edge */}
        <NavLink
          to="/"
          className="text-white font-mono text-2xl font-bold tracking-wide pl-4"
          onClick={() => setMenuOpen(false)}
        >
          <span className="bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent leading-tight">Nishant Gaur</span>
        </NavLink>

        {/* Right - Navigation links / Hamburger */}
        <div className="flex items-center pr-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase font-medium tracking-wide transition duration-300 ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-white text-2xl z-50 ml-4"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
