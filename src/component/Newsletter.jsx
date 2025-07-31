import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { emailjsConfig } from "../config/email";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Email validation function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form submit handler
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

    // Shared data for both templates
    const templateParams = {
      email: email,
      subscription_date: subscriptionDate,
      source: "Website Newsletter Signup",
      messageContent: `Hey there, film lover!

Welcome to the F.L.I.P family! 🎉
Since you're here, you're clearly someone who believes in the power of storytelling, and we're absolutely thrilled to have you join our community.

🎬 What is F.L.I.P?
F.L.I.P (Film In The Park) was born from a simple but powerful idea: to document and illuminate our lives through film. We're more than just an event – we're a safe space where filmmakers and film enthusiasts like you can tell authentic stories and change narratives, one frame at a time.

📽️ Our Journey So Far:
F.L.I.P 1: 120+ attendees, 10 incredible films screened, countless connections made.
F.L.I.P 2: Coming soon with even bigger plans (trust us, you'll want to stay tuned!).

🗞️ What to Expect in Your Inbox:
- Latest filmmaking trends and industry insights
- Exclusive F.L.I.P updates – be the first to know about events, screenings, and opportunities

✨ Ready to dive in?
Follow us on [Social Media Links] to join daily conversations and connect with fellow storytellers.

We're genuinely excited to have you on this journey with us. Your story matters, and we can't wait to help you tell it.

Love,
The F.L.I.P Team`
    };

    try {
      // Send welcome email to the subscriber
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletterMessage,
        templateParams,
        emailjsConfig.publicKey
      );

      // Send notification email to FLIP team
      const notification = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletterNotification,
        {
          email: email,
          subscription_date: subscriptionDate,
        },
        emailjsConfig.publicKey
      );

      // Success feedback
      if (response.status === 200) {
        setIsSubscribed(true);
        toast.success("Thank you for subscribing!");
        setEmail("");
      }

      if (notification.status === 200) {
        toast.info("FLIP has been notified.");
      }

    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Subscription failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
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
          className={`px-6 py-3 w-[200px] text-lg font-semibold rounded-md transition-colors focus:outline-none cursor-pointer focus:ring-2 focus:ring-black focus:ring-offset-2 ${
            isSubscribed
              ? "bg-black hover:bg-black text-white"
              : "bg-[#1F45FC] hover:bg-blue-900 text-white"
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
