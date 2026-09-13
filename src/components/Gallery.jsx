// src/components/Gallery.jsx
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const products = [
  {
    image: '/images/WhiteCup.jpeg',
    name: 'Custom White Cap',
    about: 'Premium quality personalized cap with custom printing.',
    price: '₹299',
  },
  {
    image: '/images/Polo.jpg',
    name: 'Custom Polo T-shirt',
    about: 'Premium quality personalized t-shirt with custom printing.',
    price: '₹499',
  },
  {
    image: '/images/Bottole.jpg',
    name: 'Custom Bottle',
    about: 'Premium quality personalized bottle with custom printing.',
    price: '₹349',
  },
  {
    image: '/images/CustomePolo.jpg',
    name: 'Custom Polo T-shirt',
    about: 'Premium quality personalized t-shirt with custom printing.',
    price: '₹499',
  },
  {
    image: '/images/Botle2.jpg',
    name: 'Custom Bottle',
    about: 'Premium quality personalized bottle with custom printing.',
    price: '₹399',
  },
  {
    image: '/images/YourPolo.jpg',
    name: 'Custom Polo T-shirt',
    about: 'Premium quality personalized t-shirt with custom printing.',
    price: '₹499',
  },
  {
    image: '/images/Polo3.jpg',
    name: 'Custom Polo T-shirt',
    about: 'Premium quality personalized t-shirt with custom printing.',
    price: '₹499',
  },
  {
    image: '/images/Botle2.jpg',
    name: 'Custom Bottle',
    about: 'Premium quality personalized bottle with custom printing.',
    price: '₹399',
  },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-indigo-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">
            Our Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Our{' '}
            <span className="text-indigo-600">
              Gallery
            </span>
          </h2>

          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Explore some of our personalized printing work and
            premium products.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
            sm:gap-5
            lg:gap-6
          "
        >
          {products.map((product, i) => (
            <div
              key={product.image}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                sm:rounded-2xl
                bg-white
                border
                border-gray-100
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-500
              "
            >
              {/* Image Area */}
              <div
                className="
                  relative
                  overflow-hidden
                  cursor-zoom-in
                  h-[170px]
                  sm:h-[260px]
                  lg:h-[320px]
                "
                onClick={() => setLightboxIdx(i)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* Zoom Icon */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    pointer-events-none
                  "
                >
                  <div
                    className="
                      w-9 h-9
                      sm:w-12 sm:h-12
                      rounded-full
                      bg-white/90
                      backdrop-blur-sm
                      flex
                      items-center
                      justify-center
                      text-indigo-600
                      shadow-xl
                      opacity-0
                      scale-75
                      group-hover:opacity-100
                      group-hover:scale-100
                      transition-all
                      duration-300
                    "
                  >
                    <ZoomIn
                      size={18}
                      className="sm:w-5 sm:h-5"
                    />
                  </div>
                </div>

                {/* Price Badge */}
                <div
                  className="
                    absolute
                    top-2
                    right-2
                    sm:top-3
                    sm:right-3
                    bg-indigo-600
                    text-white
                    px-2
                    py-1
                    sm:px-3
                    sm:py-1.5
                    rounded-full
                    text-[10px]
                    sm:text-sm
                    font-bold
                    shadow-lg
                  "
                >
                  {product.price}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3 sm:p-5">

                {/* Category */}
                <p
                  className="
                    text-[9px]
                    sm:text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-indigo-600
                    mb-1
                  "
                >
                  The Printing Hub
                </p>

                {/* Product Name */}
                <h3
                  className="
                    text-sm
                    sm:text-lg
                    font-bold
                    text-gray-900
                    leading-tight
                    mb-1.5
                    sm:mb-2
                  "
                >
                  {product.name}
                </h3>

                {/* About */}
                <p
                  className="
                    text-[10px]
                    sm:text-sm
                    text-gray-500
                    leading-relaxed
                    line-clamp-2
                    mb-3
                    sm:mb-4
                  "
                >
                  {product.about}
                </p>

                {/* Price */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    pt-2.5
                    sm:pt-3
                    border-t
                    border-gray-100
                  "
                >
                  <span className="text-[10px] sm:text-xs text-gray-400">
                    Starting from
                  </span>

                  <span
                    className="
                      text-base
                      sm:text-xl
                      font-extrabold
                      text-indigo-600
                    "
                  >
                    {product.price}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIdx !== null && (
          <div
            className="
              fixed
              inset-0
              z-50
              bg-black/95
              flex
              items-center
              justify-center
              p-4
            "
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx(null);
              }}
              className="
                absolute
                top-4
                right-4
                sm:top-6
                sm:right-6
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-white/10
                hover:bg-white/20
                text-white
                flex
                items-center
                justify-center
                transition-all
                duration-300
                z-50
              "
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Full Image */}
            <div
              className="max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={products[lightboxIdx].image}
                alt={products[lightboxIdx].name}
                className="
                  max-w-full
                  max-h-[75vh]
                  rounded-xl
                  object-contain
                  shadow-2xl
                "
              />

              {/* Lightbox Info */}
              <div className="text-center text-white mt-4">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {products[lightboxIdx].name}
                </h3>

                <p className="text-white/60 text-sm mt-1">
                  {products[lightboxIdx].about}
                </p>

                <p className="text-indigo-400 text-xl font-bold mt-2">
                  {products[lightboxIdx].price}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
