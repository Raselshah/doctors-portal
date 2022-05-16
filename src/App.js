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
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
