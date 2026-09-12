// src/components/Gallery.jsx
import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/WhiteCap3.jpeg',
  '/images/cup.jpeg',
  '/images/whitecap4.jpeg',
  '/images/whitecap5.jpeg',
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const sectionRef = useRef(null);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Scroll zoom effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - (rect.top / windowHeight);
        // Calculate a scale between 0.95 and 1.1 based on scroll progress
        const newScale = 0.95 + (progress * 0.15);
        setScale(Math.min(Math.max(newScale, 0.95), 1.1));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Our <span className="text-indigo-600">Gallery</span>
        </h2>
        
        {/* Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black group">
          <div 
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={i} className="w-full shrink-0 relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-75"
                  style={{ transform: `scale(${scale})` }}
                  loading="lazy"
                  onClick={() => setLightboxIdx(i)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
          
          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIdx !== null && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img 
              src={images[lightboxIdx]} 
              alt="Enlarged" 
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain" 
            />
          </div>
        )}
      </div>
    </section>
  );
}
