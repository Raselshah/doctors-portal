import React from "react";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      className="hero min-h-screen min-w-fit"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
        <div className="shadow-lg rounded">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
