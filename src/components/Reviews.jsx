// src/components/Reviews.jsx
import { BUSINESS_CONFIG } from '../config';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    { name: 'Shiva Maurya', text: 'Nice service' },
    { name: 'Divy_Abh', text: 'Kind shopkeeper' },
  ];
  return (
    <section id="reviews" className="py-12 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#111827] mb-6">Reviews</h2>
        <div className="flex justify-center items-center mb-4">
          <Star className="text-[#FACC15] mr-1" size={24} />
          <span className="text-xl font-semibold text-[#111827]">4.5/5</span>
          <span className="ml-2 text-[#6B7280]">Google Rating (2 Reviews)</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 text-left">
              <p className="text-[#111827] italic mb-2">"{r.text}"</p>
              <p className="text-[#6B7280] text-sm text-right">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
