import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage.tsx";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../app/store/configureStore.ts";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent.ts";
import { setBasket } from "../basket/basketSlice.ts";
import LoadingComponent from "../../app/layout/LoadingComponent.tsx";

const stripePromise = loadStripe('pk_test_51P5WKsLfXqAuTrul9bWRN8xC6MSnj1oZ3HEOAggt0gy8m1aGs9lzwqkkZBJimA4Sn9hlufhLB5oCm64vGB5hwhxd004Q16bqi0');

export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Payments.createPaymentIntent()
      .then(basket => dispatch(setBasket(basket)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [dispatch]);

  if (loading) return <LoadingComponent message='Loading checkout...' />

  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}