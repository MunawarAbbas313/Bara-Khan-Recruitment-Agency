import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? stored === "true" : false;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // Apply dark mode to body
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "ur" : "en"));

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
