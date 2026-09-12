// src/components/TrustSection.jsx
import { BUSINESS_CONFIG } from "../config";
import { Star } from "lucide-react";

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden py-8 text-center"
      style={{
        background:
          "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-purple-400/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-4 md:flex-row">

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <Star
            className="fill-yellow-300 text-yellow-300"
            size={24}
          />

          <span className="text-xl font-semibold text-white">
            4.5/5
          </span>

          <span className="text-white/80">
            Google Rating (2 Reviews)
          </span>
        </div>

        {/* Features */}
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/90">
          <li>Custom Designs</li>
          <li className="text-white/40">•</li>
          <li>Quality Printing</li>
          <li className="text-white/40">•</li>
          <li>Delivery Available</li>
        </ul>
      </div>
    </section>
  );
}
