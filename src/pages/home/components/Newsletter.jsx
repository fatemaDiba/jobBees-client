import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    Swal.fire({
      title: "Thank You!",
      text: `You have successfully subscribed with ${email}.`,
      icon: "success",
      confirmButtonText: "OK",
    });
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-blue-300 to-light-primary text-white py-20 px-6 text-center rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <FaEnvelope className="text-5xl mx-auto mb-4" />
        <h2 className="text-4xl font-bold">Join Our Exclusive Newsletter</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Stay updated with the latest news, special offers, and industry
          insights directly to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            className="p-4 rounded-lg text-gray-900 w-full sm:w-auto shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-light-primary"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`font-bold px-6 py-4 rounded-lg shadow-md transition-all duration-300 ${
              subscribed
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-white text-light-primary hover:bg-gray-200"
            }`}
            disabled={subscribed}
          >
            {subscribed ? "Subscribed" : "Subscribe Now"}
          </button>
        </form>
        <p className="mt-4 text-sm opacity-80">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
