import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section
      className="flex relative justify-center items-center bg-cover h-[340px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
      }}
    >
      <div className="relative text-center z-[1]">
        <h1 className="mb-2.5 text-5xl font-bold text-white max-sm:text-3xl">
          {title}
        </h1>
        <p className="text-sm font-semibold text-neutral-300">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
