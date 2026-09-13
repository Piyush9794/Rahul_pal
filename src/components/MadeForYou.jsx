// src/components/MadeForYou.jsx
import { BUSINESS_CONFIG } from '../config';
import { ArrowRight } from 'lucide-react';

export default function MadeForYou() {
  const waLink = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=Hello%20${encodeURIComponent(BUSINESS_CONFIG.businessName)}%20I%20would%20like%20to%20start%20a%20custom%20order`;
  return (
    <section id="made-for-you" className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-[#111827] mb-4">Made For You</h2>
      <p className="text-lg text-[#6B7280] max-w-2xl mx-auto mb-6">
        Provide photos, names, logos, artwork or special messages and we’ll turn them into a personalized product.
      </p>
      <a
        href={waLink}
        className="inline-flex items-center bg-[#FACC15] text-white rounded-full px-6 py-3 hover:bg-[#F97316] transition"
      >
        Start Your Custom Order <ArrowRight className="ml-2" size={20} />
      </a>
    </section>
  );
}
