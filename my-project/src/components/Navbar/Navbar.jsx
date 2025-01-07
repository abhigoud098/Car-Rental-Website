import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu"; // Ensure this exists
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Navlinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Booking-cars", link: "/booking-car" },
  { id: 3, name: "Services", link: "/Services" },
  { id: 3, name: "Feedback", link: "/Testimonial" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif">MAX-Cars</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {isAuthenticated ? (
                <li>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    className="text-lg font-medium py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-500"
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={loginWithRedirect}
                    className="text-lg font-medium py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-500"
                  >
                    Sign up
                  </button>
                </li>
              )}

              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
