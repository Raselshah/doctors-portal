import React from "react";

const TimeButton = ({ handleTime, date }) => {
  return (
    <li>
      <button onClick={() => handleTime(date.date)}>{date.date}</button>
    </li>
  );
};

export default TimeButton;
