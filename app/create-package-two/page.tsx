"use client";
import * as React from "react";
import Header from "../home/Navbar";
import TripPlannerForm from "./TripPlannerForm";
import TopSights from "./TopSights";
import Footer from "../home/Footer";

function CreatePackage2() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Header />

      <section className="flex flex-wrap gap-5 justify-between self-center mt-8 max-w-full w-[798px]">
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

      <section className="self-center mt-2 ml-5 w-full max-w-[907px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[41%] max-md:ml-0 max-md:w-full">
            <TripPlannerForm />
          </div>
          <div className="ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <TopSights />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default CreatePackage2;
