"use client";

import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection: React.FC = () => {
  return (
    <section className="flex relative flex-col justify-center items-center self-stretch p-20 w-full min-h-[619px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/f1420e8f3c572a02c273b894ca7c6530f1ae258891aff5bc1faa7de6f525aa44?placeholderIfAbsent=true"
        alt="Background pattern"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center w-full max-w-[975px] max-md:max-w-full">
        <h2 className="text-3xl font-semibold tracking-wide text-center text-neutral-900">
          Why Choose{" "}
          <span style={{ color: "rgba(17,17,17,1)" }}>LK Tour Lanka</span>
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/6e73f33235a4688b9cd82952b87bd3119d4e593c0e54212ab5f78aba20b1bd2d?placeholderIfAbsent=true"
          alt="Decorative element"
          className="object-contain ml-24 max-w-full aspect-[23.26] w-[232px]"
        />
        <div className="flex flex-wrap gap-5 justify-between self-stretch mt-8 max-md:max-w-full">
          <div className="flex flex-col items-end self-start mt-8 max-md:max-w-full">
            <FeatureCard
              title="Booking Made Effortless"
              description="Enjoy a seamless booking experience with just a few clicks. At LK Tour Lanka, we make planning your perfect getaway quick, easy, and stress-free."
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/a27907514763878f544a1dadbe0c8fc2dc2827e739e796dd431bf39f64e5abfe?placeholderIfAbsent=true"
              alt="Separator"
              className="object-contain self-stretch mt-12 w-full aspect-[500] max-md:mt-10 max-md:max-w-full"
            />
            <FeatureCard
              title="Travel in Comfort and Style"
              description="Enjoy a smooth, relaxing ride with our top-notch transportation services. Whether it's a private car or a group tour, we ensure comfort at every mile of your Sri Lankan journey."
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/503293a674d3c6d95a20fc54375bc80ba7303774476dc541ce1926c359cd9a93?placeholderIfAbsent=true"
            alt="Vertical separator"
            className="object-contain shrink-0 w-px aspect-[0]"
          />
          <div className="flex flex-col items-end my-auto max-md:max-w-full">
            <FeatureCard
              title="Expert Guidance at Every Step"
              description="We are here to guide you through every detail, ensuring your journey is smooth and unforgettable. Trust us to provide insights and support, making your Sri Lankan adventure truly special."
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/53228b14201e31edc1d7187a7e0c7b08b0dd6a4917b4877867de73e62de236ce?placeholderIfAbsent=true"
              alt="Separator"
              className="object-contain self-stretch mt-12 w-full aspect-[500] max-md:mt-10 max-md:max-w-full"
            />
            <FeatureCard
              title="Your Journey, Your Way"
              description="Customize your perfect tour with our tailor-made packages, designed to match your interests and preferences. Whether it's relaxation or exploration, we create an experience just for you."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
