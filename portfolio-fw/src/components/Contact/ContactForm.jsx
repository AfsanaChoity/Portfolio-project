import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "", //Add service_id here
        "", //Add template_id here
        form.current,
        "" //Add public_key here
      )
      .then(
        () => {
          toast.success("📨 Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className=" mb-6 ">
      <div className="flex items-center gap-2 mb-8">
        <img src="/sublogo1.svg" alt="sublogo" />
        <h1 className="md:text-2xl font-medium text-gray-900 dark:text-white">
          Get in Touch!
        </h1>
      </div>
      <div className="bg-base-200 dark:bg-[#26393a] p-5  rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-900 dark:text-white"
      >
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="bg-white dark:bg-[#334f50] dark:text-white p-4 rounded-lg shadow-sm placeholder-gray-600 dark:placeholder-gray-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="bg-white dark:bg-[#334f50] dark:text-white p-4 rounded-lg shadow-sm placeholder-gray-600 dark:placeholder-gray-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="bg-white dark:bg-[#334f50] dark:text-white p-4 rounded-lg shadow-sm placeholder-gray-600 dark:placeholder-gray-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          required
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className="bg-white dark:bg-[#334f50] dark:text-white p-4 rounded-lg shadow-sm placeholder-gray-600 dark:placeholder-gray-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="bg-white dark:bg-[#334f50] dark:text-white p-4 rounded-lg shadow-sm placeholder-gray-600 dark:placeholder-gray-300 border border-gray-300 dark:border-gray-600 h-28 md:col-span-2 resize-none focus:outline-none focus:ring-1 focus:ring-yellow-500"
          required
        />
        <button
          type="submit"
          className="mt-4 md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 w-fit"
          // className="bg-yellow-500 hover:bg-yellow-600 text-black dark:text-black font-semibold py-3 px-4 rounded-full shadow-md transition duration-300"
        >
          SEND ✉️
        </button>
      </form>
      </div>

      {/* ✅ Toast Container - Top Center */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default ContactForm;
