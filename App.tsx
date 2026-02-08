import React, { useEffect, useState } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import FoodSection from "./components/FoodSection";
import WhyThisExists from "./components/WhyThisExists";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-food-cream text-neutral-800 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-2xl font-bold text-food-red">
            Delhiwaale
          </span>

          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#about" className="hover:text-food-red transition-colors">
              The Man
            </a>
            <a href="#food" className="hover:text-food-red transition-colors">
              The Dishes
            </a>
            <a href="#why" className="hover:text-food-red transition-colors">
              Why?
            </a>
          </div>

          <a
            href="#cta"
            className="bg-food-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-900 transition-all"
          >
            Send Content!
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <FoodSection />
        <WhyThisExists />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
