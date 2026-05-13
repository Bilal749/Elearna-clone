/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaStar, FaBookOpen, FaUser } from 'react-icons/fa';
import { categories, courseData } from './CoursesSectionData';

function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('All courses');

  const filteredCourses =
    activeCategory === 'All courses'
      ? courseData
      : courseData.filter((course) => course.category === activeCategory);

  return (
    <section className="w-full bg-[#f3f7f7] py-20 px-4 md:px-10 lg:px-4 mt-32">
      {/* Top Content */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        {/* Left */}
        <div>
          <p className="uppercase tracking-wider text-sm font-semibold text-[#0d2b2e] mb-4">
            Online Learning
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b2e] leading-tight">
            Top online courses
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="grid gird-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-3">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(item)}
              className={`text-lg transition-all duration-300 ${
                activeCategory === item
                  ? 'text-[#0d2b2e] font-semibold'
                  : 'text-gray-400 hover:text-[#0d2b2e]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white relative  overflow-hidden group w-h-full h-auto hover:shadow-2xl  "
          >
            {/* Image */}
            <Link
              to={`/coursesDetails/${course.id}`}
              key={course.id}
              className="relative w-full h-[249px] overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full object-cover cursor-pointer group-hover:scale-[1.1] transition-all duration-700"
              />

              {/* Free Badge */}
            </Link>

            <div className="absolute top-[200px] right-8 bg-[#3155f6] group-hover:scale-[1.1] transition-all duration-700 text-white w-[74px] h-[74px] rounded-full flex items-center justify-center text-lg font-semibold shadow-lg">
              <p>{course.type}</p>
            </div>

            {/* Content */}
            <div className="px-8 pt-6 pb-8">
              {/* Category */}
              <p className="uppercase text-sm tracking-wide text-[#0d2b2e] font-medium">
                {course.category}
              </p>

              {/* Title */}
              <h2 className="text-[24px] leading-[30px] font-semibold text-[#0d2b2e] mt-4">
                {course.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-6">
                <div className="flex items-center text-yellow-400 gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p className="text-gray-500">
                  {course.rating} ({course.reviews})
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gray-200 my-5"></div>

              {/* Bottom */}
              <div className="w-full h-[40px]">
                <div className=" hidden lg:grid grid-cols-2 lg:group-hover:hidden">
                  {/* Lessons */}
                  <div className="flex items-center gap-3 border-r border-gray-200">
                    <FaBookOpen className="text-[#0d2b2e]" />

                    <p className="text-[#0d2b2e] text-lg">
                      {course.lessons} Lessons
                    </p>
                  </div>

                  {/* Students */}
                  <div className="flex items-center justify-center gap-3">
                    <FaUser className="text-[#0d2b2e]" />

                    <p className="text-[#0d2b2e] text-lg">
                      {course.students} Enrolled
                    </p>
                  </div>
                </div>
                <div className="  lg:hidden lg:group-hover:flex items-center justify-center w-full   transition-all duration-700">
                  <Link
                    to={`/coursesDetails/${course.id}`}
                    className="w-full flex items-center justify-center  py-3 font-semibold shadow-lg bg-[#FFB606] "
                  >
                    Course Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;
