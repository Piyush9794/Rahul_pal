// src/components/FloatingWhatsApp.jsx
import { BUSINESS_CONFIG } from '../config';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const waLink = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=Hello%20${encodeURIComponent(BUSINESS_CONFIG.businessName)}%20I%20would%20like%20to%20enquire%20about%20a%20custom%20product`;
  return (
    <a
      href={waLink}
      className="fixed bottom-4 right-4 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#128C7E] transition"
      aria-label="WhatsApp contact"
    >
      <MessageSquare size={24} />
    </a>
  );
}
