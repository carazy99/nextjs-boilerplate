"use client";
import React, { useState } from "react";

const TripPlanningForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    nationality: "",
    email: "",
    phone: "",
  });

  const [isRobotChecked, setIsRobotChecked] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-md:mt-10">
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="self-start text-xs font-medium text-black"
          >
            <span
              style={{
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Title{" "}
            </span>
            <span
              style={{
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                color: "rgba(255,0,0,1)",
              }}
            >
              *
            </span>
          </label>
          <div className="flex flex-col justify-center items-end px-3 py-2 mt-2 bg-white rounded-xl border border-solid border-stone-300">
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-transparent outline-none"
              required
            >
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
            </select>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/49e6cb40a7f5562e26f53b52f5544b309aa47d9f5b3543244e1c3387f9c6eaa5?placeholderIfAbsent=true"
              alt="Dropdown arrow"
              className="object-contain aspect-square w-[15px]"
            />
          </div>
        </div>
        <div className="flex flex-col text-xs font-medium text-black">
          <label htmlFor="fullName" className="self-start">
            <span
              style={{
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Full Name{" "}
            </span>
            <span
              style={{
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                color: "rgba(255,0,0,1)",
              }}
            >
              *
            </span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            className="flex shrink-0 mt-2 px-3 py-1 bg-white rounded-xl border border-solid border-stone-300 h-[30px] outline-none"
            required
          />
        </div>
      </div>

      <label
        htmlFor="nationality"
        className="self-start mt-5 text-xs font-medium text-black"
      >
        <span
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Nationality{" "}
        </span>
        <span
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
            color: "rgba(255,0,0,1)",
          }}
        >
          *
        </span>
      </label>
      <input
        id="nationality"
        name="nationality"
        type="text"
        value={formData.nationality}
        onChange={handleInputChange}
        className="flex shrink-0 mt-2 px-3 py-1 bg-white rounded-xl border border-solid border-stone-300 h-[30px] outline-none"
        required
      />

      <label
        htmlFor="email"
        className="self-start mt-5 text-xs font-medium text-black"
      >
        <span
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Email{" "}
        </span>
        <span
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
            color: "rgba(255,0,0,1)",
          }}
        >
          *
        </span>
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        className="flex shrink-0 mt-2 px-3 py-1 bg-white rounded-xl border border-solid border-stone-300 h-[30px] outline-none"
        required
      />

      <label
        htmlFor="phone"
        className="self-start mt-5 text-xs font-medium text-black"
      >
        <span
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Phone{" "}
        </span>
        <span
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
            color: "rgba(255,0,0,1)",
          }}
        >
          *
        </span>
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        className="flex shrink-0 mt-2 px-3 py-1 bg-white rounded-xl border border-solid border-stone-300 h-[30px] outline-none"
        required
      />

      <div className="flex gap-5 justify-between px-5 py-2.5 mx-8 mt-6 text-black border border-solid bg-stone-50 border-stone-300 max-md:mx-2.5">
        <div className="flex gap-2 my-auto text-xs">
          <div
            className="flex shrink-0 bg-white border-2 border-solid border-stone-300 h-[25px] w-[25px] cursor-pointer"
            onClick={() => setIsRobotChecked(!isRobotChecked)}
          >
            {isRobotChecked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div className="my-auto">I'm not a robot</div>
        </div>
        <div className="flex flex-col text-xs whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/83d27f049db313bac887889c55b11dfa12f333d8ae3b93f8a4efe7fe817ed804?placeholderIfAbsent=true"
            alt="reCAPTCHA logo"
            className="object-contain self-center aspect-[1.04] w-[27px]"
          />
          <div>reCAPTCHA</div>
        </div>
      </div>

      <button
        type="submit"
        className="px-16 py-2 mt-5 text-sm font-semibold text-black whitespace-nowrap bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors max-md:px-5 self-start"
      >
        Next
      </button>
    </form>
  );
};

export default TripPlanningForm;
