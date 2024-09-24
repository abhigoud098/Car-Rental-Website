import React, { useState } from "react";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState("");

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Display notification message
    setNotification("Details submitted successfully!");
    // Close the form
    closeForm();
    // Clear form fields
    setFormData({ name: "", email: "", message: "" });

    // Clear the notification after a few seconds
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="py-14 dark:bg-black dark:text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6 dark:bg-gray-700">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's collaborate on your upcoming car rental venture
              </h1>
              <p className="text-gray-400">
                Contact us for any inquiries or support. We’re here to help you
                find the perfect ride!
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <button
                onClick={openForm}
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Contact Form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 dark:text-white">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border dark:border-gray-600 p-2 mb-4 dark:bg-gray-700 dark:text-white"
                placeholder="Your Name"
                required
              />
              <label className="block mb-2 dark:text-white">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border dark:border-gray-600 p-2 mb-4 dark:bg-gray-700 dark:text-white"
                placeholder="Your Email"
                required
              />
              <label className="block mb-2 dark:text-white">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border dark:border-gray-600 p-2 mb-4 dark:bg-gray-700 dark:text-white"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-primary text-white rounded hover:bg-primary/80"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
          {notification}
        </div>
      )}
    </>
  );
};

export default Contact;
