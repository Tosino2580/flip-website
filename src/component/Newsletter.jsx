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

    const subscriptionDate = new Date().toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const templateParams = {
      email: email,
      subscription_date: subscriptionDate,
      source: "Website Newsletter Signup",
      messageContent: `Hey film lover,

We’re so glad you’re here.

If you’ve found your way to us, then you already know how powerful storytelling can be and around here, we believe stories have the ability to shift mindset, create a change, and bring people together. That’s what FLIP is all about.

So, what’s FLIP?
Short for Film In The Park. It started as a simple idea, let’s create a space where beautiful stories can be told and shared.

We’re not just screening films, we’re building a movement. A vibrant space where filmmakers and film lovers come together to watch, connect and celebrate stories that matter.

So far, so good:
FLIP 1.0 brought over 120 people together. We screened 10 powerful short films and countless connections were made.

FLIP 3.0 is coming soon… and trust us, it’s going to be even better. (You’ll be the first to know 😉)

Here’s what you can expect from us:

• Film industry updates and real talk on trends

• Early scoop on FLIP events, screenings, and opportunities

• Stories worth sharing from us, and maybe even from you


Kindly Follow us @Officialfilminthepark_ on all social media platforms, so you don’t miss a thing.

Thanks again for joining us.

With love,
The FLIP Team`
    };

        try {
      const subscribeResponse = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const subscribeResult = await subscribeResponse.json();

      if (!subscribeResponse.ok) {
        throw new Error(subscribeResult.message || 'Mailchimp subscription failed');
      }

      const welcomeEmail = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletterMessage,
        templateParams,
        emailjsConfig.publicKey
      );

      const notification = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletterNotification,
        {
          email: email,
          subscription_date: subscriptionDate,
        },
        emailjsConfig.publicKey
      );

      if (welcomeEmail.status === 200) {
        setIsSubscribed(true);
        toast.success("Thank you for subscribing!");
        setEmail("");
      }

      if (notification.status === 200) {
        toast.info("FLIP has been notified.");
      }

    } catch (error) {
      console.error("Subscription Error:", error);
      toast.error(error.message || "Subscription failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <section>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 items-center w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cinema-gold focus:ring-1 focus:ring-cinema-gold transition-colors duration-300 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubscribed || isLoading}
        />

        <button
          type="submit"
          className={`w-full sm:w-auto px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-lg transition-all duration-300 focus:outline-none cursor-pointer whitespace-nowrap ${
            isSubscribed
              ? "bg-emerald-600 hover:bg-emerald-700 text-white"
              : "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 text-white"
          }`}
          disabled={isSubscribed || isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
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
