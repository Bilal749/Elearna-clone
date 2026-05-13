/** @format */
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import React from 'react';
import Navbar from './All Components/Navbar/Navbar';
import Home1 from './All Components/Home/Hom1/Home1';
import Courses from './All Components/Courses/Courses';
import Pages from './All Components/Pages/Pages';
import Blog from './All Components/Blog/Blog';
import Contact from './All Components/Contact/Contact';
import Home2 from './All Components/Home/Home2/Home2';
import CategorayDetails from './All Components/Home/Hom1/Categoray/CategorayDetails';
import Categoray from './All Components/Home/Hom1/Categoray/Categoray';
import CoursesSection from './All Components/Home/Hom1/CoursesSection/CoursesSection';
import CourseSectionDetails from './All Components/Home/Hom1/CoursesSection/CourseSectionDetails';
import TrandDatils from './All Components/Home/Hom1/Trand/TrandDatils';
import Trand from './All Components/Home/Hom1/Trand/Trand';
import Footer from './All Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home1" element={<Home1 />} />
          <Route path="/categorysection" element={<Categoray />} />
          <Route path="/categories/:id" element={<CategorayDetails />} />
          <Route path="/coursessection" element={<CoursesSection />} />
          <Route
            path="/coursesDetails/:id"
            element={<CourseSectionDetails />}
          />
          <Route path="/trendSection" element={<Trand />} />
          <Route path="/Trand_datils/:id" element={<TrandDatils />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
