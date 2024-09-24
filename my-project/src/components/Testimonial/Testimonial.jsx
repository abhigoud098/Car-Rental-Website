import React from "react";

const testimonialData = [
  {
    name: "Dilshad",
    image:
      "https://www.top-one-percent.com/_next/image?url=https%3A%2F%2Ftop-one-percent-strapi-bucket.s3.ap-south-1.amazonaws.com%2FAadya_Sachdeva_02_2x_2_e7fc8327de.png&w=3840&q=75", // Replace with actual image URL
    description:
      "This is the perfect website to rent a car, offering convenience, affordability, and reliability all in one place.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfZ29vZC1sb29raW5nX21pZGRsZS1hZ2VkX2J1c2luZXNzbWFuX183OWY4NWMwNi0zOTIyLTRmODctYTExOS00YWU5NzcyOTU5MDgucG5n.png", // Replace with actual image URL
    description:
      "Our family had a fantastic experience renting a car for our vacation!.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacQL5ccjunRpb7xhzWBShSNQ3Bwchz11q_A&s", // Replace with actual image URL
    description:
      "Renting a car through this website was a game-changer for my business trip!.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              "Our clients love the convenience and reliability of our service!
              From affordable pricing to well-maintained vehicles, they
              appreciate our commitment to making every journey smooth and
              hassle-free."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{testimonial.description}</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
