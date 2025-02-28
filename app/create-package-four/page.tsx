"use client";
import * as React from "react";
import NavBar from "../home/Navbar";
import PlanTripForm from "./PlanTripForm";
import TourInformation from "./TourInformation";
import Footer from "../home/Footer";

function CreatePackage4() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <section className="flex relative flex-col w-full min-h-[340px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/88213b298b7a935493acd3243709f1c14a9c9725eea59da0cc89769a4ce9f019?placeholderIfAbsent=true"
          alt="Sri Lanka tour background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative pb-20 w-full bg-black bg-opacity-30 max-md:max-w-full">
          <NavBar />
          <div className="flex flex-col mt-10 ml-36 max-w-full w-[550px] max-md:mt-10">
            <h1 className="self-start text-5xl font-bold text-center text-white max-md:text-4xl">
              Build Your Tour
            </h1>
            <p className="mt-2.5 text-base font-medium leading-6 text-neutral-300 max-md:max-w-full">
              Create Your Own Sri Lankan Adventure! Design a tour that's
              uniquely yours and we'll craft the perfect itinerary just for you.
              Your journey, your way!
            </p>
          </div>
        </div>
      </section>

      <section className="self-center mt-8 ml-5 w-full max-w-[907px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[41%] max-md:ml-0 max-md:w-full">
            <PlanTripForm />
          </div>
          <div className="ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <TourInformation />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default CreatePackage4;
