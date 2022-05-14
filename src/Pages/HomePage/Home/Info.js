import React from "react";
import InfoCards from "./InfoCards";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <InfoCards
        cardTitle="Opening Hours"
        cardDes="Lorem Ipsum is simply dummy text of the pri"
        bgColor="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary duration-500 ease-in-out"
        img={clock}
      />
      <InfoCards
        cardTitle="Visit our location"
        cardDes="Brooklyn, NY 10036, United States"
        bgColor="bg-accent"
        img={marker}
      />
      <InfoCards
        cardTitle="Contact us now"
        cardDes="+000 123 456789"
        bgColor="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary duration-500 ease-in-out"
        img={phone}
      />
    </div>
  );
};

export default Info;
