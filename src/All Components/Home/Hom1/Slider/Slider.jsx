/** @format */

import { motion } from 'framer-motion';
import { all_images } from '../../../../assets/All_images';

export default function Slider() {
  return (
    <section className="w-full overflow-hidden py-16 bg-[#f8f8f8]">
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#f8f8f8] to-transparent" />

        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#f8f8f8] to-transparent" />

        <motion.div
          className="flex w-[100%]  gap-7"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          <div className="flex items-center justify-center gap-10 w-[80%] shrink-0 min-w-0">
            <img
              src={all_images.ClientsLogo1}
              alt={`logo-`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            {/*  */}
            <img
              src={all_images.ClientsLogo2}
              alt={`logo-`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            {/*  */}
            <img
              src={all_images.ClientsLogo3}
              alt={`logo-`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            {/*  */}
            <img
              src={all_images.ClientsLogo4}
              alt={`logo-`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            {/*  */}
            <img
              src={all_images.ClientsLogo5}
              alt={`logo-`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            {/*  */}
            <img
              src={all_images.ClientsLogo6}
              alt={`logo-`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
          </div>

          {/* Second Set (Duplicate for seamless loop) */}
          <div className="flex items-center justify-center gap-20 w-[80%] shrink-0 min-w-0">
            <img
              src={all_images.ClientsLogo1}
              alt={`logo`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            <img
              src={all_images.ClientsLogo2}
              alt={`logo`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            <img
              src={all_images.ClientsLogo3}
              alt={`logo`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            <img
              src={all_images.ClientsLogo4}
              alt={`logo`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            <img
              src={all_images.ClientsLogo5}
              alt={`logo`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
            <img
              src={all_images.ClientsLogo6}
              alt={`logo`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 flex-shrink-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
    //
  );
}
