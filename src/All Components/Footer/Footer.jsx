/** @format */

import { all_images } from '../../assets/All_images';
import { footerData } from './footerData';

const Footer = () => {
  return (
    <footer className="bg-[#0F252A] text-gray-400 py-16 flex mt-40 justify-center flex-col items-center px-6 md:px-12 font-sans relative">
      <div className="footercard  absolute -top-32 w-[96%] h-[30vh] opacity-1 rounded-xl bg-[#FFB606]">
        <div className="main flex w-[96%] h-[30vh] items-center justify-center gap-7">
          <div className="title">
            <h1 className="text-4xl max-w-md text-black font-semibold">
              Are you ready to start your journey?
            </h1>
          </div>
          <div className="btns flex gap-5">
            <button className="px-8 py-3 bg-[#0F252A] text-white ">
              Browse Courses
            </button>
            <button className=" border border-[#0F252A] px-8 py-3 text-white">
              Becme A Teacher{' '}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description Section */}
          <div className="lg:col-span-1">
            <h2 className="text-white text-3xl font-bold mb-6 flex items-center">
              <img src={all_images.logo} alt="" />
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              {footerData.logo.description}
            </p>
          </div>

          {/* Dynamic Link Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-yellow-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between text-xs tracking-widest uppercase">
          <p>
            DESIGN BY{' '}
            <span className="text-white font-medium">
              {footerData.bottom.designBy}
            </span>
          </p>
          <p>
            POWERED BY{' '}
            <span className="text-white font-medium">
              {footerData.bottom.poweredBy}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
