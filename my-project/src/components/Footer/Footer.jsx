import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  { title: "Car service", link: "/#" },
  { title: "Company", link: "/#about" },
  { title: "Details", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Location = [
  { title: "Bhopal", link: "/#" },
  { title: "Indore", link: "/#about" },
  { title: "Sagar", link: "/#contact" },
  { title: "Budhni", link: "/#blog" },
];

const AdditionalLinks = [
  { title: "Services related", link: "/#" },
  { title: "Different place", link: "/#about" },
  { title: "Driver issue", link: "/#contact" },
  { title: "Car issue", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="flex flex-col md:flex-row py-5 justify-between items-center">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3 font-serif">
              MAX-Cars
            </h1>
            <p className="text-sm">"© 2024 Your Company Name. All rights reserved."</p>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Bhopal, Madhya Pradesh</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 9898905050</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="py-8 px-4">
            <h2 className="font-bold mb-3">Footer Links</h2>
            <ul className="flex space-x-4">
              {FooterLinks.map((link, index) => (
                <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-500 dark:text-gray-200">
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="py-8 px-4">
            <h2 className="font-bold mb-3">Location</h2>
            <ul className="flex space-x-4">
              {Location.map((link, index) => (
                <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-500 dark:text-gray-200">
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div className="py-8 px-4">
            <h2 className="font-bold mb-3">Additional Links</h2>
            <ul className="flex space-x-4">
              {AdditionalLinks.map((link, index) => (
                <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-500 dark:text-gray-200">
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
