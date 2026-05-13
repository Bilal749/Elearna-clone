/** @format */

import { useParams } from 'react-router';
import { DataCourses } from './TrandData';
import { all_images } from '../../../../assets/All_images';
import Short from './TrandDatils Compoents/Short/Short';
import CoursesFilter from './TrandDatils Compoents/Courses Filter Section/CoursesFilter';

function TrandDatils() {
  const { id } = useParams();
  const data_courses = DataCourses.find((i) => i.id === Number(id));

  if (!data_courses) return <p>Not found</p>;

  return (
    <>
      <div className="main">
        <section className="relative h-[80vh]">
          <div className="">
            <img
              src={all_images.Coursesimg7}
              alt=""
              className="w-full h-full object-cover absolute inset-0 "
            />
          </div>

          <div className="absolute top-16 flex flex-col justify-center items-start px-5 lg:px-24 xl:px-52 gap-4 lg:gap-5 z-10">
            <span className="text-xl lg:text-2xl text-gray-800">
              Development
            </span>

            <h1 className="text-3xl font-semibold text-white md:text-5xl">
              Building single page
              <br className="sm:hidden md:hidden lg:block" />
              applications with angular
            </h1>

            <span className="text-white lg:text-xl">⭐⭐⭐⭐⭐ 5.00 (987)</span>
          </div>
        </section>

        <div className="relative z-50 -mt-20">
          <Short />
        </div>

        <div className=" relative z-50 ">
          <CoursesFilter />
        </div>
      </div>
    </>
  );
}

export default TrandDatils;
