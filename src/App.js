import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import NavMenu from "./Pages/NavMenu/NavMenu";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

function App() {
  
  return (
    <div className="max-w-screen-2xl mx-auto px-12 App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
