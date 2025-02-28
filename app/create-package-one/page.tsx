"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import TripPlanningForm from "./TripPlanningForm";
import TopSightsSection from "./TopSightsSection";
import Footer from "./Footer";

function CreatePackage() {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <HeroSection />

      <section className="flex flex-wrap gap-5 justify-between mt-8 max-w-full w-[798px]">
        <h2 className="self-start px-16 py-3 text-2xl font-semibold text-black bg-yellow-600 max-md:px-5">
          Plan your trip
        </h2>
        <div className="flex flex-col">
          <h3 className="self-start text-2xl font-medium text-black">
            Need help?
          </h3>
          <p className="mt-1.5 text-xl text-black">
            Feel free to call or text us on WhatsApp
          </p>
        </div>
      </section>

      <div className="flex flex-wrap gap-5 justify-between items-start mt-2 ml-3 max-w-full w-[788px]">
        <div className="flex gap-5 text-sm font-extrabold text-black whitespace-nowrap">
          <div className="flex items-center justify-center px-4 w-10 h-10 bg-white rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            1
          </div>
          <div className="flex items-center justify-center px-4 w-10 h-10 rounded-full bg-white bg-opacity-50 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            2
          </div>
          <div className="flex items-center justify-center px-4 w-10 h-10 rounded-full bg-white bg-opacity-50 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            3
          </div>
          <div className="flex items-center justify-center px-4 w-10 h-10 rounded-full bg-white bg-opacity-50 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            4
          </div>
        </div>
        <div className="flex gap-10 mt-3 text-base font-medium text-black">
          <div className="flex gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/7b25f64dd87eb93971deb1c1c2d33ec2b27cb7ef523c62df3eadd88773e820ee?placeholderIfAbsent=true"
              alt="Phone icon"
              className="object-contain shrink-0 aspect-square w-[30px]"
            />
            <span className="my-auto basis-auto">+94 77 083 8768</span>
          </div>
          <div className="flex gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/eddbe17c199c529417213caeb1d3b1ecc8b261cd1b8985f7f1335f8f18f4af17?placeholderIfAbsent=true"
              alt="WhatsApp icon"
              className="object-contain shrink-0 aspect-square w-[30px]"
            />
            <span className="my-auto basis-auto">+94 77 083 8768</span>
          </div>
        </div>
      </div>

      <div className="mt-6 ml-5 w-full max-w-[907px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[41%] max-md:ml-0 max-md:w-full">
            <TripPlanningForm />
          </div>
          <div className="ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <TopSightsSection />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default CreatePackage;
