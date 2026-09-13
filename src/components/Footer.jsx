import { BUSINESS_CONFIG } from '../config';
import {
  MapPin,
  MessageCircle,
  Camera,
  Users,
} from 'lucide-react';

const productLinks = [
  { label: 'Custom Mugs', href: '#products' },
  { label: 'Mobile Covers', href: '#products' },
  { label: 'Keychains', href: '#products' },
  { label: 'Personalized Gifts', href: '#products' },
];

const resourceLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#contact' },
  { label: 'WhatsApp', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="px-3 sm:px-5 lg:px-8 py-4 sm:py-6 bg-transparent">
      <div className="max-w-[1400px] mx-auto bg-white border border-gray-200 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">

        {/* ================= MAIN FOOTER ================= */}
        <div className="px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* ================= BRAND ================= */}
            <div className="flex flex-col">

              {/* Logo */}
              <a
                href="#hero"
                className="inline-flex items-center gap-3 w-fit"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold text-lg">
                  {/* Brand Logo */}
                  <img
                    src="/Logo/Logo4.webp"
                    alt="The Printing Hub"
                    className="mt-5 w-48 h-auto object-contain"
                  />

                </div>

                <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                  THE <span className="text-indigo-600">PRINTING</span> HUB
                </span>
              </a>

              {/* Hindi Name */}
              <p className="mt-3 text-sm font-medium text-gray-500">
                {/* थे प्रिंटिंग हब
                 */}The Printing hub
              </p>

              {/* Description */}
              <p className="mt-5 max-w-[430px] text-sm sm:text-[15px] leading-6 text-gray-500">
                We turn your ideas into beautiful personalized products —
                making every design special, memorable, and truly yours.
              </p>

              {/* Location */}
              <div className="flex items-start gap-2 mt-5 text-sm text-gray-500 max-w-md">
                <MapPin
                  size={17}
                  className="mt-0.5 flex-shrink-0 text-red-500"
                />

                <span>
                  Mubarakpur, Kamalabad Barhauli,
                  <br className="sm:hidden" />
                  {' '}Lucknow, UP 226201
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-5 mt-6">

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-900 hover:text-pink-600 transition-all duration-200 hover:scale-110"
                >
                  <Camera size={20} strokeWidth={2} />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-gray-900 hover:text-green-600 transition-all duration-200 hover:scale-110"
                >
                  <MessageCircle size={20} strokeWidth={2} />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-900 hover:text-blue-600 transition-all duration-200 hover:scale-110"
                >
                  <Users size={20} strokeWidth={2} />
                </a>

              </div>



            </div>

            {/* ================= LINK COLUMNS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">

              {/* Product */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-5">
                  Products
                </h4>

                <ul className="space-y-4">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-5">
                  Resources
                </h4>

                <ul className="space-y-4">
                  {resourceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-5">
                  Company
                </h4>

                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mx-6 sm:mx-8 lg:mx-12 border-t border-gray-200" />

        {/* ================= BOTTOM ================= */}
        <div className="px-6 sm:px-8 lg:px-12 py-6">

          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} The Printing Hub. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Cookies Settings
              </a>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
