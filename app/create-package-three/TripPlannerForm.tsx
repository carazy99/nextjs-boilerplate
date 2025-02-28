"use client";
import React, { useState } from "react";
import LocationCheckbox from "./LocationCheckbox";

const TripPlannerForm: React.FC = () => {
  const [step, setStep] = useState<number>(3);
  const [otherLocations, setOtherLocations] = useState<string>("");

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const locations = [
    ["Anuradhapura", "Batticaloa", "Colombo"],
    ["Dambulla", "Galle", "Gampaha"],
    ["Haputale", "Hatton", "Hikkaduwa"],
    ["Horton Plains", "Jaffna", "Kalutara"],
    ["Kandy", "Kegalle", "Kurunegala"],
    ["Mannar", "Matale", "Matara"],
    ["Nuwara Eliya", "Polonnaruwa", "Puttalam"],
    ["Ratnapura", "Sigiriya", "Trincomalee"],
  ];

  return (
    <div className="flex flex-col w-full text-xs text-black max-md:mt-10">
      <header className="px-16 py-3 text-2xl font-semibold text-black bg-yellow-600 max-md:px-5">
        Plan your trip
      </header>

      <div className="flex gap-5 self-center mt-4 max-w-full text-sm font-extrabold text-black whitespace-nowrap w-[220px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/ec79871477e1cb9d96b6ea6ce8702fe87fdcde4da5cc11320ca06a40ad23c7ee?placeholderIfAbsent=true"
          alt="Step 1"
          className="object-contain shrink-0 w-10 rounded-full aspect-square shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/ec79871477e1cb9d96b6ea6ce8702fe87fdcde4da5cc11320ca06a40ad23c7ee?placeholderIfAbsent=true"
          alt="Step 2"
          className="object-contain shrink-0 w-10 rounded-full aspect-square shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
        />
        <div className="flex items-center justify-center px-4 w-10 h-10 bg-white rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
          3
        </div>
        <div className="flex items-center justify-center px-4 w-10 h-10 rounded-full bg-white bg-opacity-50 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
          4
        </div>
      </div>

      <label className="self-start mt-6 text-xs text-black">
        <span
          style={{
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 500,
          }}
        >
          Select where you would like to visit{" "}
        </span>
        <span
          style={{
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 500,
            color: "rgba(255,0,0,1)",
          }}
        >
          *
        </span>
      </label>

      {locations.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className={`flex gap-5 justify-between mt-${
            rowIndex === 0 ? "2" : "2.5"
          } w-full ${rowIndex < 5 ? "whitespace-nowrap" : ""} ${
            rowIndex === 4 ? "max-md:mr-1.5" : ""
          }`}
        >
          {row.map((location, index) => (
            <LocationCheckbox key={location} label={location} />
          ))}
        </div>
      ))}

      <label className="self-start mt-5 text-xs font-medium text-black">
        Don't see what you are looking for?
      </label>

      <textarea
        className="px-4 pt-2.5 pb-20 mt-2 text-xs text-black bg-white rounded-xl border border-solid border-stone-300 max-md:pr-5"
        placeholder="Let us know where you want to go"
        value={otherLocations}
        onChange={(e) => setOtherLocations(e.target.value)}
      />

      <button
        onClick={handleNext}
        className="px-16 py-2 mt-6 text-sm font-semibold text-black whitespace-nowrap bg-yellow-600 rounded-md max-md:px-5"
      >
        Next
      </button>

      <button
        onClick={handlePrevious}
        className="self-center mt-4 text-sm font-semibold text-black"
      >
        Previous
      </button>
    </div>
  );
};

export default TripPlannerForm;
