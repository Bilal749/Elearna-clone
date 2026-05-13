/** @format */

import React from 'react';
import { all_images } from '../../../../assets/All_images';

function Hero() {
  return (
    <section className="relative w-full h-auto bg-[#0f252a] overflow-hidden pb-10 z-10">
      <div className="bg-[#0F252A] text-white  ">
        <div className="absolute w-full h-full overflow-hidden z-0">
          <img
            src={all_images.HeroBg}
            alt={all_images.HeroBg}
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="flex items-center justify- content-between w-full h-auto pt-10 flex-col-reverse lg:flex-row gap-10 z-">
          <div className="relative max-w-[991px z-20">
            <img
              src={all_images.Hero}
              alt={all_images.Hero}
              className="w-full object-cover"
            />

            <img
              src={all_images.YelloDot}
              alt={all_images.YelloDot}
              className="absolute top-[300px] w-3 left-[60px]"
            />
            <img
              src={all_images.BlueCircle}
              alt={all_images.BlueCircle}
              className="absolute top-[160px] left-[33px] w-10"
            />
            <img
              src={all_images.HalfMoon}
              alt={all_images.HalfMoon}
              className="absolute top-[200px] left-2"
            />

            <img
              src={all_images.Achievements}
              alt=""
              className="absolute top-[450px] w-[250px] left-[20px]"
            />

            <img
              src={all_images.Trusted}
              alt=""
              className="absolute top-[560px] left-[370px] w-[300px]"
            />
          </div>

          <div className="flex items-center justify-center flex-col text-center lg:text-start lg:items-start lg:justify-start -mt-20 z-10">
            <span className="text-md mt-5">ONLINE LEARNING</span>
            <h1
              className="text-4xl font-semibold mt-4 lg:text-6xl lg:font-bold
            "
            >
              More than <span className="text-[#FFB606]">2000+</span> education
              courses <br className="hidden lg:flex" /> online
            </h1>
            <p className="mt-4 text-[#B6BEC0] font-semibold lg:text-gray-100">
              Lorem ipsum dolor sit amet consectetur. Gravida enim risus
              sollicitudin mauris tincidunt commodo ornare.
            </p>
            <button className="px-10 py-3 mt-6 bg-[#0F252A] border border-[#5a6f73] rounded cursor-pointer hover:scale-1 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
