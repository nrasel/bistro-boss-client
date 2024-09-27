import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Q3giIP2O7UGcY5aDnI1mZ3ts1BLJ0w27hqyTjYuHfXwjF1Q38DJneEjyuze8Wsjz9gkk0xeGn8Ap36cbdcw5r8s00zWb0L2ot"
);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
