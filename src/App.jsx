// src/App.jsx
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ThreeDots } from "react-loader-spinner";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import ProductCatalog from "./components/ProductCatalog";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* ================= LOADER ================= */}
      {loading && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-white
            overflow-hidden
          "
        >
          <div className="flex flex-col items-center justify-center">

            {/* Truck Animation */}
            <div
              className="
                w-[220px]
                h-[180px]
                sm:w-[280px]
                sm:h-[220px]
                md:w-[340px]
                md:h-[260px]
              "
            >
              <DotLottieReact
                src="/animations/Turkey Power Walk.lottie"
                loop
                autoplay
              />
            </div>

            {/* Loading Text */}
            {/* <div className="mt-2 flex items-center gap-1">
              <span className="text-lg sm:text-xl font-semibold text-gray-700">
                Loading
              </span>

              <span className="text-lg sm:text-xl font-bold text-indigo-600">
                ...
              </span>
            </div> */}

            {/* Three Dots Loader */}
            <div className="mt-2">
              <ThreeDots
                visible={true}
                height="50"
                width="70"
                color="#4F46E5"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>

          </div>
        </div>
      )}

      {/* ================= WEBSITE ================= */}
      <main className="font-sans text-gray-800 app hero">
        <Hero />

        <ProductCatalog />

        <Gallery />

        <Services />

        <HowItWorks />

        <About />

        <TrustSection />

        <Reviews />

        <ContactSection />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}

export default App;
