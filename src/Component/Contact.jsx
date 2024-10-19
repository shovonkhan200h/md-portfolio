import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false); // State to manage success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ydd59i4", "template_6ulki7m", form.current, {
        publicKey: "Hf2s-PKrMl9Muo3G-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailSent(true); // Set success message visible
          setTimeout(() => setEmailSent(false), 2000); // Hide after 2 seconds

          form.current.reset(); // Reset the form if needed
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="heroForm" className="bg-white dark:bg-gray-900 rounded-2xl">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  w-full">
        <h2 className="lg:mb-4 lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Get Free Consultation
        </h2>
        <p className="lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl text-[10px] lg:text-lg">
          Need details about our Accountant service? Let us know.
        </p>

        {/* Success message */}
        {emailSent && (
          <div className="text-center text-green-600 mb-4">
            Your message has been sent successfully!
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-2 lg:space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="to_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 lg:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="to_subject"
              className="block p-1 lg:p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;