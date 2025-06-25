import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { emailjsConfig } from "../config/email";
const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        email: email,
        subscription_date: new Date().toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        source: "Website Newsletter Signup",
      };

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletter,
        templateParams,
        emailjsConfig.publicKey
      );

      if (response.status === 200) {
        setIsSubscribed(true);
        toast.success("Thank you for subscribing!");
        setEmail("");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Subscription failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="">
      <ToastContainer />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow w-[300px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubscribed || isLoading}
        />
        <button
          type="submit"
          className={`px-6 py-3 w-[200px] text-lg  font-semibold rounded-md transition-colors focus:outline-none cursor-pointer focus:ring-2 focus:ring-black focus:ring-offset-2 ${isSubscribed
              ? "bg-black hover:bg-black text-white"
              : "bg-[#1F45FC] hover:bg-blue-900 text-white"
            }`}
          disabled={isSubscribed || isLoading}
        >
          {isLoading ? (
            <span className="flex items-center  justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : isSubscribed ? (
            "Subscribed!"
          ) : (
            "Subscribe"
          )}
        </button>
      </form>

    </section>
  );
};

export default NewsletterCTA;