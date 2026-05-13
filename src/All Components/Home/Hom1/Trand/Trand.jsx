/** @format */

import { Link } from 'react-router';
import { DataCourses } from './TrandData';

function Trand() {
  return (
    <>
      <div>
        <section className="bg-green-50 mt-5 px-5 py-4 lg:px-24">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="mt-2 text-sm font-semibold">TRENDING COURSES</h1>

            <p className="font-semibold text-3xl">Explore our top programs</p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 z-10">
            {DataCourses.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mt-6 flex flex-col gap-4 bg-white group relative rounded-md  shadow-md"
                >
                  {/* Hover Card */}
                  <div className="hidden group-hover:block absolute w-[350px] h-96 bg-white rounded-md z-20 left-12 top-2 shadow-2xl">
                    <div className="px-10 py-5 font-bold text-xl text-green-950">
                      <h1>Database integration with MongoDB</h1>

                      <div className="mt-2">
                        <span className="text-sm text-gray-500">
                          - 10 Lessons - 7K Enrolled
                        </span>
                      </div>

                      <div className="text-gray-500 mt-7">
                        <p className="text-sm">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Explicabo, cum.
                        </p>

                        <div className="mt-2 px-4 text-[12px]">
                          <li>Lorem ipsum dolor amet consectetur.</li>
                          <li>Lorem ipsum dolor sit amet consectetur.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="mt-6 flex justify-center items-center gap-4">
                        {index === 0 ? (
                          // First Card → One Button
                          <Link
                            key={data.id}
                            to={`/Trand_datils/${data.id}`}
                            className="bg-yellow-400 px-8 py-2 text-center rounded-md w-full text-white font-semibold"
                          >
                            Courses
                          </Link>
                        ) : (
                          // Other Cards → Two Buttons
                          <>
                            <button className="bg-yellow-400 px-8 py-2 rounded-md text-white font-semibold">
                              {data.btn}
                            </button>

                            <button className="bg-gray-800 text-white w-full py-2 rounded-md">
                              {data.btnEnroll}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="h-60 relative">
                    <div className="absolute w-14 h-14 bg-blue-600 flex justify-center items-center rounded-full right-6 top-4">
                      <span className="text-white font-semibold">Free</span>
                    </div>

                    <img
                      src={data.allImages}
                      alt=""
                      className="h-60 w-full object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col px-3 mb-4">
                    <h1 className="text-sm text-gray-600">{data.title}</h1>

                    <span className="mt-2 text-xl font-semibold">
                      {data.body}
                    </span>

                    <span className="text-gray-600 mt-3 text-sm">
                      {data.star} 5.0 (392)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Trand;
