import React from "react";

const DoctorsRow = ({ doctor, index, setDeleteDoctor }) => {
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
        <span class="badge badge-ghost badge-sm">{doctor.email}</span>
      </td>

      <th>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          for="my-delete-modal"
          class="btn btn-xs btn-active btn-accent"
        >
          DELETE
        </label>
      </th>
    </tr>
  );
};

export default DoctorsRow;
