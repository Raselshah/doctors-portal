import React from "react";

const AppointmentModal = ({ treatment }) => {
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
          <h3 class="font-bold text-lg">{treatment.name}</h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
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
