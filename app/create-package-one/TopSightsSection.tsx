"use client";
import React, { useState } from "react";

const TopSightsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // In a real implementation, you would have multiple images
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/00fd6b8e3e1bb02d8307adaf61879d308ce96408c5d09118cf298353a94004fa?placeholderIfAbsent=true",
      alt: "Sri Lanka top sight",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/00fd6b8e3e1bb02d8307adaf61879d308ce96408c5d09118cf298353a94004fa?placeholderIfAbsent=true",
      alt: "Sri Lanka top sight",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/00fd6b8e3e1bb02d8307adaf61879d308ce96408c5d09118cf298353a94004fa?placeholderIfAbsent=true",
      alt: "Sri Lanka top sight",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/00fd6b8e3e1bb02d8307adaf61879d308ce96408c5d09118cf298353a94004fa?placeholderIfAbsent=true",
      alt: "Sri Lanka top sight",
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-2xl font-medium text-black max-md:ml-1">
        Top sights in Sri Lanka
      </h2>
      <img
        src={images[activeSlide].src}
        alt={images[activeSlide].alt}
        className="object-contain mt-4 w-full aspect-[1.51] max-md:max-w-full"
      />
      <div className="flex gap-1.5 self-center mt-1.5 w-[63px]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`flex shrink-0 w-3 h-3 rounded-full border border-solid border-neutral-900 ${
              activeSlide === index ? "bg-neutral-900" : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSightsSection;
