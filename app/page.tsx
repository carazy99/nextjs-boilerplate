"use client";

import React from "react";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import UnescoSection from "./home/UnescoSection";
import FeatureSection from "./home/FeatureSection";
import ToursSection from "./home/ToursSection";
import TestimonialsSection from "./home/TestimonialsSection";
import GallerySection from "./home/GallerySection";
import Footer from "./home/Footer";

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
