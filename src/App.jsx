// // src/App.jsx
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import TrustSection from './components/TrustSection';
// import Services from './components/Services';
// import ProductCatalog from './components/ProductCatalog';
// import MadeForYou from './components/MadeForYou';
// import HowItWorks from './components/HowItWorks';
// import Gallery from './components/Gallery';
// import About from './components/About';
// import Reviews from './components/Reviews';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
// import FloatingWhatsApp from './components/FloatingWhatsApp';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main className="font-sans text-gray-800 app hero">
//         <Hero />
//         <ProductCatalog />

//         <Services />
//         {/* <MadeForYou /> */}
//         <HowItWorks />
//         <Gallery />
//         <About />
//         <TrustSection />

//         <Reviews />
//         <ContactSection />
//       </main>
//       <Footer />
//       <FloatingWhatsApp />
//     </>
//   );
// }

// export default App;


// src/App.jsx
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import ProductCatalog from "./components/ProductCatalog";
import MadeForYou from "./components/MadeForYou";
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
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* ================= LOADER ================= */}
      {loading && (
        <div
          className="
            fixed
            inset-0
            z-40
            flex
            items-center
            justify-center
            bg-white
          "
        >
          <div className="flex flex-col items-center">

            {/* DNA Loader */}
            <DNA
              visible={true}
              height="100"
              width="100"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              colors={["#4F46E5", "#7C3AED", "#9333EA"]}
            />

            {/* Brand Name */}
            <h1
              className="
                mt-5
                text-2xl
                font-extrabold
                tracking-tight
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
              "
            >
              The Printing Hub
            </h1>

            {/* Subtitle */}
            <p className="mt-1 text-sm text-gray-400">
              Turning ideas into something real.
            </p>

            {/* Loading dots */}
            <div className="mt-4 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-bounce" />

              <span
                className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-bounce"
                style={{ animationDelay: "0.15s" }}
              />

              <span
                className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= WEBSITE ================= */}
      <main className="font-sans text-gray-800 app hero">
        <Hero />

        <ProductCatalog />

        <Services />

        {/* <MadeForYou /> */}

        <HowItWorks />

        <Gallery />

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

