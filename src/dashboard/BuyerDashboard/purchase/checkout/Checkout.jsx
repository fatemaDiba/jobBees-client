import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Form from "./Form";

const stripPromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Checkout = () => {
  const location = useLocation();
  const price = location.state;

  return (
    <div className="bg-gray-50 py-16 h-96">
      <Elements stripe={stripPromise}>
        <Form price={price}></Form>
      </Elements>
    </div>
  );
};

export default Checkout;
