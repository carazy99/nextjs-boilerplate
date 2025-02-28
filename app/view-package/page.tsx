"use client";
import React from "react";
import Header from "../home/Navbar";
import HeroSection from "./HeroSection";
import ItinerarySection from "./ItinerarySection";
import OverviewCard from "./OverviewCard";
import Footer from "../home/Footer";

const TourPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="w-full">
        <Header />
        <HeroSection
          title="Hill Country Tour"
          subtitle="Explore the cultural charm of Sri Lanka's scenic hill country."
        />
        <section className="px-32 py-8 text-lg tracking-wide leading-7 text-center text-neutral-900 max-md:px-16 max-md:py-8 max-sm:px-5 max-sm:py-8 max-sm:text-base">
          Discover Sri Lanka's Hill Country! Embark on a breathtaking journey
          through lush tea plantations, misty mountains, cascading waterfalls,
          and charming colonial towns. Experience the cool climate of Nuwara
          Eliya, the scenic train ride to Ella, and panoramic views from Horton
          Plains. A perfect escape into nature's paradise!
        </section>
        <main className="flex gap-12 px-20 py-0 mb-12 max-md:flex-col max-md:px-8 max-md:py-0 max-sm:px-4 max-sm:py-0">
          <ItinerarySection />
          <OverviewCard />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TourPage;
