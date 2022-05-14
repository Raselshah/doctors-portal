import React from "react";

const InfoCards = ({ img, cardTitle, cardDes, bgColor }) => {
  return (
    <div class={`card lg:card-side shadow-xl ${bgColor}`}>
      <figure className="p-3">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDes}</p>
      </div>
    </div>
  );
};

export default InfoCards;
