import React from "react";
import Banner from "../Banner";
import ContactUs from "../ContactUs";
import AppointmentBanner from "./AppointmentBanner";
import Exceptional from "./Exceptional";
import Info from "./Info";
import OurServices from "./OurServices";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <OurServices />
      <Exceptional />
      <AppointmentBanner />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
