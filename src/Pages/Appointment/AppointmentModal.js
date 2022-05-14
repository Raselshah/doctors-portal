import React from "react";
import { format } from "date-fns";

const AppointmentModal = ({ treatment, date, setTreatment }) => {
  const handleBookingInfo = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="appointment-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="appointment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg mb-4">{treatment.name}</h3>
          <form
            onSubmit={handleBookingInfo}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <input
              type="text"
              name="date"
              value={format(date, "PP")}
              readOnly
              disabled
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-accent w-full max-w-xs">
              {treatment.slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="number"
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
          <div class="modal-action">
            <label
              for="appointment-modal"
              class="btn btn-primary uppercase text-white"
            >
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
