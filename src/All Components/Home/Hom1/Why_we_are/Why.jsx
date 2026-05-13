/** @format */

import React from 'react';
import { cardData } from './WhyData';
import { all_images } from '../../../../assets/All_images';

const Why = () => {
  return (
    <section className="bg-[#f4fafa] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <span className="text-[18px] text-gray-900">Why we are</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d1d]">
            Elevate your professional journey
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mt-5 mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>
        </div>

        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 max-w-7xl mx-auto px-6 py-16">
          {cardData.map((data, index) => {
            return (
              <div
                key={index}
                className="card flex flex-col p-5 items-center text-center gap-6"
              >
                {/* Icon: Centered and spaced */}
                <div className="">
                  <img src={all_images.BooksIcon} alt="" />
                </div>

                {/* Title: Bold and dark teal */}
                <div className="title text-xl font-bold text-[#0a1d1d] mb-3">
                  {data.title}
                </div>

                {/* Info: Small text with limited width for better readability */}
                <div className="info text-gray-500 text-sm leading-relaxed max-w-[260px]">
                  {data.info}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Why;
