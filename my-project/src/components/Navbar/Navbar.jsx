import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export const Navlinks = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "ABOUT", link: "/about" },
  { id: 3, name: "BOOKING-CAR", link: "/booking-car" },
  { id: 4, name: "CONTECT", link: "/contect" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setSuccessMessage("");
    setErrorMessage("");
    setPassword(""); // Reset password input on modal close
  };

  const handleSocialLoginSuccess = (response) => {
    const { profileObj } = response;
    setUserDetails(profileObj);
    console.log("User Details: ", profileObj);
    setSuccessMessage("Login successful!");
    toggleModal();
  };

  const handleSocialLoginFailure = (error) => {
    console.error("Login Failed: ", error);
    setSuccessMessage("Login failed. Please try again.");
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  // Updated password validation function
  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the password length is valid
    if (password.length < 8) {
      setErrorMessage(
        "Password must be at least 8 characters include letters, numbers, and special characters."
      );
      return;
    }

    // Check if the password is valid
    if (!isPasswordValid(password)) {
      setErrorMessage("Password is not valid.");
      return;
    }

    // Display success message based on the action
    if (isLogin) {
      setSuccessMessage("Login successful!");
    } else {
      setSuccessMessage("Signup successful!");
    }

    toggleModal(); // Close modal after successful login/signup
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
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
                {userDetails ? (
                  <li className="text-lg font-medium">{userDetails.name}</li>
                ) : (
                  <>
                    <li>
                      <button
                        onClick={() => {
                          setIsLogin(true);
                          toggleModal();
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setIsLogin(false);
                          toggleModal();
                        }}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                      >
                        Signup
                      </button>
                    </li>
                  </>
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
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
            <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg w-96`}>
              <h2 className="text-lg font-bold mb-4 text-center">
                {isLogin ? "Login" : "Signup"}
              </h2>
              {successMessage && (
                <div className="mb-4 text-green-600 dark:text-green-400 text-center">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="mb-4 text-red-600 dark:text-red-400 text-center">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                )}
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {isLogin ? "Login" : "Signup"}
                </button>
              </form>
              <div className="flex flex-col items-center mt-4">
                <span className="text-sm mb-2">or login with</span>
                <div className="flex justify-center gap-4">
                  <GoogleLogin
                    onSuccess={handleSocialLoginSuccess}
                    onFailure={handleSocialLoginFailure}
                    render={({ onClick }) => (
                      <button
                        onClick={onClick}
                        className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      >
                        <FaGoogle className="text-red-500" size={30} />
                      </button>
                    )}
                  />
                  <button
                    onClick={() => handleSocialLogin("github")}
                    className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <FaGithub className="text-gray-800" size={30} />
                  </button>
                  <button
                    onClick={() => handleSocialLogin("linkedin")}
                    className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <FaLinkedin className="text-blue-700" size={30} />
                  </button>
                  <button
                    onClick={() => handleSocialLogin("twitter")}
                    className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <FaTwitter className="text-blue-500" size={30} />
                  </button>
                </div>
              </div>
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Navbar;
