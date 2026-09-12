// src/components/Hero.jsx
import { BUSINESS_CONFIG } from '../config';
import { Phone, ShoppingBag } from 'lucide-react';

export default function Hero() {
  const waLink = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=Hello%20${encodeURIComponent(BUSINESS_CONFIG.businessName)}%20I%20would%20like%20to%20explore%20your%20products`;
  return (
    <section id="hero" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Turn Your Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Something Real.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Premium customized mugs, mobile covers, keychains, and personalized gifts — designed specially for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
            <a
              href={waLink}
              className="inline-flex justify-center items-center bg-indigo-600 text-white font-medium rounded-full px-8 py-3.5 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="mr-2" size={20} /> Enquire on WhatsApp
            </a>
            <a
              href="#products"
              className="inline-flex justify-center items-center bg-white text-gray-900 border border-gray-200 font-medium rounded-full px-8 py-3.5 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all"
            >
              <ShoppingBag className="mr-2" size={20} /> Explore Products
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full">Custom Designs</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full">Premium Quality</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">Local & Reliable</span>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-[3rem] blur-2xl opacity-40"></div>
          <img
            src="/images/Banner.jpeg"
            alt="Custom printing preview"
            className="relative w-full h-auto object-cover rounded-[2.5rem] shadow-2xl border border-white/50"
            onError={(e) => {
              e.target.style.display = 'none';
              console.error("Hero image failed to load. Ensure '/images/Banner.jpeg' exists in public folder.");
            }}
          />
        </div>
      </div>
    </section>
  );
}
