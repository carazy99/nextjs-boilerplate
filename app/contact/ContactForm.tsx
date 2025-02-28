"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    country: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grow px-8 py-6 w-full text-sm text-black bg-zinc-100 shadow-[0px_4px_5px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-3.5 py-3 bg-white border border-solid border-stone-300 max-md:pr-5"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-3.5 py-2.5 mt-2.5 bg-white border border-solid border-stone-300 max-md:pr-5"
        required
      />

      <input
        type="tel"
        name="contactNumber"
        placeholder="Contact number"
        value={formData.contactNumber}
        onChange={handleChange}
        className="w-full px-3.5 py-2.5 mt-3 bg-white border border-solid border-stone-300 max-md:pr-5"
        required
      />

      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        className="w-full px-3.5 py-2.5 mt-2.5 bg-white border border-solid border-stone-300 max-md:pr-5"
        required
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-3.5 pt-2 pb-12 mt-3 bg-white border border-solid border-stone-300 max-md:pr-5"
        required
      />

      <button
        type="submit"
        className="w-full px-16 py-2.5 mt-3 font-medium text-center bg-yellow-600 rounded-md border border-yellow-600 border-solid max-md:px-5"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
