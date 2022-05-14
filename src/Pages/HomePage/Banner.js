import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <section style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn border-0 text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
