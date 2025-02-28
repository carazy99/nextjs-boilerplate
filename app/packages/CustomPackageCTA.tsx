"use client";
import React from "react";

const CustomPackageCTA = () => {
  return (
    <section className="flex relative flex-col mt-20 w-full text-center text-black max-w-[1096px] min-h-[185px] max-md:mt-10 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/f062eda26c806c8269862740719136b338d29fcf16245612cc7fd5bfe57db102?placeholderIfAbsent=true"
        alt="Custom tour background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-end px-20 py-9 bg-black bg-opacity-30 max-md:px-5 max-md:max-w-full">
        <h3 className="text-3xl font-semibold text-white">
          <span
            style={{
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
            }}
          >
            How about
          </span>{" "}
          <span
            style={{
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              color: "rgba(205,133,35,1)",
            }}
          >
            designing
          </span>{" "}
          <span
            style={{
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
            }}
          >
            your own
          </span>{" "}
          <span
            style={{
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 800,
            }}
          >
            adventure?
          </span>
        </h3>
        <button className="px-7 pt-2.5 pb-4 mt-5 mr-24 text-base uppercase bg-yellow-600 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-yellow-700 transition-colors max-md:px-5 max-md:mr-2.5">
          Create now
        </button>
      </div>
    </section>
  );
};

export default CustomPackageCTA;
