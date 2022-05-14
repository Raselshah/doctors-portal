import React from "react";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section className="mt-12" style={{ background: `url(${appointment})` }}>
      <div className="text-center pt-12 text-white">
        <h2 className="text-primary">Contact Us</h2>
        <h3 className="text-3xl lg:text-4xl ">Stay connected with us</h3>
      </div>
      <form className="flex flex-col justify-center p-12 items-center gap-4">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered w-full lg:w-1/3"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full lg:w-1/3"
        />
        <textarea
          type="text"
          placeholder="Your Message"
          className="input input-bordered w-full lg:w-1/3"
        />
        <input
          className="btn border-0 text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
          type="submit"
          value="Submit"
        />
      </form>
    </section>
  );
};

export default ContactUs;
