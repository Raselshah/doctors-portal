import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div class="card-body">
        <h2 class="text-secondary text-lg font-bold">{name}</h2>
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
        <div class="card-actions justify-center">
          <label
            for="appointment-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            class="btn border-0 text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary uppercase"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
