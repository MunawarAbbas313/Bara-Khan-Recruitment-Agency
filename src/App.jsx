// src/App.jsx

import React from "react";
// 1. Import routing components
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 2. Import your ThemeProvider to provide context to all pages
import { ThemeProvider } from "./context/ThemeContext";

// 3. Import all your components and pages
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/Home'; // Assuming your file is named Home.jsx
import About from './Pages/About';
import Services from './Pages/Services';
import Reviews from './Pages/Reviews';
import Contact from './Pages/Contact';

function App() {
  return (
    // 4. Wrap everything in the ThemeProvider and BrowserRouter
    <ThemeProvider>
      <BrowserRouter>
        
        {/* Navbar and Footer are outside <Routes> so they appear on every page */}
        <Navbar />

        {/* 5. Define the routes for each page */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
           
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;