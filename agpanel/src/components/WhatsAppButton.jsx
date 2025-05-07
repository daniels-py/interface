import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '573001234567'; // Reemplaza con tu número

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
