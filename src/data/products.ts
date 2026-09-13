// src/data/products.ts
export interface Product {
  id: string;
  name: string;
  image: string; // path relative to /src/assets or public
  description: string;
  price?: number; // if undefined, use priceLabel
  priceLabel?: string; // e.g., "Starting from ₹199" or "Price on Enquiry"
}

export const PRODUCTS: Product[] = [
  {
    id: "photo-mug",
    name: "Customized Photo Bottle",
    image: "/images/Bottole.jpg",
    description: "High‑quality bottle with your photo printed on it.",
    price: 299,
  },
  {
    id: "mobile-cover",
    name: "Personalized Mobile Cover",
    image: "/images/Mobile.jpeg",
    description: "Sublimation printed mobile cover – protect and showcase your style.",
    price: 399,
  },
  {
    id: "keychain",
    name: "Custom Keychain & Accessories",
    image: "/images/Phone.jpeg",
    description: "Metal or acrylic keychain with custom engraving or print.",
    priceLabel: "Starting from ₹199",
  },
  {
    id: "bottle",
    name: "Customized Polo T-Shirt",
    image: '/images/CustomePolo.jpg',
    description: "Premium quality personalized t-shirt with custom printing.",
    priceLabel: "Price on Enquiry",
  },
  {
    id: "keychain",
    name: "Custom Keychain & Accessories",
    image: "/images/Phone.jpeg",
    description: "Metal or acrylic keychain with custom engraving or print.",
    priceLabel: "Starting from ₹199",
  },
  {
    id: "bottle",
    name: "Printed Bottle",
    image: "/images/WhiteCup2.jpeg",
    description: "Stainless‑steel bottle with your design.",
    priceLabel: "Price on Enquiry",
  },
  {
    id: "mobile-cover",
    name: "Personalized Mobile Cover",
    image: "/images/Mobile.jpeg",
    description: "Sublimation printed mobile cover – protect and showcase your style.",
    price: 399,
  },

  // Add more products as needed following the same pattern
];
