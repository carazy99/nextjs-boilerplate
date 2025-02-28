"use client";
import React from "react";

const PlanTripForm = () => {
  return (
    <form className="flex flex-col w-full text-xs font-semibold text-zinc-500 max-md:mt-10">
      <h2 className="px-16 py-3 text-2xl text-white bg-yellow-600 max-md:px-5">
        Plan your trip
      </h2>

      <div className="flex gap-5 self-center mt-4 max-w-full text-sm font-extrabold text-yellow-600 whitespace-nowrap w-[220px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/0d96cbfa0f2959d45e04164e8cddf2eca6eb9b354550aa99875c113957cf2ab3?placeholderIfAbsent=true"
          alt="Step 1"
          className="object-contain shrink-0 w-10 rounded-full aspect-square shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/0d96cbfa0f2959d45e04164e8cddf2eca6eb9b354550aa99875c113957cf2ab3?placeholderIfAbsent=true"
          alt="Step 2"
          className="object-contain shrink-0 w-10 rounded-full aspect-square shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/0d96cbfa0f2959d45e04164e8cddf2eca6eb9b354550aa99875c113957cf2ab3?placeholderIfAbsent=true"
          alt="Step 3"
          className="object-contain shrink-0 w-10 rounded-full aspect-square shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
        />
        <div className="flex items-center justify-center px-4 w-10 h-10 bg-white rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
          4
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="self-start font-medium">
          <span
            style={{
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Do you need a tour guide?{" "}
          </span>
          <span
            style={{
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              color: "rgba(255,0,0,1)",
            }}
          >
            *
          </span>
        </legend>

        <div className="flex gap-1.5 self-start mt-2 text-black">
          <input
            type="radio"
            id="national-guide"
            name="guide-type"
            className="shrink-0 my-auto w-2.5 h-2.5 bg-white border border-solid border-stone-300 rounded-[100px]"
          />
          <label htmlFor="national-guide" className="basis-auto">
            Yes - A national guide
          </label>
        </div>

        <div className="flex gap-1.5 self-start mt-2.5 text-black">
          <input
            type="radio"
            id="chauffeur-guide"
            name="guide-type"
            className="shrink-0 my-auto w-2.5 h-2.5 bg-white border border-solid border-stone-300 rounded-[100px]"
          />
          <label htmlFor="chauffeur-guide" className="basis-auto">
            Yes - A chauffeur guide
          </label>
        </div>

        <div className="flex gap-1.5 self-start mt-2.5 text-black">
          <input
            type="radio"
            id="no-guide"
            name="guide-type"
            className="shrink-0 my-auto w-2.5 h-2.5 bg-white border border-solid border-stone-300 rounded-[100px]"
          />
          <label htmlFor="no-guide" className="basis-auto">
            No, I don't need a guide
          </label>
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="inquiries" className="self-start font-medium">
          Any Inquiries:
        </label>
        <textarea
          id="inquiries"
          className="flex shrink-0 mt-2 w-full bg-white rounded-xl border border-solid border-stone-300 h-[90px]"
        />
      </div>

      <button
        type="submit"
        className="px-16 py-2 mt-6 text-sm text-white whitespace-nowrap bg-yellow-600 max-md:px-5"
      >
        Submit
      </button>

      <button
        type="button"
        className="self-center mt-4 text-sm"
        onClick={() => {
          /* Handle previous step */
        }}
      >
        Previous
      </button>
    </form>
  );
};

export default PlanTripForm;
