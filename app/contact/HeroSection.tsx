import React, { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  children: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, children }) => {
  return (
    <header className="flex relative flex-col w-full text-black min-h-[340px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/94220d40cae7b84d250fd95b655494729cb2111cec66152a71ef87bd161fecc7?placeholderIfAbsent=true"
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col pb-36 w-full bg-black bg-opacity-30 max-md:pb-24 max-md:max-w-full">
        {children}
        <h1 className="self-center mt-14 mb-0 text-5xl font-bold max-md:mt-10 max-md:mb-2.5 max-md:text-4xl">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default HeroSection;
