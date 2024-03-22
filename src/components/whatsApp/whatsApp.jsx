import React from 'react';
import './whatsApp.css'; // Estilos CSS para el botón de WhatsApp

function WhatsAppButton() {
  return (
    <div id="whatsapp-button">
      <a href="https://wa.me/+541164062330" target="_blank" rel="noopener noreferrer">
        <img src="whatsapp-icon.png" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
