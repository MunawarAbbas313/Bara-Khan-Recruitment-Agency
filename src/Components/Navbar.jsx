import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import img from "../assets/logo.png";

// Navigation links
const navLinks = [
  { to: "/", en: "Home", ur: "صفحah اول" },
  { to: "/about", en: "About", ur: "ہمارے بارے میں" },
  { to: "/services", en: "Services", ur: "خدمات" },
  { to: "/reviews", en: "Reviews", ur: "جائزے" },
  { to: "/contact", en: "Contact", ur: "رابطہ کریں" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseLinkClass =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-200";
  const activeLinkClass = "bg-blue-600 text-white shadow-md";
  const inactiveLinkClass =
    "text-blue-900 hover:bg-blue-100 hover:text-blue-700";

  return (
    <>
      {/* Navbar Container */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md shadow-md bg-white/90"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-3">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img src={img} alt="Bara Khan Logo" className="h-12 w-auto" />
            <span className="hidden sm:block text-lg font-bold text-blue-700 tracking-wide">
              Bara Khan Recruitment Agency
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `${baseLinkClass} ${
                      isActive ? activeLinkClass : inactiveLinkClass
                    }`
                  }
                >
                  {link[language]}
                </NavLink>
              </li>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 ml-4 text-blue-700 font-semibold hover:text-blue-600 transition-colors"
            >
              <FaGlobe />
              <span>{language === "en" ? "اردو" : "EN"}</span>
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-blue-700 focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <img src={img} alt="Logo" className="h-10 w-auto" />
            <button
              className="text-3xl text-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-semibold ${baseLinkClass} ${
                      isActive ? activeLinkClass : inactiveLinkClass
                    }`
                  }
                >
                  {link[language]}
                </NavLink>
              </li>
            ))}
            <li className="pt-6 border-t border-blue-100">
              <button
                onClick={() => {
                  toggleLanguage();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 text-blue-700 font-semibold text-lg"
              >
                <FaGlobe />
                <span>{language === "en" ? "اردو" : "EN"}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923335306263"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50"
      >
        <FaWhatsapp size={26} />
      </a>
    </>
  );
};

export default Navbar;
