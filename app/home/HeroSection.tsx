"use client";

import React from "react";
import Navbar from "./Navbar";

const HeroSection: React.FC = () => {
  return (
    <section className="flex relative flex-col self-stretch w-full min-h-[832px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/88d1456663ae294db7780c2916c5671cabc6379de7c876ee8eec0fcb91d2dd92?placeholderIfAbsent=true"
        alt="Sri Lanka landscape"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col pb-96 w-full bg-black bg-opacity-40 max-md:pb-24 max-md:max-w-full">
        <Navbar />
        <div className="flex flex-col self-start mt-56 mb-0 ml-24 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <h2 className="self-start text-2xl font-semibold text-neutral-300">
            Welcome to
          </h2>
          <h1 className="mt-1.5 text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
            LK TOUR LANKA
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
