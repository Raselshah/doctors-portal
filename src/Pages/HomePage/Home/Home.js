import React from "react";
import Banner from "../Banner";
import ContactUs from "../ContactUs";
import AppointmentBanner from "./AppointmentBanner";
import Exceptional from "./Exceptional";
import Info from "./Info";
import OurServices from "./OurServices";
import Testimonials from "./Testimonials";

import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <OurServices />
      <Exceptional />
      <AppointmentBanner />
      <Testimonials />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default Home;
