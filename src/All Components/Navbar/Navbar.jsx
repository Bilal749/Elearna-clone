/** @format */

import React from 'react';
import { Link } from 'react-router';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [nestdropdown, setnestDropDown] = useState(false);
  const handleLinkClick = () => {
    setOpen(false);
    setDropdown(false);
    setnestDropDown(false);
  };

  const toggleDropdown = (name) => {
    if (dropdown === name) {
      setDropdown('');
    } else {
      setDropdown(name);
    }
  };
  const nestedDropdown = (name) => {
    if (nestdropdown === name) {
      setnestDropDown('');
    } else {
      setnestDropDown(name);
    }
  };

  return (
    <div className="header px-4 bg-[#0F252A] w-full h-[68px]  flex items-center justify-between z-50 sticky top-0 ">
      <div className="divider  flex items-center justify-between w-full ">
        <div className="logo flex items-center justify-center">
          <img
            src="src\assets\All images\logo.svg"
            alt=""
            className="w-[105px]"
          />
        </div>

        <div className=" hidden lg:block menus text-white">
          <ul className="flex items-center justify-center gap-6 text-[16px] z-50">
            <li className="relative group  cursor-pointer z-50">
              Home
              <div className="hidden group-hover:flex absolute mt-2 bg-white px-3 pl-6 border border-b-4 border-b-[#feb506] flex-col gap-5  text-black py-3 shadow-xl rounded-sm">
                <Link
                  to="/home1"
                  className="flex items-center justify-start w-[100px] hover:text-[#FEB506]"
                >
                  Home-One
                </Link>
                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Home-tow
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Home-three
                </Link>
              </div>
            </li>

            <li className="group flex items-center justify-center  relative cursor-pointer z-50">
              Courses
              <div className="hidden group-hover:block absolute bg-white shadow-lg ml-[320px] mt-[430px] w-[800px] h-[400px] border border-b-4 border-b-[#feb506] rounded-md">
                <div className="flex items-start justify-start w-full gap-4 h-full">
                  <div className="bg-[#EFF6F8] flex items-start justify-start px-4 py-4 flex-col gap-7 w-[300px] h-full">
                    <div className="bg-white w-full h-[100px] rounded-md text-black px-2 py-2">
                      <p>Free Courses </p>
                      <span className="text-xs mt-2 leading-tight font-semibold text-gray-500 ">
                        Free learning resources for skill development.
                      </span>
                    </div>

                    <div className="bg-white w-full h-[100px] rounded-md text-black px-2 py-2">
                      <p>Free Courses </p>
                      <span className="text-xs mt-2 leading-tight font-semibold text-gray-500 ">
                        Free learning resources for skill development.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-col w-full px-10 py-5 ">
                    <div className="text-black  w-full grid grid-cols-2 gap-10 ">
                      <div className="flex items-start justify-center flex-col gap-2">
                        <p className="text-md font-semibold">Finance</p>
                        <Link className="text-sm  text-gray-400 hover:text-[#FEB506]">
                          Understanding corporate finance and investments
                        </Link>
                      </div>

                      <div className="flex items-start justify-center flex-col gap-2">
                        <p className="font-semibold text-md">Design</p>
                        <Link className="text-sm  text-gray-400 hover:text-[#FEB506]">
                          Advanced photoshop techniques for designers
                        </Link>
                      </div>
                      <div className="flex items-start justify-center flex-col gap-2">
                        <p className="font-semibold text-md">Management</p>
                        <Link className="text-sm text-gray-400 hover:text-[#FEB506]">
                          Advanced photoshop techniques for designers
                        </Link>
                      </div>
                      <div className="flex items-start justify-center flex-col gap-2">
                        <p className="font-semibold text-md">Development</p>
                        <Link className="text-sm  text-gray-400 hover:text-[#FEB506]">
                          Building single page applications with angular
                        </Link>
                      </div>
                    </div>
                    <div className="bg-[#EDF4FF] mt-12 w-full h-[100px] flex items-center justify-center gap-10 px-4 py-2">
                      <div>
                        <i>
                          <img
                            src="src\assets\All images\67123069e49297274bf9143a_Coins Icons.svg"
                            alt=""
                            className="w-20"
                          />
                        </i>
                      </div>

                      <div className="text-m">
                        <p className="text-black text-sm font-semibold">
                          Increase your potential earnings
                        </p>
                        <span className="text-gray-500 text-sm">
                          Lorem ipsum dolor sit amet scelerisque integer
                          adipiscing velit sem sed.
                        </span>
                      </div>
                      <div className="w-16 h-8 rounded-sm bg-[#FFB606] flex items-center justify-center">
                        <Link className=" flex items-center justify-center">
                          <img
                            src="src\assets\All images\66c86330828a126c2bb6c4d9_Button Arrow Black.png "
                            alt=""
                            className="w-3"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="relative group cursor-pointer z-50">
              Pages
              <div className="hidden group-hover:flex absolute mt-2 bg-white px-3 pl-6 border border-b-4 border-b-[#feb506] flex-col gap-3  text-black py-3 shadow-xl rounded-sm">
                <Link
                  to="/home1"
                  className="flex items-center justify-start w-[120px] hover:text-[#FEB506]"
                >
                  About-one
                </Link>
                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  About-two
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Course-one
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  course-two
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  course-three
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  FAQ
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Pricing-one
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Pricing-two
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Pricing-three
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Career
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Event
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Team
                </Link>
              </div>
            </li>

            <li className="relative group cursor-pointer z-50">
              Blog
              <div className="hidden group-hover:flex absolute mt-2 bg-white px-3 pl-6 border border-b-4 border-b-[#feb506] flex-col gap-5  text-black py-3 shadow-xl rounded-sm">
                <Link
                  to="/home1"
                  className="flex items-center justify-start w-[100px] hover:text-[#FEB506]"
                >
                  Blog-one
                </Link>
                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Blog-two
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Blog-three
                </Link>
              </div>
            </li>
            <li className="relative group cursor-pointer z-50">
              Contact
              <div className="hidden group-hover:flex absolute mt-2 bg-white px-3 pl-6 border border-b-4 border-b-[#feb506] flex-col gap-5  text-black py-3 shadow-xl rounded-sm">
                <Link
                  to="/home1"
                  className="flex items-center justify-start w-[100px] hover:text-[#FEB506]"
                >
                  Contact-one
                </Link>
                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Contact-two
                </Link>

                <Link
                  to="/home2"
                  className="flex items-center justify-start w-full hover:text-[#FEB506]"
                >
                  Contact-three
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-12 ">
          <div className="ml-20">
            <img
              src="src\assets\All images\cart for shoping.svg"
              alt=""
              className="md:w-10"
            />
          </div>

          <div className=" hidden md:flex items-center justify-center md:text-sm lg:text-lg text-white gap-2 w-full">
            <Link
              className=" border-r-2 pr-2
            "
            >
              Login
            </Link>
            <Link>Rgister</Link>
          </div>

          <div className="flex lg:hidden">
            <button onClick={() => setOpen(!open)}>
              <img
                src="src\assets\All images\menu.svg"
                alt="mobile_menu"
                className="w-5 md:w-10"
              />
            </button>
          </div>
        </div>

        <div
          className={`absolute top-full  left-0 max-w-full w-full px-2 mt-0 bg-white h-[100vh ] shadow-lg overflow-hidden transition-all duration-700 lg:hidden ${
            open ? 'h-[786px] opcity-100 visible' : 'h-0 opacity-0 invisible'
          }`}
        >
          <ul className="w-full h-full">
            <li className="relative w-full justify-between py-4">
              <button
                onClick={() => toggleDropdown('Home')}
                className="w-full flex items-center font-semibold px-2 justify-between"
              >
                Home
                <img
                  src="src\assets\All images\angle-down.svg"
                  alt=""
                  className="w-4"
                />
              </button>

              {dropdown === 'Home' && (
                <div className=" mt-2 bg-white px-3 pl-6 border-b-4 border-b-[#feb506] flex-col gap-5  text-black py-3 shadow-xl rounded-sm">
                  <Link
                    to="/home1"
                    className="flex items-center justify-start py-1 w-[100px] hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Home-One
                  </Link>
                  <Link
                    to="/home2"
                    className="flex items-center justify-start py-1 w-full hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Home-two
                  </Link>

                  <Link
                    to="/home2"
                    className="flex items-center justify-start py-1 w-full hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Home-three
                  </Link>
                </div>
              )}
            </li>
            <li className="relative w-full justify-between py-4">
              <button
                onClick={() => toggleDropdown('Courses')}
                className="w-full flex items-center font-semibold px-2 justify-between"
              >
                Courses
                <img
                  src="src\assets\All images\angle-down.svg"
                  alt=""
                  className="w-4"
                />
              </button>

              {dropdown === 'Courses' && (
                <div className=" mt-2 bg-white px-3 pl-6 border-b-4 border-b-[#feb506] flex-col gap-5  text-black py-3 shadow-xl rounded-sm">
                  <ul className="relative">
                    <li className="relative">
                      <button
                        onClick={() => nestedDropdown('free')}
                        className="w-full flex items-center  px-2 justify-between py-3"
                      >
                        Free
                        <img
                          src="src\assets\All images\angle-right.svg"
                          alt=""
                        />
                      </button>

                      {nestdropdown === 'free' && (
                        <div className=" mt-0 bg-white px-3 pl-6  flex-col gap-5  text-black py-3  rounded-sm">
                          <Link
                            to="/home1"
                            className="flex  w-full items-center justify-start text-md py-2 hover:text-[#FEB506]"
                            onClick={handleLinkClick}
                          >
                            Corporate finance and investments
                          </Link>
                          <Link
                            to="/home2"
                            className="flex items-center justify-start w-full text-md py-2 hover:text-[#FEB506]"
                            onClick={handleLinkClick}
                          >
                            Advanced photoshop techniques
                          </Link>

                          <Link
                            to="/home2"
                            className="flex items-center justify-start w-full py-3 hover:text-[#FEB506]"
                            onClick={handleLinkClick}
                          >
                            Crisis Management
                          </Link>

                          <Link
                            to="/home2"
                            className="flex items-center justify-start py-3 w-full hover:text-[#FEB506]"
                            onClick={handleLinkClick}
                          >
                            Building single page applications with angular
                          </Link>
                        </div>
                      )}
                    </li>
                    <li className="relative">
                      <button
                        onClick={() => nestedDropdown('paid')}
                        className="w-full flex items-center  px-2 justify-between py-3"
                      >
                        Paid
                        <img
                          src="src\assets\All images\angle-right.svg"
                          alt=""
                        />
                      </button>

                      {nestdropdown === 'paid' && (
                        <div className=" mt-0 bg-white px-3 pl-6  flex-col gap-5  text-black py-3  rounded-sm">
                          <Link
                            to="/home1"
                            className="flex  w-full items-center justify-start text-md py-2 hover:text-[#FEB506]"
                            onClick={handleLinkClick}
                          >
                            Corporate finance and investments
                          </Link>
                          <Link
                            to="/home2"
                            className="flex items-center justify-start w-full text-md py-2 hover:text-[#FEB506]"
                            onClick={handleLinkClick}
                          >
                            Advanced photoshop techniques
                          </Link>

                          <Link
                            to="/home2"
                            className="flex items-center justify-start w-full py-3 hover:text-[#FEB506]"
                            onClick={handleLinkClick}
                          >
                            Crisis Management
                          </Link>

                          <Link
                            to="/home2"
                            className="flex items-center justify-start py-3 w-full hover:text-[#FEB506]"
                            onClick={handleLinkClick}
                          >
                            Building single page applications with angular
                          </Link>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="relative w-full justify-between py-4">
              <button
                onClick={() => toggleDropdown('Pages')}
                className="w-full flex items-center font-semibold px-2 justify-between"
              >
                Pages
                <img
                  src="src\assets\All images\angle-down.svg"
                  alt=""
                  className="w-4"
                />
              </button>

              {dropdown === 'Pages' && (
                <div className=" mt-2 bg-white px-3 pl-6 border-b-4 border-b-[#feb506] flex-col gap-5  text-black py-3 shadow-xl rounded-sm">
                  <Link
                    to="/home1"
                    className="flex items-center justify-start w-[100px] py-1 hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    About-one
                  </Link>
                  <Link
                    to="/home2"
                    className="flex items-center justify-start w-full py-1 hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    ABout-two
                  </Link>

                  <Link
                    to="/home2"
                    className="flex items-center justify-start w-full py-1 hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Course-one
                  </Link>
                  <Link
                    to="/home2"
                    className="flex items-center justify-start w-full py-1 hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Course-two
                  </Link>
                  <Link
                    to="/home2"
                    className="flex items-center justify-start w-full py-1 hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Course-three
                  </Link>

                  <Link
                    to="/home2"
                    className="flex items-center justify-start w-full py-1 hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    FAQ
                  </Link>

                  <Link
                    to="/home2"
                    className="flex items-center justify-start w-full py-1 hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Pricing-two
                  </Link>

                  <Link
                    to="/home2"
                    className="flex items-center justify-start w-full py-1 hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Pricing-one
                  </Link>
                </div>
              )}
            </li>

            <li className="relative w-full justify-between py-4">
              <button
                onClick={() => toggleDropdown('Blog')}
                className="w-full flex items-center font-semibold px-2 justify-between"
              >
                Blog
                <img
                  src="src\assets\All images\angle-down.svg"
                  alt=""
                  className="w-4"
                />
              </button>

              {dropdown === 'Blog' && (
                <div className=" mt-2 bg-white px-3 pl-6 border-b-4 border-b-[#feb506] flex-col gap-5  text-black py-3 shadow-xl rounded-sm">
                  <Link
                    to="/home1"
                    className="flex items-center justify-start py-1 w-[100px] hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Blog-one
                  </Link>
                  <Link
                    to="/home2"
                    className="flex items-center justify-start py-1 w-full hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Blog-two
                  </Link>

                  <Link
                    to="/home2"
                    className="flex items-center justify-start py-1 w-full hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Blog-three
                  </Link>
                </div>
              )}
            </li>

            <li className="relative w-full justify-between py-4">
              <button
                onClick={() => toggleDropdown('Contact')}
                className="w-full flex items-center font-semibold px-2 justify-between"
              >
                Contact
                <img
                  src="src\assets\All images\angle-down.svg"
                  alt=""
                  className="w-4"
                />
              </button>

              {dropdown === 'Contact' && (
                <div className=" mt-2 bg-white px-3 pl-6 border-b-4 border-b-[#feb506] flex-col gap-5  text-black py-3 shadow-xl rounded-sm">
                  <Link
                    to="/home1"
                    className="flex items-center justify-start py-1 w-[100px] hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Contact-one
                  </Link>
                  <Link
                    to="/home2"
                    className="flex items-center justify-start py-1 w-full hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Contact-two
                  </Link>

                  <Link
                    to="/home2"
                    className="flex items-center justify-start py-1 w-full hover:text-[#FEB506]"
                    onClick={handleLinkClick}
                  >
                    Contact-three
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
