import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../../assets/icons8-whatsapp.svg';

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
        src={whatsappIcon} // Usa el icono SVG importado
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;

