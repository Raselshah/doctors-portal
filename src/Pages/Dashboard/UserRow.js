import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ d, index, refetch }) => {
  const makeAdminButton = () => {
    fetch(`https://damp-garden-09664.herokuapp.com/user/admin/${d?.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to add admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successfully make admin");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{d.email}</td>
      <td>
        {d?.role !== "admin" ? (
          <button onClick={makeAdminButton} class="btn btn-xs">
            MAKE ADMIN
          </button>
        ) : (
          <button disabled onClick={makeAdminButton} class="btn btn-xs">
            ALREADY ADMIN
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">REMOVE USERS</button>
      </td>
    </tr>
  );
};

export default UserRow;
