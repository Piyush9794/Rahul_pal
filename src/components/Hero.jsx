// src/components/Hero.jsx
import { BUSINESS_CONFIG } from '../config';
import { Phone, ShoppingBag } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  const waLink = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=Hello%20${encodeURIComponent(
    BUSINESS_CONFIG.businessName
  )}%20I%20would%20like%20to%20explore%20your%20products
  `;

  return (
    <section
      id="hero"
      className="py-12 md:py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Turn Your Ideas Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Something Real.
            </span>
          </h1>
          {/* 
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Premium customized mugs, mobile covers, keychains, and
            personalized gifts — designed specially for you.
          </p> */}

          {/* BUTTONS */}
          {/* <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">

            <a
              href={waLink}
              className="inline-flex justify-center items-center bg-indigo-600 text-white font-medium rounded-full px-8 py-3.5 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="mr-2" size={20} />
              Enquire on WhatsApp
            </a>

            <a
              href="#products"
              className="inline-flex justify-center items-center bg-white text-gray-900 border border-gray-200 font-medium rounded-full px-8 py-3.5 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ShoppingBag className="mr-2" size={20} />
              Explore Products
            </a>

          </div> */}

          {/* TAGS */}
          {/* <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium">

            <span className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full">
              Custom Designs
            </span>

            <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full">
              Premium Quality
            </span>

            <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
              Local & Reliable
            </span>

          </div> */}
        </div>

        {/* RIGHT ANIMATION */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">

          {/* Glow */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[430px] md:h-[430px] bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-50" />

          {/* Lottie Animation */}
          <div
            className="
              relative
              w-full
              max-w-[340px]
               sm:max-w-[420px]
               md:max-w-[500px]
               lg:max-w-[680px]
              xl:max-w-[720px]
              transition-transform
              duration-500
              hover:scale-105
            "
          >
            <DotLottieReact
              src="/animations/delivery service.lottie"
              loop
              autoplay
            />
          </div>

        </div>

      </div>
    </section>
  );
}
