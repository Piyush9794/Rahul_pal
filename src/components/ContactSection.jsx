// src/components/ContactSection.jsx
import { useState } from 'react';
import { BUSINESS_CONFIG } from '../config';
import { Phone } from 'lucide-react';

export default function ContactSection() {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [customText, setCustomText] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello ${BUSINESS_CONFIG.businessName}, I would like to enquire. Product: ${product || 'N/A'}, Quantity: ${quantity}, Name: ${name}, Phone: ${phone}, Text: ${customText}, Message: ${message}`;
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFile(f);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Send us your idea, photo, or design and let’s create something personalized for you. You can also visit our store!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Left Column: Form */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white"
                    required
                    placeholder="+91 0000000000"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Product Interested In</label>
                  <input
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="e.g., Photo Mug"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Custom Text / Name</label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white"
                  placeholder="Text to be printed"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white resize-none"
                  rows={3}
                  placeholder="Any special requests?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-indigo-600 text-white font-medium rounded-xl py-3.5 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all"
              >
                <Phone className="mr-2" size={20} /> Enquire on WhatsApp
              </button>
            </form>
          </div>

          {/* Right Column: Map & Info */}
          <div className="lg:w-1/2 bg-gray-900 text-white p-8 lg:p-12 flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Visit Our Store</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We love to see our customers in person! Drop by our store to check out our product samples, discuss your custom designs, or just say hi.
            </p>
            
            <div className="bg-gray-800 rounded-2xl p-5 mb-8 border border-gray-700">
              <h4 className="font-semibold text-lg mb-2 text-indigo-400">Our Location</h4>
              <p className="text-gray-300 mb-4">
                Mubarakpur, Kamalabad Barhauli,<br />
                Lucknow, UP 226201
              </p>
              <a 
                href="https://maps.app.goo.gl/WmE3n6Q6RPXqexyt5" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-white text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                Get Directions
              </a>
            </div>

            <div className="flex-grow w-full rounded-2xl overflow-hidden border border-gray-700 min-h-[250px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108254.01677651136!2d80.86962830617004!3d26.870591960037313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995701da2b2a49%3A0x6c4680e7ea90564c!2sThe%20printing%20hub!5e1!3m2!1sen!2sus!4v1789233128339!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
