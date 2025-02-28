"use client";
import React, { useState } from "react";
import FormField from "./FormField";
import RadioButton from "./RadioButton";

const TripPlannerForm = () => {
  const [transportMode, setTransportMode] = useState<string>("");

  const handleTransportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransportMode(e.target.value);
  };

  return (
    <form className="flex flex-col w-full max-md:mt-10">
      <div className="flex gap-5">
        <div className="flex flex-col flex-1">
          <div className="flex gap-5 self-end text-sm font-extrabold text-black whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/ec79871477e1cb9d96b6ea6ce8702fe87fdcde4da5cc11320ca06a40ad23c7ee?placeholderIfAbsent=true"
              alt="Step 1"
              className="object-contain shrink-0 w-10 rounded-full aspect-square shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
            />
            <div className="flex items-center justify-center px-4 w-10 h-10 bg-white rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
              2
            </div>
          </div>
          <FormField label="Date of Arrival" required />
        </div>
        <div className="flex flex-col flex-1 items-start">
          <div className="flex gap-5 text-sm font-extrabold text-black whitespace-nowrap">
            <div className="flex items-center justify-center px-4 w-10 h-10 rounded-full bg-white bg-opacity-50 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
              3
            </div>
            <div className="flex items-center justify-center px-4 w-10 h-10 rounded-full bg-white bg-opacity-50 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
              4
            </div>
          </div>
          <FormField label="Date of Departure" required />
        </div>
      </div>

      <FormField label="How Many Nights?" required />

      <FormField label="Type of Accommodation" required>
        <div className="flex flex-col justify-center items-end px-16 py-2 mt-1.5 rounded-xl border border-solid border-stone-300 max-md:pl-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/49e6cb40a7f5562e26f53b52f5544b309aa47d9f5b3543244e1c3387f9c6eaa5?placeholderIfAbsent=true"
            alt="Dropdown arrow"
            className="object-contain aspect-square w-[15px]"
          />
        </div>
      </FormField>

      <div className="flex gap-5 mt-5">
        <FormField label="No. of Adults" required />
        <FormField label="No. of Children" />
      </div>

      <FormField label="Mode of Transportation" required>
        <div className="flex gap-3 items-start self-start mt-2.5 text-xs font-medium text-black whitespace-nowrap">
          <RadioButton
            label="Sedan"
            name="transportation"
            value="sedan"
            checked={transportMode === "sedan"}
            onChange={handleTransportChange}
          />
          <RadioButton
            label="Van"
            name="transportation"
            value="van"
            checked={transportMode === "van"}
            onChange={handleTransportChange}
          />
          <RadioButton
            label="Bus"
            name="transportation"
            value="bus"
            checked={transportMode === "bus"}
            onChange={handleTransportChange}
          />
        </div>
      </FormField>

      <button
        type="button"
        className="px-16 py-2 mt-6 text-sm font-semibold text-black whitespace-nowrap bg-yellow-600 rounded-md max-md:px-5"
      >
        Next
      </button>

      <button
        type="button"
        className="self-center mt-4 text-sm font-semibold text-black"
      >
        Previous
      </button>
    </form>
  );
};

export default TripPlannerForm;
