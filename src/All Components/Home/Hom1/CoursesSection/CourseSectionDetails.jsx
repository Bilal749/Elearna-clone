/** @format */

import React from 'react';
import { useParams } from 'react-router';
import { courseData } from './CoursesSectionData';
import { FaStar } from 'react-icons/fa';

function CourseSectionDetails() {
  const { id } = useParams();
  const allCourses = courseData.find((courses) => courses.id === Number(id));

  if (!allCourses) return <p>Page not Found 404</p>;

  return (
    <div className="w-full h-[100vh] relativ">
      <div className="absolute  w-full h-full bg-black -z-10 ">
        <img
          src={allCourses.image}
          alt={allCourses.image}
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="px-4 text-white flex  flex-col  items-start justify-center w-full h-full z-50 ">
        <h1 className="uppercase text-lg">{allCourses.category}</h1>
        <h1 className="text-6xl mt-3 w-[900px] leading-tight font-bold">
          {allCourses.title}
        </h1>

        <div className="flex items-center gap-2 mt-6 text-white">
          <div className="flex items-center text-yellow-400 gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <p className="text-white">
            {allCourses.rating} ({allCourses.reviews})
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseSectionDetails;
