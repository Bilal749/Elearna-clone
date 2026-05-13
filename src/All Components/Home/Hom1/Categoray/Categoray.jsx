/** @format */

import React from 'react';
import { Link } from 'react-router';

import { categoryData } from './CategorayData';

function Categoray() {
  return (
    <div className="px-4 w-full h-full bg-white mt-40 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex items-center justify-center flex-col">
          <span className="text-xs text-[#0E2126] lg:text-sm">
            TOP CATEGORIES
          </span>
          <h1 className="text-2xl text-center font-bold text-[#0F252A] lg:text-4xl">
            Discover leading categories <br className="hidden lg:flex" /> to
            elevate your journey
          </h1>
        </div>

        <div className="mt-10 grid gird-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
          {categoryData.map((allData) => {
            return (
              <Link
                to={`/categories/${allData.id}`}
                key={allData.id}
                className="flex items-center  flex-col w-full  shadow-lg py-2 border border-[#EFF6F8] hover:shadow-2xl hover:shadow-[#d2f0f8] cursor-pointer"
              >
                <div className="w-[70px] h-[70px] rounded-full mt-10 bg-[#EFF6F8] flex items-center justify-center shadow">
                  <img src={allData.img} alt={allData.img} />
                </div>
                <p className="mt-4 font-semibold text-lg w-[100px] text-center">
                  {allData.title}
                </p>
                <span className="text-lg text-gray-500">{allData.desc}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categoray;
