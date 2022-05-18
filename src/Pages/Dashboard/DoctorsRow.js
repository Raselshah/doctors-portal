import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, index, refetch }) => {
  const handleDeleteDoctor = (email) => {
    const url = `http://localhost:5000/doctors/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Successfully ${doctor.name} is delete`);
          refetch();
        } else {
          toast.error("failed to delete doctor");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={doctor.img} alt="doctor" />
            </div>
          </div>
          <div>
            <div class="font-bold">{doctor.name}</div>
            <div class="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {doctor.specialty}
        <br />
        <span class="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>

      <th>
        <button
          onClick={() => handleDeleteDoctor(doctor.email)}
          class="btn btn-xs btn-active btn-accent"
        >
          DELETE
        </button>
      </th>
    </tr>
  );
};

export default DoctorsRow;
