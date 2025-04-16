import React, { useState, useEffect } from "react";
import "./Blog.css";

import { FaQuoteRight } from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "./Blog.css"; // Add animation styles here

const testimonials = [
  {
    id: 1,
    name: "Tabish Khan",
    videoThumb: "https://via.placeholder.com/400x300.png?text=Video+1",
    quote:
      "Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.",
  },
  {
    id: 2,
    name: "Ayesha Patel",
    videoThumb: "https://via.placeholder.com/400x300.png?text=Video+2",
    quote:
      "Their innovative approach and commitment to compliance made a real difference in our marketing results. Highly recommend them!",
  },
  {
    id: 3,
    name: "Ravi Menon",
    videoThumb: "https://via.placeholder.com/400x300.png?text=Video+3",
    quote:
      "We saw tremendous ROI improvements with Osumare's data-driven campaigns tailored to the pharma market. A trusted partner indeed.",
  },
];

const Blog = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handlePrev = () => {
    setAnimate(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAnimate(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 600); // Reset animation
    return () => clearTimeout(timer);
  }, [current]);

  const testimonial = testimonials[current];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          What Our Pharma Partners Say
        </h2>
        <p className="text-gray-500 mb-8">
          Driving Transformations, One Brand at a Time
        </p>

        <div
          className={`bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto min-h-[500px] transition-all duration-700 ease-in-out ${
            animate ? "slide-left" : ""
          }`}
        >
          <div className="relative w-full md:w-1/2">
            <img
              src={testimonial.videoThumb}
              alt="Testimonial"
              className="rounded-lg w-full object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white text-black rounded-full p-5 shadow-lg hover:scale-105 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </button>
          </div>

          <div className="text-left md:w-1/2 space-y-4">
            <div className="flex items-center gap-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <FaQuoteRight className="text-red-600 text-2xl ml-auto" />
            </div>
            <p className="text-gray-700">{testimonial.quote}</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <FiArrowLeftCircle
            className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-transform"
            onClick={handlePrev}
          />
          <FiArrowRightCircle
            className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-transform"
            onClick={handleNext}
          />
        </div>
      </section>
    </div>
  );
};

export default Blog;
