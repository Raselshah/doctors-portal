import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Hooks/Loading";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const { data: doctors, isLoading ,refetch} = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>manage : {doctors.length}</h2>

      <div class="overflow-x-auto w-full px-12">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorsRow key={doctor._id} index={index} doctor={doctor} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
