"use client";
import React, { useState } from "react";

const TourInformation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // This would be replaced with actual images in a real implementation
  const slides = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/14b3a5591229b42e222691a256d0696ebdf811758ac3b2ec018ebcb924325534?placeholderIfAbsent=true",
      alt: "Sri Lanka destination",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/14b3a5591229b42e222691a256d0696ebdf811758ac3b2ec018ebcb924325534?placeholderIfAbsent=true",
      alt: "Sri Lanka destination",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/14b3a5591229b42e222691a256d0696ebdf811758ac3b2ec018ebcb924325534?placeholderIfAbsent=true",
      alt: "Sri Lanka destination",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/14b3a5591229b42e222691a256d0696ebdf811758ac3b2ec018ebcb924325534?placeholderIfAbsent=true",
      alt: "Sri Lanka destination",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
      <section className="contact-help">
        <h2 className="text-2xl font-medium text-black max-md:ml-1">
          Need help?
        </h2>
        <p className="mt-1.5 text-xl text-zinc-500 max-md:ml-1">
          Feel free to call or text us on WhatsApp
        </p>

        <div className="flex gap-10 mt-5 text-base font-medium text-black max-md:ml-1">
          <div className="flex gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/b1ba256a080b684d21593058046094eeb9e445066159b01a561232c807e4c411?placeholderIfAbsent=true"
              alt="Phone"
              className="object-contain shrink-0 aspect-square w-[30px]"
            />
            <a href="tel:+94770838768" className="my-auto basis-auto">
              +94 77 083 8768
            </a>
          </div>
          <div className="flex gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/52539b7163c04d6210545cdada3789b54f9f8a3b07166f64ec6e48a15dcaff23?placeholderIfAbsent=true"
              alt="WhatsApp"
              className="object-contain shrink-0 aspect-square w-[30px]"
            />
            <a href="https://wa.me/94770838768" className="my-auto basis-auto">
              +94 77 083 8768
            </a>
          </div>
        </div>
      </section>

      <section className="destinations mt-9">
        <h2 className="text-2xl font-medium text-black max-md:ml-1">
          Top sights in Sri Lanka
        </h2>

        <div className="relative mt-4 w-full">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="object-contain self-stretch w-full aspect-[1.51] max-md:max-w-full"
          />

          <div className="flex gap-1.5 justify-center mt-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`flex shrink-0 w-3 h-3 rounded-full border border-solid border-neutral-900 ${
                  currentSlide === index ? "bg-neutral-900" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourInformation;
