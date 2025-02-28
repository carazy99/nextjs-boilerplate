"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-10 ml-36 max-w-full w-[550px] max-md:mt-10">
      <h1 className="self-start text-5xl font-bold text-center text-white max-md:text-4xl">
        Build Your Tour
      </h1>
      <p className="mt-2.5 text-base font-medium leading-6 text-white max-md:max-w-full">
        Create Your Own Sri Lankan Adventure! Design a tour that's uniquely
        yours and we'll craft the perfect itinerary just for you. Your journey,
        your way!
      </p>
    </section>
  );
};

export default HeroSection;
