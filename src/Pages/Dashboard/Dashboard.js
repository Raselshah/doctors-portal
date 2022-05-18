import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import UseAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
  return (
    <div className="drawer drawer-mobile  bg-[#F1F5F9]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-primary text-2xl font-bold m-5">
          Welcome to our Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side bg-[#F1F5F9]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="review">My Reviews</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="users">All Users</Link>
              </li>
              <li>
                <Link to="addDoctor">Add Doctor</Link>
              </li>
              <li>
                <Link to="manageDoctor">Mange Doctor</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
