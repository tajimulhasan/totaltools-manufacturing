import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import './Payment.css';

const stripePromise = loadStripe(
  "pk_test_51PCnkDAwo2Gm2GONYhMo6C6PxBZ3kfaIYnBEiYz9W3WVhMVyduA2J7zt9xhaaV5C0Gg8tPkt2iOW5ALcFLWPyIhn00XmsdgvFk"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://totaltools-manufacturing-server-site.vercel.app/orders/${id}`;
  const { data: order, isLoading } = useQuery("order", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-max mx-auto mt-14 payment-card-parent">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Hello, {order.clientName}</h2>
           <div className="single-order-card">
             <p>Your product <span className="font-bold">{order.productName}</span> has been placed. Quantity is <span className="font-bold">{order.orderQuantity}</span>, Price <span className="font-bold">${order.totalPrice}</span>. Please pay the bill to complete the process.</p>
           </div>
           <div className="payment-card mt-8">
           <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
