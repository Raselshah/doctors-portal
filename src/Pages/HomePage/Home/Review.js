import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review?.review}</p>
        <div className="avatar">
          <div className="div">
            <div className="w-14 m-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review?.img} alt="" />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="card-title">{review?.name}</h2>
            <h2 className="card-title">{review?.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
