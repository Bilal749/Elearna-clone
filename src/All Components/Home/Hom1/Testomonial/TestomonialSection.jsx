/** @format */

// TestomonialSection.jsx

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import testimonials from './TestomonialData';

const TestomonialSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  return (
    <section className="w-full bg-[#183338] py-20 px-6 md:mt-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start lg:justify-between">
          {/* Left Side */}
          <div className="text-center md:text-start">
            <p className="uppercase tracking-[4px] text-white/70 text-sm font-medium mb-4">
              Our Testimonials
            </p>

            <h1 className="text-white text-5xl lg:text-7xl font-bold leading-[1.1] mb-10">
              Trusted by our <br /> successful students
            </h1>

            {/* Image */}
            <div className="w-full max-w-[600px] h-[370px] rounded-sm overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between h-auto">
            {/* Stats */}
            <div className="flex gap-14 mb-16 flex-wrap lg:mt-28">
              <div className="md:flex md:gap-6">
                <h2 className="text-white text-6xl font-bold">70M</h2>

                <div className="flex items-center gap-4 mt-2">
                  <div className="w-[1px] h-10 bg-white/40"></div>

                  <p className="uppercase text-white/70 text-sm tracking-[2px] leading-6">
                    Successful <br /> Students
                  </p>
                </div>
              </div>

              <div className="md:flex md:gap-8">
                <h2 className="text-white text-6xl font-bold">25K</h2>

                <div className="flex items-center gap-4 mt-2">
                  <div className="w-[1px] h-10 bg-white/40"></div>

                  <p className="uppercase text-white/70 text-sm tracking-[2px] leading-6">
                    Global Job <br /> Placements
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="max-w-[520px] mb-20">
              <p className="text-white/80 text-[22px] leading-[35px] font-light mb-12">
                “{testimonial.description}”
              </p>

              <div className="flex flex-col items-start justify-between flex-wrap gap-10">
                {/* Name */}
                <div>
                  <h3 className="text-white text-3xl font-bold mb-2">
                    {testimonial.name}
                  </h3>

                  <p className="uppercase tracking-[3px] text-white/60 text-sm">
                    {testimonial.position}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black duration-300"
                  >
                    <FaArrowLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black duration-300"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestomonialSection;
