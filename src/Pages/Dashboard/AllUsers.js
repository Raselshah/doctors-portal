import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Hooks/Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  const { isLoading, error, data, refetch } = useQuery("users", () =>
    fetch("https://damp-garden-09664.herokuapp.com/users", {
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
      <h2>user : {data?.length}</h2>
      <div class="overflow-x-auto px-12">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d, index) => (
              <UserRow key={d._id} d={d} index={index} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
