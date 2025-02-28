"use client";
import React, { useState } from "react";

const TopSights = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <article className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-10 self-start text-base font-medium text-black max-md:ml-1">
        <div className="flex gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/7b25f64dd87eb93971deb1c1c2d33ec2b27cb7ef523c62df3eadd88773e820ee?placeholderIfAbsent=true"
            alt="Phone"
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
          <a href="tel:+94770838768" className="my-auto basis-auto">
            +94 77 083 8768
          </a>
        </div>
        <div className="flex gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/eddbe17c199c529417213caeb1d3b1ecc8b261cd1b8985f7f1335f8f18f4af17?placeholderIfAbsent=true"
            alt="WhatsApp"
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
          <a href="https://wa.me/94770838768" className="my-auto basis-auto">
            +94 77 083 8768
          </a>
        </div>
      </div>

      <h2 className="self-start mt-9 text-2xl font-medium text-black max-md:ml-1">
        Top sights in Sri Lanka
      </h2>

      <figure className="mt-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/c20c0b889905644276c92306390d785112a486edb617968465e1628b2876788d?placeholderIfAbsent=true"
          alt="Top sights in Sri Lanka"
          className="object-contain w-full aspect-[1.51] max-md:max-w-full"
        />
      </figure>

      <div className="flex gap-1.5 self-center mt-1.5 w-[63px]">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`flex shrink-0 w-3 h-3 rounded-full border border-solid border-neutral-900 ${
              activeSlide === index ? "bg-neutral-900" : ""
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </article>
  );
};

export default TopSights;
