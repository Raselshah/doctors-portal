import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
  const { name, specialty, img, email } = deleteDoctor;

  const handleDeleteDoctor = (email) => {
    const url = `https://damp-garden-09664.herokuapp.com/doctors/${email}`;
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
          toast.success(`Successfully ${name} is delete`);
          setDeleteDoctor(null);
          refetch();
        } else {
          toast.error("failed to delete doctor");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure deleting the doctor?</h3>
          <p class="py-4 text-red-500">{`Doctor name : ${name}`}</p>
          <p class="py-4 text-primary">{`Dept. of the specialties : ${specialty} `}</p>
          <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src={img} alt="" />
            </div>
          </div>
          <div class="modal-action">
            <button
              onClick={() => handleDeleteDoctor(email)}
              class="btn btn-xs btn-active btn-warning"
            >
              Confirm
            </button>
            <label
              for="my-delete-modal"
              class="btn btn-xs btn-active btn-accent"
            >
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
