import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AppointmentModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, "PP");
  const handleBookingInfo = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const bookingInfo = {
      treatmentId: _id,
      treatmentName: name,
      date: formattedDate,
      slot,
      patient: user?.email,
      patientName: user?.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment ${formattedDate} at ${slot}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(
            `Already selected appointment ${data.booking?.date} at ${data.booking?.slot}`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-4">{treatment.name}</h3>
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
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-accent w-full max-w-xs"
            >
              {treatment.slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              value={user?.displayName || ""}
              readOnly
              disabled
              name="name"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              readOnly
              disabled
              value={user?.email || ""}
              name="email"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
