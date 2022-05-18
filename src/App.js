import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import NavMenu from "./Pages/NavMenu/NavMenu";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";
import LogIn from "./Pages/LogIn/LogIn";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import SignUp from "./Pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyDashboard from "./Pages/Dashboard/MyDashboard";
import ReviewDashboard from "./Pages/Dashboard/ReviewDashboard";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/RequireAuth/RequireAdmin/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto px-12 App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyDashboard />} />
          <Route path="review" element={<ReviewDashboard />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
