/** @format */

import React from 'react';
import { ShortsData } from './ShortData';

function Short() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20">
      <div
        className="
                bg-white 
                shadow-2xl 
                rounded-2xl
                relative 
                z-50
                py-8
                px-4
            "
      >
        <div
          className="
                    grid 
                    grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-5 
                    gap-12
                "
        >
          {ShortsData.map((alldata, index) => (
            <div
              key={index}
              className="
                                flex 
                                flex-col 
                                sm:flex-row
                                justify-center 
                                items-center 
                                text-center 
                                sm:text-left
                                gap-4
                                relative
                            "
            >
              {/* Image */}
              <div>
                <img
                  src={alldata.img}
                  alt={alldata.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h1 className="font-bold text-lg lg:text-xl">
                  {alldata.title}
                </h1>

                <span className="text-gray-500 text-sm">{alldata.span}</span>
              </div>

              {/* Border */}
              {index !== ShortsData.length - 1 && (
                <div
                  className="
                                    hidden 
                                    lg:block 
                                    absolute 
                                    right-0 
                                    h-14 
                                    border-r-2
                                "
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Short;
