/** @format */

import React from 'react';
import { all_images } from '../../../../assets/All_images';
import { Link } from 'react-router';
import { Offer_data } from './OfferData';

const Offer = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-10 py-12 lg:py-24 font-sans overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Overlapping Images */}
        {/* Adjusted: Added aspect-ratio and relative scaling instead of fixed h-[500px] */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[350px] sm:min-h-[450px] lg:min-h-[550px]">
          {/* Top Main Image */}
          <div className="absolute top-0 right-0 w-[75%] sm:w-[65%] aspect-[4/5] z-10">
            <img
              src={all_images.WomanHolding}
              alt="Student studying"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />

            {/* Floating Badge - Scaled for mobile */}
            <div className="absolute top-6 -left-8 sm:top-10 sm:-left-16 bg-[#0a1d1d] text-white p-3 sm:p-5 rounded-xl flex items-center gap-3 shadow-2xl z-30">
              <span className="text-2xl sm:text-4xl font-bold text-[#FFB606] border-r border-white/10 pr-3">
                50+
              </span>
              <p className="text-[10px] sm:text-[12px] leading-tight font-semibold uppercase tracking-wider">
                Free courses <br /> listed online
              </p>
            </div>
          </div>

          {/* Bottom Overlapping Image */}
          <div className="absolute bottom-4 left-0 top-40  w-[80%] sm:w-[60%] z-20">
            <img
              src={all_images.ManImageHolding}
              alt="Video conference"
              className="w-full h-full object-cover rounded shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 text-left space-y-6 lg:pl-4">
          <div className="space-y-3">
            <span className="text-[25px] sm:text-[25px] text-[rgb(5%, 13%, 15%)]">
              What we offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d1d] leading-[1.1]">
              Personalized learning for your ambitions
            </h2>
          </div>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          {/* Features List - 2 columns on small mobile+, 1 column on tiny screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 pt-4">
            {[
              'Skill-based instruction',
              'Analytics and insights',
              'Global certification',
              'Customizable courses',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-[#0a1d1d] font-semibold text-sm sm:text-[15px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action Box */}
          <div className="mt-12 bg-[#f4fafa] p-6 sm:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 border border-blue-50/50">
            <div className="text-center md:text-left space-y-2">
              <h4 className="text-xl sm:text-2xl font-semibold text-[#0a1d1d]">
                Still have questions?
              </h4>
              <p className="text-gray-500 text-sm opacity-80">
                Lorem ipsum dolor sit amet conse{' '}
                <br className="hidden sm:block" /> ipsum blandit etiam aliquam.
              </p>
            </div>
            <Link className="w-full md:w-auto bg-[#0a1d1d] text-white px-10 py-5 rounded-xl font-bold hover:scale-90 transition-transform">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
