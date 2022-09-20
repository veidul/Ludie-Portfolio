import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ja01k17",
        "template_l0gn3pf",
        form.current,
        "7Hylt_fjBroU4uZOg"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("contact-form").reset();
          toast("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 text-gray-600">
      <Toaster />
      <h3 id="header" className="text-lg font-medium text-warm-gray-900">
        Send us a message
      </h3>
      <form
        id="contact-form"
        ref={form}
        onSubmit={sendEmail}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-warm-gray-900"
          >
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className=" bg-white block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="bg-white block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="bg-white block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              className="bg-white block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Message
            </label>
            <span id="message-max" className="text-sm text-warm-gray-500">
              Max. 500 characters
            </span>
          </div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="bg-white block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              aria-describedby="message-max"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
