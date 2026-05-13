/** @format */

import React, { useState } from 'react';

function CourseFilter() {
  // Active Top Menu
  const [activeTab, setActiveTab] = useState('overview');

  // Active Lesson
  const [activeLesson, setActiveLesson] = useState('Lesson 4');

  // Lessons Data
  const lessons = [
    {
      title: 'Lesson 1',
      heading: 'React Introduction',
      text: 'Learn React basics and components.',
    },

    {
      title: 'Lesson 2',
      heading: 'React Router',
      text: 'Learn routing and navigation.',
    },

    {
      title: 'Lesson 3',
      heading: 'Tailwind CSS',
      text: 'Learn responsive design with Tailwind.',
    },

    {
      title: 'Lesson 4',
      heading: 'Angular routing and navigation',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },

    {
      title: 'Lesson 5',
      heading: 'API Integration',
      text: 'Learn how to fetch API data.',
    },

    {
      title: 'Lesson 6',
      heading: 'Authentication',
      text: 'Learn login and signup systems.',
    },

    {
      title: 'Lesson 7',
      heading: 'Project Deployment',
      text: 'Deploy your project online.',
    },
  ];

  // Find Active Lesson Data
  const currentLesson = lessons.find((lesson) => lesson.title === activeLesson);

  // Tabs Data
  const tabs = [
    // =========================
    // Overview
    // =========================

    {
      id: 'overview',
      title: 'Overview',

      content: (
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Course Description
          </h1>

          <p className="text-gray-600 leading-8 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro
            maxime saepe molestiae.
          </p>
        </div>
      ),
    },

    // =========================
    // Curriculum
    // =========================

    {
      id: 'curriculum',
      title: 'Curriculum',

      content: (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* =========================
                        Left Lessons Buttons
                    ========================== */}

          <div className="flex flex-col gap-4">
            {lessons.map((lesson, index) => (
              <button
                key={index}
                onClick={() => setActiveLesson(lesson.title)}
                className={` p-5 rounded-xl text-left duration-300 font-medium
                                    
                                    ${
                                      activeLesson === lesson.title
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-gray-100 hover:bg-slate-900 hover:text-white'
                                    }
                                `}
              >
                {lesson.title}
              </button>
            ))}
          </div>

          {/* =========================
                        Right Lesson Content
                    ========================== */}

          <div className="lg:col-span-2">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              {currentLesson.heading}
            </h1>

            {/* Introduction */}
            <h2 className="text-xl md:text-2xl font-semibold mb-5">
              Introduction
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-8 text-sm md:text-lg mb-10">
              {currentLesson.text}
            </p>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      ),
    },

    // =========================
    // Instructor
    // =========================

    {
      id: 'instructor',
      title: 'Instructor',

      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />

          {/* Text */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              John Anderson
            </h1>

            <p className="text-gray-600 leading-8 text-sm md:text-lg">
              Senior frontend developer with 10+ years experience.
            </p>
          </div>
        </div>
      ),
    },

    // =========================
    // FAQ
    // =========================

    {
      id: 'faq',
      title: 'FAQ',

      content: (
        <div className="space-y-5">
          {/* Question 1 */}
          <div className="bg-gray-100 p-5 rounded-xl">
            <h1 className="font-bold text-lg md:text-xl">
              Is this course beginner friendly?
            </h1>

            <p className="text-gray-600 mt-3">
              Yes, absolutely beginner friendly.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-gray-100 p-5 rounded-xl">
            <h1 className="font-bold text-lg md:text-xl">
              Will I get certificate?
            </h1>

            <p className="text-gray-600 mt-3">Yes after course completion.</p>
          </div>
        </div>
      ),
    },

    // =========================
    // Query
    // =========================

    {
      id: 'query',
      title: 'Query',

      content: (
        <form className="space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-4 rounded-xl outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-4 rounded-xl outline-none"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Write your question..."
            className="w-full border p-4 rounded-xl outline-none"
          ></textarea>

          {/* Button */}
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-700 duration-300">
            Send Message
          </button>
        </form>
      ),
    },
  ];

  return (
    // =========================
    // Main Section
    // =========================

    <section className="w-full px-4 sm:px-6 lg:px-20 py-10 lg:py-20">
      {/* =========================
                Top Menu Buttons
            ========================== */}

      <div className="flex justify-center mb-10">
        <div
          className="
                    bg-gray-100
                    rounded-2xl
                    p-2
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                    w-full
                    lg:w-fit
                "
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                                px-5 md:px-8
                                py-3 md:py-4
                                rounded-xl
                                font-semibold
                                duration-300

                                ${
                                  activeTab === tab.id
                                    ? 'bg-slate-900 text-white'
                                    : 'hover:bg-white'
                                }
                            `}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* =========================
                Dynamic Content
            ========================== */}

      <div
        className="
                bg-white
                shadow-xl
                rounded-3xl
                p-5
                md:p-10
                lg:p-14
            "
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </section>
  );
}

export default CourseFilter;
