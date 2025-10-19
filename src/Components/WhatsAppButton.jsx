// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923335306263"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg 
                 flex items-center justify-center
                 transform transition-all duration-200 hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
      <FaWhatsapp className="relative z-10 text-3xl" />
    </a>
  );
};

export default WhatsAppButton;