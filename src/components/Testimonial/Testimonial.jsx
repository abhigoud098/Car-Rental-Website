import React, { useState } from "react";

const initialTestimonials = [
  {
    name: "Dilshad",
    image:
      "https://www.top-one-percent.com/_next/image?url=https%3A%2F%2Ftop-one-percent-strapi-bucket.s3.ap-south-1.amazonaws.com%2FAadya_Sachdeva_02_2x_2_e7fc8327de.png&w=3840&q=75",
    description:
      "This is the perfect website to rent a car, offering convenience, affordability, and reliability all in one place.",
    rating: 5,
    aosDelay: "0",
  },
  {
    name: "Satya",
    image:
      "https://media.istockphoto.com/id/1082483460/photo/beautiful-black-man.jpg?s=612x612&w=0&k=20&c=MmNFcZf6z2WLY7jMBAmtLxo6YNItudiRuzn-z7V3tZk=",
    description:
      "Our family had a fantastic experience renting a car for our vacation!",
    rating: 5,
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacQL5ccjunRpb7xhzWBShSNQ3Bwchz11q_A&s",
    description:
      "Renting a car through this website was a game-changer for my business trip!",
    rating: 5,
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    image: "",
    description: "",
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, newTestimonial]);
    setNewTestimonial({ name: "", image: "", description: "", rating: 0 });
    setShowForm(false); // Close the form after submission
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form when the close button is clicked
  };

  return (
    <div className="testimonial-section">
      {/* Testimonials Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={testimonial.aosDelay}
            className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-gray-800 bg-gray-100 duration-300 rounded-lg"
          >
            <div className="grid place-items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-20 h-20"
              />
            </div>
            <div className="text-2xl">{'⭐'.repeat(testimonial.rating)}</div>
            <p className="dark:text-gray-200">{testimonial.description}</p>
            <p className="text-center font-semibold dark:text-gray-300">{testimonial.name}</p>
          </div>
        ))}
      </div>

      {/* Add Testimonial Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded inline-block"
          style={{ marginBottom: "3rem" }}
        >
          Add your feedback
        </button>
      </div>

      {/* Form to add a new testimonial */}
      {showForm && (
        <div className="form-container flex justify-center items-center mt-4 mb-6">
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded bg-white dark:bg-gray-800 w-full max-w-md"
          >
            <div>
              <label className="block mb-2 dark:text-gray-300">Name:</label>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, name: e.target.value })
                }
                required
                className="w-full p-2 border dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 dark:text-gray-300">Select Picture:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    image: URL.createObjectURL(e.target.files[0]),
                  })
                }
                required
                className="w-full p-2 border dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 dark:text-gray-300">Star Rating:</label>
              <input
                type="number"
                value={newTestimonial.rating}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, rating: e.target.value })
                }
                min="1"
                max="5"
                required
                className="w-full p-2 border dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 dark:text-gray-300">Message:</label>
              <textarea
                value={newTestimonial.description}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    description: e.target.value,
                  })
                }
                required
                className="w-full p-2 border dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCloseForm}
                className="bg-red-500 text-white py-2 px-4 rounded ml-4"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
