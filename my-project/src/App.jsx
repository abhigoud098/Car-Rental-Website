import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Dark mode state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <BrowserRouter>
        {/* Navbar should be outside of Routes so it shows on all pages */}
        <Navbar theme={theme} setTheme={setTheme} />

        {/* Define routes for different components */}
        <Routes>
          <Route path="/" element={<Hero theme={theme} />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking-car" element={<CarList/>} />
          <Route path="/contect" element={<Contact/>} />
        </Routes>

        <About />
        <Services />
        <CarList />
        <Testimonial />
        <AppStoreBanner />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
