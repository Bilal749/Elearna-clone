/** @format */

import React from 'react';
import Categoray from './Categoray/Categoray';
import CoursesSection from './CoursesSection/CoursesSection';
import Hero from './Hero/Hero';
import Offer from './Offer/Offer';
import Slider from './Slider/Slider';
import TestomonialSection from './Testomonial/TestomonialSection';
import Trand from './Trand/Trand';
import Why from './Why_we_are/Why';

function Home1() {
  return (
    <div>
      <Hero />
      <Slider />
      <Categoray />
      <CoursesSection />
      <Offer />
      <TestomonialSection />
      <Trand />
      <Why />
    </div>
  );
}

export default Home1;
