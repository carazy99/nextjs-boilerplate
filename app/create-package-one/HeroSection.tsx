import React from "react";
import Navbar from "./Navbar";

const HeroSection: React.FC = () => {
  return (
    <section className="flex relative flex-col self-stretch w-full text-black min-h-[340px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/20503107227d340b66a64d85e7b84bd2aa2b16dc48389843cb07907b5dea8205?placeholderIfAbsent=true"
        alt="Sri Lanka landscape"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative pb-20 w-full bg-black bg-opacity-30 max-md:max-w-full">
        <Navbar />
        <div className="flex flex-col mt-10 ml-36 max-w-full w-[550px] max-md:mt-10">
          <h1 className="self-start text-5xl font-bold text-center max-md:text-4xl">
            Build Your Tour
          </h1>
          <p className="mt-2.5 text-base font-medium leading-6 max-md:max-w-full">
            Create Your Own Sri Lankan Adventure! Design a tour that's uniquely
            yours and we'll craft the perfect itinerary just for you. Your
            journey, your way!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
