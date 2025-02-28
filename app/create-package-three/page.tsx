"use client";
import React from "react";
import Navbar from "../home/Navbar";
import HeroSection from "./HeroSection";
import TripPlannerForm from "./TripPlannerForm";
import SidebarInfo from "./SidebarInfo";
import Footer from "../home/Footer";

const CreatePackage3: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col w-full text-black min-h-[340px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/20503107227d340b66a64d85e7b84bd2aa2b16dc48389843cb07907b5dea8205?placeholderIfAbsent=true"
          alt="Sri Lanka landscape"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative pb-20 w-full bg-black bg-opacity-30 max-md:max-w-full">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      <main className="self-center mt-8 ml-5 w-full max-w-[907px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[41%] max-md:ml-0 max-md:w-full">
            <TripPlannerForm />
          </div>
          <div className="ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <SidebarInfo />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePackage3;
