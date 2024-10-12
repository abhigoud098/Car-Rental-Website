import React, { useState } from "react";
import whiteCar from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car1.png";
import car8 from "../../assets/car2.png";

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
  const [isBooking, setIsBooking] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [bookedDetails, setBookedDetails] = useState(null);

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
    setBookedDetails(null);
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
    setBookedDetails({ userName, contactNumber, days });
    setNotification({
      message: `You have successfully booked ${selectedCar.name} for ${days} day(s). Total: ${selectedCar.price * days}.`,
      type: "success",
    });
    closeDetails();
  };

  const handleReturnSubmit = (e) => {
    e.preventDefault();
    if (userName === bookedDetails?.userName && contactNumber === bookedDetails?.contactNumber) {
      setNotification({
        message: `You have successfully returned ${selectedCar.name}.`,
        type: "success",
      });
      closeDetails();
      setBookedDetails(null); // Clear booking details after return
    } else {
      setNotification({
        message: "The name and contact number do not match our records. Please check and try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="pb-24">
      <div className="container">
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Cars Prices!
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10">
          Affordable cars are available for everyone, allowing you to book quickly and head to your destination with ease.
        </p>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((car, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{car.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${car.price}/Day</p>
                    <button
                      onClick={() => showDetails(car)}
                      className="py-2 px-4 bg-primary text-white rounded hover:bg-primary/80"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Car Details */}
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
                      type="submit"
                      className="py-2 px-4 bg-primary text-white rounded hover:bg-primary/80"
                    >
                      Submit Booking
                    </button>
                    <button
                      onClick={closeDetails}
                      className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      Close
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
                  <div className="flex justify-end mt-4 space-x-4">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-secondary bg-yellow-500 text-white rounded hover:bg-secondary/80"
                    >
                      Submit Return
                    </button>
                    <button
                      onClick={closeDetails}
                      className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      Close
                    </button>
                  </div>
                </form>
              )}

              <div className="flex justify-end mt-4 space-x-4">
                {!isBooking && !isReturning && (
                  <>
                    <button
                      onClick={handleBookNow}
                      className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-400"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={handleReturnCar}
                      className="py-2 px-4 bg-secondary bg-yellow-500 text-white rounded hover:bg-secondary/80"
                    >
                      Return Car
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Notification for Booking/Return Confirmation */}
        {notification.message && (
          <div className={`fixed bottom-4 right-4 p-4 rounded shadow-lg ${notification.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}>
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
