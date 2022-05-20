import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Hooks/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0kNCFNu1QzxAujT7H5defX0vjCNRCrTR97rqiI3I6dcQJg4Z4e7ullhZVkJMSZe6WYNG6On3BDfGeGv5I9d83N004JEamegQ"
);

const MyPayment = () => {
  const { id } = useParams();
  const url = `https://damp-garden-09664.herokuapp.com/booking/${id}`;
  const { data, isLoading } = useQuery(["payment", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const { date, treatmentName, patientName, slot, price } = data;
  return (
    <div>
      <div class="card bg-base-100 shadow-xl w-2/4 mx-auto">
        <div class="card-body">
          <h2 class="card-title text-secondary">Hello, {patientName}</h2>
          <h2 class="text-2xl font-bold">
            Please pay for{" "}
            <span className="text-orange-500">{treatmentName}</span>
          </h2>
          <p className="text-gray-500">
            Your appointment <span className="text-orange-600">{date}</span> at{" "}
            {slot}
          </p>
          <p>Please pay $ :{price}</p>
        </div>

        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default MyPayment;
