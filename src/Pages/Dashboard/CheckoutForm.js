import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import id from "date-fns/esm/locale/id/index.js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ data }) => {
  const { _id, price, patient, patientName } = data;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactions, setTransactions] = useState("");
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    fetch("https://damp-garden-09664.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.clientSecret) {
          setClientSecret(result.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // confirm payment
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (paymentError) {
      setCardError(paymentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactions(paymentIntent.id);
      setSuccess("Your payment is success");

      const payment = {
        transactionId: paymentIntent.id,
        appointment: _id,
      };
      console.log("payment", payment);
      fetch(`https://damp-garden-09664.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="w-1/3 mx-auto">
          <button
            className="btn mx-auto w-full mt-4 btn-xs"
            type="submit"
            disabled={!stripe || !clientSecret || success}
          >
            payment
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            Transactions Id :{" "}
            <span className="text-orange-600 font-bold">{transactions}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
