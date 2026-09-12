// src/components/EnquiryModal.jsx
import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export default function EnquiryModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [customText, setCustomText] = useState('');
  const [specialReq, setSpecialReq] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello ${BUSINESS_CONFIG.businessName}, I would like to enquire about this product. Product: ${product.name}, Price: ${product.price ? '₹' + product.price : product.priceLabel}, Quantity: ${quantity}, Name: ${name}, Custom Text: ${customText}, Special Requirements: ${specialReq}`;
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFile(f);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[#111827]">{product.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2">
            <label className="w-32 text-sm text-[#6B7280]">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="w-32 text-sm text-[#6B7280]">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded px-2 py-1 w-full"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="w-32 text-sm text-[#6B7280]">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded px-2 py-1 w-full"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="w-32 text-sm text-[#6B7280]">Custom Text / Name</label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="w-32 text-sm text-[#6B7280]">Special Req.</label>
            <textarea
              value={specialReq}
              onChange={(e) => setSpecialReq(e.target.value)}
              className="border rounded px-2 py-1 w-full"
              rows={2}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="w-32 text-sm text-[#6B7280]">Upload Design</label>
            <label className="flex items-center cursor-pointer bg-[#FACC15] text-white rounded px-3 py-1 hover:bg-[#F97316] transition">
              <Upload size={16} className="mr-1" />
              <span>Select File</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
          {file && (
            <div className="text-sm text-[#6B7280]">Selected: {file.name} (will be sent in WhatsApp)</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#FACC15] text-white rounded py-2 hover:bg-[#F97316] transition"
          >
            Open WhatsApp Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
