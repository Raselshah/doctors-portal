import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyDashboard = () => {
  const [appointments, setAppointment] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointment(data));
    }
  }, [user]);
  const time = appointments[0]?.date;

  return (
    <div>
      <div className="flex justify-between mt-6 mb-6 px-12">
        <h2 className="text-2xl">My Appointment: {appointments.length}</h2>
        <div>
          <p className="btn btn-outline">{time}</p>
        </div>
      </div>
      <div class="overflow-x-auto rounded-lg px-12">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr class="hover">
                <th>{index + 1}</th>
                <th>{a.patientName}</th>
                <td>{a.treatmentName}</td>
                <td>{a.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDashboard;
