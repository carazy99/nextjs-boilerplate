"use client";

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="mt-20 w-full max-w-[1040px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <article className="flex flex-col items-start self-stretch my-auto w-full text-base max-md:mt-10 max-md:max-w-full">
            <p className="text-xs text-center text-neutral-400">
              Your Gateway to Unforgettable Adventures
            </p>
            <h2 className="mt-2.5 text-4xl font-semibold tracking-wider text-center text-neutral-900">
              LK TOUR LANKA
            </h2>
            <p className="self-stretch mt-5 tracking-wide leading-6 text-zinc-500 max-md:max-w-full">
              Welcome to LK Tour Lanka – Where Your Journey Meets Excellence! As
              one of Sri Lanka's premier travel curators, we transform your
              travel dreams into bespoke experiences. Whether it's exclusive
              private tours, vibrant group adventures, or handpicked hotel
              stays, every detail is designed with precision and care. From your
              first inquiry to the last cherished moment, we ensure your journey
              through Sri Lanka is nothing short of extraordinary
            </p>
            <div className="flex mt-5 tracking-wide leading-loose text-yellow-600">
              <a href="#" className="grow">
                Book Your Adventure
              </a>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/ef42c480803d5c26f4edd2447f862d2fba7333825bf780cb5df145db4d7dcb3d?placeholderIfAbsent=true"
                alt="Arrow right"
                className="object-contain shrink-0 self-start w-6 aspect-square"
              />
            </div>
          </article>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/039e6815241995ab877ef9254f01a6525fbf33455d6d0321d1521e9b48bf8c2e?placeholderIfAbsent=true"
                    alt="Sri Lanka tour destination"
                    className="object-contain w-full rounded-xl aspect-[1.36]"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/a120e2a22e3a5732f00656e11e5f0095831c4eca570f1a83ff802ccf4a188d28?placeholderIfAbsent=true"
                    alt="Sri Lanka tour destination"
                    className="object-contain mt-5 w-full rounded-none aspect-[1.26]"
                  />
                </div>
              </div>
              <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/0f9f9216c2c0a09af4b8bd35ec50df50a0101f51d62ac5b3cd732ac0d7151900?placeholderIfAbsent=true"
                  alt="Sri Lanka tour destination"
                  className="object-contain grow w-full rounded-none aspect-[0.63] max-md:mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
