
import React, { useState } from "react";

import Footer from "../Footer/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AppointmentShedule from "./AppointmentShedule";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AppointmentShedule date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
