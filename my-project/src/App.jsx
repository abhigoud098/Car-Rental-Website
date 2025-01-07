import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Import your Navbar component
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import ResponsiveMenu from "./components/Navbar/ResponsiveMenu";
import {useAuth0} from '@auth0/auth0-react';

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
      <Router>
        {/* Add Navbar component here */}
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Hero theme={theme} />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking-car" element={<CarList />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonial" element={<Testimonial />} />

        </Routes>

        {/* These components might need to be conditionally rendered or adjusted based on your routing logic */}
        <About />
        <Services />
        <CarList />
        <Testimonial />
        <AppStoreBanner />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
};

export default App;