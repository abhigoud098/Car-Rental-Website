import { useState } from "react";
import whiteCar from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car1.png";
import car8 from "../../assets/car2.png";
import CarCard from "./CarCard ";

// Utility functions for localStorage
const getBookingsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("bookings")) || [];
const saveBookingsToLocalStorage = (bookings) =>
  localStorage.setItem("bookings", JSON.stringify(bookings));

const carList = [
  {
    name: "JEEP UX",
    price: 100,
    image: whiteCar,
    details: "A robust and stylish Jeep UX, perfect for off-road adventures.",
  },
  {
    name: "BMW UX",
    price: 140,
    image: car2,
    details: "Spacious and reliable cool 'BMW' ideal for long drive.",
  },
  {
    name: "BOLERO BLUE UX",
    price: 100,
    image: car3,
    details: "Elegant Bolero UX with a white finish, ready for family trip.",
  },
  {
    name: "BOLERO BLUE UX",
    price: 100,
    image: car6,
    details: "Elegant Bolero UX with a white finish, ready for family trip.",
  },
  {
    name: "BOLERO BLUE UX",
    price: 100,
    image: car7,
    details: "Elegant Bolero UX with a white finish, ready for family trip.",
  },
  {
    name: "BOLERO BLUE UX",
    price: 100,
    image: car8,
    details: "Elegant Bolero UX with a white finish, ready for family trip.",
  },
];

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [userName, setUserName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [days, setDays] = useState(1);
  const [orderId, setOrderId] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [bookings, setBookings] = useState(getBookingsFromLocalStorage());
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") !== null
  ); // Check if user is logged in

  const showDetails = (car) => {
    setSelectedCar(car);
    setIsBooking(false);
    setIsReturning(false);
  };

  const closeDetails = () => {
    setSelectedCar(null);
    setNotification({ message: "", type: "" });
    setUserName("");
    setContactNumber("");
    setDays(1);
    setOrderId("");
  };

  const handleBookNow = () => {
    setIsBooking(true);
    setIsReturning(false);
  };

  const handleReturnCar = () => {
    setIsReturning(true);
    setIsBooking(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newOrderId = Math.random().toString(36).slice(2, 11);
    const newBooking = {
      orderId: newOrderId,
      userName,
      contactNumber,
      car: selectedCar,
      days,
      totalPrice: selectedCar.price * days,
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    saveBookingsToLocalStorage(updatedBookings);

    setNotification({
      message: `You have successfully booked ${
        selectedCar.name
      } for ${days} day(s). Order ID: ${newOrderId}. Total: $${
        selectedCar.price * days
      }.`,
      type: "success",
    });

    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 5000);

    closeDetails();
  };

  const handleReturnSubmit = (e) => {
    e.preventDefault();
    const foundBooking = bookings.find(
      (booking) =>
        booking.orderId === orderId &&
        booking.userName === userName &&
        booking.contactNumber === contactNumber
    );

    if (foundBooking) {
      setNotification({
        message: `You have successfully returned ${foundBooking.car.name}. Order ID: ${foundBooking.orderId}.`,
        type: "success",
      });

      setTimeout(() => {
        setNotification({ message: "", type: "" });
      }, 5000);

      closeDetails();
      const updatedBookings = bookings.filter(
        (booking) => booking.orderId !== foundBooking.orderId
      );
      setBookings(updatedBookings);
      saveBookingsToLocalStorage(updatedBookings);
    } else {
      setNotification({
        message:
          "No matching booking found. Please check your details and try again.",
        type: "error",
      });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    setIsLoggedIn(false); // Update logged-in state
    setBookings([]); // Clear bookings
    saveBookingsToLocalStorage([]); // Save empty bookings to localStorage
    setNotification({ message: "You have been signed out.", type: "success" });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 5000);
  };

  return (
    <div className="pb-24">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Cars Prices!
        </h1>
        <p className="text-sm pb-10">
          Affordable cars are available for everyone, allowing you to book
          quickly and head to your destination with ease.
        </p>

        {/* Sign-out button */}
        {isLoggedIn && (
          <button
            onClick={handleSignOut}
            className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500"
          >
            Sign Out
          </button>
        )}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((car, index) => (
              <CarCard key={index} car={car} showDetails={showDetails} />
            ))}
          </div>
        </div>

        {selectedCar && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">{selectedCar.name}</h2>
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-[150px] object-contain mb-4"
              />
              <p>{selectedCar.details}</p>
              <p className="font-semibold mt-4">${selectedCar.price}/Day</p>

              <div className="flex space-x-4 mt-4">
                {!isBooking && !isReturning && (
                  <>
                    <button
                      onClick={handleBookNow}
                      className="py-2 px-4 bg-primary text-white rounded hover:bg-primary/80"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={handleReturnCar}
                      className="py-2 px-4 bg-primary text-white rounded hover:bg-primary/80"
                    >
                      Return Car
                    </button>
                  </>
                )}
              </div>

              {isBooking && (
                <form onSubmit={handleBookingSubmit} className="mt-4">
                  <label className="block mb-2">Your Name:</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border dark:border-gray-600 p-2 mb-4 bg-white dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <label className="block mb-2">Contact Number:</label>
                  <input
                    type="text"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full border dark:border-gray-600 p-2 mb-4 bg-white dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <label className="block mb-2">Number of Days:</label>
                  <input
                    type="number"
                    min="1"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className="w-full border dark:border-gray-600 p-2 mb-4 bg-white dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <p>Total Price: ${selectedCar.price * days}</p>
                  <div className="flex justify-end mt-4 space-x-4">
                    <button
                      type="button"
                      onClick={closeDetails}
                      className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-500"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              )}

              {isReturning && (
                <form onSubmit={handleReturnSubmit} className="mt-4">
                  <label className="block mb-2">Your Name:</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border dark:border-gray-600 p-2 mb-4 bg-white dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <label className="block mb-2">Contact Number:</label>
                  <input
                    type="text"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full border dark:border-gray-600 p-2 mb-4 bg-white dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <label className="block mb-2">Order ID:</label>
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="w-full border dark:border-gray-600 p-2 mb-4 bg-white dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <div className="flex justify-end mt-4 space-x-4">
                    <button
                      type="button"
                      onClick={closeDetails}
                      className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                      Return Car
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
