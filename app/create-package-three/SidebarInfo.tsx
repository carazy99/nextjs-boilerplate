"use client";
import React, { useState } from "react";

const SidebarInfo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 4;

  return (
    <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="text-2xl font-medium text-black max-md:ml-1">
        Need help?
      </h2>

      <p className="mt-1.5 text-xl text-black max-md:ml-1">
        Feel free to call or text us on WhatsApp
      </p>

      <div className="flex gap-10 mt-5 text-base font-medium text-black max-md:ml-1">
        <div className="flex gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/7b25f64dd87eb93971deb1c1c2d33ec2b27cb7ef523c62df3eadd88773e820ee?placeholderIfAbsent=true"
            alt="Phone"
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
          <span className="my-auto basis-auto">+94 77 083 8768</span>
        </div>

        <div className="flex gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/eddbe17c199c529417213caeb1d3b1ecc8b261cd1b8985f7f1335f8f18f4af17?placeholderIfAbsent=true"
            alt="WhatsApp"
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
          <span className="my-auto basis-auto">+94 77 083 8768</span>
        </div>
      </div>

      <h2 className="mt-9 text-2xl font-medium text-black max-md:ml-1">
        Top sights in Sri Lanka
      </h2>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/40cef5e522845ab585ae679e52528623a2125abed1f30d5c2d74e04f1270442d?placeholderIfAbsent=true"
        alt="Top sights in Sri Lanka"
        className="object-contain self-stretch mt-4 w-full aspect-[1.51] max-md:max-w-full"
      />

      <div className="flex gap-1.5 self-center mt-1.5 w-[63px]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`flex shrink-0 w-3 h-3 rounded-full border border-solid border-neutral-900 ${
              currentSlide === index ? "bg-yellow-600" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarInfo;
