import { format } from "date-fns";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import TimeButton from "./TimeButton";

const MyDashboard = () => {
  const [appointments, setAppointment] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppointment(data);
        });
    }
  }, [user]);
  // const time = appointments[0]?.date;
  const toDay = format(new Date(), "PP");

  const [time, setTime] = useState(toDay);

  const handleTime = (time) => {
    setTime(time);
  };
  return (
    <div>
      <div className="flex justify-between mt-6 mb-6 px-12">
        <h2 className="text-2xl">My Appointment: {appointments.length}</h2>
        <div>
          {/* {appointments.map((a) => (
            <p onClick={() => handleTime(a.date)} className="btn btn-outline">
              {a.date}
            </p>

            
          ))} */}

          <div class="dropdown dropdown-hover">
            <label
              onClick={() => handleTime(toDay)}
              tabindex="0"
              class="btn m-1"
            >
              {toDay}
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {appointments.map((a) => (
                <TimeButton date={a} handleTime={handleTime} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg px-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {/* {appointments.map((a, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <th>{a.patientName}</th>
                <td>{a.treatmentName}</td>
                <td>{a.slot}</td>
              </tr>
            ))} */}

            {/* <tr className="hover">
              <th>{0 + 1}</th>
              <th>{appointments[0]?.patientName}</th>
              <td>{appointments[0]?.treatmentName}</td>
              <td>{appointments[0]?.slot}</td>
            </tr> */}

            {appointments
              .filter((appointment) => appointment.date === time)
              .map((a, index) => (
                <tr className="hover">
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
