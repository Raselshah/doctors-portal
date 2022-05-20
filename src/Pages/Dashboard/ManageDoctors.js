import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Hooks/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://damp-garden-09664.herokuapp.com/doctors", {
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
      <h2 className="ml-12 mb-4 text-lg text-secondary">
        Manage doctors : {doctors.length}
      </h2>

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
              <DoctorsRow
                key={doctor._id}
                index={index}
                doctor={doctor}
                setDeleteDoctor={setDeleteDoctor}
              />
            ))}
          </tbody>
        </table>
        {deleteDoctor && (
          <DeleteConfirmModal
            deleteDoctor={deleteDoctor}
            refetch={refetch}
            setDeleteDoctor={setDeleteDoctor}
          />
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
