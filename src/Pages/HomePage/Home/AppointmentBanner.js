import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const AppointmentBanner = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="mt-12">
      <div className="flex justify-center items-center">
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-150px]" src={doctor} alt="" />
        </div>
        <div className="flex-1 p-4">
          <p className="text-primary">Appointment</p>
          <h1 className="text-4xl md:text-5xl text-white font-bold mt-2">
            Make an appointment Today
          </h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn border-0 text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
