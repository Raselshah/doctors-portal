import React from "react";

import Banner from "../Banner";
import Info from "./Info";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <OurServices />
    </div>
  );
};

export default Home;
