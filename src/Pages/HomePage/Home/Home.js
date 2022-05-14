import React from "react";
import Banner from "../Banner";
import AppointmentBanner from "./AppointmentBanner";
import Exceptional from "./Exceptional";
import Info from "./Info";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <OurServices />
      <Exceptional />
      <AppointmentBanner />
    </div>
  );
};

export default Home;
