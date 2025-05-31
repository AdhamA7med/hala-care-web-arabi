
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/201018485283', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float flex items-center justify-center"
      aria-label="تواصل عبر واتساب"
    >
      <MessageSquare className="h-8 w-8" />
    </button>
  );
};

export default WhatsAppFloat;
