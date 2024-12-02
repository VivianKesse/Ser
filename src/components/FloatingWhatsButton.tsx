import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsButton() {
  return (
    <div className="fixed bottom-16 right-8">
      <a
        href="https://wa.me/XXXXXXXXXX" // Substitua por seu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors text-white text-3xl"
      >
        <span className="absolute e w-full h-full rounded-full bg-green-400 opacity-60 animate-ping"></span>

        <FaWhatsapp className="relative z-10" />
      </a>
    </div>
  );
};


