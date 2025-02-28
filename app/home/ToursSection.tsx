"use client";

import React from "react";
import Button from "./Button";

const ToursSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="mt-20 text-3xl font-semibold text-black max-md:mt-10">
        Epic Escapes
      </h2>
      <p className="mt-2.5 text-xs tracking-wide leading-5 text-center text-neutral-400 w-[852px] max-md:max-w-full">
        Exploring Sri Lanka is a breeze when you trust LK Tour Lanka with all
        your travel needs. Our expert guides and drivers are passionate about
        showcasing the beauty and culture of this island, ensuring you have an
        unforgettable experience every step of the way.
      </p>
      <div className="mt-10 w-full max-w-[968px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/615155185c3d602409d051d579cefb2c0efae9e61351b50027f8598cdf881655?placeholderIfAbsent=true"
              alt="Sri Lanka tour destination"
              className="object-contain grow w-full rounded-md aspect-[0.69] max-md:mt-6"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/b320697d5b23d14f9bae75ec9e9bd76f8aa535288c25d4ebc30a0ff420ffabfd?placeholderIfAbsent=true"
              alt="Sri Lanka tour destination"
              className="object-contain grow w-full rounded-md aspect-[0.69] max-md:mt-6"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/074547c04b6dc4da002b2f745d00fe854bfd9be1f1f2c1667b48bbe9265eb4c8?placeholderIfAbsent=true"
              alt="Sri Lanka tour destination"
              className="object-contain grow w-full rounded-md aspect-[0.69] max-md:mt-6"
            />
          </div>
        </div>
      </div>
      <a href="https://fantastic-eureka-q7rxjg57995295gv-3000.app.github.dev/packages" >
        <Button variant="outline" className="mt-9 w-[184px]">
          VIEW ALL TOURS
        </Button>
      </a>
    </section>
  );
};

export default ToursSection;
