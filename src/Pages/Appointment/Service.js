import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-secondary text-lg font-bold">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-400">Try another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>Price : ${price}</p>
        <div className="card-actions justify-center">
          <label
            htmlFor="appointment-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn border-0 text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary uppercase"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
