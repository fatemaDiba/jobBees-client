import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import useUser from "../../../../hooks/useUser";

const Form = ({ price }) => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState(""); // from backend
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosBase = useAxios();
  const navigate = useNavigate();
  const [userData, userLoading, refetch] = useUser();

  useEffect(() => {
    if (price) {
      axiosBase
        .post("/payment/create-payment-intent", { price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosBase, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    }
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymus",
            name: user?.displayName || "anonymus",
          },
        },
      });

    if (paymentError) {
      setError(paymentError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        const payment = {
          email: user.email,
          price: price,
          date: new Date(),
        };

        axiosBase.post("/payment/save-transaction", payment).then((res) => {
          if (res.data.payment) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            if (refetch && typeof refetch === "function") {
              refetch();
            }
            navigate("/dashboard/payment-history");
          }
        });
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Enter Card Information
      </h2>
      <div className="border border-gray-300 rounded-lg p-3 focus-within:border-brand-accent">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="w-full mt-4 text-black font-semibold cursor-pointer bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition"
      >
        Pay Now
      </button>
    </form>
  );
};

export default Form;
