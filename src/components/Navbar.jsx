import { useState } from 'react';
import {
  Menu,
  X,
  House,
  Settings,
  ShoppingBag,
  Info,
  Images,
  Star,
  Phone,
} from 'lucide-react';

import { BUSINESS_CONFIG } from '../config';
import AdminModal from './AdminModal';

const links = [
  { href: '#hero', label: 'Home', icon: House },
  { href: '#services', label: 'Services', icon: Settings },
  { href: '#products', label: 'Products', icon: ShoppingBag },
  { href: '#about', label: 'About', icon: Info },
  { href: '#gallery', label: 'Gallery', icon: Images },
  { href: '#reviews', label: 'Reviews', icon: Star },
  { href: '#contact', label: 'Contact', icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:px-8">

          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold text-gray-900 tracking-tight">
            THE <span className="text-indigo-600">PRINTING</span> HUB
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-6 text-sm font-medium text-gray-600">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
                    >
                      <Icon size={16} strokeWidth={2} />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">

            {/* Owner Login */}
            <button
              onClick={() => setShowAdmin(true)}
              className="whitespace-nowrap bg-white text-gray-900 border border-gray-200 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            >
              Owner Login
            </button>

            {/* Sign Up */}
            <button className="whitespace-nowrap bg-gray-900 text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-black transition-all shadow-md">
              Sign Up
            </button>


          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${open ? 'block' : 'hidden'
            } bg-white border-t border-gray-100 shadow-lg absolute w-full left-0`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">

            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                >
                  <Icon size={20} strokeWidth={2} />
                  <span>{link.label}</span>
                </a>
              );
            })}

            {/* Mobile Actions */}
            <div className="pt-6 pb-2 border-t border-gray-100 flex flex-col space-y-3 px-3">

              <button
                onClick={() => {
                  setShowAdmin(true);
                  setOpen(false);
                }}
                className="w-full text-center bg-white text-gray-900 border border-gray-200 rounded-lg px-4 py-2.5 font-medium hover:bg-gray-50 transition-all shadow-sm"
              >
                Owner Login
              </button>

              <button className="w-full text-center bg-gray-900 text-white rounded-lg px-4 py-2.5 font-medium hover:bg-black transition-all shadow-md">
                Sign Up
              </button>




            </div>
          </div>
        </div>
      </header >

      {showAdmin && (
        <AdminModal onClose={() => setShowAdmin(false)} />
      )
      }
    </>
  );
}
