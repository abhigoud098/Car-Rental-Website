import React, { useState } from "react";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <img
        src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-best-price-icon-vector-png-image_11060241.png"
        className="h-20 w-20"
      ></img>
    ),
    link: "#",
    shortDescription:
      "Get the best deals on car rentals with our competitive pricing!",
    fullDescription:
      "Get the best deals on car rentals with our competitive pricing! We offer affordable rates without compromising on quality, so you can enjoy your trip without breaking the bank. With no hidden fees and flexible rental packages, you're guaranteed the best value for your money.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <img
        src="https://png.pngtree.com/png-clipart/20220620/original/pngtree-express-delivery-car-png-image_8137269.png"
        className="h-20 w-20"
      ></img>
    ),
    link: "#",
    shortDescription:
      "Experience fast and safe car rentals with us! Our streamlined booking process ensures you can hit the road quickly.",
    fullDescription:
      "Experience fast and safe car rentals with us! Our streamlined booking process ensures you can hit the road quickly, while our well-maintained vehicles provide a secure and smooth journey. Drive with peace of mind knowing that your safety is our top priority.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/8583/8583437.png"
        className="h-20 w-20"
      ></img>
    ),
    link: "#",
    shortDescription:
      "Travel with confidence, knowing you're in the hands of experienced drivers.",
    fullDescription:
      "Travel with confidence, knowing you're in the hands of experienced drivers. Our professional drivers are highly trained, knowledgeable, and committed to ensuring a comfortable and safe journey. Whether it's a short trip or a long drive, you're guaranteed a smooth and stress-free ride.",
    aosDelay: "1000",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleLearnMore = (name) => {
    setExpanded((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>
                  {expanded[skill.name]
                    ? skill.fullDescription
                    : skill.shortDescription}
                </p>
                <button
                  onClick={() => toggleLearnMore(skill.name)}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  {expanded[skill.name] ? "Show less" : "Learn more"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
