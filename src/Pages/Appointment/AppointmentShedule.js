import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import Service from "./Service";

const AppointmentShedule = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-12">
      <div className=" text-center">
        <h2 className="text-secondary">
          Available Services on {format(date, "PP")}
        </h2>
        <h4 className="text-gray-400">Please select a service.</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        />
      )}
    </div>
  );
};

export default AppointmentShedule;
