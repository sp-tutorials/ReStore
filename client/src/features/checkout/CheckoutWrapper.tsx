import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage.tsx";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51P5WKsLfXqAuTrul9bWRN8xC6MSnj1oZ3HEOAggt0gy8m1aGs9lzwqkkZBJimA4Sn9hlufhLB5oCm64vGB5hwhxd004Q16bqi0');

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}