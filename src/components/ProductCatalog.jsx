// src/components/ProductCatalog.jsx
import { PRODUCTS } from '../data/products';
import EnquiryModal from './EnquiryModal';
import { useState, useEffect, useRef } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCatalog() {
  const [selected, setSelected] = useState(null);
  const [allProducts, setAllProducts] = useState(PRODUCTS);
  const scrollRef = useRef(null);

  const openModal = (product) => setSelected(product);
  const closeModal = () => setSelected(null);

  const loadProducts = () => {
    try {
      const local = JSON.parse(
        localStorage.getItem('local_products') || '[]'
      );

      const merged = [...PRODUCTS, ...local];

      const uniqueProducts = merged.filter(
        (product, index, self) =>
          index === self.findIndex(
            (p) => p.id === product.id
          )
      );

      setAllProducts(uniqueProducts);
    } catch (e) {
      console.error(e);
    }
  };


  useEffect(() => {
    loadProducts();
    window.addEventListener('productsUpdated', loadProducts);
    return () => window.removeEventListener('productsUpdated', loadProducts);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by one item width roughly
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slideLeft = () => scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  const slideRight = () => scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });

  // Scroll Zoom Effect (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const img = entry.target;
        if (entry.isIntersecting) {
          img.style.transform = 'scale(1.1)';
        } else {
          img.style.transform = 'scale(1)';
        }
      });
    }, { threshold: 0.5 });

    const images = document.querySelectorAll('.product-zoom-img');
    images.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-indigo-600">Products</span>
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Swipe to explore our premium collection of personalized gifts and merchandise.
            </p>
          </div>
          <div className="hidden md:flex space-x-3 mt-4 md:mt-0">
            <button onClick={slideLeft} className="p-3 bg-gray-100 hover:bg-indigo-50 text-gray-800 hover:text-indigo-600 rounded-full transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={slideRight} className="p-3 bg-gray-100 hover:bg-indigo-50 text-gray-800 hover:text-indigo-600 rounded-full transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-6 pb-8 -mx-4 px-4 lg:mx-0 lg:px-0 mx-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allProducts.map((p, index) => (
            <div
              key={`${p.id}-${index}`}
              className="snap-start shrink-0 w-[85vw] sm:w-[320px] bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col group relative"
            >
              <div className="w-full h-56 overflow-hidden relative bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-zoom-img w-full h-full object-cover transition-transform duration-1000 ease-out"
                  loading="lazy"
                  style={{ transformOrigin: 'center' }}
                />
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative bg-white z-10">
                <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full mb-3 w-max">
                  {p.category || 'Premium'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600 mb-5 flex-1 line-clamp-2">
                  {p.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className="text-lg font-extrabold text-indigo-600">
                    {p.price ? `₹${p.price}` : p.priceLabel}
                  </span>
                  <button
                    onClick={() => openModal(p)}
                    className="flex items-center justify-center bg-gray-900 text-white rounded-xl px-4 py-2 hover:bg-indigo-600 transition-colors shadow-sm"
                    title="Enquire"
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex justify-center space-x-4 md:hidden mt-2">
          <button onClick={slideLeft} className="p-3 bg-white border border-gray-200 text-gray-800 rounded-full shadow-sm">
            <ChevronLeft size={24} />
          </button>
          <button onClick={slideRight} className="p-3 bg-white border border-gray-200 text-gray-800 rounded-full shadow-sm">
            <ChevronRight size={24} />
          </button>
        </div>

        {selected && (
          <EnquiryModal product={selected} onClose={closeModal} />
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}
