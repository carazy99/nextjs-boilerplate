"use client";
import React from "react";
import Navbar from "../home/Navbar";
import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Footer from "../home/Footer";

const Contact: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <HeroSection title="Contact Us">
        <Navbar />
      </HeroSection>

      <section className="self-center mt-9 w-full max-w-[911px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[37%] max-md:ml-0 max-md:w-full">
            <ContactForm />
          </div>
          <div className="ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
