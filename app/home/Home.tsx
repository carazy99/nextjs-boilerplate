"use client";

import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import UnescoSection from "./UnescoSection";
import FeatureSection from "./FeatureSection";
import ToursSection from "./ToursSection";
import TestimonialsSection from "./TestimonialsSection";
import GallerySection from "./GallerySection";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <HeroSection />
      <AboutSection />
      <UnescoSection />
      <FeatureSection />
      <ToursSection />
      <TestimonialsSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Home;
